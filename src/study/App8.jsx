import React, { useState } from 'react';
import Register from './components/book/Register/Register';
import Search from './components/book/Search/Search';
import "./styles/app8.css";

function App8(props) {
    const [bookList, setBookList] = useState([]);

    return (
        <div className='container'>
            <Register bookList={bookList} setBookList={setBookList}/>
            <Search bookList={bookList}/>
        </div>
    );
}

export default App8;