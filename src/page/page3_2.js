import { useContext } from 'react';

// 外部ファイルのインポート
import './page3_1';
import { HogeContext } from './page3_1';

function ShowData() {
    const hogeData = useContext(HogeContext);

    return (
        <div className="App">
            <h1>{hogeData.fruits}</h1>
            <h1>{hogeData.drink}</h1>
        </div>
    );
}

export default ShowData;