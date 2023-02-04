import React, { useEffect, useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import "./Card.css";

export default function Home() {
  const [post, setPost] = useState([]);
  const [loding, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 5;

  useEffect(() => {
    const dataFetch = async () => {
      const post = await (
        await fetch("https://jsonplaceholder.typicode.com/users")
      ).json();
      setPost(post);
    };
    dataFetch();
  }, []);

  const indexOfLAstPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLAstPost - postPerPage;
  const currentPost = post.slice(indexOfFirstPost, indexOfLAstPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
    <nav>
    <h1> AccorDion</h1>
    <h5>
    <Pagination
          postPerPage={postPerPage}
          totalPost={post.length}
          paginate={paginate}
        />
    </h5>
    </nav>
      <div>
        {currentPost.map((res) => {
          return <Card key={res.id} item={res} />;
        })}
      </div>
      <div>
       
      </div>
    </>
  );
}
