import React from 'react';
import './style.css'
interface BookCardProps {
    book: any;
    isLoadingMore: boolean;
}
function BookCard({ book, isLoadingMore }: BookCardProps) {
    return (
        <div key={book.id} className='book-card'>
            <img
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt='Book cover'
                className={`book-cover ${
                    isLoadingMore ? "skeleton" : ""
                }`}
            />
            <div
                className={`book-info ${
                    isLoadingMore ? "skeleton" : ""
                }`}
            >
              
                <p className='category'>
                    
                    {book.volumeInfo.categories?.join(", ") || "Unknown"}
                </p>
                <h2 className='title'>{book.volumeInfo.title?.slice(0, 50)}...</h2>
                <p className='author'>
                    
                    {book.volumeInfo.authors?.join(", ") || "Unknown"}
                </p>
            </div>
        </div>
    );
}

export default BookCard;
