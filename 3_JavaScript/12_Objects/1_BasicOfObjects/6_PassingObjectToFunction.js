const book={
    title:"RS_AGGARWAL",
    author:"Rssssss",
    pages:250
}
function getBookDetails(obj){
    return`${obj.title} ${obj.pages}`
}
console.log(getBookDetails(book));