package com.quizlet.android.javascript;

import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

import rx.Scheduler;
import rx.schedulers.Schedulers;

public class JsExecutionScheduler {

    final static Scheduler INSTANCE = Schedulers.from(
            new ThreadPoolExecutor(
                    1, 1,
                    60,
                    TimeUnit.SECONDS,
                    new LinkedBlockingQueue<>(),
                    (ThreadFactory) Thread::new
            )
    );

    public static Scheduler get() {
        return INSTANCE;
    }
}
