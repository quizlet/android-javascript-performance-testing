package com.quizlet.android.javascript.grading;

import android.os.Bundle;

import com.quizlet.android.javascript.BaseTestActivity;
import com.quizlet.android.javascript.Executor;

public class GradingActivity extends BaseTestActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setTitle("Grading");
    }

    @Override
    protected Executor getExecutor() {
        switch (getEngine()) {
            case JSEVALUATOR:
                return new JsEvalGrader(this);
            case ANDROIDJSCORE:
                return new JsCoreGrader(this);
            case J2V8:
                return new V8Grader(this);
        }
        throw new IllegalStateException("Pick a Javascript engine");
    }
}
