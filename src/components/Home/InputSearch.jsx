import React from 'react'
import { useForm } from 'react-hook-form'

const InputSearch = () => {

  const { handleSubmit, register, reset } = useForm()

  const submit = data => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(submit)} className='form-home'>
      <input className='input-home' placeholder='What are you looking for?' type="text" {...register('searchText')} />
      <button className='btn-home'><i className="fa-solid fa-magnifying-glass"></i></button>
    </form>
  )
}

export default InputSearch