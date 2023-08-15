import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = 'AIzaSyCIxIIcpTwWrV5HmCj_q4AWZRAqD7y6CFI';

export const fetchBooks:any = createAsyncThunk(
    'books/fetchBooks',
    async (params: { searchQuery: string; category: string; sort: string; startIndex: number }) => {
      const { searchQuery, category, sort, startIndex } = params;
      const categoryParam = category === 'all' ? '' : `subject:${category}`;
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=30&startIndex=${startIndex}&printType=books&orderBy=${sort}&${categoryParam}`
      );
      return response.data.items || [];
    }
  );

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    status: 'idle' as 'idle' | 'loading' | 'succeeded',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      });
  },
});

export default booksSlice.reducer;
