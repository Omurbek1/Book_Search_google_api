import React, { useEffect, useState } from "react";
import { instance } from "../config/axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../store/bookSlice";
import "../style/style.css";
import Header from "../components/Header/Header";
import Select from "../components/CategorySelect/Select";
import Sort from "../components/Sort/Sort";
import LoadMore from "../components/LoadMore/LoadMore";
import BookCard from "../components/BookCard/Bookcard";
interface Book {
    id: string;
    title: string;
    authors: string[];
    description: string;
    image: string;
    link: string;
}

function Main() {
    const [searchQuery, setSearchQuery] = useState("");
    const [startIndex, setStartIndex] = useState(0);
    const [category, setCategory] = useState("all");
    const [sort, setSort] = useState("relevance");
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const dispatch = useDispatch();
    const books = useSelector((state: any) => state.books.books); // Используйте RootState здесь
    const status = useSelector((state: any) => state.books.status); // Используйте RootState здесь
    console.log(books);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStartIndex(0);
        dispatch(fetchBooks({ searchQuery, category, sort, startIndex: 0 }));
    };
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress as any);
        return () => {
            window.removeEventListener("keydown", handleKeyPress as any);
        };
    }, [handleSubmit]);
    const handleLoadMore = () => {
        setStartIndex(startIndex + 30); // Increment startIndex for next page
        dispatch(fetchBooks({ searchQuery, category, sort, startIndex })); // Pass updated startIndex to fetchBooks
    };

    useEffect(() => {
        if (searchQuery && searchQuery.trim() !== "") {
            dispatch(fetchBooks({ searchQuery, category, sort, startIndex })); // Pass startIndex to fetchBooks
        }
    }, [searchQuery, category, sort, startIndex, dispatch]);
    console.log(books);
    return (
        <div>
            <Header
                handleSubmit={handleSubmit}
                value={searchQuery}
                onChange={(e: any) => setSearchQuery(e.target.value)}
                placeholder='Enter search query'
            >
                <Select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <Sort value={sort} onChange={(e) => setSort(e.target.value)} />
            </Header>
            {status !== "loading" && (
                <p className='found-books'>Found {books.length} books</p>
            )}
            {status === "loading" && (
                <p className='loading-indicator'>Loading...</p>
            )}
            <div className='book-list'>
                {status === "succeeded" &&
                    books.map((book: any) => (
                        <BookCard
                            key={book.id}
                            book={book}
                            isLoadingMore={isLoadingMore}
                        />
                    ))}
            </div>
            {status === "succeeded" && books.length > 0 && (
                <LoadMore
                    handleLoadMore={handleLoadMore}
                    disabled={isLoadingMore}
                />
            )}
        </div>
    );
}

export default Main;
