import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 外部ファイルのインポート
import '../page.css';

function Page1() {
    const navigate = useNavigate();
    const clickedToHomeBtn = () => {
        navigate('/');
    };

    const [countedNumber, setCount] = useState(0);

    return (
        <div className='page1Contaienr'>
            <h1>useState</h1>
            <div>
                <p>Count: {countedNumber}</p>
                <button onClick={() => setCount(countedNumber + 1)}>Increment</button>
            </div>
            <button className='toHomeBtn' onClick={clickedToHomeBtn}>Homeに戻る</button>
        </div>
    );
};

export default Page1;
