function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // if number is smallest, move to front
    if (arr[i] < arr[0]) {
      arr.unshift(arr.splice(i, 1)[0]);
    } else {
      // look at numbers before i to find where it belongs
      for (let j = 1; j < i; j++) {
        if (arr[i] > arr[j - 1] && arr[i] < arr[j]) {
          arr.splice(j, 0, arr.splice(i, 1)[0]);
        }
      }
    }
    
  }
}