// Generated with util/create-component.js
export interface medicationTableProps {
    selectMulitpleRows?:boolean,
    action?:'Order' | 'Discontinue' | 'Active' |'Dash',
    type? :'Active' | 'OnGuidline' |'OffGuidline' |'subTable',
    tabeData? : TableRowProps[]
}

export interface TableHeaderProps {
    isActiveTable :boolean

}
export interface ActionButtonProps{
    type:'Order' | 'Discontinue' | 'Active' |'Dash'
}
type Efficacy = 'Highest' | 'High' |'Intermediate' |'Low'
type RiskBenefitIcon = 'Heart'|'Kidney'
export interface  EfficacyIconProps{
    name :Efficacy
}

export interface TableRowProps{
    medicationName?:string,
    medicationDeatils?:{freq:string,oral:string,currentDose?:string},
    efficacy?: Efficacy,
    price?:string,
    benefits?:string[],
    risk?:string[],
    action?:'Order' | 'Discontinue' | 'Active' |'Dash',
    onClick?:()=>void
    isSelected?:boolean
}

export interface MedicationTableGroupProps {
 
}