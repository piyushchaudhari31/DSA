// Q. Right Angle Triangle
// *
// * *
// * * *
// * * * *
// * * * * *

// let n = 5
// for(let i=0;i<n;i++){
//     for(let j=0;j<i+1;j++){
//         process.stdout.write("*"+" ")
//     }
//     process.stdout.write("\n")
// }


// Q.
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// let n = 5
// for(let i=1;i<=n;i++){
//     for(let j=1;j<i+1;j++){
//         process.stdout.write(j+ " ")
//     }
//     process.stdout.write("\n")
// }


// Q 37.
// A
// A B
// A B C
// A B C D
// A B C D E

// let n = 5
// for(let i=1;i<=n;i++){
//     let ch = 65
//     for(let j=1;j<=i;j++){
//         process.stdout.write(String.fromCharCode(ch)+" ")
//         ch++
//     }
//     process.stdout.write("\n")
// }


// Q 38. Inverted Right Angle Triangle
// * * * * * i=1
// * * * *  i=2
// * * * i=3
// * * i=4
// * i=5


// let n = 5
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n-i+1;j++){
//         process.stdout.write("*" + " ")
//     }
//     process.stdout.write("\n")
// }


// Q 39.
//         *
//       * *
//     * * *
//   * * * *
// * * * * *

// let n = 5
// for(let i=0;i<n;i++){
//     for(let j=0;j<n-i;j++){
//         process.stdout.write("  ")
//     }
//     for(let j=0;j<i+1;j++){
//         process.stdout.write(" *")
//     }
//     process.stdout.write("\n")
// }


// Q 21.
//  *         *
//    *     *
//     *   *
//      * *
//       *


// let n = 5

// for(let i=1;i<=n;i++){
//     for(let j=1;j<=(2*n)-1;j++){
//         if(i===j || i+j === 2*n){
//             process.stdout.write("*")
//         }
//         else{
//             process.stdout.write(" ")
//         }
//     }

//     process.stdout.write("\n");
    
// }


// Q 22.
// *              *
//    *       *
//        *
//    *       *
// *               *

// let n = 5

// for(let i=1;i<=n;i++){
//     for(let j=1;j<=(2*n)-1;j++){
//         if(i==j || i+j === n+1){
//             process.stdout.write("*")
//         }
//         else{
//             process.stdout.write(" ")
//         }
//     }

//     process.stdout.write('\n')
// }

