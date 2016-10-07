package com.quizlet.android.javascript.grading;

import android.content.Context;
import android.support.annotation.Nullable;
import android.util.Log;

import com.quizlet.android.javascript.JsExecutionScheduler;
import com.quizlet.android.javascript.SubmissionContext;

import org.liquidplayer.webkit.javascriptcore.JSContext;
import org.liquidplayer.webkit.javascriptcore.JSObject;

import rx.Observable;
import rx.android.schedulers.AndroidSchedulers;
import rx.functions.Action1;

class JsCoreGrader extends BaseGrader {

    private final JSObject mGrader;

    JsCoreGrader(Context context) {
        super(context);

        JSContext jsContext = new JSContext();
        jsContext.evaluateScript(getBaseJs());

        jsContext.setExceptionHandler(exception -> {
            Log.e("JsCoreGrader", exception.getLocalizedMessage());
            exception.printStackTrace();
        });

        mGrader = jsContext
                .evaluateScript("LearnModeGraderFactory.create()")
                .toObject();
    }

    @Override
    public void execute(@Nullable final Action1<Long> listener) {
        Observable.defer(
                () -> {
                    final long startTime = System.nanoTime();
                    mGrader
                            .property("grade")
                            .toFunction()
                            .call(mGrader, "'foo'", "'bar'", new SubmissionContext("en", "en", "Test").toJSON());
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
