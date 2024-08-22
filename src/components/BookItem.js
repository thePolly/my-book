import React from 'react';

function BookItem({ book }) {
    return (
        <div className="book-item">
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Rating: {book.rating}</p>
            <p>Year Read: {book.year}</p>
            <p>Note: {book.note}</p>
        </div>
    );
}

export default BookItem;