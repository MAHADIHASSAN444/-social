
import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import './Post.css';
import { brown } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';



const Post = () => {
    const [posts,setposts]= useState([]);
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=> setposts(data));

    },[]);
    return (
        <div>
            <h4>All titel:{posts.length}</h4>
            {
                 posts.map(post=><h1 className="postTitle"> Post Title : {post.title} 
                 <br/>
                 <Button variant="contained" color="secendary">
                 <Link to={`/about/${post.id}`}>Show details of {post.id} </Link>
                 </Button>
                 </h1>)
            }
            
             
        </div>
    );
};

export default Post;