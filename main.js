/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/
// query selections

const singleDie = document.querySelector('#d6-roll')

const double = document.querySelector('main')

const twelveDice = document.querySelector('#d12-roll')

const twentyDice = document.querySelector('#d20-roll')

const resetButton = document.querySelector('#reset-button')



/*******************
 * EVENT LISTENERS *
 *******************/

singleDie.addEventListener('click', ()=>{ 
  let rolled = getRandomNumber(6) 

  singleDie.src = `./images/d6/${rolled}.png`

  sixes.push(rolled)
  // console.log(sixes)
  
  //math has to change when Di is rolled thus under same event listener
  let sixesMean = findMean(rolled)
  document.querySelector('#d6-rolls-mean').innerHTML = `${sixesMean}`
let sixesMedian = findMedian(sortByNumber(sixes))
  document.querySelector('#d6-rolls-median').innerHTML = `${sixesMedian}`
let sixesMode = findMode(sortByNumber(sixes))
  document.querySelector('#d6-rolls-mode').innerHTML = `${sixesMode}`

})


double.addEventListener('click', ()=>{
   let roll1 = getRandomNumber(6)
   let roll2 = getRandomNumber(6)

   document.querySelector('#double-d6-roll-1').src =  `./images/d6/${roll1}.png`
   document.querySelector('#double-d6-roll-2').src =  `./images/d6/${roll2}.png`

   doubleSixes.push(roll1 + roll2)

   let doubleSixMean = findMean(roll1 + roll2)
  document.querySelector('#double-d6-rolls-mean').innerHTML = `${doubleSixMean}`
let doubleSixesMedian = findMedian(sortByNumber(doubleSixes))
  document.querySelector('#double-d6-rolls-median').innerHTML = `${doubleSixesMedian}`
let doubleSixesMode = findMode(sortByNumber(doubleSixes))
  document.querySelector('#double-d6-rolls-mode').innerHTML = `${doubleSixesMode}`

})


twelveDice.addEventListener('click', ()=>{
  let roll = getRandomNumber(12)

  twelveDice.src = `./images/numbers/${roll}.png`

  twelves.push(roll)

  let twevleMean = findMean(roll)
  document.querySelector('#d12-rolls-mean').innerHTML = `${twevleMean}`
let twelveMedian = findMedian(sortByNumber(twelves))
  document.querySelector('#d12-rolls-median').innerHTML = `${twelveMedian}`
let twelveMode = findMode(sortByNumber(twelves))
  document.querySelector('#d12-rolls-mode').innerHTML = `${twelveMode}`

})



twentyDice.addEventListener('click', ()=>{
  let bigRoll = getRandomNumber(20)

  twentyDice.src = `./images/numbers/${bigRoll}.png`

  twenties.push(bigRoll)

  let twentyMean = findMean(bigRoll)
  document.querySelector('#d20-rolls-mean').innerHTML = `${twentyMean}`
let twentyMedian = findMedian(sortByNumber(twenties))
  document.querySelector('#d20-rolls-median').innerHTML = `${twentyMedian}`
let twentyMode = findMode(sortByNumber(twenties))
  document.querySelector('#d20-rolls-mode').innerHTML = `${twentyMode}`


})





resetButton.addEventListener('click', ()=>{
 
    
})

/******************
 * RESET FUNCTION *
 ******************/

function startOver(){
  document.getElementById('h3').reset()
}


/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/
//build functions to put in event listeners


/****************
 * MATH SECTION *
 ****************/


function findMean(arr) {
  const sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}


function findMode(arr){
const dice = {}
const diceRolls = []

for(let num of diceRolls){

  if(dice[num] > 0){
    dice[num] ++
  }else{
    dice[num] = 1
  }  
  // console.log(dice)
}

let numRolled;
let mostCount = 0
for(let key in dice){
  if(dice[key] > mostCount){
    mostCount = dice[key]
    numRolled = key
  }
}
}

function findMedian(arr){
    const len = arr.length
    const middle = Math.floor(len/2)

    if(len % 2 === 0){
      return arr[middle]
    }else{
      return (arr[middle - 1] + arr[middle]) / 2
    }
}