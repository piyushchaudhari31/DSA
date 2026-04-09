// Q.print the n number of digit

// let n = 1
// while(n<5){
//     console.log(n);
//     n++
// }




//Q. sum of the digit

// let n = 5
// let sum = 0
// while(n>0){
//     sum = sum + n
//     n--

// }
// console.log(sum);




// Q. reverse of number

// let n=10
// while(n>0){
//     console.log(n);
//     n--
    
// }
// console.log(n);




// Q. strong number

// let num = 145
// let sum = 0
// let fact = 1

// while(num>0){
//     let rem = num % 10  
//     let fact = 1
//     for(let i=1;i<=rem;i++){
//         fact *= i
//     }
//     sum+= fact
//     num = Math.floor(num / 10)
// }




// Q.Automorphic number

// let num = 46
// let square = num*num

// let temp = num

// while(temp>0){
//     if(temp % 10 !== square % 10 ){
//         console.log("not automorphic number");
//         break
//     }
//     temp = Math.floor(temp/10)
//     square = Math.floor(square/10)
// }

// if(temp == 0){
//     console.log("automorphic number");
    
// }