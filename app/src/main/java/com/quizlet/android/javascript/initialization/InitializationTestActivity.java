package com.quizlet.android.javascript.initialization;

import android.os.Bundle;

import com.quizlet.android.javascript.BaseTestActivity;
import com.quizlet.android.javascript.Executor;

public class InitializationTestActivity extends BaseTestActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setTitle("Initialization");
    }

    @Override
    protected Executor getExecutor() {
        switch (getEngine()) {
            case JSEVALUATOR:
                return new JsEvalInitializer(this);
            case ANDROIDJSCORE:
                return new JsCoreInitializer();
            case J2V8:
                return new V8Initializer();
            case DUKTAPE:
                return new DuktapeInitializer();
        }
        throw new IllegalStateException("Pick a Javascript engine");
    }
}
