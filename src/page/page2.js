import { useNavigate } from 'react-router-dom';

// 外部ファイルのインポート
import '../page.css';

function Page2() {
    const navigate = useNavigate();
    const clickedToHomeBtn = () => {
        navigate('/');
    };

    return (
        <div>
            <h1>useRef</h1>
            <button onClick={clickedToHomeBtn}>Homeに戻る</button>
        </div>
    );
};

export default Page2;
