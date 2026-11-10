'use client';

import { useMutation } from '@tanstack/react-query';
import { postContactInquiryApi } from '../api/submit-contact.api';

export function useSubmitContactMutation() {
  return useMutation({
    mutationFn: postContactInquiryApi,
  });
}
