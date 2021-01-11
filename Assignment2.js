
 //Q1
     function sum(x,y)
            {
                return x+y;
            }
            sum(3,4);


 //QUE 2 a)
console.log("Hello Edac")

//QUE 2 b)
var w=true;
var x=10;
var y="EDAC";
var emp=["Amit","Aniruddha","Aniket"]
stu={id:101,name:"Sir",fee:50000}

console.log(w + ","+ x +"," + y + "," + emp +","+stu.id+","+stu.name+","+stu.fee );

// QUE 2 c)
var str="Welcome to cdac ";
str.charAt(3);
str.concat("Mumbai");
str.substr(2,4);
str.toUpperCase();
str.split(" ");
str.trim();


//Q3

var arr=["ram","sham","seeta"];
console.log(arr);
   
///Q4
function fun(x)
{
    if(isNaN(x))
    console.log("Not a Number");
    else
    console.log("a number");
}
fun(12);


//Q5






//Q6
var f=100;
var  c= ((f-32)/9)*5;
console.log(c);


//Q7
function fun1(n)
{
    if(n<1)
    {
        return 1;
    }
    else
    {
        return n*fun1(n-1);
    }
   
}
fun1(4);




//Q8