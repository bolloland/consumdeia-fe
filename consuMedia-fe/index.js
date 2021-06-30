const moviesList = document.getElementById("movies-list")
const booksList = document.getElementById("books-list")
const addBookBttn = document.getElementById("add-book-bttn")
const submitBookBlock = document.getElementById("book-block")


// let toggleBookForm = false

// addBookBttn.addEventListener("click", () => {
//     toggleBookForm = !toggleBookForm
//     if (toggleBookForm === true) {
//         submitBookBlock.style.display = "block"
//     } else {
//         submitBookBlock.style.display = "none"
//     }
// })


const getBooks = () => {
    fetch("http://localhost:3000/books")
    .then(resp => resp.json())
    .then(data => {
        renderBooks(data)
    })
}

const renderBooks = (data) => {
    data.map(book => booksList.innerHTML += 
        `<li><em>${book.title}</em> by ${book.author}</li>`)
    }
    
    
    const submitBook = (event) => {
        event.preventDefault()
        const bookAuthor = document.getElementById("book-author")
        const bookTitle = document.getElementById("book-title")
        const bookRating = document.getElementById("book-rating")
        const bookreview = document.getElementById("book-review")
    
    let book = {
        title: bookTitle.value,
        author: bookAuthor.value,
        rating: bookRating.value,
        review: bookRating.value
    }
    
    
    fetch("http://localhost:3000/books", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        
        body: JSON.stringify(book) 
    })       
}
const submitBookButton = document.getElementById("submit-book")
submitBookButton.addEventListener("submit", submitBook)


const getMovies = () => {
    fetch("http://localhost:3000/movies")
    .then(resp => resp.json())
    .then(data => {
        renderMovies(data)
    })
}

const renderMovies = (data) => {
    // debugger
    data.map(movie => moviesList.innerHTML += 
        `<li><em>${movie.title}</em> - Rating: ${movie.rating}</li>`)
}


getBooks()
getMovies()