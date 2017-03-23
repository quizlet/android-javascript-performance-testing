package com.quizlet.android.javascript.grading;

import android.content.Context;
import android.support.annotation.Nullable;
import com.quizlet.android.javascript.JsExecutionScheduler;
import org.mozilla.javascript.Scriptable;
import rx.Observable;
import rx.android.schedulers.AndroidSchedulers;
import rx.functions.Action1;

class RhinoGrader extends BaseGrader {

  private org.mozilla.javascript.Context cx;
  private Scriptable scope;

  RhinoGrader(final Context context) {
    super(context);
    JsExecutionScheduler.get().createWorker().schedule(() -> init());
  }

  void init() {
    cx = org.mozilla.javascript.Context.enter();
    cx.setOptimizationLevel(1);
    scope = cx.initStandardObjects();
    String js = "var grader = LearnModeGraderFactory.create();";
    cx.evaluateString(scope, getBaseJs(), "<Grader>", 1, null);
    cx.evaluateString(scope, js, "<Grader>", 1, null);
  }

  @Override
  public void execute(@Nullable
                      final Action1<Long> listener) {
    Observable.defer(() -> {
      final long startTime = System.nanoTime();
      cx.evaluateString(scope, JS, "<Grader>", 1, null);
      final long endTime = System.nanoTime();
      return Observable.just(endTime - startTime);
    }).subscribeOn(JsExecutionScheduler.get()).observeOn(AndroidSchedulers.mainThread()).subscribe(durationNs -> {
      if (listener != null) {
        listener.call(durationNs);
      }
    });
  }
}
