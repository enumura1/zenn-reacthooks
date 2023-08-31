import { useNavigate } from 'react-router-dom';

// 外部ファイルのインポート
import '../css/page.css';
import useCounter from './page5_2';

function Page5() {
    const navigate = useNavigate();
    const clickedToHomeBtn = () => {
        navigate('/');
    };

    const { count, increment, decrement } = useCounter(0);

    return (
        <div className='page1Contaienr'>
            <h1>Custom Hook Page</h1>
            <div>
                <h1>カウンター</h1>
                <p>現在の数値: {count}</p>
                <button onClick={increment}>増加</button>
                <button onClick={decrement}>減少</button>
            </div>
            <button className='toHomeBtn' onClick={clickedToHomeBtn}>Homeに戻る</button>
        </div>
    );
};

export default Page5;
