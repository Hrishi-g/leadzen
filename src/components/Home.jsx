import React, { useEffect, useState } from 'react'
import Card from './Card';

export default function Home() {
const[post,setPost] = useState([]);

useEffect(()=>{
  const dataFetch = async () =>{
    const post = await(
      await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();
    setPost(post)
  };
  dataFetch();
},[]);

  return (
    <div>
      {
        post.map((res) => {
          return <Card key={res.id} item={res}/>
        })
      }
    </div>
  )
}
