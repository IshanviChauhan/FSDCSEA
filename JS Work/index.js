//Basics of JavaScript

// console.log("Hello");
// const a=12;
// console.log("a = " + a)
// if(a>10){
//     let a=30;
//     console.log("Hi",a);
// }
// console.log("Hello",a);

// let a = '12';
// let b = 12;
// let sim = Symbol('122')
// let today = Date();
// console.log(typeof today);
// console.log(today);

// let a = 12;
// let b = '12'
// if(a==b){
//     console.log("a==b is true");
// }
// else{
//     console.log("a==b is false");
// }

// if(a===b){
//     console.log("a===b is true");
// }
// else{
//     console.log("a===b is false");
// }

// function hi(str = "Hello"){  // function will pass this default parameter if no argument is passed when function is called.
//     console.log("Hi function calling : " + str);
// }
// hi("Full Stack");

// let d = function hi(str = "Hello"){
//     console.log("Hi function calling : " + str);
// }
// d("Full Stack");

// function sum(a,b,c=50){
//     return a+b+c;
// }
// let total = sum(3,4,100);
// console.log("Total = " + total);

// function cCompiler(){
//     return 'C compiler selected';
// }
// function javaCompiler(){
//     return 'Java compiler selected';
// }
// function selectLanguage(clbk){
//     console.log("Hi, " + clbk);
//     // console.log("Hi, " + clbk());
// }
// selectLanguage(javaCompiler());
// selectLanguage(javaCompiler);

// function selectLanguage(lang){
//     let choice;
//     if(lang == 'C'){
//         function cCompiler(){
//             return 'C compiler selected';
//         }
//         choice = cCompiler();
//     }
//     else if(lang == 'Java'){
//         function javaCompiler(){
//             return 'Java compiler selected';
//         }
//         choice = javaCompiler();
//     }
//     return choice;
// }
// console.log(selectLanguage('Java'));

// console.log("Hello, JS");
// console.log(document)
// console.dir(document);
// const div = document.getElementsByClassName("parent");
// console.dir(div);
// console.log(div[0]);
// div[0].innerText = "Hello, Full Stack";
// div[0].innerHTML = "<h1 style=color:purple>Hello, Full Stack</h1>";
// const h1 = document.createElement("h1");
// h1.innerText="Element is created by DOM function"
// h1.style.backgroundColor = "lightcyan"
// div[0].appendChild(h1);
// console.log(h1);

// const img = document.createElement('img');
// img.src = 'Cat.jpeg';
// img.setAttribute("height","200px");
// console.log(img);
// div[0].appendChild(img);

// div[0].removeChild(img);

// const button = document.getElementById("btn");
// console.log(button);
// const display = document.getElementById("disp");
// console.log(display);
// function getData(){
//     console.log("Calling getData function");
//     display.innerHTML = "<h3 style=color:lightcoral>Welcome to CSE Department</h3>";
// }

//Arrow function
// getData=()=>{
//     console.log("Calling getData function");
//     display.innerHTML = "<h3 style=color:lightcoral>Welcome to CSE Department</h3>";
// }

// button.addEventListener("click",getData);

// const promise1 = new Promise(
//     (resolve,reject) => {
//         let A = 16;
//         if(A>10){
//             resolve("Value of A is resolved");
//         }
//         else{
//             reject("A is rejected");
//         }
//     }
// );

// promise1.then((msg)=>{console.log(msg)})
// .catch(error=>{console.log(error)})
// .finally(msg=>{console.log("All resources have been closed")});

// const promise2 = new Promise(
//     (resolve,reject) => {
//         const randomNumber = parseInt(Math.random() * 1000);
//         if(randomNumber>100 && randomNumber<200){
//             resolve("Value of Random Number is resolved = "+randomNumber);
//         }
//         else{
//             reject("Random Number is rejected = "+randomNumber);
//         }
//     }
// );
// promise2.then((msg)=>{console.log(msg)})
// .catch(error=>{console.log(error)})
// .finally(msg=>{console.log("All resources have been closed")});

// const promise3 = new Promise(
//     (resolve,reject)=>{
//         resolve({name:"Ishanvi", branch:"CSE"});
//     }
// );
// promise3.then((data)=>{console.log(data,data.name,data.branch)})
// .catch(error=>{console.log(error)});

//Fetch API
// const response = fetch("https://dummyjson.com/products");
// response.then(data=>{
//     console.log(data);
//     data.json().then(res=>{
//         console.log(res.products[0].id + " " + res.products[0].title)
//         const data = res.products[0].id + " " + res.products[0].title;
//         div[0].innerHTML = data
//     })
// })