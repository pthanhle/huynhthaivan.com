export interface ProductionVideoEntry {
  id: string;
  indexNumber: number;
  title: string;
  driveFileId: string;
  videoSrc: string;
  posterSrc: string;
}

export interface MagazineIssueEntry {
  id: string;
  issueNumber: number;
  title: string;
  publishDate: string;
  pageCount: number;
  pagesFolder: string;
  localPdfUrl: string;
  driveFileId: string;
}
