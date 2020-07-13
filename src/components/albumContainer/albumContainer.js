import React, {useState, useEffect} from 'react';
import {Container, Spinner, Button} from 'react-bootstrap';
import {GetAlbums} from "../../api/Gets";
import AlbumItem from "../albumItem";
import { map } from 'lodash';
import "./albumContainer.scss";
import Motion from "../../pages/pagesAnimation";

export default function AlbumContainer() {
  
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [albums, setAlbums] = useState(null);
    const [button, setButton] = useState(true);

    const getAlbums = () => {
        
        setLoading(true);
        setButton(false);
        GetAlbums(page, "").then(response => {
              if(response){
                  
                 if(!albums){
                     setAlbums(response);
                     setLoading(false);
                     setButton(true);
                 }else{
                     const data = [...albums, ...response];
                     setAlbums(data);
                     setLoading(false);
                     setButton(true);
                 }

              }else{
                  setButton(false);
                  setLoading(false);
                  setButton(true);
              }
                  
            }
        ).catch(err => {
            setLoading(false);
        });
    }


    useEffect(() => {
    getAlbums();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[page])


    const moreData = () => {
        setLoading(true);
        setPage(page + 1);
    }


    return (
      
         <Container className="album-container" fluid>
            {loading ? <div className="album-spinner-container">
              <Spinner animation="border" variant="light"/></div> : 
                map(albums, (album, index) => (
                <Motion key={index}>
                <AlbumItem  album={album} className="album-container__item"/>
                </Motion>
            ))} 
            {button && <Button onClick={moreData}>
                Más
            </Button>}
         </Container>
        
    )
}
