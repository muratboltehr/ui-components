// Generated with util/create-component.js

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Create a inteface for props and then cast it to the commponent, 
//only the props will be displayed in the storybook documentaion page//(Remove me after fixing)<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


import React, {useState} from "react";
import Toast from "./Toast";
import {storiesOf} from '@storybook/react';
import {Button} from '../Button/Button';
import {Intent} from '../../common/'
import {
    withKnobs,
    text,
    boolean,
    number,
    select,
  } from "@storybook/addon-knobs";
import { AbstractPureComponent2 } from "../../common";
export default {
    title: "Foundations/Toast",
    component:Toast,
    decorators: [withKnobs]
};


export const ToastWithKnobs = () =>{
    const [ToastList,setToastList] = useState([]);
    const [propsData,setPropsData] = useState({
        
        position: "right",
        timeout:5
    })
    
    const addToast = (intent)=>{
        const id = Math.floor((Math.random()*101)+1);
        
        var intentName = intent.currentTarget.dataset["intent"];
        switch(intentName){
            case "primary":{
                var back = '#137CBD';
                break;
            }
            case "danger":{
                var back = '#db3737';
                break;
            }
            case "success":{
                var back = '#0f9960';
                break;
            }
            case "warning":{
                var back = '#d9822b';
                break;
            }
            
            
        }
        console.log(intent.currentTarget.dataset["intent"],back);
        var toastProperties={
            id,
            title: intentName,
            description: 'This is a '+intentName+' toast component',
            backgroundColor: back,
          
        };
        console.log(toastProperties);
        setToastList([...ToastList,toastProperties]);
        console.log(ToastList);



    }
    const renderToast=()=>{
        console.log({ToastList});
        return(
            <Toast
                toastList={ToastList}
                position={select("Position",["top","top-right","top-left","bottom","bottom-left","bottom-right"],"top")}
                autoDelete={boolean("AutoDelete",true)}
                dismissTime ={number("Dismiss Time",5000)}
                
            />
            
        )
    }

    return(
            <div>
                {renderToast()}
                <div style={{paddingTop:"30%", paddingLeft:"30%"}}>
                    <Button intent="primary" data-intent="primary" onClick={(e)=>addToast(e)}>Primary</Button>
                    <Button intent="danger" data-intent="danger" onClick={(e)=>addToast(e)}>Danger</Button>
                    <Button intent="success" data-intent="success" onClick={(e)=>addToast(e)}>Success</Button>
                    <Button intent="warning" data-intent="warning" onClick={(e)=>addToast(e)}>Warning</Button>
                </div>
            </div>
    )
}





// export interface IToastExampleState {
//     ToastList?: [];
//     position?: string;
//     timeout?: number;
// }
//  class ToastStory extends React.Component<IToastExampleState>{
//     constructor(props:IToastExampleState){
//         super(props);
//         this.state={
//             ToastList:[],
//             position:"top",
//             timeout:5
//         }
//         this.addToast.bind(this);
//     }


//     addToast(intent){
//         // console.log(intent.target);
        
//         const id = Math.floor((Math.random()*101)+1);
//         var toastProperties = {
//             id,
//             intent
//         }
//         // console.log(this.state);
//         // console.log("addToast");
//         var list = this.state["ToastList"];
//         list.push(toastProperties);
//         this.setState({ToastList:list});
//         console.log(this.state);

//     }
//     renderToast(){
//         return(
            // <Toast 
            // ToastList={this.state["ToastList"]}
            // position= {this.state["position"]}
            // timeout={this.state["timeout"]}>

            // </Toast>
//         )
//     }

//     render(){
//         return (
            // <div>
            // {this.renderToast()}
            // <div>
            //     <Button intent="primary" data-intent="primary" onClick={(e)=>this.addToast(e)}>Primary</Button>
            //     <Button intent="danger" onClick={(e)=>this.addToast(e)}>Danger</Button>
            //     <Button intent="success" onClick={(e)=>this.addToast(e)}>Sucess</Button>
            //     <Button intent="warning" onClick={(e)=>this.addToast(e)}>Warning</Button>
            // </div>
            // </div>
//         )
//     }
// }

// storiesOf("Toast", module)
// .add("NormalToast",()=>{
//     return(
//         <ToastStory/>
//     )
// })