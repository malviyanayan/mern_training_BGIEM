// Higher Order Function 

// Aise function jo apne ander kisi aur function ko contain kare



// General pourpose

// let outer = () =>{
//     return ()=>console.log("hello ji kaise ho hahaha");
// };

// let inner = outer();
// inner();





let arr = [1,2,3,"Hello","Hii","Bye",true,false];

let getNumberFromArr = ()=>{
    let nums = [];
    for(let i=0;i<arr.length;i++){
        let val = arr[i];
        if(typeof(val) == "number"){
            nums.push(val)
        }
    }
    return nums;
}

console.log(getNumberFromArr());



// console.log((null + null) === undefined);
// console.log((null + null) === 0);
// console.log(undefined == undefined)


// console.log("one")
// console.log("Two")




// Asynchrounus programming

// SetTimeOut Function

// setTimeout(() => {
//     console.log("one")
// }, 2000);

// console.log("Two")

setInterval(() => {
    console.log("jai Kishan");
    setTimeout(() => {
        console.log("jai javan ......");
    }, 500);
    console.log("-------------------");
}, 1000);