import { createSlice } from '@reduxjs/toolkit';
import { Book } from '../types';

const initialState: { books: Book[] } = {
  books: [
    { id: 1, title: 'Clean Code', author: 'Robert C. Martin', isbn: '978-0132350884', publishedYear: 2008, available: true },
    { id: 2, title: 'The Pragmatic Programmer', author: 'Andrew Hunt', isbn: '978-0201616224', publishedYear: 1999, available: false },
    { id: 3, title: 'Refactoring', author: 'Martin Fowler', isbn: '978-0201485677', publishedYear: 1999, available: true },
    { id: 4, title: 'Design Patterns', author: 'Erich Gamma', isbn: '978-0201633610', publishedYear: 1994, available: false },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
  },
});

export const { } = booksSlice.actions;
export default booksSlice.reducer; 