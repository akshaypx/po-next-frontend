export interface sortedData {
  ponumber: string;
  date: string;
  details?: DetailsEntity[];
  poname: string;
  projectName: string;
  filename: string;
  id: number;
  filePath?: string;
}
export interface DetailsEntity {
  description?: string;
  amount?: string;
  raisedAmount?: string;
  dmrNo?: string;
  date?: string;
}
