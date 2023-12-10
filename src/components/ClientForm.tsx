'use client';

import { useForm } from 'react-hook-form';
import {
  ClientValidator,
  TClientValidator,
} from '@/lib/validators/client-validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const ClientForm = () => {
  const form = useForm<TClientValidator>({
    defaultValues: {
      clientName: '',
      age: '0',
      email: '',
      height: 0,
      phoneNumber: '',
      weight: 0,
    },

    resolver: zodResolver(ClientValidator),
  });

  const onSubmit = (values: TClientValidator) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <FormField
          control={form.control}
          name='clientName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder='John Doe'
                  {...field}
                  className=' focus-visible:ring-indigo-500 '
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='age'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input {...field} className=' focus-visible:ring-indigo-500 ' />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} className=' focus-visible:ring-indigo-500 ' />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='height'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Height (cm)</FormLabel>
              <FormControl>
                <Input {...field} className=' focus-visible:ring-indigo-500 ' />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='weight'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Weight (kg)</FormLabel>
              <FormControl>
                <Input {...field} className=' focus-visible:ring-indigo-500 ' />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='phoneNumber'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact</FormLabel>
              <FormControl>
                <Input {...field} className=' focus-visible:ring-indigo-500 ' />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
};
export default ClientForm;
