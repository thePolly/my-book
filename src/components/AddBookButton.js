import React, { useState } from "react";
import AddBookModal from "./AddBookModal";


function AddBookButton({addBook}) {
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }


    console.log(addBook)
    
    return (

      

        <div>
            <button onClick={openModal}>
                +
            </button>
            {
            
       
            isModalOpen && <AddBookModal addBook = {addBook} closeModal = {closeModal}/> }
        </div>
    )
}


export default AddBookButton;