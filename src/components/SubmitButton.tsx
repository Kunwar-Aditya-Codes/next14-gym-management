'use client';

import { useFormStateStore } from '@/lib/use-form-state';
import { trpc } from '@/trpc/client';
import { Loader2 } from 'lucide-react';
import { Button } from './ui/button';

const SubmitButton = () => {
  const { formData } = useFormStateStore((state) => state);

  const isFormDataEmpty = Object.values(formData).some((value) => !value);

  const { isLoading, mutate } = trpc.admin.createClient.useMutation({
    onSuccess: ({ success }) => {
      console.log(success);
    },
  });

  const handleSubmit = () => {
    mutate({
      ...formData,
    });
  };

  return (
    <div className='w-full flex-grow'>
      <Button
        variant={'default'}
        onClick={handleSubmit}
        className='w-full'
        disabled={isFormDataEmpty || isLoading}
      >
        {isLoading ? (
          <Loader2 className='w-5 h-5 animate-spin ' />
        ) : (
          <>Click to submit</>
        )}
      </Button>
    </div>
  );
};
export default SubmitButton;
