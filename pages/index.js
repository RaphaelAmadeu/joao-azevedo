import { useEffect, useState } from 'react';

//Component imports
import Background from '../components/Background/Background';

//Library imports
import AOS from 'aos';

//Style imports
import 'aos/src/sass/aos.scss';
import './styles/index.scss';

export default () => {
  const [isMobile, setIsMobile] = useState(false);
  const [current, setCurrent] = useState(0);


  useEffect(() => {
    AOS.init({offset: 10});
    setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', () => {setIsMobile(window.innerWidth < 768)});
  },[]);

  

  return (
    <div id='main-wrapper'>
      <Background mobile={isMobile} active={current !== 0} />
    </div>
  )
}
  
