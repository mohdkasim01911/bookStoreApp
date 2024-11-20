import React from 'react';
import list from "../../public/list.json";
import Cards from './Cards';
import { Link } from 'react-router-dom';
function Course() {
   
  console.log(list)

  return (
     <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 my-20'>
        <div className='item-center justify-center text-center'>
          <h1 className='text-2xl font-semibold md:text-4xl'>We're delighted to have you <span className='text-pink-500'> here! :)</span></h1>
          <p className='mt-12'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        <Link to={"/"}><button className='mt-6 text-white bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-700'>Back</button></Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            list.map((item)=>(
           
               <Cards key={item.id} item={item} />

            ))
          }
        </div>
     </div>
  )
}

export default Course