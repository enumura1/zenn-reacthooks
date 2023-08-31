import React, { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

// 外部ファイルのインポート
import '../css/page.css';
import ShowData from './page3_2';

// 共有するデータ
const hogeData = {
    fruits: 'grape',
    drink: 'water'
}

// Contextの作成
export const HogeContext = createContext(hogeData);

function Page3() {
    const navigate = useNavigate();
    const clickedToHomeBtn = () => {
        navigate('/');
    };

    return (
        <div className='page1Contaienr'>
            <h1>useContext Page</h1>
            <HogeContext.Provider value={hogeData}>
                <ShowData />
            </HogeContext.Provider>
            <button className='toHomeBtn' onClick={clickedToHomeBtn}>Homeに戻る</button>
        </div>
    );
};

export default Page3;
