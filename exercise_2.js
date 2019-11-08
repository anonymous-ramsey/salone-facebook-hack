
let oddNumbers1 = [1, 2, 3, 4, 5, 7];
const returnOdds = () => {
  oddNumbers1.filter((numbers) => {
    if(numbers%2 !== 0){
      console.log(`${numbers}`)
    }
  })
}
returnOdds();

//or u can simply filter and get all the odd numbers like this

let allNumbers = [1, 2, 3, 4, 5, 7].filter((oddNumbers) => oddNumbers%2!==0);
console.log(`the odd numbers are: ${allNumbers}`);
