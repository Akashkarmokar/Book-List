//Select Element
const inputForm = document.querySelector('.book-input-form');
const allBooksTable_body = document.querySelector('#all-table-body');
const favBooksTable_body = document.querySelector('#fav-table-body'); 


// Functions
let validForm = function(formObject){
    let ok = false;
    let title = formObject.querySelector('#title');
    let author = formObject.querySelector('#author');
    let category = formObject.querySelector('#category');

    if(title.value && author.value && category.value){
        ok = true;
    }
    return ok;
};


let addItem = function(singleRow){
    let tableBody = document.querySelector('#all-table-body');
    tableBody.appendChild(singleRow);
    setTimeout(() => {
        window.alert("Ok bahi thik ase. Ami sob add kore dicci");
    }, 1);
    bindDeleteBtn(singleRow,deleteItem);
    bindFavouriteBtn(singleRow,addInFavourite);
};


let deleteItem = function(){
    let item = this.parentNode.parentNode;
    let tableBody = item.parentNode;
    tableBody.removeChild(item);

};


let addInFavourite = function(){
    let orginalItem = this.parentNode.parentNode;
    let item = orginalItem.cloneNode(true);
    let tdWithButtons = item.querySelector('.options');
    item.removeChild(tdWithButtons); // item without buttons

    // creating item with undo button 
    let td = document.createElement('td');
    td.className='options';

    let undoButton = document.createElement('button');
    undoButton.setAttribute('id','undoBtn');
    undoButton.textContent = 'Undo';
    td.appendChild(undoButton);

    item.appendChild(td);


    favBooksTable_body.appendChild(item);
    bindUndoButton(item,deleteItem);  
};

let bindDeleteBtn = function(singleRow,deleteButtonClick){
    let button = singleRow.querySelector('#deleteBtn');
    button.onclick = deleteButtonClick;
}

let bindFavouriteBtn = function(singleRow,favouriteButtonClick){
    let button = singleRow.querySelector('#favBtn');
    button.onclick = favouriteButtonClick;
}

let bindUndoButton = function(item,undoButtonClick){
    let button = item.querySelector('#undoBtn');
    button.onclick = undoButtonClick;
}


let creteTableItem = function(formObject){
    // let title = formObject.querySelector('#title');
    // let author = formObject.querySelector('#author');
    // let category = formObject.querySelector('#category');

    let tr = document.createElement('tr');
    
    for(let i=0;i<formObject.children.length-1;i++){
        let td = document.createElement('td');
        td.textContent = formObject.children[i].value;
        tr.appendChild(td);
    }
    let td = document.createElement('td');
    td.className = 'options';

    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('id','deleteBtn');
    deleteButton.textContent = 'Delete';
    
    let favButton = document.createElement('button');
    favButton.setAttribute('id','favBtn');
    favButton.textContent='Favourite';

    td.appendChild(deleteButton);
    td.appendChild(favButton);

    tr.appendChild(td);
    addItem(tr);

};

let clearAllinputFill = function(formObject){
    for(let i=0;i<formObject.children.length-1;i++){
        formObject.children[i].value = "";
    }
};

let addBook = function(event){
    event.preventDefault();
    let formObject = event.target;
    if(validForm(event.target)==true){
        creteTableItem(event.target);
        // If we use just window alert it pasuse the script untill any response with alert bar
        // so we call this alert with settimeout asynchronous function and I do it inside addItem function
        // window.alert("Ok bahi thik ase. Ami sob add kore dicci");
        clearAllinputFill(event.target);
    }else{
        window.alert("OOPS! Bhai sob thik thak dewa hoy nai!");
    }

};

inputForm.addEventListener('submit',addBook);





