import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

// 外部ファイルのインポート
import '../css/Home.css';

function Home() {
  const navigate = useNavigate();

  const [switchChecked, setSwitchChecked] = useState(true);

  const toggleSwitch = () => {
    setSwitchChecked(!switchChecked);
  };

  const clickedToHomeBtn = () => {
    navigate('/');
  };

  const clickedToPage1Btn = () => {
    navigate('page1');
  };

  const clickedToPage2Btn = () => {
    navigate('page2');
  };

  const clickedToPage3Btn = () => {
    navigate('page3');
  };

  const clickedToPage4Btn = () => {
    navigate('page4');
  };

  const clickedToPage5Btn = () => {
    navigate('page5');
  };

  return (
    <>
      <div className='themeSwitch'>
        <FormControlLabel
          control={<Switch checked={switchChecked} onChange={toggleSwitch} />}
          label={switchChecked ? 'Checked Label' : 'Unchecked Label'} />
      </div>
      <div className='mainContainer'>
        <h1>Homeページ</h1>
        <button onClick={clickedToHomeBtn}>Homeボタン</button>
        <button onClick={clickedToPage1Btn}>useStateページ</button>
        <button onClick={clickedToPage2Btn}>useRefページ</button>
        <button onClick={clickedToPage3Btn}>useContextページ</button>
        <button onClick={clickedToPage4Btn}>カスタムフックページ</button>
        <button onClick={clickedToPage5Btn}>useNavigateページ</button>
      </div>
    </>
  );
};

export default Home;