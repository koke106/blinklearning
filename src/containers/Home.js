import { Link } from 'react-router-dom';

import '../css/Home.scss';
import { useTest } from '../context/context';
function Home() {
  const { test } = useTest();

  return (
    <div className='home'>
      <div className="home-logo">
        <img className='logo' alt='Blinklearning logo' src='assets/img/logo.png' />
      </div>
      <div className="home-buttons">
        <Link className='button' to={`/test`} disabled={test.done}>Realizar prueba</Link>
        <Link className='button' to={`/results`} disabled={!test.done}>Ver resultados</Link>
      </div>
    </div>
  );
}

export default Home;