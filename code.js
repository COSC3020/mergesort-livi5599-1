function mergesort(array) {
    if (array.length == 0)
        return array;
    if (array.length == 1)
        return array;

    for (width = 1; width < array.length; width *= 2) {
        for (i = 0; i < array.length; i += 2 * width) {
            var low = i;
            var mid = i + width;
            var high = i + 2 * width;

            if (mid > array.length - 1) {
                break;
            }

            if (high > array.length - 1) {
                high = array.length - 1;
            }

            merge(array, low, mid, high);
        }
    }
    return array;
}

function merge(array, low, mid, high) {
    for (j = low; j <= mid; j++) {
        for (k = high; k >= mid; k--) {
            if (array[k] <= array[j]) {
                [array[j], array[k]] = [array[k], array[j]];
            }
        }
    }
}
