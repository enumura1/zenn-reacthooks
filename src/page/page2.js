import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// 外部ファイルのインポート
import '../css/page.css';

function Page2() {
    const navigate = useNavigate();
    const clickedToHomeBtn = () => {
        navigate('/');
    };

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`countの値: ${count}`);
    }, [count]);

    return (
        <div className='page1Contaienr'>
            <h1>useEffect Page</h1>
            <h2>検証ツールからログの確認ができます</h2>
            <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
            <button className='toHomeBtn' onClick={clickedToHomeBtn}>Homeに戻る</button>
        </div>
    );
};

export default Page2;
