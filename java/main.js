//console.log(' '); แสดงผล
//promt คือให้กรอก 
// string ,number.boolen,array,object
/*1. string
let firstname  = 'John';
const idcard ='827349';
console.log('Myname is',firstname);
//2. number
let number ='20';
let height ='170.5';
//3.Boolean
let isHandsome = true;

firstname ='Tom';
console.log('Myname is',firstname);
*/

/*
operater
+ บวก 
let num1 = 7; //ถ้าข้อมูลตัวเลขมี '' จะกลายเป็น string
let num2 = 8;
let result =num1 + num2;
console.log('result is',result)

let num1 = 'test';
let num2 = 'num';
let result =num1 + num2;
console.log('result is',result)
 สามารถเอาข้อมูลมา + กันได้
- ลบ
* คูณ
/ หาร 
% หารเอาเศษ
*/


/*
== != > < >= <= === !==
true false
-------------------------------
== เท่ากับ
let num1 = 5;
let num2 = 3 ;
let condition = num1 == num2; //boolean -> true/false
console.log('num is',condition);
!= ไม่เท่ากับ
> มากกว่า
< น้อยกว่า
>= มากกว่าเท่ากับ
<= น้อยกว่าเท่ากับ
=== 
!==
*/

/* if else condition
let num1 =5;
let num2 =5;
if (num1 != num2) { //false
    console.log('Yes');
}
else if (num1 == num2) { //true
    console.log('This is else if');
}
else{
    console.log('this is else');
}
*/

/*
grade 
>= 80 A
>= 70 B
>= 60 C
>= 50 D



let score = prompt('Enter your score');
console.log('have score',score); 
if (score >= 80) {
    console.log('Grade A')
}
else if (score >= 70) {
    console.log('Grade B')
}
else if (score>= 60) {
    console.log('Grade C')
}
else if (score>= 50) {
    console.log('Grade D')
}
else {
    console.log ('Grade F') 
}
*/
/*
&& และ 
|| หรือ 
! not หรือ  ไม่ ต้องการกลับ logic


let number1 = 5
let number2 = 8
// true && true 
let condition = !(number1 >= 3 && number2 >= 10)
console.log('result of condition:',condition)

let age = 30 
let gender = 'male'

if (age >= 20 && gender == 'male'){
    console.log('เข้าร้านนี้ได้')
}

let number1 = 22;
if (number1 %2 == 0){
    console.log('you are even number')
}
else if (!(number1 %2 == 0)){
    console.log('you are not even number')
}
*/

/*
while
for

let counter = 0;
console.log('hello');

while(counter <= 20 ){
    console.log('Hello world');
    counter = counter + 1

}

for (let counter =0; counter <10; counter = counter +1){
    console.log('hello for')
}
*/
/*
array

let age1 =20;
let age2 =30;
let age3 =40;
console.log(age1,age2,age3);

let ages = [20,30,40]
console.log('ages',ages[2])
console.log('ages',ages)

//แทนที่
ages =[45,50]
console.log(ages)

//เพิ่มข้อมูลต่อ array 
ages.push(55)
console.log(ages)
//เอาออก 
ages.pop()
console.log(ages)

let ages = [20,30,40]
//include คือ การ check ข้อมูล 
if(ages.includes(40)){
    console.log('you have 40')
}



let ages = [20,30,40]

console.log(ages);

ages.sort();
console.log(ages[0])

let name_list =['Bob','Alice','Jade'];
name_list.push('Caloline');

console.log(name_list.length);
console.log(name_list[0]);
console.log(name_list[1]);
console.log(name_list[2]);
console.log(name_list[3]);

for (let index = 0; index  < name_list.length; index++){
    console.log('name list ',name_list[index])
}

*/

/*
object

let students = [{
    age : 30,
    name :'mario',
    grade : 4
},{
    age : 30,
    name :'yo',
    grade : 4
}]


for (let index =0;index< students.length;index++){
    console.log('student Number',(index +1))
    console.log('name',students[index].name)
    console.log('age',students[index].grade)
    console.log('grade',students[index].name)
}
*/

