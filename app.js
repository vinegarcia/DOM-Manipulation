// let val;

// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;
// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links.classList;
// val = document.images;
// val = document.scripts;
// val = document.scripts[1];
// val = document.scripts[1].getAttribute('scr');


// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(script){

//     console.log(script.getAttribute('scr'));


// })





// //console.log (val);


// console.log(document.getElementById('task-title').className);

// // get thing from the element
// console.log(document.getElementById('task-title').id);




// const taskTitle = document.getElementById('task-title');

// //Change Styling

// taskTitle.style.background = 'red';
// taskTitle.style.color = 'pink';
// taskTitle.style.padding = '10px';
// //taskTitle.style.display = 'none';

// // change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Task';
// taskTitle.innerHTML = '<span style="color: gray">Task List</span>';

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'green';


// document.querySelector('li:last-child').style.color = 'orange';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(odd)').style.background = 'purple';
// document.querySelector('li:nth-child(even)').style.background = 'brown';

// // document.getElementByClassName

// const items = document.getElementsByClassName('collection-item');

// console.log(items);
// console.log(items[2]);
// items[2].style.color = 'black';
// items[2].textContent = 'SAMPLe';


// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);


//

// const sample = document.querySelector('h1');

// console.log(sample);

// document.getelementByTagName

// let lis = document.getElementsByTagName('li');

// console.log(lis);
// console.log(lis[2]);
// lis[3].style.color = 'red';
// lis[2].textContent = 'red';


// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index){
// console.log(li.className);
// li.textContent = `${index}: Yow`

// })

// document.querySelectorAll

// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(item, index){
//     item.textContent = `${index}: Helloooo`;
// })


// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li, index){
//     li.style.background = 'red';
// });
// liEven.forEach(function(li, index){
//     li.style.background = 'green';
// });


//
//DAY 4

// let val;

// const list = document.querySelector('ul.collection');
// const listItem =document.querySelector('li.collection-item:first-child');

// val = listItem;
// val = list;

// // Get child nodes
// val = list.childNodes;
// val = list.childNodes[1];
// val = list.childNodes[1].nodeName;
// val = list.childNodes[2].nodeType;


// // Get Children element nodes

// val = list.children;
// val = list.children[1];
// val = list.children[1].textContent = 'hello';

// // Children of Children
// list.children[3].children[0].id = 'test link';
// val = list.children[3].children[0].id = 'test-list';


// //first child
// val = list.firstChild;

// val = list.firstElementChild;

// // last Child
// val = list.lastElementChild;

// // Count child element
// val = list.childElementCount;

// // Get parent node

// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// // Get next sibling

// val = listItem.nextSibling;
// val = listItem.nextElementSibling;
// val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// //Get previous sibling

// val = listItem.previousSibling;
// val = listItem.previousElementSibling;

// //Create element


// const li = document.createElement('li');


// // add class

// li.className = 'collection-item';

// // add id

// li.id = 'new=item';

// // add attribute

// li.setAttribute('title', 'New Item');

// // create text node and append

// li.appendChild(document.createTextNode('Hello World'));


// // Create new link element

// const link = document.createElement('a');


// // add classes

// link.className = 'delete-item secondary-content';

// // Add icon html
// link.innerHTML = '<i class = "fa fa-trash"></i>';

// //Append link into li

// li.appendChild(link);

// //Append li as child ul

// document.querySelector('ul.collection').appendChild(li);



// console.log(li);


//REPLACE ELEMENT

// Create Element

// const newHeading = document.createElement('h2');

// //Add id

// newHeading.id = 'Task-Title';

// newHeading.appendChild(document.createTextNode('Task-Title'));


// //Get the old heading

// const oldHeading = document.getElementById('Task-Title');

// //Parent

// const cardAction = document.querySelector('.card-action');

// //Replace
// // cardAction.replaceChild(newHeading, oldHeading);


// // Remove elements

// const lis = document.querySelector('li');
// const list = document.querySelector('ul');

// //remove list item

// lis.remove();

// //remove child element
// list.removeChild(list.childNodes[3]);

