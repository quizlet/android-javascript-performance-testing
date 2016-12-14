package com.quizlet.android.javascript.initialization;

import android.content.Context;
import android.support.annotation.Nullable;

import com.evgenii.jsevaluator.JsEvaluator;
import com.quizlet.android.javascript.Executor;

import rx.functions.Action1;

class JsEvalInitializer implements Executor {

    final Context mContext;

    public JsEvalInitializer(Context context) {
        mContext = context;
    }

    @Override
    public void execute(final @Nullable Action1<Long> listener) {
        final long startTime = System.nanoTime();
        JsEvaluator evaluator = new JsEvaluator(mContext);
        final long endTime = System.nanoTime();
        evaluator.destroy();

        if (listener != null) {
            listener.call(endTime - startTime);
        }
    }
}
