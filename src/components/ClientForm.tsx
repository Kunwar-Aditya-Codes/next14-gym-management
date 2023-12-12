'use client';

import { useForm } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';
import {
  ClientValidator,
  TClientValidator,
} from '@/lib/validators/client-validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { trpc } from '@/trpc/client';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const ClientForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TClientValidator>({
    resolver: zodResolver(ClientValidator),
  });

  const { mutate: addClient, isLoading } = trpc.admin.createClient.useMutation({
    onSuccess: ({ success }) => {
      if (success) {
        toast.success('New client added successfully!', {
          style: {
            textAlign: 'center',
          },
        });
        reset();
      }
    },

    onError: ({ message }) => {
      if (message === 'UNAUTHORIZED') toast.error('Sign in to add clients!');

      if (message === 'CONFLICT') toast.error('Email already registered!');
    },
  });

  const onSubmit = (values: TClientValidator) => {
    addClient({
      ...values,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='grid gap-y-4'>
      <div className='grid gap-y-2'>
        <Label htmlFor='clientName'>Client name</Label>
        <Input
          id='clientName'
          className={cn({
            'focus-visible:ring-red-500': errors?.clientName,
          })}
          {...register('clientName')}
        />
        {errors?.clientName && (
          <p className='text-xs text-red-500'>{errors.clientName.message}</p>
        )}
      </div>
      <div className='grid gap-y-2'>
        <Label htmlFor='email'>Email</Label>
        <Input
          id='email'
          className={cn({
            'focus-visible:ring-red-500': errors.email,
          })}
          {...register('email')}
        />
        {errors?.email && (
          <p className='text-xs text-red-500'>{errors.email.message}</p>
        )}
      </div>
      <div className='grid gap-y-2'>
        <Label htmlFor='age'>Age</Label>
        <Input
          id='age'
          defaultValue={0}
          className={cn({
            'focus-visible:ring-red-500': errors.age,
          })}
          {...register('age', {
            setValueAs: (v) => parseInt(v),
          })}
        />
        {errors?.age && (
          <p className='text-xs text-red-500'>{errors.age.message}</p>
        )}
      </div>

      <div className='grid gap-y-2'>
        <Label htmlFor='height'>Height</Label>
        <Input
          defaultValue={0}
          id='height'
          className={cn({
            'focus-visible:ring-red-500': errors.height,
          })}
          {...register('height', {
            setValueAs: (v) => parseInt(v),
          })}
        />
        {errors?.height && (
          <p className='text-xs text-red-500'>{errors.height.message}</p>
        )}
      </div>

      <div className='grid gap-y-2'>
        <Label htmlFor='weight'>Weight</Label>
        <Input
          id='weight'
          defaultValue={0}
          className={cn({
            'focus-visible:ring-red-500': errors.weight,
          })}
          {...register('weight', {
            setValueAs: (v) => parseInt(v),
          })}
        />
        {errors?.weight && (
          <p className='text-xs text-red-500'>{errors.weight.message}</p>
        )}
      </div>

      <div className='grid gap-y-2'>
        <Label htmlFor='phoneNumber'>Phone</Label>
        <Input
          id='phoneNumber'
          className={cn({
            'focus-visible:ring-red-500': errors.phoneNumber,
          })}
          {...register('phoneNumber')}
        />
        {errors?.phoneNumber && (
          <p className='text-xs text-red-500'>{errors.phoneNumber.message}</p>
        )}
      </div>
      <Button type='submit' disabled={isLoading}>
        {isLoading ? <Loader2 className='w-4 h-4 animate-spin mr-1.5' /> : null}
        Submit
      </Button>
    </form>
  );
};
export default ClientForm;
