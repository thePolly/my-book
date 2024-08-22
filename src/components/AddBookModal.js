import React, { useState } from 'react'

const AddBookModal = ({addBook, closeModal}) => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [rating, setRating] = useState('');
    const [year, setYear] = useState('');
    const [note, setNote] = useState('');



    


    const handleSubmit = (e) => {
        e.preventDefault(); // dont allow the page to reload
        console.log("added book");
        addBook({title,author,rating,year,note});
        closeModal();

    }


    const handleBackgroundClick = (e) => {
        // Если клик был на фоне, а не на содержимом модального окна, то закрываем его
        if (e.target.className === 'modal') {
            closeModal();
        }
    };



  return (
    <div className="modal" onClick={handleBackgroundClick} >
    <div className="modal-content">

 {/* Кнопка закрытия */}
 <span className="close" onClick={closeModal}>&times;</span>

        <form onSubmit={handleSubmit}>

        <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Author:</label>
                        <input
                            type="text"
                            id="author"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rating">Rating:</label>
                        <input
                            type="number"
                            id="rating"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            required
                            min="1"
                            max="5"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="year">Year:</label>
                        <input
                            type="number"
                            id="year"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="note">Note:</label>
                        <textarea
                            id="note"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                        ></textarea>
                    </div>
        <button
            type='submit' >Submit</button>
   
   </form>
   </div>
    </div>
  )
}

export default AddBookModal


//rafce