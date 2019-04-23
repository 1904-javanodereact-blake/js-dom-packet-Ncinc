// Use the provided index.html
// -----------------------------------------------------------------------------------

// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.

function getUSA()
{
    let a = document.getElementsByTagName('span');
    let words = "";
    for(let i =0; i <= a.length; i++){
if ( a[i].innerText === 'USA'){
     
        return a[i].innerText;
     } 

 }

}



// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.

function getPeopleInSales()
{
    let a = document.getElementsByClassName('empName');
    let word = "";
    for(let i =0; i < a.length; i++){
if ( a[i].innerText === 'sales'){

}
else{

}
    console.log( a[i].innerText);

    }

 }
//  <td class="empName">John</td>
//  <td>Sales</td>
// </tr>
// <tr>
//  <td class="empName">Amy</td>
//  <td>Finance</td>
// </tr>
// <tr>
//  <td class="empName">Austin</td>
//  <td>Sales</td>
// </tr>
// <tr>
//  <td class="empName">Katie</td>



// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>

function getAnchfforChildren()
{
    let a = document.getElementsByTagName('span');
    for(let i = 0; i< a.length; i++){
        if (a[i].parentElement.localName === 'a'){
            console.log(a[i].innerText);
        }
    }

}

// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.

function getHobbies(){
    let a = document.getElementsByName('skills');
    //let a = document.getElementsByTagName('option');
    for(let i = 0; i< a[0].childElementCount; i++){
        if(a[0].children[i].selected){
        console.log(a[0].children[i].innerText);
        return a[0].children[i].innerText;
        }
    }
}

// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute. 

function getCustomAttribute(){
let a = document.querySelectorAll("[data-customAttr]");
console.log(a);
for(let i = 0; i< a.length; i++){
    console.log(a[i].innerText);
    }
}


// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>
// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element
let a = document.getElementById('num1');
let b = document.getElementById('num2');
let c = document.getElementById('sum')
let sum;


a.addEventListener("change", unobtrusive);
b.addEventListener("change", unobtrusive);
function unobtrusive(){
    sum = +a.value + +b.value;
    if (isNaN(sum)){
        c.innerText = 'Cannot add';
    } else {
        c.innerText = sum;
    }
console.log(c);   
}


// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.
let d = document.getElementsByName('skills')

d[0].addEventListener('change', alertskill);
function alertskill(){
    console.log(`Are you sure ${getHobbies()} is one of your skills?`)
    alert(`Are you sure ${getHobbies()} is one of your skills?`);
}


// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor

let e = 'peru';
let f = document.getElementsByName('favoriteColor');
let g = '';
let h;

for(let i=0; i< f.length; i++){
    f[i].addEventListener('change', () => {
        alertcolor(f[i].value);
        changeBodyBg(f[i].value)
    })
}
function alertcolor(g){
   alert(`So you like ${g} more than ${e} now?`);
   e =g;
}

function changeBodyBg(color){
    document.body.style.background = color;
}




// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.

let k = document.getElementsByClassName('empName');
//k.addEventListener("change", unobtrusive);

for(let i =0; i < k.length; i++){
    k[i].addEventListener("mouseover",() => {
        if(k[i].style.opacity === '1')
        {
            k[i].style.opacity ==='0';
        }
        else
        {
            k[i].style.opacity ==='1';
        }
    });
}

// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.


// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).
