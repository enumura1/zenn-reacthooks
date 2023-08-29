import '../css/Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

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
    <div className='mainContainer'>
      <h1>Homeページ</h1>
      <button onClick={clickedToHomeBtn}>Homeボタン</button>
      <button onClick={clickedToPage1Btn}>useStateページ</button>
      <button onClick={clickedToPage2Btn}>useRefページ</button>
      <button onClick={clickedToPage3Btn}>useContextページ</button>
      <button onClick={clickedToPage4Btn}>カスタムフックページ</button>
      <button onClick={clickedToPage5Btn}>useNavigateページ</button>
    </div>
  );
};

export default Home;