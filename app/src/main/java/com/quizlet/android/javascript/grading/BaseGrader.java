package com.quizlet.android.javascript.grading;

import android.content.Context;
import android.util.Log;

import com.quizlet.android.javascript.Executor;
import com.quizlet.android.javascript.IoUtils;
import com.quizlet.android.javascript.SubmissionContext;

import java.io.IOException;
import java.io.InputStream;

abstract class BaseGrader implements Executor {

    private static final String JS_FILEPATH_GRADER = "js/LearnModeGraderFactory.js";

    static final String JS = String.format(
            "grader.grade(%s, %s, %s)",
            "'foo'",
            "'bar'",
            new SubmissionContext("en", "en", "Test").toJSON());

    private final Context mContext;
    private final String mBaseJs;

    BaseGrader(Context context) {
        mContext = context;
        mBaseJs = loadJs();
    }

    private String loadJs() {
        String js = null;
        try {
            InputStream open = mContext.getAssets().open(JS_FILEPATH_GRADER);
            js = IoUtils.readInputStream(open);
        } catch (IOException e) {
            Log.e("BaseGrader", e.getLocalizedMessage());
        }
        return js;
    }

    String getBaseJs() {
        return mBaseJs;
    }

    String getExecutionJs() {
        return JS;
    }
}
