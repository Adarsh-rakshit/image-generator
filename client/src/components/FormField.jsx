import React from 'react'

const FormField = ({LabelName,type,name,placeholder,value,handleChange,isSurpriseMe,handleSurpriseMe}) => {
  return (  
    <div>
     <div className='flex items-center gap-2 mb-2'>
      <label htmlFor={name} className='block text-sm text-gray-900 font-medium'>
        {LabelName}
      </label>

      {isSurpriseMe && (
        <button type='button' onClick={handleSurpriseMe} className='font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[10px] text-black transform transition duration-2 hover:scale-105 hover:bg-[#6469ff] hover:text-white'>surprise me</button>
      )}
     </div>
     <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className='bg-gray-100 border-gray-300 text-gray-900 text-sm rounded-1g focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3'
     />
    </div>
  )
}

export default FormField