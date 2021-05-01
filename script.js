// Cells
const c0 = document.querySelector('#c0');
const c1 = document.querySelector('#c1');
const c2 = document.querySelector('#c2');
const cLucky = document.querySelector('#lucky');

// Numbers
let nums = [];
const count = 3;

function generateRandomNumber(){
  return Math.floor(Math.random() * 100) + 1;
};

function generateNumbers(){
  for (let i = 0; i <= count; i++){
    nums[i] = generateRandomNumber();
  };
  console.log('nums: ' + nums + '\nluckNum: ' + nums[nums.length - 1]);
};

function showNumber(c, n){
  c.style.backgroundColor = "white";
  c.innerHTML = nums[n];
};

// Run
generateNumbers();

c0.addEventListener("click", function(){
   showNumber(c0, 0);
});

c1.addEventListener("click", function(){
  showNumber(c1, 1);
});

c2.addEventListener("click", function(){
  showNumber(c2, 2);
});

cLucky.addEventListener("click", function(){
   showNumber(cLucky, nums.length - 1);
   cLucky.style.border = "2px solid black";
});
