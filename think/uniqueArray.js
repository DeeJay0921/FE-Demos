var arr = [1,1,'a','d','c','d',2]

// 1.
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

// 2. filter  indexOf()
let newArr2 = arr.filter( (e,i,arr) => {
    return arr.indexOf(e) == i;
})
console.log(newArr2);

// 3.
function unique3 (arr) {
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
var newArr3 = unique3(arr)
console.log(newArr3);

// 4. Set()
let newArr4 = [...new Set(arr)];
// let newArr4 = Array.from(new Set(arr));
console.log(newArr4);