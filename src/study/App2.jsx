/*
    userState 상태관리
*/

import { useState } from "react";

function App2() {
    // const numState = useState(0);
    // const num = useState[0];
    // const setNum = useState[1];
    const [num, setNum] = useState(0);

    const handleIncreaseOnClick = () => {
        if(num < 9){
            setNum(num + 1);
        }
    }

    const handleDecreaseOnClick = () => {
        if(num > 0){
            setNum(num - 1);
        }
    }

    return <>
        <h1>{num}</h1>
        <button onClick={handleIncreaseOnClick}>1증가</button>
        <button onClick={handleDecreaseOnClick}>1감소</button>
    </>
}

export default App2;