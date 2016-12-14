package com.quizlet.android.javascript.grading;

import android.content.Context;
import android.support.annotation.Nullable;

import com.quizlet.android.javascript.JsExecutionScheduler;
import com.squareup.duktape.Duktape;

import rx.Observable;
import rx.android.schedulers.AndroidSchedulers;
import rx.functions.Action1;

class DuktapeGrader extends BaseGrader {

    private Duktape mDuktape;

    DuktapeGrader(final Context context) {
        super(context);
        JsExecutionScheduler.get().createWorker()
                .schedule(() -> mDuktape = init());
    }

    Duktape init() {
        Duktape v8 = Duktape.create();
        v8.evaluate(getBaseJs());
        v8.evaluate("var grader = LearnModeGraderFactory.create();");
        return v8;
    }

    @Override
    public void execute(@Nullable final Action1<Long> listener) {
        Observable.defer(
                () -> {
                    final long startTime = System.nanoTime();
                    mDuktape.evaluate(JS);
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
