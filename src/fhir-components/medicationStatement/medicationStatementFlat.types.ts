
export interface medication {
  name: string;
  dose: string;
  route: string;
  frequency: string;
  startDate: string;
}

export interface medicationStatementFlatProps {
  rows: medication[];
  caption: string;
}



