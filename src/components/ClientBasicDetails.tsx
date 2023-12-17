'use client';

import { cn } from '@/lib/utils';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useForm } from 'react-hook-form';
import { useFormStateStore } from '@/lib/use-form-state';
import {
  ClientValidator,
  TClientValidator,
} from '@/lib/validators/client-validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from './ui/button';
import { ArrowRightIcon } from 'lucide-react';

const ClientBasicDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TClientValidator>({
    resolver: zodResolver(ClientValidator),
  });
  const { formData, setFormData, nextStep } = useFormStateStore(); // assuming your useCart hook has a setFormData method

  const onSubmit = (data: TClientValidator) => {
    setFormData(data);
    nextStep();
  };

  return (
    <form className='grid gap-y-4' onSubmit={handleSubmit(onSubmit)}>
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

      <Button variant={'default'} size={'sm'} type='submit'>
        <span className='mr-1'>Next</span>
        <ArrowRightIcon className='w-5 h-5' />
      </Button>
    </form>
  );
};
export default ClientBasicDetails;
