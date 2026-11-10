import type { MagazineIssueEntry } from '../types/media-work.types';

export const DRIVE_MAGAZINES_FOLDER_URL =
  'https://drive.google.com/drive/folders/1qxGSi-nV6wHxwe_-NLSj8keqjaGYv1Tn?usp=sharing';

export const RT_CONNECTION_ISSUES_LIST: readonly MagazineIssueEntry[] = [
  {
    id: 'rt-19',
    issueNumber: 19,
    title: 'RT Connection — No. 19',
    publishDate: '06/2024',
    pageCount: 22,
    pagesFolder: '/assets/magazines/pages/no-19',
    localPdfUrl: '/assets/magazines/pdfs/no-19.pdf',
    driveFileId: '1HaGXx-7-cEkYSSGm-FFrb5Fxw0vkPgr1',
  },
  {
    id: 'rt-18',
    issueNumber: 18,
    title: 'RT Connection — No. 18',
    publishDate: '04–05/2024',
    pageCount: 28,
    pagesFolder: '/assets/magazines/pages/no-18',
    localPdfUrl: '/assets/magazines/pdfs/no-18.pdf',
    driveFileId: '1lRQGjBrI8llJ5Uw0XbYKybnAn5mTGt4T',
  },
  {
    id: 'rt-17',
    issueNumber: 17,
    title: 'RT Connection — No. 17',
    publishDate: '02–03/2024',
    pageCount: 50,
    pagesFolder: '/assets/magazines/pages/no-17',
    localPdfUrl: '/assets/magazines/pdfs/no-17.pdf',
    driveFileId: '16i9Xspmr1IBvZ3bRdbXu-xILtpXc9rzR',
  },
  {
    id: 'rt-16',
    issueNumber: 16,
    title: 'RT Connection — No. 16',
    publishDate: '01/2024',
    pageCount: 56,
    pagesFolder: '/assets/magazines/pages/no-16',
    localPdfUrl: '/assets/magazines/pdfs/no-16.pdf',
    driveFileId: '1alwYLWW6p7zBprnf7at3dcpUtdUt8FAR',
  },
  {
    id: 'rt-15',
    issueNumber: 15,
    title: 'RT Connection — No. 15',
    publishDate: '11/2023',
    pageCount: 52,
    pagesFolder: '/assets/magazines/pages/no-15',
    localPdfUrl: '/assets/magazines/pdfs/no-15.pdf',
    driveFileId: '1EkSO1dwc8RhFhfHLPyo-_Nr9AePqCnoA',
  },
  {
    id: 'rt-14',
    issueNumber: 14,
    title: 'RT Connection — No. 14',
    publishDate: '09–10/2023',
    pageCount: 68,
    pagesFolder: '/assets/magazines/pages/no-14',
    localPdfUrl: '/assets/magazines/pdfs/no-14.pdf',
    driveFileId: '1lBXVJjCMg4RWa4UhPwhtX3jVhuxT38gP',
  },
] as const;
