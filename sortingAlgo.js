let a = [5,4,3,2,1];

function bubbleSort(arr) {
    for(let i=1; i< arr.length; i++) {
        for(let j=0; j<arr.length -i; j++) {
            if(arr[j]> arr[j+1]) {
                [a[j], a[j+1]] = [a[j+1], a[j]]
            }
        }
    }
    return arr;
}

function insertionSort(arr) {
    for(let i=1; i<arr.length; i++) {
        let key=arr[i];
        let j=i-1;
        while(j>=0 && key<arr[j]) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
}

let sortedArr = insertionSort(a);
console.log(sortedArr)
