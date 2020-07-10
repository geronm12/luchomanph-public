import React, {useState} from 'react';
import {Navbar, Nav, Button, Container, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import Menu from '../../assets/svg/menu-white-24dp.svg';
import Camera from '../../assets/svg/camera_alt-white-24dp.svg';
import Post from '../../assets/svg/text_snippet-white-24dp.svg';
import Home from '../../assets/svg/home-white-24dp.svg';

import './navbar.scss';

export default function NavegationBar() {

    const [showContent, setShowContent] = useState(false);
  
    return (
       <div className="navigation">
       <div className="navegation-container">
       <div className="navegation-container__menu"><InitialContent setShowContent={setShowContent} showContent={showContent}/></div> 
       <h3>Luchomanph</h3>
       </div> 
       <Navigation setShowContent={setShowContent} showContent={showContent}/>  
       </div>)
}

function Navigation (props){
  const { showContent} = props;

  const classname = showContent ? "contenedor fade-in" : "contenedor fade-out" 

  return(
 
    <Container className={classname} fluid>
      <Col className="contenedor__menu">
       <ul>
         <Link to="/"><img src={Home} alt="Home"/>Home</Link>
         <Link to="/coleccion"><img src={Camera} alt="Collections"/>Collections</Link>
         <Link to="/blog"><img src={Post} alt="Blog"/>Blog</Link>
        </ul>
      </Col>
    </Container>
 
  );
}


function InitialContent(props)
{ 
  const {setShowContent, showContent} = props;

  const changeShowing = () => {
    if(showContent){
      setShowContent(false);
    }else{
      setShowContent(true);
    }
  }

  return (
     <div  className="button">
      <Button onClick={changeShowing} ><img src={Menu}/></Button>
      </div>

  )
}