package com.quizlet.android.javascript.initialization;

import android.support.annotation.Nullable;

import com.quizlet.android.javascript.Executor;
import com.quizlet.android.javascript.JsExecutionScheduler;

import org.liquidplayer.webkit.javascriptcore.JSContext;

import rx.Observable;
import rx.android.schedulers.AndroidSchedulers;
import rx.functions.Action1;

class JsCoreInitializer implements Executor {

    @Override
    public void execute(final @Nullable Action1<Long> listener) {
        Observable.defer(
                () -> {
                    final long startTime = System.nanoTime();
                    JSContext jsContext = new JSContext();
                    final long endTime = System.nanoTime();
                    jsContext.garbageCollect();
                    return Observable.just(endTime - startTime);
                }
        )
                .subscribeOn(JsExecutionScheduler.get())
                .observeOn(AndroidSchedulers.mainThread())
                .subscribe(durationNs -> {
                    if (listener != null) {
                        listener.call(durationNs);
                    }
                });
    }
}
