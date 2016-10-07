function getMax() {
    var iterations = 1000;

    for (i = 0; i < iterations; i++) {
        if ("" + (i % 2) == "" + (i % 4)) {
            i = i;
        }
    }

    return 42;
}
