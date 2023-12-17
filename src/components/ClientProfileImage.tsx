'use client';

import { ArrowLeftIcon, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { useFormStateStore } from '@/lib/use-form-state';
import { Input } from './ui/input';

const ClientProfileImage = () => {
  const { prevStep, formData, setFormData } = useFormStateStore();
  return (
    <div>
      <Input />

      <Button variant={'default'} size={'sm'} onClick={prevStep}>
        <ArrowLeftIcon className='w-5 h-5' />
        <span className='mr-1'>Previous</span>
      </Button>
    </div>
  );
};
export default ClientProfileImage;
