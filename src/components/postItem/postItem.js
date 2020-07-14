import React, {useEffect} from 'react'; 
import {useHistory, useLocation} from 'react-router-dom';
import {CSSTransition} from "react-transition-group";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import "./postItem.scss";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});



export default function PostItem(props) {
    const {post} = props;
    
    const history = useHistory();

    const location = useLocation();

    return <Tarjeta post={post} history={history} style={{overFlow: "hidden"}}/>
         
}

function Tarjeta(props){
    
    const {post,history} = props;

    const tempBody = post.cuerpo.substring(0, 60)

    const classes = useStyles();

    const location = {
      pathname: `/blog/${post.titulo}`,
      state: {
        objeto: post
     }}
    


     const Goto = () => {
       history.push(location);
     }

      const HTML = (text) => {
        const parrafo = document.getElementById(post._id);
        console.log(text)
        parrafo.innerHTML = text;
      }
      
      useEffect(() => {
         HTML(tempBody)
      }, [tempBody])
    

      return (
    
      <Card className={classes.root} style={{marginLeft: '20px', marginBottom: '20px', height: "250px"}}>
      <CardActionArea onClick={Goto}>
        <CardMedia
          component="img"
          alt="Fot Luchomanph"
          height="140"
          image={post.fotos[0].fotoUrl}
          title="Contemplative Reptile"
         />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.titulo}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div" id={post._id}>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
 
     
    )
}
