// let Book={
//     title:'',
//     author:'',
//     yearpublished:'',
//     readstatus:'',
//     getSummary:function(){
//         return "Title :"+this.title+"\tAuthor :"+this.author+"\tyear published :"+this.yearpublished+"\tRead status :"+this.readstatus;
//     },
//     toggleReadStatus:function(){
//             this.readstatus=!this.readstatus;
//     }
// }
let library=[];
function addBook(title1,author1,yearpublished1,readstatus1){
    let book1={
    title: title1,
    author: author1,
    yearpublished: yearpublished1,
    readstatus: readstatus1
}
library.push(book1);
}

// addBook("Oppenheimer","Nolan",2023,true);
// addBook("Spiderman","Raime",2003,true);
// addBook("Batman","Chris",2013,true);

console.log(library);
function removelastbook(){
    library.pop();
}
removelastbook();
//console.log(library);
function addBookToFront(title1,author1,year1,read_status1)
{
    let book1={
        title:title1,
        author:author1,
        year:year1,
        read_status:read_status1
    };
    library.unshift(book1);
}

function removeFirstBook()
{
    library.shift();
}
addBook("Oppenheimer","Nolan",'2023',true);
addBook("Spiderman","Raime",'2003',true);
addBook("Ironman","Kevin",'2013',true);
addBook("Superman","Chris",'2013',false);
addBook("Interstellar","Nolan",'2014',true);

function getalltitles()
{
    let alltit=[];
    alltit=library.map(gettitle);
    function gettitle(obj)
    {
        return obj.title;
    }   
    //console.log(alltit);
}
function getbookbyauthor(author){
    let autharray=[];
    autharray=library.filter(obj=>obj.author==author);
    return autharray;
    // function authfil(obj){
    //         if(obj.author==author)
    //         {
    //             return obj;
    //         }
           
    // }
    //return autharray;
}
//console.log(getbookbyauthor("Nolan"));


function getTotalBooksPublishedBefore(year)
{
    let numOfBooks=[];
    numOfBooks=library.filter(book=>book.yearpublished<year);
    return numOfBooks;
}
// let tBooksByYear=getTotalBooksPublishedBefore(2014);
// console.log(tBooksByYear);
function readbookbystatus(readstatus){
    let bookstatus=[];
    bookstatus=library.filter(obj=>obj.readstatus==readstatus);
    return bookstatus[0];
}
//console.log(readbookbystatus(false));
