// using es6 function to return the shortest word

let arrayData = ["hello", "muchasgracias", "hi", "elephant"];

const returnShortest = (data) => {
    return data.reduce((currentWord, nextWord) =>{
        if (currentWord.length > nextWord.length) {
            return nextWord;
        }
        else {
            return currentWord;
        }
    });
}

console.log(returnShortest(arrayData));

//also you can return the length of the shortest word in the array -- see code below

let data_ = ["hello", "muchasgracias", "hi", "elephant"];
let min = Math.min(...data_.map(({ length }) => length));
console.log(min);
