import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import r from '../../constants/routes.constants';
import HeaderMobile from './HederMobile';
import AuthModal from '../ModalAuth';
import ModalSignUp from '../ModalSignUp';
import { api } from '../../api';
import { toast } from 'react-toastify';
import DesignCategory from './Category/DesignCategory';
import ItCategory from './Category/ItCategory';
import TextCategory from './Category/TextCategory';
import SeoCategory from './Category/SeoCategory';
import SocialCategory from './Category/SocialCategory';
import AudioVideoCategory from './Category/AudioVideoCategory';
import BusinessLifeCategory from './Category/BusinessLifeCategory';
import search from '../../assets/images/header/icon-search.svg';
import styles from './header.module.scss';

function HeaderPublic() {
  const [modalAuth, setModalAuth] = useState(false);
  const [modalSignUp, setModalSignUp] = useState(false);
  if (modalAuth === true || modalSignUp === true) {
    document.body.style.paddingRight = '17px';
  } else {
    document.body.style.paddingRight = '';
  }
  const [listItem, setListItem] = useState(null);
  useEffect(() => {
    api
      .listCategory()
      .then((response) => {
        setListItem(response);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }, []);

  const liArray = [
    { section: <ItCategory listItem={listItem?.design} left={-5} />, id: 0 },
    { section: <ItCategory listItem={listItem?.it} left={-11} />, id: 1 },
    { section: <ItCategory listItem={listItem?.text} left={-11} />, id: 2 },
    { section: <ItCategory listItem={listItem?.seo} left={-11} />, id: 3 },
    { section: <ItCategory listItem={listItem?.social} left={-11} />, id: 4 },
    { section: <ItCategory listItem={listItem?.audio} left={-11} />, id: 5 },
    { section: <ItCategory listItem={listItem?.business} left={-465} />, id: 6 },
  ];

  const [activeMenuId, setActiveMenuId] = useState(null);
  console.log('listItem >>', listItem);
  return (
    <>
      {modalAuth && <AuthModal setModalAuth={setModalAuth} setModalSignUp={setModalSignUp} />}
      {modalSignUp && <ModalSignUp setModalAuth={setModalAuth} setModalSignUp={setModalSignUp} />}
      <header className={styles.header}>
        {/*<div className={'recommendation-app js-recommendation-app'}>
          <div className='recommendation-app__close js-recommendation-app-close' />
          <div className={'recommendation-app__content'}>
            <div className='recommendation-app__logo' />
          </div>
        </div>*/}
        <section className={styles.headerWrapper}>
          {/*Headermobile*/}
          <HeaderMobile setModalAuth={setModalAuth} setModalSignUp={setModalSignUp} />
          <article className={styles.menuTop}>
            <aside>
              <Link to={r.root}>
                <svg xmlns='http://www.w3.org/2000/svg' width='110' height='23' fill='none' fillRule='evenodd'>
                  <path
                    className='svg-logo'
                    d='M19.158 21.912l-8.543-10.595 8.012-9.368H13.32L1.9 16.188v5.723h4.297V15.78l1.575-1.857 6.095 7.99h5.3zm22.907 0L47.8 1.932h-4.828l-3.5 14.427-3.8-14.427h-3.356L28.472 16.36 24.928 1.932h-4.81l5.77 19.963h4.554l3.5-13.712 3.527 13.712h4.588v.017zm16.95.358c6.095 0 10.546-4.31 10.546-10.322s-4.434-10.34-10.546-10.34c-6.078 0-10.512 4.31-10.512 10.322s4.434 10.34 10.512 10.34zm0-3.78c-3.715 0-6.095-2.845-6.095-6.558 0-3.747 2.38-6.558 6.095-6.558s6.13 2.8 6.13 6.558c0 3.713-2.414 6.558-6.13 6.558zm30.132 3.424L84.6 14.315c2.174-.51 4.417-2.402 4.417-5.928 0-3.713-2.568-6.44-6.763-6.44H72.83v19.963h4.297V14.81h3.15l3.955 7.103h4.914zm-7.533-10.85H77.11V5.68h4.503c1.73 0 3.013 1.022 3.013 2.69.017 1.686-1.284 2.69-3.013 2.69zM110 21.912l-8.56-10.595 8.012-9.368h-5.3l-7.122 8.925V1.932h-4.297v19.963h4.297v-6.132l1.575-1.857 6.095 7.99h5.3v.017z'
                    fill='#111'
                  />
                  <path d='M6.198 6.087L1.9 11.283V4.435H0v-2.59h6.198v4.24z' fill='#ffa800' />
                </svg>
                <p className={styles.logoDesc}>Фриланс маркетплейс</p>
              </Link>
            </aside>
            <div className={styles.search} id='general-search'>
              <img className={styles.imgSearch} src={search} alt='search' />
              <input
                className={styles.input}
                name=''
                type='text'
                placeholder='Найти услуги'
                autoComplete='off'
                spellCheck='false'
              />
              <input type='text' name='username' className='hidden' />
              <button className={styles.findBtn} type='button'>
                Найти
              </button>
              {/*<div className='ico-search-button' />*/}
              <div style={{ display: 'none' }}>
                <div className='history d-flex justify-content-between'>
                  <div className='history__title'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none'>
                      <g clipPath='url(#history-time-16)'>
                        <path
                          d='M9.143 1a6.86 6.86 0 0 0-6.857 6.857H0l2.964 2.964.053.107 3.078-3.07H3.8a5.33 5.33 0 1 1 10.667 0 5.33 5.33 0 0 1-5.333 5.333 5.29 5.29 0 0 1-3.764-1.569l-1.082 1.082c1.242 1.242 2.95 2.01 4.846 2.01A6.86 6.86 0 0 0 16 7.857 6.86 6.86 0 0 0 9.143 1zM8.38 4.8v3.8l3.26 1.935.55-.922-2.667-1.585V4.8H8.38z'
                          fill='#a5a5a5'
                        />
                      </g>
                      <defs>
                        <clipPath id='history-time-16'>
                          <path fill='#fff' d='M0 0h16v16H0z' />
                        </clipPath>
                      </defs>
                    </svg>
                    Недавний поиск
                  </div>
                  <div className='history__button-clear'>Очистить</div>
                </div>
                <div className='suggestions' />
              </div>
            </div>
            <aside>
              <div className={styles.usersInfo}>
                <p className={styles.dotsGreen} />
                <span className={styles.userDesc}>Пользователей онлайн: 1083</span>
              </div>
              <div className={styles.usersInfo}>
                <p className={styles.dotsBlue} />
                <span className={styles.userDesc}>Последний заказ: 40 сек. назад</span>
              </div>
            </aside>
            <article id='app-header-select' className={styles.loginBox}>
              <button
                className={styles.logIn}
                type='button'
                onClick={() => {
                  setModalAuth(true);
                  document.getElementById('body').classList.add('modal-open');
                }}>
                Вход
              </button>
              <Link
                className={styles.registrationBtn}
                to={r.signUp}
                onClick={() => {
                  setModalSignUp(true);
                  document.getElementById('body').classList.add('modal-open');
                }}>
                Регистрация
              </Link>
              <a className={styles.logIn} href='https://kwork.ru/for-sellers'>
                Фрилансеру
              </a>
            </article>
          </article>
        </section>
        <section className={styles.menuWrapper}>
          {listItem && (
            <ul className={styles.menu}>
              {liArray.map((item, index) => (
                <li
                  key={index}
                >
                  {item.section}
                </li>
              ))}
            </ul>
          )}
        </section>
      </header>
    </>
  );
}
export default HeaderPublic;
