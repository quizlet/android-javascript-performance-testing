package com.quizlet.android.javascript.looping;

import android.content.Context;
import android.support.annotation.Nullable;

import com.eclipsesource.v8.V8;
import com.quizlet.android.javascript.JsExecutionScheduler;

import rx.Observable;
import rx.android.schedulers.AndroidSchedulers;
import rx.functions.Action1;

class V8Looper extends BaseLooper {

    V8 mV8;

    V8Looper(final Context context) {
        JsExecutionScheduler.get().createWorker()
                .schedule(() -> mV8 = init(context));
    }

    V8 init(Context context) {
        V8 v8 = V8.createV8Runtime();
        String baseJs = getLoopJs(context) + "; ";
        v8.executeScript(baseJs);
        return v8;
    }

    @Override
    public void execute(@Nullable final Action1<Long> listener) {
        Observable.defer(
                () -> {
                    final long startTime = System.nanoTime();
                    mV8.executeIntegerScript("getMax()");
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
