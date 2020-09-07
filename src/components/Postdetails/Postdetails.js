
import React, { useEffect, useState } from 'react';
import './Postdetails.css';
import { useParams } from 'react-router-dom';
import Commentshow, {Comment} from '../Comment/Comment';

const Postdetails = () => {
  
    const {postId} = useParams();
    const[details, setDetails] = useState([]);
    useEffect(() => {
        const url =`https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setDetails(data));

    },[])

    
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => setComments(data));
    },[])
   
    return (
        <div>
            <div className="postdetails">
             <h2> Title:{details.title}</h2>
             <h4> Body{details.body}</h4>
             </div>
            <div>
                    {
                        comments.map(pd => <Commentshow comments={pd} ></Commentshow>)
                    }

            </div>
        </div>
    
    );
};

export default Postdetails;