import React , { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [book, setBook] = useState('')
  // const [author, setAuthor] = useState('')

  // const createBook = () => {
  //   const myObjects = {
  //     book: book,
  //     author: author
  //   }
  // }

  useEffect(() => {
    localStorage.setItem('book', JSON.stringify(book));
  }, [book]);
  
  return (
    <div className="App">
     <h1>Local storage app</h1>
     <input type="text" placeholder='book' value={book} onChange={(e) => {setBook(e.target.value)}} /> <br />
     <button >Submit</button>
    </div>
  );
}

export default App;
