import React, { useState } from 'react';

function App5(props) {
    /*
        회원 정보를 입력받아 userList에 user객체들을 가입하기 버튼을 누를 때마다 저장한다.
        로그인 정보를 입력받아 userList에 해당 username이 있는지 확인하고
        없으면 '사용자 정보를 다시 확인하세요.' 메세지를 출력
        있으면 비밀번호가 일치하는지 검사
        비밀번호가 일치하지 않으면 '사용자 정보를 다시 확인하세요.' 메세지 출력(alert)
        일치하면 이름(이메일)님 환영합니다. 출력(alert)
    */

    const [userList, setUserList] = useState([]);

    const [signupInputValue, setSignupValue] = useState({
        username: "",
        password: "",
        name: "",
        email: "",
    });

    const [signinInputValue, setSigninValue] = useState({
        username: "",
        password: "",
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

    const handleSinginInputOnChange = (e) => {
        setSigninValue({
            ...signinInputValue,
            [e.target.name]: e.target.value,
        });
    };

    const handleSigninButtonOnClick = () => {
        const foundUser = userList.find(user => user.username === signinInputValue.username)
        if(!foundUser) {
            alert("사용자 정보를 다시 확인하세요.")
            return;
        }

        if(foundUser.password !== signinInputValue.password) {
            alert("사용자 정보를 다시 확인하세요.")
            return;
        } 
        alert(`${foundUser.username}(${foundUser.email})님 환영합니다.`)
        
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
            <h1>로그인</h1>
            <input type="text" name='username' placeholder='username' onChange={handleSinginInputOnChange} value={signinInputValue.username}  />
            <input type="password" name='password' placeholder='password' onChange={handleSinginInputOnChange} value={signinInputValue.password}  />
            <div>
                <button onClick={handleSigninButtonOnClick}>로그인</button>
            </div>
        </div>
    );
}

export default App5;