import '../App.css';
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
    <>
      <h1>ReactHooksハンズオンページ</h1>
      <button onClick={clickedToHomeBtn}>Homeボタン</button>
      <button onClick={clickedToPage1Btn}>useStateページ</button>
      <button onClick={clickedToPage2Btn}>useRefページ</button>
      <button onClick={clickedToPage3Btn}>Page3遷移ボタン</button>
      <button onClick={clickedToPage4Btn}>Page4遷移ボタン</button>
      <button onClick={clickedToPage5Btn}>Page5遷移ボタン</button>
    </>
  );
};

export default Home;
