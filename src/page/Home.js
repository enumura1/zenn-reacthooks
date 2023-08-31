import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

// material iconのインポート
import Brightness2Icon from '@mui/icons-material/Brightness2';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

// 外部ファイルのインポート
import '../css/Home.css';

function Home() {
  const navigate = useNavigate();

  const [switchChecked, setSwitchChecked] = useState(true);

  const toggleSwitch = () => {
    setSwitchChecked(!switchChecked);
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
    <div className={switchChecked ? "darkModeMain" : "lightModeMain"} >
      <div className='themeSwitch'>
        <FormControlLabel
          control={<Switch checked={switchChecked} onChange={toggleSwitch} />}
          label={switchChecked ? <Brightness2Icon /> : <WbSunnyIcon />} />
      </div>
      <div className='hookBtnContainer'>
        <h1>Home Page</h1>
        <button className={switchChecked ? "darkModeButton" : "lightModeButton"} onClick={clickedToPage1Btn}>useState Page</button>
        <button className={switchChecked ? "darkModeButton" : "lightModeButton"} onClick={clickedToPage2Btn}>useRef Page</button>
        <button className={switchChecked ? "darkModeButton" : "lightModeButton"} onClick={clickedToPage4Btn}>Custom Hook Page</button>
        <button className={switchChecked ? "darkModeButton" : "lightModeButton"} onClick={clickedToPage5Btn}>useNavigate Page</button>
        <button className={switchChecked ? "darkModeButton" : "lightModeButton"} onClick={clickedToPage3Btn}>useContext Page</button>
      </div>
    </div>
  );
};

export default Home;