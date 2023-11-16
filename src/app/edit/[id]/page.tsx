"use client";

import FormPost from '@/components/FormPost';
import { FormInputPost } from '@/types';
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { SubmitHandler } from 'react-hook-form';
import {FC} from 'react';
import axios from 'axios';

interface EditPostPageProps {
  params: {
    id: string;
  }
}

const EditPostPage:FC<EditPostPageProps> = ({ params }) => {
  const { id } = params;

  const {data: dataPost, isLoading: isLoadingPost} = useQuery({
    queryKey: ['posts', id],
    queryFn: async function () {
      const response = await axios.get(`/api/posts/${id}`)
    return response.data;
    },
  });

      const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
          console.log(data);
      }


      if(isLoadingPost) {
        return (
          <div className='text-center'>
            <span className='loading loading-spinner loading-lg'></span>
          </div>
        )
      }

    return (
      <div className='mt-12'>
          <h1 className='text-2xl my-4 font-bold text-center'>Edit Post</h1>
          <FormPost submit={handleEditPost} initialValue={dataPost} isEditing />
      </div>
    )
    }

export default EditPostPage