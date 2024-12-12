import React, {useContext}  from 'react';
import Details from '@/components/Details';

function Home() {
  return (

    <>
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className='text-2xl font-bold mb-4'>Schedule Meetings</h1>
      <Details />
    </div>
    </>
    
  )
}

export default Home;
