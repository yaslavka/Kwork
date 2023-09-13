import React, { useState } from 'react';
import headerlogo from '../../../assets/images/index/logo.svg';
import MobileMenu from './MobileMenu';

function HeaderMobile({ setModalAuth, setModalSignUp }) {
  const [menu, setMenu] = useState(false);

  // const BurgerMenu=()=>{
  //     if (window.matchMedia('(max-width: 1300px)').matches) {
  //         document.querySelector('body').classList.add('is_mobile','show-mobile-menu')
  //         setMenu(!menu)
  //     }
  // }
  return (
    <>
      {/*mapMenu*/}
      {menu && <MobileMenu menu={menu} setMenu={setMenu} setModalAuth={setModalAuth} setModalSignUp={setModalSignUp} />}
      <div className={'headertop-mobile m-visible '}>
        <div className='foxmenubutton' role={'button'} onClick={() => setMenu(true)}>
          <div className='foxmenubutton__button js-show-mobile-nav-link'>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className='header__logo'>
          <img className='js-header-theme-logo' src={headerlogo} height='22' width='105' alt='mobile logo' />
        </div>
        <a
          className='menu-category menu-category_login login-js'
          onClick={() => {
            setModalAuth(true);
            document.getElementById('body').classList.add('modal-open');
          }}>
          Войти
        </a>
      </div>
    </>
  );
}
export default HeaderMobile;
