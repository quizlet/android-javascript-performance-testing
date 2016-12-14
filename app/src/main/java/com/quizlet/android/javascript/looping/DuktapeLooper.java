package com.quizlet.android.javascript.looping;

import android.content.Context;
import android.support.annotation.Nullable;

import com.quizlet.android.javascript.JsExecutionScheduler;
import com.squareup.duktape.Duktape;

import rx.Observable;
import rx.android.schedulers.AndroidSchedulers;
import rx.functions.Action1;

class DuktapeLooper extends BaseLooper {

    Duktape mDuktape;

    DuktapeLooper(final Context context) {
        mDuktape = init(context);
    }

    Duktape init(Context context) {
        Duktape duktape = Duktape.create();
        String baseJs = getLoopJs(context) + "; ";
        duktape.evaluate(baseJs);
        return duktape;
    }

    @Override
    public void execute(@Nullable final Action1<Long> listener) {
        Observable.defer(
                () -> {
                    final long startTime = System.nanoTime();
                    mDuktape.evaluate("getMax()");
                    final long endTime = System.nanoTime();
                    return Observable.just(endTime - startTime);
                }
        )
                .subscribeOn(JsExecutionScheduler.get())
                .observeOn(AndroidSchedulers.mainThread())
                .subscribe(duration -> {
                    if (listener != null) {
                        listener.call(duration);
                    }
                });
    }
}
