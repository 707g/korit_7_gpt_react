import React, { useEffect, useState } from 'react';

function App10(props) {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const unmount = () => {
        console.log("장착해제됨");
    }

    const mount = () => {
        console.log("장착됨2");
        return unmount;
    }

    useEffect(mount, []);

    const handleOnClick = () => {
        const r = num1 + 10;
        setNum1(r);
        setNum2(r + 100);
    }

    return (
        <div>
            <h1>Num1: {num1}</h1>        
            <h1>Num2: {num2}</h1>

            <button onClick={handleOnClick}>클릭</button>    
        </div>
    );
}

export default App10;