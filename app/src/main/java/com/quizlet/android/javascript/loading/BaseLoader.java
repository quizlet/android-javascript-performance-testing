package com.quizlet.android.javascript.loading;

import android.content.Context;

import com.quizlet.android.javascript.IoUtils;
import com.quizlet.android.javascript.Executor;

abstract class BaseLoader implements Executor {

    private static final String JS_FILEPATH = "js/MockData.json";

    private String mJs;

    public BaseLoader(Context context) {
        mJs = loadJs(context);
    }

    String loadJs(Context context) {
        return "var list = " + IoUtils.getJsFromPath(context, JS_FILEPATH);
    }

    protected String getJs() {
        return mJs;
    }
}
