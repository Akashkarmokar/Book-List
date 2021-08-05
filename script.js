//Select Element
const inputForm = document.querySelector('.book-input-form');
const allBooksTable_body = document.querySelector('#all-table-body');



// Functions
let validForm = function(formObject){
    let ok = false;
    let title = formObject.querySelector('#title');
    let author = formObject.querySelector('#author');
    let category = formObject.querySelector('#category');

    // console.log(title.value);
    // console.log(author.value);
    // console.log(category.value);
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
};

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





