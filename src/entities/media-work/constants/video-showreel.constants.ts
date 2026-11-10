import type { ProductionVideoEntry } from '../types/media-work.types';

export const DRIVE_VIDEOS_FOLDER_URL =
  'https://drive.google.com/drive/folders/1YrpICIZUyFoytWByVX4HxsbxEFSI1Ira';

export const PRODUCTION_VIDEOS_LIST: readonly ProductionVideoEntry[] = [
  {
    id: 'vid-01',
    indexNumber: 1,
    title: '1. VACS (VNA) LASER MAPPING',
    driveFileId: '1xqICx7Gtk0-25pm_rRc_oPZhqoKJc1Bu',
    videoSrc: '/assets/videos/streams/vid-01.mp4',
    posterSrc: '/assets/extracted/p09-event-1-yep.webp',
  },
  {
    id: 'vid-02',
    indexNumber: 2,
    title: "2. KEY MOMENT FOR TEACHER'S DAY",
    driveFileId: '16qBnwbdWq2eA6AbEJla7SYN4fx3NyRS1',
    videoSrc: '/assets/videos/streams/vid-02.mp4',
    posterSrc: '/assets/videos/posters/vid-02.webp',
  },
  {
    id: 'vid-03',
    indexNumber: 3,
    title: '3. PHỎNG VẤN A2 MILK',
    driveFileId: '12LGs6u5ixjUTPKYcO3ZfIgSYvsZUr1py',
    videoSrc: '/assets/videos/streams/vid-03.mp4',
    posterSrc: '/assets/extracted/p11-img-x8.webp',
  },
  {
    id: 'vid-04',
    indexNumber: 4,
    title: '4. CLIP HÀNH TRÌNH 30 NĂM FINAL VACS',
    driveFileId: '19Tp8Hy_GnTsG9OBF4EqpKK_680daNIWx',
    videoSrc: '/assets/videos/streams/vid-04.mp4',
    posterSrc: '/assets/extracted/p09-event-2-anniversary.webp',
  },
  {
    id: 'vid-05',
    indexNumber: 5,
    title: '5. CSR AT RT HOLDINGS',
    driveFileId: '1_770xkMN3w0T3zsKhIhBOYmfTl4MMG2X',
    videoSrc: '/assets/videos/streams/vid-05.mp4',
    posterSrc: '/assets/videos/posters/vid-05.webp',
  },
  {
    id: 'vid-06',
    indexNumber: 6,
    title: '6. MV TEAM BUILDING',
    driveFileId: '1QamVrPg1--xUihyqrpbh5O_WgE4t8JYR',
    videoSrc: '/assets/videos/streams/vid-06.mp4',
    posterSrc: '/assets/videos/posters/vid-06.webp',
  },
  {
    id: 'vid-07',
    indexNumber: 7,
    title: '7. MÚA VACS',
    driveFileId: '1PIFYoUQZIVKh4rR_26MnixxezZiim1Ka',
    videoSrc: '/assets/videos/streams/vid-07.mp4',
    posterSrc: '/assets/extracted/p14-img-x9.webp',
  },
  {
    id: 'vid-08',
    indexNumber: 8,
    title: '8. BMB - VIDEO NỘI BỘ',
    driveFileId: '10akMSDluPjZGZ-vrcw3C_p438S9VIypW',
    videoSrc: '/assets/videos/streams/vid-08.mp4',
    posterSrc: '/assets/videos/posters/vid-08.webp',
  },
  {
    id: 'vid-09',
    indexNumber: 9,
    title: '9. OPENING SHOW',
    driveFileId: '1Tv3RdGtZeN5OxneIXYjOTP4_dHiy0iEc',
    videoSrc: '/assets/videos/streams/vid-09.mp4',
    posterSrc: '/assets/extracted/p11-img-x11.webp',
  },
] as const;
