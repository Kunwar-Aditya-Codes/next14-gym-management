'use client';

import { ArrowLeftIcon, Cloud, File } from 'lucide-react';
import { Button } from './ui/button';
import { useFormStateStore } from '@/lib/use-form-state';
import Dropzone from 'react-dropzone';
import { useState } from 'react';
import { useUploadThing } from '@/lib/uploadthing';
import { Progress } from './ui/progress';
import { toast } from 'sonner';
import { trpc } from '@/trpc/client';
import SubmitButton from './SubmitButton';

const ClientProfileImage = () => {
  const { startUpload } = useUploadThing('imageUploader');

  const [isUploading, setIsUploading] = useState<boolean>(true);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const { mutate: startPolling } = trpc.file.getFile.useMutation({
    onSuccess: (file) => {
      if (file) {
        setFormData({
          profileImage: file.url,
        });
        toast.success('Image uploaded!');
      }
    },
    retry: true,
    retryDelay: 500,
  });

  const { prevStep, setFormData } = useFormStateStore();

  const startSimulatedProgress = () => {
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress >= 95) {
          clearInterval(interval);
          return prevProgress;
        }
        return prevProgress + 5;
      });
    }, 500);

    return interval;
  };

  return (
    <div className='flex flex-col w-full'>
      <Dropzone
        multiple={false}
        maxFiles={1}
        onDrop={async (acceptedFile, _, event) => {
          setIsUploading(true);

          const progressInterval = startSimulatedProgress();

          const res = await startUpload(acceptedFile);

          if (!res) {
            return toast.error('Something went wrong from here!');
          }

          const [fileResponse] = res;

          const key = fileResponse?.key;

          if (!key) {
            return toast.error('Something went wrong!');
          }

          clearInterval(progressInterval);
          setUploadProgress(100);

          startPolling({ key });
        }}
      >
        {({ getRootProps, getInputProps, acceptedFiles }) => (
          <div
            {...getRootProps()}
            className='border h-64 my-6 border-dashed border-zinc-800 rounded-lg'
          >
            <div className='flex items-center justify-center h-full w-full'>
              <label
                htmlFor='dropzone-file'
                className='flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg- hover:bg-white/5 transition'
              >
                <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                  <Cloud className='h-6 w-6 text-zinc-500 mb-2' />
                  <p className='mb-2 text-sm text-purple-500'>
                    <span className='font-semibold'>Click to upload</span> or
                    drag and drop
                  </p>
                  <p className='text-xs text-zinc-500'>
                    Profile Image (max size 4mb)
                  </p>
                </div>

                {acceptedFiles && acceptedFiles[0] ? (
                  <div className='max-w-xs  flex items-center rounded-md overflow-hidden outline outline-[1px] outline-zinc-800 divide-x divide-zinc-800'>
                    <div className='px-3 py-2 h-full grid place-items-center'>
                      <File className='h-4 w-4 text-purple-500' />
                    </div>
                    <div className='px-3 py-2 h-full text-sm truncate'>
                      {acceptedFiles[0].name}
                    </div>
                  </div>
                ) : null}

                {isUploading ? (
                  <div className='w-full mt-4 max-w-xs mx-auto'>
                    <Progress
                      indicatorColor={
                        uploadProgress === 100 ? 'bg-green-500' : ''
                      }
                      value={uploadProgress}
                      className='h-1 w-full bg-zinc-700'
                    />
                  </div>
                ) : null}

                <input
                  {...getInputProps()}
                  type='file'
                  id='dropzone-file'
                  className='hidden'
                />
              </label>
            </div>
          </div>
        )}
      </Dropzone>
      

      <SubmitButton />
    </div>
  );
};
export default ClientProfileImage;
