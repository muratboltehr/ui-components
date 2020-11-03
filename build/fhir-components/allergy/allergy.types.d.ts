import { fhirVersions } from "../../common";
export interface allergyProps {
    rows: any[];
    fhirVersion: fhirVersions;
}
export interface allergyT2DMProps {
    rows: any[];
    fhirVersion: fhirVersions;
}
export interface allergy {
    title: string;
    recordedDate: string;
    category: string;
    type: string;
    note: string;
}
