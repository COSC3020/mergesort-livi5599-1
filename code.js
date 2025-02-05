function mergesort(array) {
    if (array.length == 0)
        return array; // O(1)
    if (array.length == 1)
        return array; // O(1)

    for (width = 1; width < array.length; width *= 2) { // multiplication by 2 -> log(n)
        for (i = 0; i < array.length; i += 2 * width) { // runs n/(2*width) times -> O(n)
            var low = i; // O(1)
            var mid = i + width; // O(1)
            var high = i + 2 * width; // O(1)

            if (mid > array.length - 1) { // O(1)
                break;
            }

            if (high > array.length - 1) { // O(1)
                high = array.length - 1; // O(1)
            }

            merge(array, low, mid, high); //O(n^2)
        }
    }
    return array; // O(1)
}

function merge(array, low, mid, high) {
    for (j = low; j <= mid; j++) { //runs mid times -> n/2 -> O(n)
        for (k = high; k >= mid; k--) { // runs mid-low times -> n/2 - constant -> O(n)
            if (array[k] <= array[j]) { // O(1)
                [array[j], array[k]] = [array[k], array[j]]; // O(1)
            }
        }
    }
}
