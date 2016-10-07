package com.quizlet.android.javascript.grading;

import android.content.Context;
import android.support.annotation.Nullable;

import com.eclipsesource.v8.V8;
import com.quizlet.android.javascript.JsExecutionScheduler;

import rx.Observable;
import rx.android.schedulers.AndroidSchedulers;
import rx.functions.Action1;

class V8Grader extends BaseGrader {

    private V8 mV8;

    V8Grader(final Context context) {
        super(context);
        JsExecutionScheduler.get().createWorker()
                .schedule(() -> mV8 = init());
    }

    V8 init() {
        V8 v8 = V8.createV8Runtime();
        v8.executeScript(getBaseJs());
        v8.executeScript("var grader = LearnModeGraderFactory.create();");
        return v8;
    }

    @Override
    public void execute(@Nullable final Action1<Long> listener) {
        Observable.defer(
                () -> {
                    final long startTime = System.nanoTime();
                    mV8.executeBooleanScript(JS);
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
