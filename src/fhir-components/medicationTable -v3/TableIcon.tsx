import React, { Fragment } from 'react'
import TablePopover from './TablePopover'
import {EfficacyIconProps,BenefitIconProps,RiskIconProps} from './medicationTable.types'


export const EfficacyIcon :React.FC<EfficacyIconProps> =({name})=>{

    const iconName ={
        highest :'Highest',
        high:'High',
        medium:'Intermediate',
        low:'Low'
    }

    return (
        <div className='efficacy-container'>
            <img src={`/icons/t2dm_efficacy_${name}.svg`} className='t2dm-efficacy-icon'></img>
    <div>{iconName[name]}</div>
    </div>
    )
}

export const BenefitIcon:React.FC<BenefitIconProps> =({name ,reqTooltip=true})=>{

    const iconInfo ={
        alcohol :'Potential benefit for ASCVD',
        alcoholinteraction :'Potential benefit for ASCVD',
        heart:'Potential benefit for ASCVD',
        heartcardiacascvd:'Potential benefit for ASCVD',
        heartcardiacascvdhf:'Potential benefit for ASCVD',
        kidney:'Benefit to reduce progression of diabetic kidney disease (DKD)',
        kidneyrenal:'Benefit to reduce progression of diabetic kidney disease (DKD)',
        liver:'Benefit in non-alcoholic steatohepatitis (NASH)',
        liverhepatic:'Benefit in non-alcoholic steatohepatitis (NASH)',
        weight:'Potential for modest weight loss',
        weightloss:'Potential for modest weight loss'

    }

    return (
        <Fragment>
        <img src={`/icons/t2dm_${name}_benefit.svg`} id={`${name}-icon-target`} className=' t2dm-benefit-icon'></img>
    {reqTooltip && <TablePopover targetId={`${name}-icon-target`} placement='top'> {iconInfo[name]}</TablePopover> }
        </Fragment>
    )
}

export const RiskIcon:React.FC<RiskIconProps> =({name ,reqTooltip=true})=>{

    const iconInfo ={
        alcohol :'Interacts with alcohol risk',
        alcoholinteraction: 'Interacts with alcohol risk',
        heart:'Increased risk of HF',
        kidney: (<ul><li>{"Contraindicated with eGFR < 30 mL/min/1.73 m²"}</li><li>Renal dose adjustment required</li></ul>),
        kidneyrenaldoseadj: (<ul><li>{"Contraindicated with eGFR < 30 mL/min/1.73 m²"}</li><li>Renal dose adjustment required</li></ul>),
        liver:'Benefit in non-alcoholic steatohepatitis (NASH)',
        weight:'Potential weight gain risk',
        hypoglycemia:'Hypoglycemia risk'

    }

    return (
        <Fragment>
        <img src={`/icons/t2dm_${name}_risk.svg`} id={`${name}-riskicon-target`} className=' t2dm-benefit-icon'></img>
    {reqTooltip && <TablePopover targetId={`${name}-riskicon-target`} placement='top'> {iconInfo[name]}</TablePopover> }
        </Fragment>
    )
}

