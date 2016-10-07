package com.quizlet.android.javascript;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.TextView;
import android.widget.Toast;

import java.util.concurrent.TimeUnit;

import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;

public abstract class BaseTestActivity extends AppCompatActivity {

    static final int DEFAULT_ITERATIONS = 100;
    static final int MAX_ITERATIONS = 65536;

    @BindView(R.id.test_option_engine_jsevaluator)
    RadioButton mEngineJsEvaluator;
    @BindView(R.id.test_option_engine_jscore)
    RadioButton mEngineJsCore;
    @BindView(R.id.test_option_engine_v8)
    RadioButton mEngineV8;

    @BindView(R.id.test_option_iterations)
    EditText mIterationsEditText;

    @BindView(R.id.start_test)
    View mStartTest;

    @BindView(R.id.test_status)
    TextView mTestStatus;
    @BindView(R.id.test_result)
    TextView mTestResult;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.test_activity);
        ButterKnife.bind(this);
        setIterations(DEFAULT_ITERATIONS);
    }

    @OnClick(R.id.start_test)
    void onStartClicked() {
        setTestStatus("");
        setTestResult("");
        setStartButtonEnabled(false);

        String text = mIterationsEditText.getText().toString();

        int iterations = -1;
        try {
            iterations = Integer.parseInt(text);
        } catch (NumberFormatException exception) {
            Toast.makeText(this, R.string.error_invalid_input, Toast.LENGTH_SHORT).show();
        }

        if (iterations < 0 || iterations > MAX_ITERATIONS) {
            iterations = DEFAULT_ITERATIONS;
        }
        setIterations(iterations);

        test();
    }

    protected void setTestStatus(String message) {
        mTestStatus.setText(message);
    }

    protected void setTestResult(String message) {
        mTestResult.setText(message);
    }

    protected void setIterations(int num) {
        mIterationsEditText.setText(String.valueOf(num));
    }

    protected void setStartButtonEnabled(boolean enable) {
        mStartTest.setEnabled(enable);
    }

    protected int getIterations() {
        return Integer.parseInt(mIterationsEditText.getText().toString());
    }

    protected Engine getEngine() {
        if (mEngineJsEvaluator.isChecked()) {
            return Engine.JSEVALUATOR;
        }
        if (mEngineJsCore.isChecked()) {
            return Engine.ANDROIDJSCORE;
        }
        if (mEngineV8.isChecked()) {
            return Engine.J2V8;
        }

        throw new IllegalStateException("Pick a Javascript engine");
    }

    @SuppressLint("SetTextI18n")
    protected void showTime(long durationNs) {
        long timeTakenMs = TimeUnit.MILLISECONDS.convert(durationNs, TimeUnit.NANOSECONDS);
        mTestStatus.setText("Completed");
        mTestResult.setText(String.format("%s ms", timeTakenMs));
    }

    public void test() {
        setTestStatus("Running test...");

        Executor grader = getExecutor();
        int iterations = getIterations();

        testHelper(grader, 0, 0, iterations);
    }

    void testHelper(final Executor grader, final long cumulativeRunningTimeNs, final int count, final int total) {
        if (count >= total) {
            testFinished(cumulativeRunningTimeNs);
        } else {
            grader.execute(
                    durationNs -> {
                        setTestStatus("Completed: " + count);
                        testHelper(grader, cumulativeRunningTimeNs + durationNs, count + 1, total);
                    }
            );
        }
    }

    void testFinished(final long durationNs) {
        showTime(durationNs);
        setStartButtonEnabled(true);
    }

    abstract protected Executor getExecutor();
}
