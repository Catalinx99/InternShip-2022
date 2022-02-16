import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./homest.css";


const Home = () => {
    const[posts,setPosts] = useState([])

    useEffect(()=>{
        axios.get('https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })

    }, [])
    const handleDelete = (id) =>{
        const newPosts = posts.filter(post=>post.id !== id);
        setPosts(newPosts);
    }
  return (
      
    <div>
      <ul className='card'>
          {
              posts.map(post =>(
                  <div key={post.id} className="carduri">
                  <h3 > {post.title.rendered} </h3>
                  <img src={post.jetpack_featured_media_url} alt="s" className="poze"/>
                  <p>{post.excerpt.rendered}</p>
                  <p>{post.date}</p>
                  <button>EDIT</button>
                  <button onClick={()=> handleDelete(post.id)}>DELETE</button>
                  </div>
              ))
          }
      </ul>
    </div>
  )
}

export default Home
