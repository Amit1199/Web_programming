// example 1
var res=(function(){
var counter=0;
return function(){
    counter+=1;
    return counter;
}
})();

res();
res();

// example 2
var str="JAVASCRIPT";
function reverse(str)
{
    var n="";
    for(var i=str.length-1;i>=0;i--)
    {
        n += str[i];
    }
    return n;
}

reverse(str);

// example 3
var circleArr=[
    {radius:5},
    {radius:9},
    {radius:2}
];

var arr= circleArr.sort(function (a, b)
{
    return a.radius - b.radius;
});
console.log(arr);

// example 4
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

//   que 5
var sum = 0;
var numbers = [50, 45, 15, 5];
numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
} 
console.log(sum);

// example 6
// constructor 
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  var myFather = new Person("John", "Doe", 50, "blue");

//inheritance
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  var myFather = new Person("John", "Doe", 50, "blue");
  var myMother = new Person("Sally", "Rally", 48, "green");
  
  document.getElementById("demo").innerHTML =
  "My father is " + myFather.age + ". My mother is " + myMother.age; 

