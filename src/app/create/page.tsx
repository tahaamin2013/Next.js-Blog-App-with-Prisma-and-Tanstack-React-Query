"use client";

import BackButton from '@/components/BackButton';
import FormPost from '@/components/FormPosts'
import { FormInputPost } from '@/types'
import React from 'react'
import { SubmitHandler } from 'react-hook-form'

const create = () => {
  const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
      console.log(data);
  }
return (
  <div className='mt-12'>
    <BackButton />
      <h1 className='text-2xl my-4 font-bold text-center'>Add new Posts</h1>
      <FormPost submit={handleCreatePost} isEditing = {false}/>
  </div>
)
}

export default create