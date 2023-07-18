import React, {useState, useEffect} from 'react';

import { Loader,Card,FormField } from '../components';

const RenderCards = ({data,title}) => {
  if (data?.length > 0) {
    return data.map((post)=> <Card key={post._id} {...post} />
  )}
  
  return (
    <h2 className='mt-5 font-bold text-[#6449ff] text-xl uppercase'>{title}</h2>
  )
}

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setallPosts] = useState(null);
  const [SearchText, setSearchText] = useState('')


  return (
    <section  className="max-w-7xl mx-auto">
        <div>
          <h1 className="font-extrabold text-[#222328] text-[32px]">THE COMMUNITY SHOWCASE</h1>
        <p className="mt-2 text-[#666e75] text-[18px] max-w-[500px] ">show your own creativity<br/>Explore</p>
        </div>


        <div className="mt-16">
          <FormField />
        </div>

        <div className="mt-10">
          {loading ? (
            <div className="flex justify-center items-center">
              <Loader />
            </div>
          ) : (
            <>
               {SearchText && (
                <h2 className='font-medium text-[#666e75] text-xl mb-3'>Showing results for<span className='text-[#222328] font-extrabold'> {SearchText}</span></h2>
               )}
               <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-2'>
                  {SearchText ? (
                    <RenderCards
                      data = {[]}
                      title="no result found"
                    />
                  ):(
                    <RenderCards
                      data = {[]}
                      title ="No post found"
                    />
                  )}
               </div>
            </>
          )}
        </div>  
    </section>
  )
}

export default Home