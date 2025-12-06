export interface SubjectListType {
  id: number;
  subjectName: string;
  subjectDetails: string;
  status: string;
}[] 

export interface modalType {
  isOpen ?: boolean;
  setIsOpen: (value: boolean) => void;
}