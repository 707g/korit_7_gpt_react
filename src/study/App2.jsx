/*
    userState 상태관리
*/

import { useState } from "react";

function App2() {
    const [num, setNum] = useState(0);

    let number = 0;
    
    console.log(num);
    console.log(number);

    const handleIncreaseOnClick = () => {
        setNum(num + 1);
    }

    return <>
        <h1>{num}</h1>
        <button onClick={handleIncreaseOnClick}>1증가</button>
        <button>1감소</button>
    </>
}

export default App2;