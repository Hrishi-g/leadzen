import React from 'react'

export default function Pagination({postPerPage,totalPost ,paginate}) {
    const pageNumbers = [];
    for(let i=1;i<=Math.ceil(totalPost/postPerPage);i++){
        pageNumbers.push(i);
    }
  return (
    <>
    {pageNumbers.map(number =>{
        return <div className="pagination" key={number}>
        {/* <a href="!#" onClick={()=> paginate(number)}>&laquo;</a> */}
        <a href="!#" onClick={()=> paginate(number)}>{number}</a>
        {/* <a href="!#" onClick={()=> paginate(number)}>&raquo;</a> */}
      </div>
    })}
    </>
  )
}
