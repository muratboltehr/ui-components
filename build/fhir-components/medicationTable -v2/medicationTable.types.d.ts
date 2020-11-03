declare type Efficacy = 'highest' | 'high' | 'medium' | 'low';
declare type Benefit = 'heart' | 'kidney' | 'liver' | 'weight';
declare type Action = 'Order' | 'Discontinue' | 'Active' | 'Dash';
declare type Risk = 'alcohol' | 'heart' | 'kidney' | 'liver' | 'weight' | 'hypoglycemia';
export interface MedicationTableProps {
    title?: string;
    selectMultipleRows?: boolean;
    action?: Action;
    type?: 'Active' | 'OnGuideline' | 'OffGuideline' | 'subTable';
    medicationList?: Array<TableRowProps>;
}
export interface TableHeaderProps {
    isActiveTable: boolean;
}
export interface ActionButtonProps {
    type: 'Order' | 'Discontinue' | 'Active' | 'Dash';
}
export interface EfficacyIconProps {
    name: Efficacy;
}
export interface BenefitIconProps {
    name: Benefit;
    reqTooltip?: boolean;
}
export interface RiskIconProps {
    name: Risk;
    reqTooltip?: boolean;
}
export interface TableRowProps {
    medication?: {
        name: string;
        brand: string;
    };
    medicationDetails?: {
        freq: string;
        route: string;
        dose?: string;
        direction?: string;
    };
    efficacy?: Efficacy;
    price?: string;
    benefits?: Array<Benefit>;
    risk?: Array<Risk>;
    action?: Action;
    onClick?: () => void;
    isSelected?: boolean;
    isActive: boolean;
}
export interface MedicationTableGroupProps {
}
export {};
