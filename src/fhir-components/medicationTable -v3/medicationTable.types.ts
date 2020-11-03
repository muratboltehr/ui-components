// Generated with util/create-component.js


type Efficacy = 'highest' | 'high' |'medium' | 'low';
type Benefit = 'heart' |'kidney' |'liver' |'weight';
type Action =  'Order' | 'Discontinue' | 'Active' |'Dash';
type Risk ='alcohol' |'heart' |'kidney' |'liver' |'weight' |'hypoglycemia';

export interface MedicationTableProps {
    title?:string
    selectMultipleRows?:boolean,
    action?: Action,
    type? :'Active' | 'OnGuideline' |'OffGuideline' |'subTable',
    medicationList? : Array<TableRowProps>
}

export interface TableHeaderProps {
    isActiveTable :boolean

}
export interface ActionButtonProps{
    type:'Order' | 'Discontinue' | 'Active' |'Dash'
}

export interface EfficacyIconProps{
    name : Efficacy
}

export interface BenefitIconProps {
    name: Benefit,
    reqTooltip? : boolean;
}

export interface RiskIconProps {
    name: Risk,
    reqTooltip? : boolean;
}
export interface TableRowProps{
    medication?:{name:string,brand:string},
    medicationDetails?:{freq:string,route:string,dose?:string ,direction?:string},
    efficacy?: Efficacy,
    price?:string,
    benefits?:Array<Benefit>,
    risk?:Array<Risk>,
    action?:Action,
    onClick?:()=>void,
    isSelected?:boolean,
    isActive :boolean

}

export interface MedicationGroup {
    title: String
    selectMultipleRows?:boolean,
    onGuideline: boolean,
    additionalConsideration: String,
    action?: Action,
    isActive?: boolean,
    
    medications: [MedicationWithSupportingInfo]
}



export interface MedicationWithSupportingInfo {
    id: string,
    name: string,
    details: string,
    followUp: string,
    supportingInformation: MedicationKnowledge,
    isActive?: boolean,
    isSelected?:boolean,
    action?:Action,
    onClick?:()=>void,

}
export interface MedicationKnowledge {
    efficacy: MedicationEfficacy,
    benefits: [MedicationBenefit],
    risks: [MedicationRisk],
    wholesale: MedicationCost,
    warning: string
}
export interface MedicationEfficacy {
    code: Efficacy,
    description: string
}

export interface MedicationBenefit {
    code: Benefit,
    description: string
}

export interface MedicationRisk {
    code: Risk,
    description: string
}

export interface MedicationSupportingInfo {
    code: string,
    description: string
}
export interface MedicationCost {
    cost: number,
    currency: string
}

export interface MedicationTableGroupProps {
 
}
