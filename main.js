
let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');
// filter event
filter.addEventListener('keyup', filterItems);
// Form submit event
form.addEventListener('submit', addItem);
// add item
function addItem(e){
  e.preventDefault();
  // get input value
  let newItem = document.getElementById('item');
  // create new li element
  let li = document.createElement('li');
  // add class  
  li.className = 'list-group-item';
  // add text node with input value
  li.appendChild(document.createTextNode(newItem.value));
  // create delete button element
  let deleteBtn = document.createElement('button');
  // add classes to delete button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  // append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  // append button to li
  li.appendChild(deleteBtn);
  // append li to list
  itemList.appendChild(li);
  newItem.value = '';
}
let deleteBtn = document.getElementsByClassName('delete');
// delete event
itemList.addEventListener('click', removeItem);
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
// filter items
function filterItems(e){
  // convert text to lowercase
  let text = e.target.value.toLowerCase();
  // get lis
  let items = itemList.getElementsByTagName('li');
  // convert to an array
  Array.from(items).forEach(function(item){
    let itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}




