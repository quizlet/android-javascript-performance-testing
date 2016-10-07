package com.quizlet.android.javascript;

import android.support.annotation.Nullable;

import rx.functions.Action1;

public interface Executor {

    void execute(@Nullable Action1<Long> listener);
}
