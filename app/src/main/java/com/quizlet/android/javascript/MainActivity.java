package com.quizlet.android.javascript;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;

import butterknife.ButterKnife;
import butterknife.OnClick;
import com.quizlet.android.javascript.loading.LoadingTestActivity;
import com.quizlet.android.javascript.initialization.InitializationTestActivity;
import com.quizlet.android.javascript.looping.LoopingTestActivity;
import com.quizlet.android.javascript.grading.GradingActivity;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main_activity);
        ButterKnife.bind(this);
    }

    @OnClick(R.id.test_initialization)
    void onInitializationTestClicked() {
        startActivity(new Intent(this, InitializationTestActivity.class));
    }

    @OnClick(R.id.test_execution_loop)
    void onLoopingTestClicked() {
        startActivity(new Intent(this, LoopingTestActivity.class));
    }

    @OnClick(R.id.test_execution_load)
    void onLoadingTestClicked() {
        startActivity(new Intent(this, LoadingTestActivity.class));
    }

    @OnClick(R.id.test_grader)
    void onGradingTestClicked() {
        startActivity(new Intent(this, GradingActivity.class));
    }
}
