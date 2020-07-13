import React from 'react';
import BasicLayout from "../../layout/basiclayout";
import {Carousel} from 'react-bootstrap';
import Motion from "../pagesAnimation";

export default function HomePage() {
    return (
       
         <BasicLayout>
            <Motion>
               <h1>Carousel de fotos estático</h1>
               <h3>Ultimos albums</h3>
               <h3>Albums</h3>
               <h3>Ultimos Post</h3>
               <h3>Post</h3>
            
            </Motion>
         </BasicLayout>
        
         )
         


}
