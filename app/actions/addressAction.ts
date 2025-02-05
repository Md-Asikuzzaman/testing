'use server';

import { z } from 'zod';

interface AddressFormData {
  username: string;
  email: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

const addressSchema = z.object({
  username: z.string().min(1, 'Username is required!'),
  email: z.string().min(1, 'Email is required!'),
  city: z.string().min(1, 'City is required!'),
  state: z.string().min(1, 'State is required!'),
  zip: z.string().min(5, 'ZIP code must be at least 5 chars'),
  country: z.string().min(1, 'Country is required!'),
});

export async function addressAction(prevState: any, formData: FormData) {
  await new Promise((resolve, reject) => setTimeout(resolve, 500));

  try {
    const rawData: AddressFormData = {
      username: formData.get('username') as string,
      email: formData.get('email') as string,
      city: formData.get('city') as string,
      state: formData.get('state') as string,
      zip: formData.get('zip') as string,
      country: formData.get('country') as string,
    };

    const validateData = addressSchema.safeParse(rawData);

    if (!validateData.success) {
      return {
        success: false,
        message: 'Please fix the errors in the form!',
        errors: validateData.error.flatten().fieldErrors,
        inputs: rawData,
      };
    }

    return {
      success: true,
      message: 'Your address has been saved',
    };
  } catch (error) {}
}
