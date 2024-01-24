function min(arr, toReturn) {
    return (toReturn === "value" ? arr.sort( (a, b) => a-b )[0] : arr.indexOf(Math.min(...arr)))
}
console.log("test1")
console.log(min([1,2,3,4,5], 'value'))
console.log(min([1,2,3,4,5], 'index'))

console.log("test2")
console.log(min([7,3,4,2,5], 'value'))
console.log(min([7,2,3,4,1], 'index'))

/*    if (toReturn === "value") {
        return arr.sort( (a, b) => a-b )[0]
    } else {
        return arr.indexOf(Math.min(...arr));
    }*/