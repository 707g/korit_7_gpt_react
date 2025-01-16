import React, { useState } from 'react';
import "./style.css"

function Register({bookList, setBookList}) {

    const [registerInputValue, setRegisterInputValule] = useState({
            bookName: "",
            author: "",
            publisher: "",
        });
    
        const handleRegisterInputOnChange = (e) => {
            setRegisterInputValule({
                ...registerInputValue,
                [e.target.name]: e.target.value
            });
        };
    
        const handleRegisterButtonOnClick = () => {
            setBookList([
                ...bookList,
                registerInputValue,
            ]);
    
            alert("등록 완료");
    
            setRegisterInputValule({
                bookName: "",
                author: "",
                publisher: "",
            });
        };

    return (
        <div>
            <h1>도서정보 등록</h1>
            <div className='register-input'>
                <input type="text" placeholder='도서명' name='bookName' value={registerInputValue.bookName} onChange={handleRegisterInputOnChange} />
                <input type="text" placeholder='저자명' name='author' value={registerInputValue.author} onChange={handleRegisterInputOnChange} />
                <input type="text" placeholder='출판사명' name='publisher' value={registerInputValue.publisher} onChange={handleRegisterInputOnChange} />
                <button onClick={handleRegisterButtonOnClick}>등록</button>
            </div>
        </div>
    );
}

export default Register;