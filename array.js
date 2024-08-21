let marks = [91,82,73,64];

 console.log(marks);
 //console.log(marks[0]);

 //Length of array
 let len = marks.length;
 console.log(len);

 //Add values to array
 marks[4] = 55;
 console.log(marks)

 //Array is mutable
 marks[0] = 92;
 console.log(marks);

 //Array type
 console.log(typeof marks);


 //Iterate through array
 for(let i = 0; i < marks.length; i++){
    console.log(marks[i]);
 }

 //toString
 let b = marks.toString();
 console.log(b);

 //join - join array elements with a delimitor
 let c = marks.join("_");
 console.log(c);

 //pop - remove last element
 ele = marks.pop();
 console.log(marks, ele);

 //push - add element
 marks.push(55);
 console.log(marks);

 //delete
//  delete marks[0];
//  console.log(marks);

//concat
score = [3,12,23,45,56,67];
let newArray = marks.concat(score);
console.log(newArray);

//sort - In alphabetical order
console.log(newArray.sort())

//reverse
console.log(newArray.reverse());