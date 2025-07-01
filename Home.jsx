import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
        <div className='flex justify-center py-3'>
                <div className='space-x-4 mt-5'>
                    <button><Link to ='/login' className='bg-red-800 text-md text-white py-4 px-6 font-bold rounded-xl'>Login Button</Link></button>
                    <button><Link to = '/products' className='bg-red-800 text-md text-white py-4 px-6 font-bold rounded-xl'>Product List</Link></button>
                </div>
        </div>
    </>
  )
}

export default Home