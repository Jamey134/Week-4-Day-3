function binarySearch(sortedNums, searchNum) {
    if (sortedNums.length <= 1){
        if (sortedNums[0] == searchNum){
            return true
        }
        return false
    }
    let mid = Math.floor(sortedNums.length/2);
    if (sortedNums[mid] == searchNum){
        return true
    } // if less than value, search right side
    else if (sortedNums[mid] < searchNum){
        return binarySearch(sortedNums.slice(mid+1, sortedNums.length+1), searchNum)
    } // if greater than value, search left side
    else {
        return binarySearch(sortedNums.slice(0, mid), searchNum)
    }
}

1

