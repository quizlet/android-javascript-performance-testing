package com.quizlet.android.javascript.looping;

import android.content.Context;
import android.support.annotation.Nullable;

import com.quizlet.android.javascript.JsExecutionScheduler;

import org.liquidplayer.webkit.javascriptcore.JSContext;

import rx.Observable;
import rx.android.schedulers.AndroidSchedulers;
import rx.functions.Action1;

class JsCoreLooper extends BaseLooper {

    private JSContext mJSContext;

    JsCoreLooper(Context context) {
        mJSContext = new JSContext();
        String baseJs = getLoopJs(context);
        mJSContext.evaluateScript(baseJs);
    }

    @Override
    public void execute(@Nullable final Action1<Long> listener) {
        Observable.defer(
                () -> {
                    final long startTime = System.nanoTime();
                    mJSContext.evaluateScript("getMax()");
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
