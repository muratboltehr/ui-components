import React, { Component } from "react";
import { TSelectableItemProps, createSelectable } from 'react-selectable-fast';
import {Question} from './Question';
import { AbstractPureComponent2 } from "../../common";


export class SelectableDiv extends Component<TSelectableItemProps>{
    render(){
        const { selectableRef, isSelected, isSelecting, children } = this.props


        return <div ref={selectableRef}>{children}</div>
    }

}

export default createSelectable(SelectableDiv);