import { useContext } from 'react';
import BooksContext from '../context/books';
import useBookContext from '../hooks/use-hooks-context';
import BookShow from './BookShow';

function BookList() {
  const{books}= useBookContext()
  const renderedBooks = books.map((book) => {
    return (
      <BookShow  key={book.id} book={book} />
    );
  });

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
