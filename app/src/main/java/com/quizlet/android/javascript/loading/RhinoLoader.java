package com.quizlet.android.javascript.loading;

import android.content.Context;
import android.support.annotation.Nullable;
import com.quizlet.android.javascript.JsExecutionScheduler;
import org.mozilla.javascript.Scriptable;
import rx.Observable;
import rx.android.schedulers.AndroidSchedulers;
import rx.functions.Action1;

class RhinoLoader
    extends BaseLoader {

  org.mozilla.javascript.Context cx;

  RhinoLoader(final Context context) {
    super(context);
    JsExecutionScheduler.get().createWorker()
        .schedule(() -> {
          //cx = org.mozilla.javascript.Context.enter();
          //cx.setOptimizationLevel(-1);
        });
  }

  @Override
  public void execute(@Nullable final Action1<Long> listener) {
    Observable.defer(() -> {
      final long startTime = System.nanoTime();
      cx = org.mozilla.javascript.Context.enter();
      cx.setOptimizationLevel(-1);
      Scriptable scope = cx.initStandardObjects();
      cx.evaluateString(scope, getJs(), "<cmd>", 1, null);
      org.mozilla.javascript.Context.exit();
      final long endTime = System.nanoTime();
      return Observable.just(endTime - startTime);
    }).subscribeOn(JsExecutionScheduler.get()).observeOn(AndroidSchedulers.mainThread()).subscribe(durationNs -> {
      if (listener != null) {
        listener.call(durationNs);
      }
    });
  }
}
