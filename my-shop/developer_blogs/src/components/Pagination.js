import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const Pagination = () => {

  const { page, handlePageChange, totalPages } = useContext(AppContext)

  return (
    <div className='w-full justify-center items-center border-2 fixed bottom-0 bg-white'>
      <div className='flex w-11/12 max-w-[650px] justify-between py-2'>
        <div className='flex gap-x-2'>
          {page > 1 &&
            <button
              className='rounded border-2 px-5 py-1'
              onClick={() => { handlePageChange(page - 1) }}>Previous</button>
          }
          {page < totalPages &&
            <button
              className='rounded border-2 px-5 py-1'
              onClick={() => { handlePageChange(page + 1) }} >Next</button>
          }
        </div>
        <p className='font-bold text-sm'>
          Page{page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Pagination;
