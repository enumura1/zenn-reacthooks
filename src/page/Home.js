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

  const clickedToPageBtn = (pageName) => {
    navigate(pageName);
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
        <button className={switchChecked ? "darkModeButton" : "lightModeButton"} onClick={() => clickedToPageBtn('page1')}>useState Page</button>
        <button className={switchChecked ? "darkModeButton" : "lightModeButton"} onClick={() => clickedToPageBtn('page2')}>useEffect Page</button>
        <button className={switchChecked ? "darkModeButton" : "lightModeButton"} onClick={() => clickedToPageBtn('page3')}>useContext Page</button>
        <button className={switchChecked ? "darkModeButton" : "lightModeButton"} onClick={() => clickedToPageBtn('page4')}>use Page</button>
        <button className={switchChecked ? "darkModeButton" : "lightModeButton"} onClick={() => clickedToPageBtn('page5')}>Custom Hook Page</button>
      </div>
    </div>
  );
};

export default Home;