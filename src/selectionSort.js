function selectionSort(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        let currentMin = i

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[currentMin]) currentMin = j
        }

        if (currentMin != i) {
            let pluckNum = arr[i]
            arr[i] = arr[currentMin]
            arr[currentMin] = pluckNum
        }
    }
    return arr
}