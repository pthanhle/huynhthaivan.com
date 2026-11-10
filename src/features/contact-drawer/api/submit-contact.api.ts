import type { LeadApiResponse } from '@/shared/types/lead.types';
import type { ContactFormValues } from '../schemas/contact-form.schema';

export async function postContactInquiryApi(
  values: ContactFormValues,
): Promise<LeadApiResponse> {
  const response = await fetch('/api/leads', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...values,
      locale: 'vi',
    }),
  });

  const data = (await response.json()) as LeadApiResponse;
  if (!response.ok || !data.ok) {
    throw new Error(data.message || 'Không thể gửi tin nhắn.');
  }

  return data;
}
