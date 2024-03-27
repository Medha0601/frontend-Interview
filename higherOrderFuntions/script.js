// map-filter- reduce
// POLLYFILLS
// FOR MAP
Array.prototype.myMap = function (cb) {
  const temp = [];

  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }

  return temp;
};

const nums = [1, 2, 3, 4];
const multiThree = nums.myMap((num, i, arr) => {
  return num * 3;
});

// console.log(multiThree)

// FOR FILTER
Array.prototype.myFilter = function (cb) {
  const temp = [];

  for (let i = 0; i < this.length; i++) {
    // only push if it satisfy the condition
    if (cb(this[i], i, this)) temp.push(this[i]);
  }

  return temp;
};

const greaterThanTwo = nums.myFilter((num) => {
  return num > 2;
});

// console.log(greaterThanTwo)

// FOR REDUCE
Array.prototype.myReduce = function (cb, initalValue) {
  let accumulator = initalValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

const sumOfNum = nums.myReduce((acc, curr) => {
  return acc + curr;
}, 0);
// console.log(sumOfNum);

// O/P
// q- return total marks for students  with marks greater then 60
// after 20 marks have been added to those who scored less than 60

let students = [
  { name: "Piyush", rollnumber: 31, marks: 80 },
  { name: "Jenny", rollnumber: 15, marks: 69 },
  { name: "Kaushal", rollnumber: 16, marks: 35 },
  { name: "Dilpreet", rollnumber: 7, marks: 55 },
];


const marksAdded = students.map((stu) => stu.marks<60? stu.marks = stu.marks+20 : stu.marks)
                            .filter((mark) => mark>60)
                            .reduce((acc, curr)=>{ return acc+curr},0)
console.log(marksAdded)
// const filteredData  = marksAdded.filter()