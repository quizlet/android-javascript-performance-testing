package com.quizlet.android.javascript.looping;

import android.content.Context;
import android.support.annotation.Nullable;

import com.evgenii.jsevaluator.JsEvaluator;

import rx.functions.Action1;

class JsEvalLooper extends BaseLooper {

    private final JsEvaluator mJsEvaluator;
    private final String mJs;

    JsEvalLooper(Context context) {
        mJsEvaluator = new JsEvaluator(context);
        mJs = getLoopJs(context);
    }

    @Override
    public void execute(@Nullable final Action1<Long> listener) {
        final long startTime = System.nanoTime();
        mJsEvaluator.evaluate(mJs + "; getMax()", result -> {
            final long endTime = System.nanoTime();
            if (listener != null) {
                listener.call(endTime - startTime);
            }
        });
    }
}
