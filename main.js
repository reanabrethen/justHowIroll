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

images = document.querySelector('#d6-roll')



blueDi = document.querySelector('#d12-roll')

bigDi = document.querySelector('#d20-roll')




/*******************
 * EVENT LISTENERS *
 *******************/

images.addEventListener('click', ()=>{ 
  let rolled = getRandomNumber(6) 

  images.src = `./images/d6/${rolled}.png`

})






blueDi.addEventListener('click', ()=>{
  let twelve = getRandomNumber(12)

  blueDi.src = `./images/numbers/${twelve}.png`
})


bigDi.addEventListener('click', ()=>{
  let twenty = getRandomNumber(20)

  bigDi.src = `./images/numbers/${twenty}.png`
})


/******************
 * RESET FUNCTION *
 ******************/



/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/
//build functions to put in event listeners


/****************
 * MATH SECTION *
 ****************/
