import React, {useState} from 'react';
import {map} from 'lodash';
import {Carousel, Modal} from 'react-bootstrap';
import Motion from "../../pages/pagesAnimation";

import "./albumItem.scss";
 
export default function AlbumItem(props) {
    const {album} = props;
     
    const [show, setShowModal] = useState(false);

    const fotos = album?.fotos;

    const titulo = album?.titulo;

 


    return (
       <div className="album-item">
          <div className="album-item__foto">
          <Motion><img src={album?.fotos[0].fotoUrl} alt={album.titulo} onClick={() => setShowModal(true)}/></Motion> 
          </div> 
          <Modal show={show} onHide={() => setShowModal(false)}>
            <ModalContent fotos={fotos} titulo={titulo}/>
          </Modal>
         </div>
    )

}


function ModalContent(props){

    const {fotos, titulo} = props;
    return (
      <Carousel  indicators={false}>
          {map(fotos, (foto, index) => (
              <Carousel.Item>
                <img
                 className="d-block w-100"
                 src={foto.fotoUrl}
                 alt="First slide"
                 />
              <Carousel.Caption>
               <h3>{titulo}</h3>
             </Carousel.Caption>
              </Carousel.Item>
          ))}
      </Carousel>
    )
}
