package com.quizlet.android.javascript;

import android.content.Context;
import android.util.Log;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

public class IoUtils {

    public static String getJsFromPath(Context context, String path) {
        String js = null;
        try {
            InputStream open = context.getAssets().open(path);
            js = readInputStream(open);
        } catch (IOException e) {
            Log.e("IoUtils", e.getLocalizedMessage());
        }
        return js;
    }

    public static String readInputStream(InputStream ins) throws IOException {
        BufferedReader streamReader = new BufferedReader(new InputStreamReader(ins));

        StringBuilder stringBuilder = new StringBuilder();
        String inputString;
        while ((inputString = streamReader.readLine()) != null) {
            stringBuilder.append(inputString);
        }

        return stringBuilder.toString();
    }
}
