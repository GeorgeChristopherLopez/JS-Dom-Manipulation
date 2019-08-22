const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');




// add item
const addItem = (e) => {
    e.preventDefault();
    // get input VALUE
    const newItem = document.getElementById('item').value;
    // create new li element
    const li = document.createElement('li');

    // add class
    li.className = 'list-group-item';

    // add text node with input value

    li.appendChild(document.createTextNode(newItem));
    // create delete button element
    const deleteBtn = document.createElement('button');

    // add classes to del button
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    
    //append textnode
    deleteBtn.appendChild(document.createTextNode('X'));

    //append button to li
    li.appendChild(deleteBtn);

    //append li to list
    itemList.appendChild(li);



}


// form submit event

form.addEventListener('submit', addItem);



// remove item

const removeItem = (e) => {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure????')) {
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// remove btn click event
itemList.addEventListener('click', removeItem);

//filter functino
const filterItems = (e) => {
    // convert text to lower
    const text = e.target.value.toLowerCase();
    const items = itemList.getElementsByTagName('li');
    // still html
    //console.log(items);
    Array.from(items).forEach(function (item) {
        const itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';

        } else {
            item.style.display = 'none';
        }
    })
}


// filter event
filter.addEventListener('keyup', filterItems);












// 
/**
 * ***********
 *  DOM CRASH COURSE PART 3 EVENTS
 */

/*
const buttonClick = (e) => {
   document.getElementById('header-title').textContent = 'changed';
    document.querySelector('#main').style.backgroundColor = '#ccc';
    //  console.log(e);
   // console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);
    const output = document.getElementById('output');
    output.innerHTML = `<h3>${e.target.id}</h3>`;

    console.log(e.type);
  
  //  console.log(e.clientX, e.clientY);
    // console.log(e.offsetX, e.offsetY);
    console.log(e.altKey);
    console.log(e.ctrlKey);
    console.log(e.shiftKey);

}

const button = document.getElementById('button').addEventListener('click', buttonClick);
  */


/*
 *
 * const runEvent = (e) => console.log(`EVENT TYPE: ${e.type}`);


const button = document.getElementById('button');
    button.addEventListener('click', runEvent);

button.addEventListener('dblclick', runEvent);
button.addEventListener('mousedown', runEvent);
button.addEventListener('mouseup', runEvent);

button.addEventListener('mouseover', runEvent);
button.addEventListener('mouseopit', runEvent);
*/

/*
const button = document.getElementById('button');
const box = document.getElementById('box');


const runEvent = (e) => {
    e.preventDefault();
    console.log(`EVENT TYPE: ${e.type}`);
    console.log(e.target.value);
    //console.log(e.target.value);
    //document.getElementById('output').innerHTML = `<h3>${e.target.value}</h3>`
 //  document.body.style.display = 'none';
    //document.body.style.background = `rgb(${e.offsetX},${e.offsetY},40)`
}

*/

/*box.addEventListener('mouseenter', runEvent);
box.addEventListener('mouseleave', runEvent);
box.addEventListener('mousemove', runEvent);*/
/*
const itemInput = document.querySelector('input[type="text"]');
const form = document.querySelector('form');
const select = document.querySelector('select');


form.addEventListener('submit', runEvent); 

//select.addEventListener('change', runEvent);
//itemInput.addEventListener('keydown', runEvent);
//itemInput.addEventListener('focus', runEvent);
//itemInput.addEventListener('blur', runEvent);
//itemInput.addEventListener('keyup', runEvent);
//itemInput.addEventListener('keypress', runEvent);


//itemInput.addEventListener('copy', runEvent);
//itemInput.addEventListener('cut', runEvent);
//itemInput.addEventListener('paste', runEvent);

itemInput.addEventListener('input', runEvent);

*/