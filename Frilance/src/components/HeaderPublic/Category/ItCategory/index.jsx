import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../header.module.scss';

function ItCategory({ listItem, left }) {
  return (
    <section className={styles.liMenuItem}>
      <Link to={`${listItem.it.route}`}>
        <span className={styles.itemMenu}>{listItem.it.label}</span>
      </Link>
      <div className={styles.menuBox} style={{ left: `${left}px` }}>
        {listItem.it.col1 && (
          <div className={styles.firstMenuBox}>
            {listItem.it.col1.map((col1, index) => (
              <div className={styles.linkBox} key={index}>
                <h4 className={styles.titleDropMenu}>{col1.title}</h4>
                {col1.subCategory.map((subCategory, index) => (
                  <div key={index}>
                    <Link className={styles.submenuItem} to='#'>
                      <span className={styles.menuDesc}>{subCategory.label}</span>
                      {subCategory.icon && (
                        <img
                          data-tooltip-text='Очень популярная рубрика'
                          width={15}
                          height={15}
                          src='https://cdn-edge.kwork.ru/images/mobile_menu/fire.svg'
                          alt='Популярный раздел логотипы'
                        />
                      )}
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
        {listItem.it.col2 && (
          <div className={styles.firstMenuBox}>
            {listItem.it.col2.map((col2, index) => (
              <div className={styles.linkBox} key={index}>
                <h4 className={styles.titleDropMenu}>{col2.title}</h4>
                {col2.subCategory.map((subCategory, index) => (
                  <div key={index}>
                    <Link to='#' className={styles.submenuItem}>
                      <span className={styles.menuDesc}>{subCategory.label}</span>
                      {subCategory.icon && (
                        <img
                          width={15}
                          height={15}
                          data-tooltip-text='Очень популярная рубрика'
                          data-tooltip-class='pointer-en'
                          data-tooltip-thidden='true'
                          src='https://cdn-edge.kwork.ru/images/mobile_menu/fire.svg'
                          alt='Популярный раздел логотипы'
                        />
                      )}
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
        {listItem?.it.col3 && (
          <div className={styles.firstMenuBox}>
            {listItem.it.col3.map((col3, index) => (
              <div className={styles.linkBox} key={index}>
                <h4 className={styles.titleDropMenu}>{col3.title}</h4>
                {col3.subCategory.map((subCategory, index) => (
                  <div key={index}>
                    <Link className={styles.submenuItem} to='#'>
                      <span className={styles.menuDesc}>{subCategory.label}</span>
                      {subCategory.icon && (
                        <img
                          width={15}
                          height={15}
                          data-tooltip-text='Очень популярная рубрика'
                          data-tooltip-class='pointer-en'
                          data-tooltip-thidden='true'
                          src='https://cdn-edge.kwork.ru/images/mobile_menu/fire.svg'
                          alt='Популярный раздел логотипы'
                        />
                      )}
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
export default ItCategory;