// //Classes & attr
// const firstLi = document.querySelector('li:first-child');

// const link = firstLi.children[0];

// let val;
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');

// val = link;

// // Attribute
// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://google.com');
// link.setAttribute('title', 'google');
// val = link.hasAttribute('title');
// link.removeAttribute('title');
// val = link;

// console.log(val);

//add event listener

// document.querySelector('.clear-tasks').addEventListener('click', function(e){

//     console.log('Hello');
//     e.preventDefault();

// });

// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick (e) {

// let val;

// val = e;

// // Event target Element

// val = e.target;
// val = e.target.id;
// val = e.target.className;
// val = e.target.classList;


// //Event type

// val = e.type;
// //event time
// val = e.timeStamp;
// //Coord event  relative to the windows

// val = e.clientY;
// val = e.clientX;

// //Coords event relative to the element

// val = e.offsetY;
// val = e.offsetX;


//     e.preventDefault();

//     console.log(val);

// }

//

// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// //Click
// // clearBtn.addEventListener('click', runEvent);
// // clearBtn.addEventListener('dblclick', runEvent);
// // clearBtn.addEventListener('mousedown', runEvent);
// // clearBtn.addEventListener('mouseup', runEvent);
// // clearBtn.addEventListener('mouseenter', runEvent);
// card.addEventListener('mousemove', runEvent);


// function runEvent(e) {
//     e.preventDefault();
//     console.log(`EVENT TYPE: ${e.type}`);

//     heading.textContent = `MouseX: ${e.offsetX} Mouse: ${e.offsetX}`;
    
//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
    
    

// }


// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('h5');
// const select = document.querySelector('select');

// //clear input


// taskInput.value = '';

// form.addEventListener('submit', runEvent);

// // taskInput.addEventListener('input', runEvent);
// // taskInput.addEventListener('change', runEvent);
// // taskInput.addEventListener('keydown', runEvent);
// // taskInput.addEventListener('keyup', runEvent);
// taskInput.addEventListener('focus', runEvent);
// taskInput.addEventListener('cut', runEvent);
// taskInput.addEventListener('copy', runEvent);
// taskInput.addEventListener('paste', runEvent);


// function runEvent(e){

//     console.log(`EVENT TYPE: ${e.type}`);

//     console.log(e.target.value);

//     heading.innerHTML = e.target.value;

//     //Get input value

//     console.log(taskInput.value);

//     //e.preventDefault();



// }

//Event Bubbling

// document.querySelector('.card-title').addEventListener('click', function(){
//     console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//     console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//     console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//     console.log('col');
// });

//Event Deligation
// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

// document.body.addEventListener('click', deleteItem);

// function deleteItem(e) {
//     if(e.target.parentElement.classList.contains('delete-item')) {

//         console.log('delete item');
//         e.target.parentElement.parentElement.remove();
        
        

//     }
// }

//DAY5 DAY5 DAY5 DAY5 DAY5 DAY5 DAY5 DAY5 DAY5 DAY5 DAY5 DAY5 DAY5 DAY5 DAY5 DAY5 DAY5 DAY5 DAY5 DAY5 DAY5 DAY5 DAY5 DAY5//

 // Set local storage item

    // localStorage.setItem('name', 'John');
    // localStorage.setItem('age', '19');

 // set session storage item

    // sessionStorage.setItem('name', 'Josh');

// Remove from local storage

    // localStorage.removeItem('name');
    
//get from storage

// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');


// //
// localStorage.clear();

// console.log(name, age);


//


document.querySelector('form').addEventListener('submit', function(e){

    const task = document.getElementById('task').value;

    let tasks;

    if (localStorage.getItem('tasks') === null){
        tasks = [];
    }

    else {
        tasks = JSON.parse(localStorage.getItem('tasks')); 
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify (tasks));

    alert('Task Saved');
    
    e.preventDefault();

});

const tasks = JSON.parse(localStorage.getItem('tasks'));


tasks.forEach(function (task)
{
    console.log(task);
});













































































































































































































