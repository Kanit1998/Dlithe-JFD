//task1
const showNAme = (firstNAme, lastNAme,...args)=>{
    let name = firstNAme=""+lastName+"";
    for(let title of args) {
        name+=title+"";

    }
    return name;
}
console.log(showNAme('kanit','sharma','from himachal pradesh'));

//task2
let array1 = [1, 2, 3, 4, 5]
let array2 = [6, 7, 8, 9, 10]

let array3 = [...array1, ...array2]
console.log(array3)