'use client';

import { useForm } from 'react-hook-form';
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
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { toast } from 'sonner';
import { useUploadThing } from '@/lib/uploadthing';
import { useFormStateStore } from '@/lib/use-form-state';
import ClientBasicDetails from './ClientBasicDetails';
import ClientProfileImage from './ClientProfileImage';

const ClientForm = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   reset,
  // } = useForm<TClientValidator>({
  //   resolver: zodResolver(ClientValidator),
  // });

  const { currentStep } = useFormStateStore();

  // // TODO: Image upload functionality
  // const { startUpload } = useUploadThing('imageUploader');

  // const uploadImage = async (acceptedFile: File[]) => {
  //   const res = await startUpload(acceptedFile);

  //   if (!res) {
  //     return toast.error('Something went wrong');
  //   }

  //   const [fileResponse] = res;

  //   console.log(fileResponse);
  // };

  // const utils = trpc.useUtils();

  // const { mutate: addClient, isLoading } = trpc.admin.createClient.useMutation({
  //   onSuccess: ({ success }) => {
  //     if (success) {
  //       toast.success('New client added successfully!', {
  //         style: {
  //           textAlign: 'center',
  //         },
  //       });
  //       utils.admin.getClients.invalidate();
  //       reset();
  //     }
  //   },

  //   onError: ({ message }) => {
  //     if (message === 'UNAUTHORIZED') toast.error('Sign in to add clients!');

  //     if (message === 'CONFLICT') toast.error('Email already registered!');
  //   },
  // });

  // const onSubmit = (values: TClientValidator) => {
  //   addClient({
  //     ...values,
  //   });
  // };

  return (
    <>
      {currentStep === 1 ? <ClientBasicDetails /> : null}
      {currentStep === 2 ? <ClientProfileImage /> : null}
    </>
  );
};
export default ClientForm;
