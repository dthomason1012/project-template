import { axiosInstance } from '@/utils/axiosInstance';
import { useCallback, useEffect, useState } from 'react';

export default function BooksHome() {
  const [books, setBooks] = useState<any>();
  const fetchBooks = useCallback(() => {
    axiosInstance.get('/books').then((res) => setBooks(res.data.docs));
  }, []);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <ul>
      {books?.map((book: any) => (
        <li key={book._id}>{book.name}</li>
      ))}
    </ul>
  );
}
