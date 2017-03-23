package com.quizlet.android.javascript.looping;

import android.content.Context;
import android.support.annotation.Nullable;
import com.quizlet.android.javascript.JsExecutionScheduler;
import org.mozilla.javascript.Scriptable;
import rx.Observable;
import rx.android.schedulers.AndroidSchedulers;
import rx.functions.Action1;

class RhinoLooper extends BaseLooper {

  private org.mozilla.javascript.Context cx;
  private Scriptable scope;

  RhinoLooper(final Context context) {
    JsExecutionScheduler.get().createWorker().schedule(() -> {
      init(context);
    });
  }

  void init(Context context) {
    cx = org.mozilla.javascript.Context.enter();
    cx.setOptimizationLevel(- 1);
    scope = cx.initStandardObjects();
    cx.evaluateString(scope, getLoopJs(context), "<looper>", 1, null);
  }

  @Override
  public void execute(@Nullable
                      final Action1<Long> listener) {
    Observable.defer(() -> {
      final long startTime = System.nanoTime();
      cx.evaluateString(scope, "getMax()", "<looper>", 1, null);
      final long endTime = System.nanoTime();
      return Observable.just(endTime - startTime);
    }).subscribeOn(JsExecutionScheduler.get()).observeOn(AndroidSchedulers.mainThread()).subscribe(duration -> {
      if (listener != null) {
        listener.call(duration);
      }
    });
  }
}
