
   function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
  .then(r  => r.json())
  .then((response) => {
   renderBooks(response);


})
   }
  

   
function renderBooks(json){
    json.forEach(response => {
        let element = document.createElement('li')
        link.innerHTML = response.name
        let main = document.querySelector('main')
        main.append(element)
        
    });
}