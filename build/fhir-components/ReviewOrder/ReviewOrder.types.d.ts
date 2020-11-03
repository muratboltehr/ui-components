export interface ReviewOrderProps {
    discontinuedMedic: Array<OrderMedicationProps>;
    onGuideMedic: Array<OrderMedicationProps>;
    offGuideMedic: Array<OrderMedicationProps>;
}
export interface OrderMedicationProps {
    medicationName?: {
        name?: string;
        type?: string;
    };
    medicationDetails?: {
        freq: string;
        route: string;
        dose?: string;
        fu?: string;
    };
    dosageInfo?: {
        name: string;
        guideLine: string[];
    };
}
