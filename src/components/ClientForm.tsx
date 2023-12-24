'use client';

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

  return (
    <>
      {currentStep === 1 ? <ClientBasicDetails /> : null}
      {currentStep === 2 ? <ClientProfileImage /> : null}
    </>
  );
};
export default ClientForm;
