import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { FormSchema } from './schema'

interface FormState {
  currentStep: number
  formData: Partial<FormSchema>
  setCurrentStep: (step: number) => void
  updateFormData: (data: Partial<FormSchema>) => void
  resetForm: () => void
}

export const useFormStore = create<FormState>()(
  persist(
    (set) => ({
      currentStep: 0,
      formData: {},
      setCurrentStep: (step: number) => set({ currentStep: step }),
      updateFormData: (data: Partial<FormSchema>) => 
        set((state) => ({
          formData: { ...state.formData, ...data }
        })),
      resetForm: () => 
        set({
          currentStep: 0,
          formData: {}
        })
    }),
    {
      name: 'form-storage',
    }
  )
)
