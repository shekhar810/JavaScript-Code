// let str="kdsjklkdgh"

// function vowel(){
//     let count=0;
//     for(let s of str){
//         if(s==="a" || s==="e" || s==="i" ||s==="o" ||s==="u"){
//             count++;
//         }
//     }
//     console.log(count);
// }
// vowel();

let str="kdasjklekdgh"
const vowel = (str) => {
    let count=0;
    for(let s of str){
        if(s==="a" || s==="e" || s==="i" ||s==="o" ||s==="u")
        {
            count++;
        }
    }
    console.log(count);
}

vowel(str);