/*ยังไม่เสร็จ
let score1 =50;
let score2 =80;

let calculate_grade1 (score) => {
console.log('have score',score); 
if (score >= 80) {
    console.log('Grade A')
}
else if (score >= 70) {
    console.log('Grade B')
}
else if (score>= 60) {
    console.log('Grade C')
}
else if (score>= 50) {
    console.log('Grade D')
}
else {
    console.log ('Grade F') 
}
return grade
}

function calculate_grade2(score){
    if (score >= 80) {
        console.log('Grade A')
    }
    else if (score >= 70) {
        console.log('Grade B')
    }
    else if (score>= 60) {
        console.log('Grade C')
    }
    else if (score>= 50) {
        console.log('Grade D')
    }
    else {
        console.log ('Grade F') 
    }
    return grade

}
//การเรียก function 
let grade1 = calculate_grade(score1)
let grade2 = calculate_grade(score2)
console.log('score1 ='+ grade1)
console,log('score2 ='+grade2)
*/
/*
array
*/



/*
score.forEach((s) => {
console.log('score:',s)
})
//map filter        score[0] =10;
//score[0] =score[0] *2
//score[1] =score[1] *2
//score[2] =score[2] *2
//score[3] =score[3] *2

   
//map
score = score.map((s) => {
        return s*2
})

//forEach
score.forEach((s) => {
    console.log('score:',s)
    })
    */

/*filter แบบใช้เเค่for ยังไม่ใช้ filter

let score =[10,20,30,40];
let newScore =[]

for (let index = 0; index < score.length;index++) { //เมื่อ index เจอตำปหน่งที่ 0 แแล้วแสดงตำแหน่ง
    console.log('score:',score[index]);
    if (score[index] >= 30){
        newScore.push(score[index])
    }
} 

newScore.forEach((ns) => {
    console.log('new score',ns)
})

console.log('newScore: ',newScore)
*/
//console.log(' '); แสดงผล
//promt คือให้กรอก 
// string ,number.boolen,array,object
/*1. string
let firstname  = 'John';
const idcard ='827349';
console.log('Myname is',firstname);
//2. number
let number ='20';
let height ='170.5';
//3.Boolean
let isHandsome = true;

firstname ='Tom';
console.log('Myname is',firstname);
*/

/*
operater
+ บวก 
let num1 = 7; ถ้าข้อมูลตัวเลขมี '' จะกลายเป็น string
let num2 = 8;
let result =num1 + num2;
console.log('result is',result)

let num1 = 'test';
let num2 = 'num';
let result =num1 + num2;
console.log('result is',result)
 สามารถเอาข้อมูลมา + กันได้
- ลบ
* คูณ
/ หาร 
% หารเอาเศษ
*/


/*
== != > < >= <= === !==
true false
-------------------------------
== เท่ากับ
let num1 = 5;
let num2 = 3 ;
let condition = num1 == num2; //boolean -> true/false
console.log('num is',condition);
!= ไม่เท่ากับ
> มากกว่า
< น้อยกว่า
>= มากกว่าเท่ากับ
<= น้อยกว่าเท่ากับ
=== 
!==
*/

/* if else condition
let num1 =5;
let num2 =5;
if (num1 != num2) { //false
    console.log('Yes');
}
else if (num1 == num2) { //true
    console.log('This is else if');
}
else{
    console.log('this is else');
}
*/

/*
grade 
>= 80 A
>= 70 B
>= 60 C
>= 50 D



let score = prompt('Enter your score');
console.log('have score',score); 
if (score >= 80) {
    console.log('Grade A')
}
else if (score >= 70) {
    console.log('Grade B')
}
else if (score>= 60) {
    console.log('Grade C')
}
else if (score>= 50) {
    console.log('Grade D')
}
else {
    console.log ('Grade F') 
}
*/
/*
&& และ 
|| หรือ 
! not หรือ  ไม่ ต้องการกลับ logic


let number1 = 5
let number2 = 8
// true && true 
let condition = !(number1 >= 3 && number2 >= 10)
console.log('result of condition:',condition)

let age = 30 
let gender = 'male'

if (age >= 20 && gender == 'male'){
    console.log('เข้าร้านนี้ได้')
}

let number1 = 22;
if (number1 %2 == 0){
    console.log('you are even number')
}
else if (!(number1 %2 == 0)){
    console.log('you are not even number')
}
*/

