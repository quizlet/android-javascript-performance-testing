package com.quizlet.android.javascript.initialization;

import android.support.annotation.Nullable;

import com.quizlet.android.javascript.Executor;
import com.quizlet.android.javascript.JsExecutionScheduler;
import com.squareup.duktape.Duktape;

import rx.Observable;
import rx.android.schedulers.AndroidSchedulers;
import rx.functions.Action1;

public class DuktapeInitializer implements Executor {

    @Override
    public void execute(@Nullable Action1<Long> listener) {
        Observable.defer(
                () -> {
                    final long startTime = System.nanoTime();
                    initialize();
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

    void initialize() {
        Duktape duktape = Duktape.create();
        duktape.close();
    }
}
