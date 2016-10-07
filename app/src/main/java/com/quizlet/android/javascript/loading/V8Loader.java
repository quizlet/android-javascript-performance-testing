package com.quizlet.android.javascript.loading;

import android.content.Context;
import android.support.annotation.Nullable;

import com.eclipsesource.v8.V8;
import com.quizlet.android.javascript.JsExecutionScheduler;

import rx.Observable;
import rx.android.schedulers.AndroidSchedulers;
import rx.functions.Action1;

class V8Loader extends BaseLoader {

    V8 mV8;

    V8Loader(final Context context) {
        super(context);
        JsExecutionScheduler.get().createWorker()
                .schedule(() -> mV8 = V8.createV8Runtime());
    }

    @Override
    public void execute(@Nullable final Action1<Long> listener) {
        Observable.defer(
                () -> {
                    final long startTime = System.nanoTime();
                    mV8.executeScript(getJs());
                    final long endTime = System.nanoTime();
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
