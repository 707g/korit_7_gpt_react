import React, { useState } from 'react';

function Signup({userList, setUserList}) {

    const [signupInputValue, setSignupValue] = useState({
            username: "",
            password: "",
            name: "",
            email: "",
        });

    const handleSingupInputOnChange = (e) => {
        setSignupValue({
            ...signupInputValue,
            [e.target.name]: e.target.value,
        });
    };

    const handleSignupButtonOnClick = () => {
        setUserList([
            ...userList,
            signupInputValue,
        ]);

        alert("가입 완료")

        setSignupValue({
            username: "",
            password: "",
            name: "",
            email: "",
        });
    };

    return (
        <div>
            <h1>회원가입</h1>
            <input type="text" name='username' placeholder='username' onChange={handleSingupInputOnChange} value={signupInputValue.username} />
            <input type="password" name='password' placeholder='password' onChange={handleSingupInputOnChange} value={signupInputValue.password} />
            <input type="text" name='name' placeholder='name' onChange={handleSingupInputOnChange} value={signupInputValue.name} />
            <input type="text" name='email' placeholder='email' onChange={handleSingupInputOnChange} value={signupInputValue.email} />
            <div>
                <button onClick={handleSignupButtonOnClick}>가입하기</button>
            </div>
        </div>
    );
}

export default Signup;