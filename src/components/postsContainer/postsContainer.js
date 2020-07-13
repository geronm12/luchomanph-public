import React, {useState, useEffect} from 'react';
import {GetPosts} from "../../api/Gets";
import {Spinner, Container,CardDeck} from 'react-bootstrap';
import PostItem from "../postItem";
import {map} from "lodash";
import Motion from "../../pages/pagesAnimation";

import "./postContainer.scss";

export default function PostsContainer() {
    
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);


    const getPosts = () => {
        setLoading(true);
        GetPosts(page,"").then(response => {
            if(!response || response === null){
               setLoading(false);
            }else{
                setPosts(response);
                setLoading(false);    
            }

        }).catch(err =>{
            setLoading(false);
        });
    }

    useEffect(() => {
     getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])


    return (
       <Container className="post-container">
           {loading ? <div className="post-container__spinner">
               <h2>Cargando</h2>
               <Spinner animation="border" variant="light"/>
           </div> : 
            <div className="card-container">
            {map(posts, (post, index) => (<Motion><PostItem key={index} post={post}/></Motion> ))}
            </div>
        }
           
       </Container>
    )
}
