import React, {useState, useEffect} from 'react';
import BasicLayout from "../../layout/basiclayout";
import {Carousel} from 'react-bootstrap';
import Motion from "../pagesAnimation";
import {GetLastAlbums,GetLastPosts} from "../../api/Gets";
import Album from "../../components/albumItem";
import Post from "../../components/postItem";
import {map} from "lodash";

import Fuego from "../../assets/svg/fuego.svg";

import "./HomePage.scss";

export default function HomePage() {

   const [albums, setAlbums] = useState(null);
   const [posts, setPosts] = useState(null);

   useEffect(() => {
      Get()
   }, [])

   const Get = async () => {

      await GetLastAlbums().then(response => {
         if(response){
           const data = response;
            data.pop()
           setAlbums(data)
            
         }
      }).catch(err => {

      });

      await GetLastPosts().then(response => {
         if(response){
           const data = response;
           data.pop()
           data.pop()
           setPosts(data)
         }
      }).catch(err => {

      });



   }





    return (
       
         <BasicLayout>
            <Motion>
               <div className="home-page">
                <Slider/>
               <h3>Ultimos albums <img src={Fuego}/></h3>
               <div className="home-page__albums">
               {map(albums, (album, index) => (
                 <Motion key={index}> <Album album={album}/> </Motion>
               ))}
               </div>
               <h3>Ultimos Post <img src={Fuego}/></h3>
               <div className="home-page__posts">
               {map(posts, (post, index) => (
                 <Motion key={index}> <Post post={post}/> </Motion>
               ))}
               </div>
               </div>

               Iconos diseñados por <a href="https://www.flaticon.es/autores/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/" title="Flaticon"> www.flaticon.es</a>
            </Motion>
         </BasicLayout>
        
         )
         


}

function Slider () {
   return(<Carousel className="carousel" indicators={false} interval={3000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://geekzilla.tech/home/wp-content/uploads/2020/04/Dragon-Ball-Z-Kakarot-.jpg"
          alt="First slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://geekzilla.tech/home/wp-content/uploads/2020/04/Dragon-Ball-Z-Kakarot-.jpg"
          alt="Third slide"
        />
    
     
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://geekzilla.tech/home/wp-content/uploads/2020/04/Dragon-Ball-Z-Kakarot-.jpg"
          alt="Third slide"
        />
     
      </Carousel.Item>
    </Carousel>)
}