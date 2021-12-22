import React from "react";
import { useState, useEffect } from 'react';
import Fetch_data from '../API/Article';
import 'antd/dist/antd.css';
import Pagination_Comp from "./Pagination";

const PAGE_NUMBER = 1;

const App = () => {

  const [list, setList] = useState([]);
  const [page, setPage] = useState(PAGE_NUMBER);
  const [status, setStatus] = useState(false);

  useEffect(async () => {
    Fetch_data.get('', {
      params: { page: page }
    })
      .then(response => {
        setList([...response.data]);
        if (response.status === 200) {
          setStatus(true);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, [page])

  const renderedList = list.map((el, i) => {
    return (
      <div key={i} className='container' style={{ border: '1px solid black', margin: '10px' }}>
        <h3> Name : {el.channel} </h3>
        <span> NID : {el.nid} </span>
      </div>)
  })

  const onPageChange = (e) => {
    console.log("Hi Click : ", e);
    setPage(e);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1> Pagination </h1>
      {renderedList}
      <div>
        {status ?<Pagination_Comp onPageChange={onPageChange}/> : null
        }
      </div>
    </div>
  );
}
export default App;