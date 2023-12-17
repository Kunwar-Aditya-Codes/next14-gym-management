import { create } from 'zustand';
import { TClientValidator } from './validators/client-validator';

type FormState = {
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
  formData: TClientValidator;
  setFormData: (data: Partial<TClientValidator>) => void;
};

export const useFormStateStore = create<FormState>()((set) => ({
  currentStep: 1,
  formData: {
    age: 0,
    clientName: '',
    email: '',
    height: 0,
    phoneNumber: '',
    profileImage: '',
    weight: 0,
  },

  setFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),

  nextStep: () =>
    set((state) => ({
      currentStep: state.currentStep + 1,
    })),

  prevStep: () =>
    set((state) => ({
      currentStep: state.currentStep - 1,
    })),
}));
