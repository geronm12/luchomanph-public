import React from 'react';
import BasicLayout from '../../layout/basiclayout';
import {withRouter,useHistory} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import Motion from "../pagesAnimation";
import ArrowBack from "../../assets/png/baseline_arrow_back_white_36dp.png";

import "./BlogPostPage.scss";

 

function BlogPostPage(nextProps) {
     
    const {state} = nextProps.location;

    const {objeto} = state;

    const history = useHistory();

 

    return (
        <BasicLayout>
            <Motion>
           
            <div className="blog-post">
            <h1>{objeto.titulo}</h1>
            <img src={objeto.fotos[0].fotoUrl} alt="foto"></img>
            <p>
            {objeto.cuerpo}
            </p>
            </div>
            <div className="blog-post__button">
            <Button onClick={() => history.push("/blog")}><img src={ArrowBack} alt="back"/></Button>
            </div>
         
            </Motion>
        </BasicLayout>
    )
}


export default withRouter(BlogPostPage);