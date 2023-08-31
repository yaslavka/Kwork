import React from "react";
import logoFooter from '../../assets/images/index/logo.svg'

const foterData = [
    {
        id: 1,
        title: 'О Kwork',
        links: [
            {
                id: 1,
                route: '',
                routrname: 'О проекте'
            },
        ]
    },
    {
        id: 2,
        title: 'Сообщество',
        links: [
            {
                id: 2,
                route: '',
                routrname: 'Блог'
            },
        ]
    },
    {
        id: 3,
        title: 'Полезное',
        links: [
            {
                id: 3,
                route: '',
                routrname: 'Покупателям'
            },
        ]
    },
    {
        id: 4,
        title: 'Помощь',
        links: [
            {
                id: 4,
                route: '',
                routrname: 'Вопрос — Ответ'
            },
        ]
    },

]
function Footer() {
    return(
        <>
            <div className={'footer footer--mobile footer--ru'}>
                <div className={'kw-wrapper '}>
                    <div className={'footer__columns'}>
                        <div className="footer__column footer__column--logo">
                            <a href="https://kwork.ru" className="footer__logo">
                                <img className="footer__logo-image" src={logoFooter} alt="" width="110" height="22"/>
                                <span className="footer__logo-text">Фриланс маркетплейс</span>
                            </a>
                            <div className="footer__stats"/>
                        </div>
                        <div className={'footer__column footer__column--menu'}>
                            <div className={'footer__menu'}>
                                {foterData.map((item)=>(
                                    <>
                                        <div className={'footer__menu-column js-footer-menu-column'} key={item.id}>
                                            <div id={item.id} className="footer__menu-title js-footer-menu-title">
                                                {item.title}
                                                <svg className="footer__menu-title-icon"
                                                     xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                     fill="none">
                                                    <path d="M12 6L8 10L4 6" stroke="#177de5" strokeWidth="1.6" strokeLinecap="round"/>
                                                </svg>
                                            </div>
                                            <div className={'footer__menu-links'}>
                                                {item.links.map((links)=>(
                                                    <>
                                                        <a key={links.id} href={links.route}>
                                                            {links.routrname}
                                                        </a>
                                                    </>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={'footer__bottom'}>
                        <div className="footer__social">
                            <a href="https://vk.com/kwork_kwork" target="_blank" rel="noopener">
                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                                <path fillRule="evenodd" d="M17.07 14.852c0 .088.088.092.18.096s.232.06.316.092a1.2 1.2 0 0 1 .737.794c.088.307.154.904.154 1.228v.276c.044.386.022 1.478-.044 1.81-.022.114-.022.26-.048.377-.026.1-.044.237-.088.338-.105.228-.2.53-.522.53-.224 0-.417-.15-.57-.285l-.215-.21c-.145-.15-.25-.32-.382-.478-.096-.12-.175-.25-.263-.373l-.574-.92-.316-.53-.19-.338-.035-.075-.2-.42c-.044-.105-.1-.193-.14-.285-.013-.03-.013-.04-.026-.075l-.075-.153-.04-.075c-.03-.053-.04-.088-.066-.145l-.553-1.158c-.114-.15-.368-.254-.548-.294s-2.864-.022-2.943-.022-.114.004-.167.01c-.123.017-.232-.035-.51.044-.154.044-.29.066-.377.215-.14.232.01.557.114.772l.22.49c.026.066.035.06.06.118l.1.25c.06.167.162.32.232.487l.53 1.08c.132.224.232.482.368.706l.066.114c.053.127.18.316.246.452l.386.69c.066.114.114.246.19.346.03.04.053.062.075.105s.044.075.066.114l.136.224.408.667.14.215.583.85.53.71.316.4.162.193c.03.044.048.06.08.096l.882.912 1.272.96.76.412c.153.083.333.162.5.22.066.022.057.035.118.06.044.018.1.022.14.035.057.018.07.035.127.053l.833.24c.32.04.605.132.925.15l1.807.013c.19 0 .294-.083.456-.145.246-.088.268-.26.333-.412.022-.04.035-.066.04-.1l.057-.855.035-.254a1.81 1.81 0 0 1 .132-.469c.017-.044.022-.08.035-.114.017-.053.035-.06.057-.105s.022-.07.044-.105a.49.49 0 0 1 .057-.088c.048-.07.092-.105.15-.162.233-.237.483-.254.768-.1.1.053.175.1.268.175a2.93 2.93 0 0 1 .456.421c.035.044.066.066.1.1s.022.026.057.06l.566.636.6.65.035.035c.04.048.07.057.118.1l.237.197c.12.096.268.175.395.26.092.06.206.1.31.132.074.022.1.053.232.088.044.01.057.018.088.03a.67.67 0 0 0 .197.026h3.303c.153 0 .28-.013.4-.057.07-.022.114-.022.18-.053l.167-.057c.18-.066.412-.307.412-.5 0-.268 0-.32-.136-.592l-.193-.333-.675-.903-.118-.14c-.018-.03-.154-.145-.26-.28l-.785-.8c-.096-.083-.167-.18-.263-.26-.053-.044-.096-.066-.145-.114l-.408-.395c-.03-.026-.044-.03-.07-.057-.118-.118-.496-.518-.54-.65-.035-.1-.136-.197-.136-.404 0-.075.035-.19.048-.25.035-.184.092-.24.154-.377.044-.092.1-.154.154-.24.092-.158.215-.294.32-.443l.197-.272c.044-.066.092-.114.14-.17l.93-1.237.513-.706.5-.74.447-.8.044-.1c.03-.044.03-.053.057-.105.017-.044.026-.053.048-.1.053-.136.175-.465.175-.6 0-.202.026-.18-.053-.342-.06-.114-.19-.206-.316-.25-.145-.048-.522-.092-.67-.092h-3.24c-.06 0-.083.01-.12.01-.06.01-.066-.01-.127-.01-.25 0-.307.013-.504.08-.18.06-.338.412-.4.583l-.715 1.6c-.044.114-.096.206-.154.316l-.088.162c-.08.162-.154.325-.254.474l-1.057 1.6-.105.136-.1.132c-.03.03-.03.035-.053.06-.184.232-.768.86-1.088.596-.088-.07-.18-.158-.232-.254-.018-.04-.013-.048-.03-.083l-.07-.175c-.013-.04-.022-.044-.035-.097-.132-.517-.026-2.28-.026-3.017l.03-1.237c0-.154-.013-.465-.075-.605l-.066-.184c-.044-.097-.132-.193-.206-.263-.088-.092-.35-.197-.482-.22l-.6-.1c-.583-.083-1.26-.057-1.846-.06l-1.04.07-.544.105c-.254.088-.377.132-.588.294-.066.048-.075.035-.127.1-.066.088-.162.154-.162.28z" fill="#177DE5"/>
                            </svg>
                            </a>
                            <a href="https://t.me/kwork_kwork" target="_blank" rel="noopener">
                            <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M27.364 28.91l3.606-17.58a.58.58 0 0 0-.773-.665l-20.095 7.856a.59.59 0 0 0 .006 1.094l4.896 1.852 1.895 6.177c.12.395.6.542.915.28l2.73-2.255c.286-.236.694-.248.992-.028l4.923 3.622c.34.25.82.062.904-.354zm-10.77-8.427l9.57-5.973c.172-.107.35.13.2.267l-7.898 7.44c-.278.262-.457.612-.507.993l-.27 2.02c-.036.27-.41.296-.483.035l-1.035-3.684c-.118-.42.054-.87.42-1.1z" fill="#177DE5"/>
                            </svg>
                            </a>
                        </div>
                        <div className="footer__apps">
                            <a href="https://apps.apple.com/ru/app/kwork/id1456387980" target="_blank" rel="nofollow" className="footer__apps-button">
                                <img className="js-lazy-load-image lazy-load_initialized" src="https://cdn-edge.kwork.ru/images/footer/app-appstore.png" alt="appstore" width="112" height="32"/>
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=ru.kwork.app" target="_blank" rel="nofollow" className="footer__apps-button">
                                <img className="js-lazy-load-image lazy-load_initialized" src="https://cdn-edge.kwork.ru/images/footer/app-gplay.png" alt="googleplay" width="112" height="32"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer
