package com.quizlet.android.javascript.loading;

import android.os.Bundle;

import com.quizlet.android.javascript.BaseTestActivity;
import com.quizlet.android.javascript.Executor;

public class LoadingTestActivity extends BaseTestActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setTitle("Loading");
    }

    @Override
    protected Executor getExecutor() {
        switch (getEngine()) {
            case JSEVALUATOR:
                return new JsEvalLoader(this);
            case ANDROIDJSCORE:
                return new JsCoreLoader(this);
            case J2V8:
                return new V8Loader(this);
            case DUKTAPE:
                return new DuktapeLoader(this);
            case RHINO:
                return new RhinoLoader(this);
        }
        throw new IllegalStateException("Pick a Javascript engine");
    }
}
