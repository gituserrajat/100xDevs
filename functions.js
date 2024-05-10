function sum(a,b){
    return a+b
}
const ans = sum(1,2)
console.log(ans)



function calculateArethmatic(a,b,type){
    if(type == "sum"){
        return a+b;
    }
    if(type == "minus"){
        return a-b;
    }
}

const value = calculateArethmatic(2,3,"sum")
console.log(value)