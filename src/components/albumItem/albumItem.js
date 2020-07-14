import React, {useState,useEffect} from 'react';
import {map} from 'lodash';
import {Carousel, Modal} from 'react-bootstrap';
import Motion from "../../pages/pagesAnimation";

import "./albumItem.scss";
 
export default function AlbumItem(props) {
    const {album} = props;
    
    const portada = album.fotos[0].fotoUrl;

    const [show, setShowModal] = useState(false);

    const fotos = album?.fotos;

    const titulo = album?.titulo;

    const [estado, setEstado] = useState("");

  

    const getImage = (url) =>{
      var img = new Image();
       
      img.onload = () => {
        setEstado(img.width > img.height ? "ancha" : "alta")  
        console.log(estado)
      }

      img.src = url;
    
    }

    useEffect(() => {
      getImage(portada);
    }, [])

  
    return (
       <div className="album-item">
          <div className="album-item__foto">
          <Motion><img src={portada} className={estado} alt="foto" onClick={() => setShowModal(true)}/></Motion> 
          </div> 
          <Modal show={show} onHide={() => setShowModal(false)}>
            <ModalContent fotos={fotos} titulo={titulo}/>
          </Modal>
         </div>
    )

}


function ModalContent(props){

    const {fotos} = props;
    return (
      <Carousel  indicators={false}>
          {map(fotos, (foto, index) => (
              <Carousel.Item>
                <img
                 className="d-block w-100"
                 src={foto.fotoUrl}
                 alt="First slide"
                 />
             
              </Carousel.Item>
          ))}
      </Carousel>
    )
}
