import { fhirVersions } from "../../common";
export interface problemListProps {
    rows: any[];
    fhirVersion?: fhirVersions;
}
export interface problemListT2DMProps {
    rows: Condition[];
    fhirVersion?: fhirVersions;
}
export interface Condition {
    id: string;
    name: string;
    code: string;
    recordedOn: string;
    status: string;
}
