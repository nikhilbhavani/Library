const myLibrary=[];

function Book(title,author,pages,read) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

function addBookToLibrary(){
    let title=document.querySelector('#book-title');
    let author=document.querySelector('#author');
    let pages=document.querySelector('#page-number');
    let read=document.querySelector('#read');


    const newBook=new Book(title.value,author.value,pages.value,read.value);

    myLibrary.push(newBook);
    renderBook();
}

const form = document.querySelector('.form-book');

document.querySelector('.add-book').addEventListener('click',()=>{
    form.style.display='flex';
});

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    addBookToLibrary();
});

function renderBook(){
    let tableBody=document.querySelector('.tablebody');

    tableBody.innerHTML='';
    for(let i =0;i<myLibrary.length;i++){
        let newrow=document.createElement('tr');
        let book=myLibrary[i];

        newrow.innerHTML=
        `
        <td style="text-align-left;">
            ${book.title}
        </td>
        <td style="text-align-left;">
            ${book.author}
        </td>
        <td style="text-align-left;">
        ${book.pages}
        </td>
        <td onclick="toggleRead(${i})">
            <button type="button">
                ${book.read ? "read" : "not read"}
            </button>
        </td>
        <td>
            <button type="button" onclick="deleteBook(${i})">Delete</button>
            </td>
        `;

        tableBody.appendChild(newrow);
    }
}

function deleteBook(index){
    myLibrary.pop(index,1);
    renderBook();
}

Book.prototype.isRead=function(){
    this.read=!this.read;
}

function toggleRead(i){
    myLibrary[i].isRead();
    renderBook();
}