/*
while
for

let counter = 0;
console.log('hello');

while(counter <= 20 ){
    console.log('Hello world');
    counter = counter + 1

}

for (let counter =0; counter <10; counter = counter +1){
    console.log('hello for')
}
*/
/*
array

let age1 =20;
let age2 =30;
let age3 =40;
console.log(age1,age2,age3);

let ages = [20,30,40]
console.log('ages',ages[2])
console.log('ages',ages)

//แทนที่
ages =[45,50]
console.log(ages)

//เพิ่มข้อมูลต่อ array 
ages.push(55)
console.log(ages)
//เอาออก 
ages.pop()
console.log(ages)

let ages = [20,30,40]
//include คือ การ check ข้อมูล 
if(ages.includes(40)){
    console.log('you have 40')
}



let ages = [20,30,40]

console.log(ages);

ages.sort();
console.log(ages[0])

let name_list =['Bob','Alice','Jade'];
name_list.push('Caloline');

console.log(name_list.length);
console.log(name_list[0]);
console.log(name_list[1]);
console.log(name_list[2]);
console.log(name_list[3]);

for (let index = 0; index  < name_list.length; index++){
    console.log('name list ',name_list[index])
}

*/

/*
object

let students = [{
    age : 30,
    name :'mario',
    grade : 4
},{
    age : 30,
    name :'yo',
    grade : 4
}]


for (let index =0;index< students.length;index++){
    console.log('student Number',(index +1))
    console.log('name',students[index].name)
    console.log('age',students[index].grade)
    console.log('grade',students[index].name)
}
*/

/*ยังไม่เสร็จ
let score1 =50;
let score2 =80;

let calculate_grade1 (score) => {
console.log('have score',score); 
if (score >= 80) {
    console.log('Grade A')
}
else if (score >= 70) {
    console.log('Grade B')
}
else if (score>= 60) {
    console.log('Grade C')
}
else if (score>= 50) {
    console.log('Grade D')
}
else {
    console.log ('Grade F') 
}
return grade
}

function calculate_grade2(score){
    if (score >= 80) {
        console.log('Grade A')
    }
    else if (score >= 70) {
        console.log('Grade B')
    }
    else if (score>= 60) {
        console.log('Grade C')
    }
    else if (score>= 50) {
        console.log('Grade D')
    }
    else {
        console.log ('Grade F') 
    }
    return grade

}
//การเรียก function 
let grade1 = calculate_grade(score1)
let grade2 = calculate_grade(score2)
console.log('score1 ='+ grade1)
console,log('score2 ='+grade2)
*/
/*
array
*/



/*
score.forEach((s) => {
console.log('score:',s)
})
//map filter        score[0] =10;
//score[0] =score[0] *2
//score[1] =score[1] *2
//score[2] =score[2] *2
//score[3] =score[3] *2

   
//map
score = score.map((s) => {
        return s*2
})

//forEach
score.forEach((s) => {
    console.log('score:',s)
    })
    */

/*filter แบบใช้เเค่for ยังไม่ใช้ filter

let score =[10,20,30,40];
let newScore =[]

for (let index = 0; index < score.length;index++) { //เมื่อ index เจอตำปหน่งที่ 0 แแล้วแสดงตำแหน่ง
    console.log('score:',score[index]);
    if (score[index] >= 30){
        newScore.push(score[index])
    }
} 

newScore.forEach((ns) => {
    console.log('new score',ns)
})

console.log('newScore: ',newScore)
----------------------------------
let score =[10,20,30,40];


for (let index = 0; index < score.length;index++) { //เมื่อ index เจอตำปหน่งที่ 0 แแล้วแสดงตำแหน่ง
    console.log('score:',score[index]);

let newScore = score.filter((s) =>{
    if (s >= 30 ){
        return true
    } else {
        return false
    }
})

newScore.forEach((ns) => {
    console.log('new score',ns)
})
}
*/
/*object*/

// แบบ ค้นหาข้อมูล
let students =[
    {
        name :'AA',
        score :67,
        grade :'A'
    },{
        name :'Cc',
        score :60,
        grade :'D'
    },{
        name :'Bb',
        score :32,
        grade :'F'
    }
]

let student =students.find((s) => {
    if(s.name  =='Bb') {
        return true
    }
})
            /*
let doublescore_students =students.map((s) => {
    s.score=s.score*2
    return s
})
console.log(student)
console.log('double score student',doublescore_students)
            */
let highScore_student =students.filter((s) => {
    if (s.score >80){
        return true;
    }
})
console.log('student',student)
console.log('highscore student ',highScore_student)