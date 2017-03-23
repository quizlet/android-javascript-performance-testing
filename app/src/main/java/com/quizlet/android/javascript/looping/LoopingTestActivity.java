package com.quizlet.android.javascript.looping;

import android.os.Bundle;

import com.quizlet.android.javascript.BaseTestActivity;
import com.quizlet.android.javascript.Executor;

public class LoopingTestActivity extends BaseTestActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setTitle("Looping");
    }

    @Override
    protected Executor getExecutor() {
        switch (getEngine()) {
            case JSEVALUATOR:
                return new JsEvalLooper(this);
            case ANDROIDJSCORE:
                return new JsCoreLooper(this);
            case J2V8:
                return new V8Looper(this);
            case DUKTAPE:
                return new DuktapeLooper(this);
            case RHINO:
                return new RhinoLooper(this);
        }
        throw new IllegalStateException("Pick a Javascript engine");
    }
}
