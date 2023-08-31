import React, {useEffect, useState} from "react";
//import {useTranslation} from "react-i18next";
import "swiper/modules/effect-fade/effect-fade.min.css";
import BannerHome from "../../../components/bannerHome";
import PartnerHome from "../../../components/PartnerHome";
import Rubrics from "../../../components/Rubrics";
import LendingInfo from "../../../components/LenfingInfo";
import Steps from "../../../components/Steps";
import Inspire from "../../../components/inspire";
import HelpBuisness from "../../../components/HelpBuisness";
import ResponsesMarket from "../../../components/ResponsesMarket";
import BannerBottom from "../../../components/BannerBottom";
import BottomText from "../../../components/BottomText";
import Footer from "../../../components/Footer";
import ModalSignUp from "../../../components/ModalSignUp";
import AuthModal from "../../../components/ModalAuth";

function HomePublic() {
    const [modalAuth, setModalAuth]=useState(false)
    const [modalSignUp, setModalSignUp]=useState(false)
    if (modalAuth === true || modalSignUp === true){
        document.body.style.paddingRight = '17px';
    }else {
        document.body.style.paddingRight= ''
    }
    const [mobile, setMobile]=useState(false)
    const isNarrowScreen = window.matchMedia("(max-width: 550px)").matches;
  useEffect(()=>{
      if (isNarrowScreen ||mobile ===true){
          setMobile(true)
          document.querySelector('body').classList.add('is_mobile')
      }else {
          setMobile(false)
          document.querySelector('body').classList.remove('is_mobile')
      }
  },[mobile, isNarrowScreen])
    //const {t} = useTranslation('common')
    return(
        <> {modalAuth && (
            <AuthModal setModalAuth={setModalAuth} setModalSignUp={setModalSignUp}/>
        )}
            {modalSignUp && (
                <ModalSignUp setModalAuth={setModalAuth} setModalSignUp={setModalSignUp}/>
            )}
            <div className={'all_page page-flex__content pt0 is_index'}>
                <BannerHome/>
                <PartnerHome/>
                <Rubrics/>
                <LendingInfo/>
                <Steps/>
                <Inspire/>
                <HelpBuisness/>
                <ResponsesMarket/>
                <BannerBottom setModalSignUp={setModalSignUp}/>
                <BottomText/>
                <div id="app-footer"/>
                <Footer/>
            </div>
        </>
    )
}
export default HomePublic
