import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

// 外部ファイルのインポート
import '../css/page.css';

function Page4() {
    const navigate = useNavigate();
    const clickedToHomeBtn = () => {
        navigate('/');
    };

    // 初期値として0を保持
    const countRef = useRef(0);

    const incrementCount = () => {
        countRef.current += 1;
        console.log('Count:', countRef.current);
    };

    return (
        <div className='page1Contaienr'>
            <h1>Page4</h1>
            <div>
                <p>Count: {countRef.current}</p>
                <button onClick={incrementCount}>1ずつカウントアップ</button>
            </div>
            <button className='toHomeBtn' onClick={clickedToHomeBtn}>Homeに戻る</button>
        </div>
    );
};

export default Page4;
