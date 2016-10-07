package com.quizlet.android.javascript;


public class SubmissionContext {

    static final String SUBMISSION_CONTEXT_TEMPLATE =
            "{'answerLanguage': '%s', 'promptLanguage': '%s', 'promptText': '%s'}";

    String answerLanguageCode;
    String promptLanguageCode;
    String promptText;

    public SubmissionContext(String answerLanguageCode, String promptLanguageCode, String promptText) {
        this.answerLanguageCode = answerLanguageCode;
        this.promptLanguageCode = promptLanguageCode;
        this.promptText = promptText;
    }

    public String toJSON() {
        return String.format(
                SUBMISSION_CONTEXT_TEMPLATE,
                answerLanguageCode, promptLanguageCode, promptText);
    }
}
