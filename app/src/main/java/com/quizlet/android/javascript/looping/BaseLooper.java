package com.quizlet.android.javascript.looping;

import android.content.Context;

import com.quizlet.android.javascript.IoUtils;
import com.quizlet.android.javascript.Executor;

abstract class BaseLooper implements Executor {

    private static final String JS_LOOP_FILEPATH = "js/SimpleLoop.js";

    String getLoopJs(Context context) {
        return IoUtils.getJsFromPath(context, JS_LOOP_FILEPATH);
    }
}
