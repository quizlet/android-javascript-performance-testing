package com.quizlet.android.javascript.loading;

import android.content.Context;
import android.support.annotation.Nullable;

import com.quizlet.android.javascript.JsExecutionScheduler;
import com.squareup.duktape.Duktape;

import rx.Observable;
import rx.android.schedulers.AndroidSchedulers;
import rx.functions.Action1;

class DuktapeLoader extends BaseLoader {

    Duktape mDuktape;

    DuktapeLoader(final Context context) {
        super(context);
        mDuktape = Duktape.create();
    }

    @Override
    public void execute(@Nullable final Action1<Long> listener) {
        Observable.defer(
                () -> {
                    final long startTime = System.nanoTime();
                    mDuktape.evaluate(getJs());
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
