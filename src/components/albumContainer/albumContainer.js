import React, {useState, useEffect} from 'react';
import {Container, Spinner} from 'react-bootstrap';
import {GetAlbums} from "../../api/Gets";
import AlbumItem from "../albumItem";
import { map } from 'lodash';
import "./albumContainer.scss";
import Motion from "../../pages/pagesAnimation";

export default function AlbumContainer() {
  
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [albums, setAlbums] = useState(null);
    
    const getAlbums = () => {

        setLoading(true);
        GetAlbums(page, "").then(response => {
            if(!response || response === null){
                setLoading(false);
            }else{
                setAlbums(response);
                setLoading(false);
            }
        }).catch(err => {
            setLoading(false);
        });
    }


    useEffect(() => {
    getAlbums();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[page])


    return (
      
         <Container className="album-container">
            {loading ? <div className="album-spinner-container">
                <h2>Cargando</h2>
                <Spinner animation="border" variant="light"/></div> : 
                map(albums, (album, index) => (
                <Motion>
                <AlbumItem key={index} album={album} className="album-container__item"/>
                </Motion>
            ))}
         </Container>
        
    )
}
