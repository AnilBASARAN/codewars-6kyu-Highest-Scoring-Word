
function high(x){
    console.log(x)
    x =   [...new Set(x.split(' '))].join(' ')
  
    function calculate(word){
      return word.split('').map((x,i)=> x = x.codePointAt()-96).reduce((acc,c)=>acc + c,0)
    }
    
  let highestScore = ''
    for(let i = 0 ; i < x.split(' ').length ; i++){
      if( highestScore < calculate(x.split(' ')[i]))
        highestScore = calculate(x.split(' ')[i])
        }
    
     for(let i = 0 ; i < x.split(' ').length ; i++){
      if( highestScore == calculate(x.split(' ')[i]))
        return x.split(' ')[i]
        }
    }




/*

6kyu Highest Scoring Word


Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript