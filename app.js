//QUERY SELECTOR:

// var books = document.querySelectorAll('#book-list li .name');
// //console.log(books);


//CHANGE TEXT AND INNERHTML CONTENT:
// Array.from(books).forEach( (book) => {
//     book.textContent += ' (Book Titles)';
// })

// const bookList = document.querySelector("#book-list");
// //bookList.innerHTML = '<h2>Books and more books</h2>';
// //bookList.innerHTML += '<p>This is how you add html</p>';


//NODE : 
// const banner = document.querySelector('#page-banner');
// console.log('Node type is :', banner.nodeType);
// console.log('Node name is :', banner.nodeName);
// console.log('Node childe :', banner.hasChildNodes());

// const clonedBanner  = banner.cloneNode(false);
// console.log(clonedBanner);


//TRAVERSE THE DOCUMENT WITH NODES :
const list = document.querySelector("#book-list");

console.log("Parent is :", list.parentElement.parentElement);
console.log("Children is :", list.children);

//TRAVERSE TO SIBILINGS

console.log("Next sibiling:", list.nextSibling);
console.log("Next sibiling:", list.nextElementSibling);

console.log("Previous sibiling:", list.previousSibling);
console.log("Previous sibiling:", list.previousElementSibling);

list.previousElementSibling.querySelector('p').innerHTML += '<br/> Too Cool!';