export type FileItem = {
  id: string;
  name: string;
  type: "folder" | "file";
  modified: string;
  size: string;
  parent: string | null;
};

export const mockFiles: FileItem[] = [
  {
    id: "root",
    name: "My Drive",
    type: "folder",
    modified: "2023-06-01",
    size: "-",
    parent: null,
  },
  {
    id: "1",
    name: "Documents",
    type: "folder",
    modified: "2023-06-01",
    size: "-",
    parent: "root",
  },
  {
    id: "2",
    name: "Images",
    type: "folder",
    modified: "2023-05-28",
    size: "-",
    parent: "root",
  },
  {
    id: "3",
    name: "project-plan.docx",
    type: "file",
    modified: "2023-06-02",
    size: "25 KB",
    parent: "1",
  },
  {
    id: "4",
    name: "budget.xlsx",
    type: "file",
    modified: "2023-05-30",
    size: "40 KB",
    parent: "1",
  },
  {
    id: "5",
    name: "presentation.pptx",
    type: "file",
    modified: "2023-06-03",
    size: "5.2 MB",
    parent: "1",
  },
  {
    id: "6",
    name: "vacation.jpg",
    type: "file",
    modified: "2023-06-05",
    size: "2.1 MB",
    parent: "2",
  },
  {
    id: "7",
    name: "family.jpg",
    type: "file",
    modified: "2023-06-04",
    size: "3.5 MB",
    parent: "2",
  },
  {
    id: "8",
    name: "Work",
    type: "folder",
    modified: "2023-06-06",
    size: "-",
    parent: "1",
  },
  {
    id: "9",
    name: "report.pdf",
    type: "file",
    modified: "2023-06-07",
    size: "1.2 MB",
    parent: "8",
  },
];

export function getFilesByParentId(parentId: string): FileItem[] {
  return mockFiles.filter((file) => file.parent === parentId);
}
