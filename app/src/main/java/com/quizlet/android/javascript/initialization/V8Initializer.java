package com.quizlet.android.javascript.initialization;

import android.content.Context;
import android.support.annotation.Nullable;

import com.eclipsesource.v8.V8;
import com.quizlet.android.javascript.Executor;
import com.quizlet.android.javascript.JsExecutionScheduler;

import rx.Observable;
import rx.android.schedulers.AndroidSchedulers;
import rx.functions.Action1;

class V8Initializer implements Executor {

    final Context mContext;

    public V8Initializer(Context context) {
        mContext = context;
    }

    @Override
    public void execute(final @Nullable Action1<Long> listener) {
        Observable.defer(
                () -> {
                    final long startTime = System.nanoTime();
                    V8 runtime = V8.createV8Runtime();
                    runtime.release();
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
