import React from 'react'
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';
import Header from '../components/Header';
import { useLocation, useNavigate } from 'react-router-dom';

const TagPage = () => {

  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);

  return (
    <div>
      <Header />
      <div>
        <button
          onClick={() => navigation(-1)}
        >
          Back
        </button>
        <h2>
          Blogs Tagged <span>#{tag}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  )
}

export default TagPage