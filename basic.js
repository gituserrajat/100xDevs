// variable String
let my_name = "rajat";
//variable number
let age = 12;
//variable boolean
let single = true;

//print any variable 
console.log(my_name, age, single);

//if condition
if(single){
console.log(my_name+" is Married");
}
else{
console.log(my_name+" is unMarried");
}

//for loop
let count =0;
for(let i=0;i<=100;i++){
    count += i;
}
console.log("sum = "+count);

//Arrays
let my_array = ["rajat","choudhary","khushi","sirohi"];
for(let i=0;i<my_array.length;i++){
    console.log(my_array[i]);
}

const age_array = [1,2,3,4];
for(let i=0;i<age_array.length;i++){
    if(age_array[i]<3){
        console.log("age is less then 3");
    }else{
        console.log("age is not less then 3");
    }
}


//Objects
const my_object = {
     my_name : "rajat",
     my_age : 22
};
console.log("my name is : "+my_object.my_name);
console.log("my age is : "+my_object.my_age);


//Arrys of objects
const array_of_object = [{
    my_first_name : "rajat",
    my_first_age : 333,
},
{
    my_first_name : "chaoudhary",
    my_first_age : 222
}];

for(let i=0;i<array_of_object.length;i++){
    if(array_of_object[i]['my_first_age']<223){
        console.log("my first_name is : "+array_of_object[i]['my_first_name']);
        console.log("my first_age is : "+array_of_object[i]['my_first_age']);
    }
}

