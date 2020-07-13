import React from 'react';
import BasicLayout from "../../layout/basiclayout";
import Motion from "../pagesAnimation";
import Facebook from "../../assets/png/Logo-Facebook.png"
import Instagram from "../../assets/png/Logo-Instagram.png"
import Twitter from "../../assets/png/Twtiter-Logo.png"
import "./contactPage.scss";

export default function ContactPage() {
    return (
        <BasicLayout>
            <Motion>
              <div className="contact-page">
                <Motion><h2>Contacto</h2></Motion>
                <Motion><div className="contact-page__cuerpo">
                 <a href="https://www.instagram.com/luchomanph/" target="_blank" alt="instagram">
                   <img src={Instagram}/>
                   <h6>@Luchomanph</h6>
                 </a>
                 <a href="https://www.facebook.com/luchomanph" target="_blank"><img src={Facebook} alt="facebook"/><h6>@Luchomanph</h6></a>
                 <a href="https://twitter.com/luchomanph" target="_blank"><img src={Twitter} alt="twitter"/><h6>@luchomanph</h6></a>
                  
                 </div></Motion>
              </div>
            </Motion>
        </BasicLayout>
    )
}
