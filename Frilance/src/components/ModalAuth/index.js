import React, {useState} from "react";
import {api} from "../../api";
import {setAccessToken} from "../../utils";
import * as actions from "../../actions/auth.actions";
import {useDispatch} from "react-redux";
//import {useTranslation} from "react-i18next";

import Inputs from "../Input";
import {toast} from "react-toastify";
import {Form} from "reactstrap";

function AuthModal({setModalAuth, setModalSignUp}) {
    //const {t} = useTranslation('common')
    const [shown, setShown]=useState(false)
    const [state, setState]=useState({email:'', password:''})
    const [serverError, setServerError] = useState(null)
    const dispatch = useDispatch()
    const {email, password} = state


    const handleCange = (e) =>{
        const { name, value } = e.target
        setState({...state, [name]:value})
    }
    const onSubmitAuth = (e) =>{
        e.preventDefault()
        api.signIn({email: email, password: password})
            .then((response) => {
                dispatch(actions.signInSuccess())
                setAccessToken(response)

                api
                    .getUserInfo()
                    .then(() => {})
                    .catch(() => {})
            })
            .catch((error) => {
                setServerError(error.message)
                toast.error(error.message)
            })
    }
    return(
        <>
            <div id="app-auth-modal">
                <div className={'k-modal-outer k-modal--auth'}>
                    <div className={'k-modal-overlay'}>
                        <div className={'k-modal-dialog'}>
                            <div className={'k-modal-content'}>
                                <div className={'k-modal-content__header'}>
                                    <div className="k-modal-content__header-close" onClick={()=>{setModalAuth(false); document.getElementById('body').classList.remove('modal-open')}}/>
                                    <div className="k-modal-content__header-title"
                                         data-gtm-vis-recent-on-screen-2164498_364="464509"
                                         data-gtm-vis-first-on-screen-2164498_364="464509"
                                         data-gtm-vis-total-visible-time-2164498_364="100"
                                         data-gtm-vis-has-fired-2164498_364="1">Вход
                                    </div>
                                </div>
                                <div className={'k-modal-content__body'}>
                                    <div className={'auth-form auth-form--modal'}>
                                        <div>
                                            <Form id="form-login-page" onSubmit={onSubmitAuth}>
                                                <div className={'k-input form-item wrap-input-action'}>
                                                    <div className={'k-input__field position-r'}>
                                                        <Inputs
                                                            className={'input-style input-style--focus-blue wMax keep-placeholder'}
                                                            placeholder={'Электронная почта или логин'}
                                                            name="email"
                                                            value={email}
                                                            type="text"
                                                            onChange={handleCange}
                                                        />
                                                        {/*input-style input-style--focus-blue wMax keep-placeholder*/}
                                                        {email?.length > 0 ? (
                                                            <div className="wrap-input-action__remove wrap-input-action__remove--active"/>
                                                        ):(
                                                            <>

                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className={'k-input form-item wrap-input-action'}>
                                                    <div className={'k-input__field position-r'}>
                                                        <Inputs type={shown ? "text": "password"}
                                                                placeholder="Пароль"
                                                                className="input-style input-style--focus-blue wMax keep-placeholder"
                                                                name="password"
                                                                value={password}
                                                                onChange={handleCange}
                                                        />
                                                        {password?.length > 0 ?(
                                                            <span className={shown ? "js-password-view input-password-trigger show-password": "js-password-view input-password-trigger"}  onMouseOver={()=>setShown(true)} onMouseOut={()=>setShown(false)}/>
                                                        ):(
                                                            <>

                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="login-form-captcha-wrapper login-form-captcha-wrapper--margin"/>
                                                {serverError && (<div>{serverError}</div>)}
                                                {/*signin-signup__content-button kw-button kw-button--size-40 kw-button--green*/}
                                                <button id="button-auth" disabled={!email || !password} type={"submit"} className={email?.length>0 || password?.length>0 ? "signin-signup__content-button kw-button kw-button--size-40 kw-button--green":"signin-signup__content-button kw-button kw-button--size-40 kw-button--green kw-button--inactive"}>
                                                    Войти
                                                </button>
                                                <div className={'js-form-login-element signin-signup-additional-links'}>
                                                    <div className={'checkbox-after-label checkbox-after-label--green-checked'}>
                                                        <input id="l_remember_me_page_desktop" name="l_remember_me" type="checkbox"/>
                                                        <label htmlFor="l_remember_me_page_desktop">Запомнить меня</label>
                                                    </div>
                                                    <a className="js-forgot-save-email signin-signup-additional-links-link">
                                                        Забыли пароль?
                                                    </a>
                                                </div>
                                            </Form>
                                        </div>
                                        <div className="signin-signup-log-with"><span>или</span></div>
                                        <div className="signin-signup__social-buttons">
                                            <div>
                                                <a className="js-login-soc-btn social-button social-button--vk wMax" href="https://kwork.ru/login_soc?type=vk&amp;tz=Europe/Moscow" title="Войти через Вконтакте">
                                                    <span>
                                                        <svg width="13" height="8" viewBox="0 0 13 8" fill="none"
                                                               xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.07707 7.96754C2.97457 7.96754 0.634609 5.15504 0.537109 0.475037H2.59211C2.65961 3.91004 4.17457 5.36504 5.37457 5.66504V0.475037H7.30965V3.43754C8.49465 3.31004 9.7395 1.96004 10.1595 0.475037H12.0945C11.772 2.30504 10.422 3.65504 9.46204 4.21004C10.422 4.66004 11.9596 5.83754 12.5446 7.96754H10.4145C9.95704 6.54254 8.81715 5.44004 7.30965 5.29004V7.96754H7.07707Z" fill="#0077FF"/>
                                                        </svg>
                                                    </span>
                                                </a>
                                            </div>
                                            <div>
                                                <a className="js-login-soc-btn social-button social-button--google wMax" href="https://kwork.ru/login_soc?type=google&amp;tz=Europe/Moscow" title="Войти с Google">
                                                    <span>
                                                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M14.5001 8.27709C14.5001 7.77565 14.4598 7.27422 14.3791 6.78302H7.52908V9.61765H11.4534C11.292 10.5284 10.7674 11.3471 10.0007 11.8588V13.7007H12.3412C13.7132 12.4216 14.5001 10.5284 14.5001 8.27709Z" fill="#4285F4"/>
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M7.52828 15.4813C9.48542 15.4813 11.1399 14.8263 12.3404 13.7007L9.99992 11.8587C9.34418 12.3089 8.50685 12.5648 7.52828 12.5648C5.63168 12.5648 4.02763 11.2651 3.4526 9.52545H1.04149V11.4289C2.27226 13.9156 4.78426 15.4813 7.52828 15.4813Z" fill="#34A853"/>
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M3.45276 9.52549C3.15011 8.61472 3.15011 7.62209 3.45276 6.70109V4.80792H1.04165C0.00255471 6.88529 0.00255471 9.34129 1.04165 11.4187L3.45276 9.52549Z" fill="#FBBC04"/>
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M7.52828 3.66182C8.56738 3.64135 9.56612 4.04045 10.3127 4.76702L12.3909 2.65895C11.0693 1.41049 9.33409 0.724852 7.52828 0.745318C4.78426 0.745318 2.27226 2.32125 1.04149 4.80795L3.4526 6.71135C4.02763 4.96145 5.63168 3.66182 7.52828 3.66182Z" fill="#EA4335"/>
                                                        </svg>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="signin-signup-footer" role={"button"} onClick={()=>{setModalAuth(false); document.getElementById('body').classList.remove('modal-open'); setModalSignUp(true); document.getElementById('body').classList.add('modal-open')}}>
                                            <span>Нет аккаунта?</span>
                                            <a className="signin-signup-footer-link">Зарегистрироваться</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="k-modal-backdrop k-modal-backdrop--medium" onClick={() => {setModalAuth(false);document.getElementById('body').classList.remove('modal-open')}}/>
                </div>
            </div>
        </>
    )
}
export default AuthModal
