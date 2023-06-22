const arr1 = [0, 1, 2, 3]
const arr2 = [10, 0, 22, 3, 2]
const intersect = (arr1, arr2) => {
    return arr1.filter(x => arr2.includes(x))
};
console.log(intersect(arr1, arr2));