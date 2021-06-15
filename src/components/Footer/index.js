import { FooterApp } from './styles/Footer';
import {useContext} from 'react';
import { ThemeContext } from 'styled-components';

export default function Footer() {
  const { title } = useContext(ThemeContext);
  return (
    <FooterApp>
      <div class="section">
        <img src={`/${title}/pokeball.png`} alt="pokeball" width={20}/>
        <div class="copyright-section">
          <p>Created with NextJS and Styled-Components</p>
          <p>© 2021</p>
          <p>Feel free to contact us</p>
        </div>
        <img src={`/${title}/pokeball.png`} alt="pokeball" width={20}/>
      </div>
    </FooterApp>
  );
};