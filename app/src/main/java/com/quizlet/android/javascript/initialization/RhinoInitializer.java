package com.quizlet.android.javascript.initialization;

import android.support.annotation.Nullable;
import com.quizlet.android.javascript.Executor;
import com.quizlet.android.javascript.JsExecutionScheduler;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.Scriptable;
import rx.Observable;
import rx.android.schedulers.AndroidSchedulers;
import rx.functions.Action1;

class RhinoInitializer
    implements Executor {

  @Override
  public void execute(final @Nullable Action1<Long> listener) {
    Observable.defer(() -> {
      final long startTime = System.nanoTime();
      Context cx = Context.enter();
      cx.setOptimizationLevel(-1);
      Scriptable scope = cx.initStandardObjects();
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
