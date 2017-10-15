var arr = [1,1,'a','d','c','d',2]

function unique1 (arr) {
    // indexOf
    var newArr = []
    for (var i = 0; i < arr.length; i ++ ) {
        if (newArr.indexOf(arr[i]) == -1) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
var newArr1 = unique1(arr)
console.log(newArr1)

function unique2 (arr) {
    // sort()
    var newArr = []
    arr.sort()
    for (var i = 0; i < arr.length; i ++) {
        if (newArr[newArr.length - 1] !== arr[i]) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
var newArr2 = unique2(arr)
console.log(newArr2)