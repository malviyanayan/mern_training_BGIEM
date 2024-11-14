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




