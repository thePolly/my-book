import React, { useState, useEffect } from 'react';
import BookItem from './components/BookItem';
import AddBookButton from './components/AddBookButton';
import BookList from './components/BookList';
import { v4 as uuidv4 } from 'uuid';
import './App.css'; // Подключаем файл со стилями


function App() {


   // Инициализация состояния из localStorage, если данные существуют
   const storedBooks = localStorage.getItem('books');

   console.log("Strored")
  console.log(storedBooks)

   const initialBooks = storedBooks ? JSON.parse(storedBooks) : [];

   console.log("init")
console.log(initialBooks)


    const [books, setBooks] = useState(initialBooks);


    console.log("books")
    console.log(books)


    const addBook = (newBook) => {

      if (!Array.isArray(books)) {
        console.error('books is not an array:', books);
        return;
    } 
      const updatedBooks = [...books, {...newBook, id : uuidv4() }]

      setBooks(updatedBooks);



        // Сохраняем обновленный список книг в localStorage
        localStorage.setItem('books', JSON.stringify(updatedBooks));

    }

    return (
        <div className="app-container">
            <h1>My Books</h1>
           <AddBookButton addBook = {addBook} />
            <BookList className="books-list" books={books} />

        </div>
    );
}

export default App;