import '../App.css';

import { useNavigate } from 'react-router-dom';

function Page3() {
    const navigate = useNavigate();
    const clickedToHomeBtn = () => {
        navigate('/');
    };

    return (
        <div>
            <h1>Page3</h1>
            <button onClick={clickedToHomeBtn}>Homeに戻る</button>
        </div>
    );
};

export default Page3;
