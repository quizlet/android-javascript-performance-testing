package com.quizlet.android.javascript.loading;

import android.content.Context;
import android.support.annotation.Nullable;

import com.evgenii.jsevaluator.JsEvaluator;

import rx.functions.Action1;

class JsEvalLoader extends BaseLoader {

    private final JsEvaluator mJsEvaluator;

    JsEvalLoader(Context context) {
        super(context);
        mJsEvaluator = new JsEvaluator(context);
    }

    @Override
    public void execute(@Nullable final Action1<Long> listener) {
        final long startTime = System.nanoTime();
        mJsEvaluator.evaluate(getJs(), result -> {
            final long endTime = System.nanoTime();
            if (listener != null) {
                listener.call(endTime - startTime);
            }
        });
    }
}
