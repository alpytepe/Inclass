

// ADD NEW ITEM TO END OF LIST

var newLi = document.createElement("li");
var cream = document.getElementsByTagName("ul")[0];
cream.appendChild(newLi);
newLi.innerHTML = "Cream";

// ADD NEW ITEM START OF LIST

var newLi = document.createElement("li");
var Kale = document.getElementsByTagName("ul")[0];
var figs = document.getElementById("one");
newLi.textContent = 'Kale';
Kale.insertBefore(newLi, figs);


// ADD A CLASS OF COOL TO ALL LIST ITEMS
var list = document.getElementsByTagName('li');

for(var x = 0; x < list.length; x++) {
    list[x].setAttribute('class', 'cool');
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var header = document.getElementsByTagName('h2')[0];
itemNumber = list.length;

header.innerHTML += '<span>' + itemNumber + '</span>';