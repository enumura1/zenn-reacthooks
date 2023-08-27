import '../App.css';

import { useNavigate } from 'react-router-dom';

function Page5() {
    const navigate = useNavigate();
    const clickedToHomeBtn = () => {
        navigate('/');
    };

    return (
        <div>
            <h1>Page5</h1>
            <button onClick={clickedToHomeBtn}>Homeに戻る</button>
        </div>
    );
};

export default Page5;
