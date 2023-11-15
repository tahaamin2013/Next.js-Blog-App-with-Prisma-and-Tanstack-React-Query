"use client";

import BackButton from '@/components/BackButton';
import FormPost from '@/components/FormPost'
import { FormInputPost } from '@/types'
import { SubmitHandler } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const CreatePage = () => {
  const router = useRouter();
  const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
      console.log(data);
      createpost(data)
  };

  const { mutate: createpost } = useMutation({
    mutationFn: (newPost: FormInputPost) => {
      return axios.post('/api/posts/create', newPost)
    },
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      router.push('/');
      router.refresh()
    }
  })

return (
  <div className='mt-12'>
    <BackButton />
      <h1 className='text-2xl my-4 font-bold text-center'>Add new Posts</h1>
      <FormPost submit={handleCreatePost} isEditing= {false}/>
  </div>
)
}

export default CreatePage 