'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useSubmitContactMutation } from '../model/use-submit-contact.mutation';
import {
  contactFormSchema,
  type ContactFormValues,
} from '../schemas/contact-form.schema';

export function useContactDrawerForm() {
  const mutation = useSubmitContactMutation();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      organization: '',
      email: '',
      phone: '',
      inquiryCategory: 'FULLTIME_PR_CSR',
      message: '',
      honeypot: '',
    },
  });

  const handleFormSubmit = form.handleSubmit(async (values) => {
    await mutation.mutateAsync(values);
    form.reset();
  });

  return {
    form,
    mutation,
    handleFormSubmit,
  };
}
