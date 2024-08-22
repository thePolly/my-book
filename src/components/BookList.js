import React from "react";
import BookItem from "./BookItem";


function BookList ({books}) {
    
    
    if (!Array.isArray(books)) {
        return <p>No books available</p>; // Или отобразить что-то другое
    }
    

    return (
   
        
        <div>
            {

                books.map((book) => (
                    <BookItem key={book.id}  book = {book}></BookItem>
                ))
            }
        </div>
    )
}


export default BookList;