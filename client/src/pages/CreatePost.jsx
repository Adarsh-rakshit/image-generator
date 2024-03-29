import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import {FormField, Loader} from '../components';


const CreatePost = () => {

  const navigate = useNavigate();
  const [form, setForm] = useState({
    name:'',
    prompt:'',
    photo:'',
  })
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateImage = () => {

  }
  const handleSubmit = () => {

  };
  const handleChange = (e) => {

  };
  const handleSurpriseMe = ()=> {

  };
   return (
    <section className='max-w-7x1 mx-auto'>
      <div>
          <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[18px] max-w-[500px] ">Create your own artistic images</p>
        </div>
        <form className='mt-16 max-w3x1' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-5'>
            <FormField
              LabelName="your name"
              type="text"
              name="name"
              placeholder="new name"
              value={form.name}
              handleChange = {handleChange}
            />
            <FormField
              LabelName="Prompt"
              type="text"
              name="prompt"
              placeholder="a macro 35mm photograph of two mice in Hawaii, they're each wearing tiny swimsuits and are carrying tiny surf boards, digital art"
              value={form.prompt}
              handleChange = {handleChange}
              isSurpriseMe
              handleSurpriseMe={handleSurpriseMe}
             />
            
            <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 h-64 p-3 flex justify-center items-center">

              {form.photo ? (
                <img 
                  src={form.photo}
                  alt={form.prompt}
                  className='w-full h-full object-contain'
                />
              ): (
                <img 
                  src={preview}
                  alt='previw'
                  className='w-9/12 h-9/12 object-contain opacity-40'
                />
              )}
              {generatingImg && (
                <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'> 
                <Loader/>
                </div>
              )}
            </div>

          </div>

          <div className='mt-5 flex gap-5'>
            <button 
              type='button'
              onClick={generateImage}
              className='text-white bg-violet-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center '
         >
          {generatingImg ? 'generating....':'Generate'}
         </button>
          </div>

          <div className='mt-10'>
                <p className='mt-2 text-[#666e75] text-[14px]'>wanna share this picture as community post ?</p>
                <button type='submit' className='mt-3 text-white bg-violet-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'>Share with the community</button>
          </div>
        </form>
        
    </section>
    
  )
}

export default CreatePost