// Generated with util/create-component.js
import React, { useState } from "react";

import { ReviewOrderProps,OrderMedicationProps } from "./ReviewOrder.types";

import "./ReviewOrder.scss";
import Overlay from "../../components/Overlay/Overlay";
import { Classes } from "../../common";
import Button from "../../components/Button/Button";

export class ReviewOrder extends React.PureComponent<ReviewOrderProps> {
  state = {
    isOpen: false,
    offGuideExplain: this.props.offGuideMedic.map((item, index) => {
      const { medicationName } = item;
      const key = medicationName.type;
      return { [key]: "" };
    }),
  };

  toggleOverlay = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    const {
      discontinuedMedic = [],
      offGuideMedic = [],
      onGuideMedic = [],
    } = this.props;
    const noOfOrder: number = offGuideMedic.length + onGuideMedic.length;
    const noOfDiscontinued: number = discontinuedMedic.length;
    const getDiscontinuedMedic = () => {
      return (
        <div className="discontinue-container">
          <div className="title">
          <span className="order-badge">1</span>
            Medication Modification</div>
          <div className="order-container">
            {discontinuedMedic.map((item, index) => {
              const { medicationName } = item;
              return (
                <div className="medic-row" key={index}>
                  <div className="medic-name">
                    <b>{medicationName.name}</b>
                    <div>{`(${medicationName.type})`}</div>
                  </div>
                  <div className="order-description">
                    {" "}
                    <b>Discontinue</b> this medication{" "}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    };
    const renderNewOrder = () => {
      
      return (
        <div className="new-order-container">
          <div className="title pb-8">
      <span className="order-badge">{noOfDiscontinued == 0 ? 1 : 2}</span>
            
            New Orders</div>
          <div className="order-container">
            <NewOnGuideMedication medicationList={onGuideMedic}></NewOnGuideMedication>
            <NewOffGuideMedication medicationList={offGuideMedic}></NewOffGuideMedication>
          </div>
        </div>
      );
    };
    return (
      <>
        <button className="review-btn" onClick={this.toggleOverlay}>
          Review order{" "}
          {noOfOrder != 0 && <span className="badge">{noOfOrder}</span>}
        </button>
        <Overlay
          isOpen={this.state.isOpen}
          className={Classes.OVERLAY_SCROLL_CONTAINER}
          hasBackdrop={true}
          canEscapeKeyClose={true}
          canOutsideClickClose={true}
          onClose={this.toggleOverlay}
          transitionDuration={100}
        >
          <div className="overlay-container">
            <div className="review-container">
              <div className="review-header">
                <div>T2DM Medication Orders Confirmation</div>
                <div>
                  <Button
                    className="close-btn"
                    onClick={this.toggleOverlay}
                    minimal={true}
                  >
                    {" "}
                    close{" "}
                  </Button>
                </div>
              </div>

              <div className="review-body">
                {noOfOrder + noOfDiscontinued == 0 ? (
                  <div className='order-container'>
                    <div> No medications were ordered.</div>
                    <div>
                      {" "}
                      Please review the medication recommendations and order a
                      medication in an <b>on guideline drug </b> class.
                    </div>
                  </div>
                ) : (
                  <React.Fragment>
                    <div className="discontinue-info pb-8">
                      NOTE: These orders must be completed manually in your EHR.
                  </div>
                    
                    {noOfDiscontinued != 0 && getDiscontinuedMedic()}
                    {noOfOrder != 0 && renderNewOrder()}
                    {noOfOrder != 0 && (
                      <React.Fragment>
                        <div className="title">
                        <span className="order-badge">{noOfDiscontinued == 0 ? 2 : 3}</span>

                          FOLLOW-UP APPOINTMENTS</div>
                        <div className='order-container'>
                          Return patient to clinic in <b>2 weeks</b> to assess efficacy
                          and side effects.
                        </div>
                      </React.Fragment>
                    )}
                  </React.Fragment>
                )}
              </div>
              <div className="review-footer action-coloum">
                <button
                  type="button"
                  onClick={this.toggleOverlay}
                  className="save-btn "
                >
                  {noOfOrder + noOfDiscontinued != 0
                    ? "exit t2dm"
                    : "Edit"}
                </button>
              </div>
            </div>
          </div>
        </Overlay>
      </>
    );
  }
}


const NewOnGuideMedication =({medicationList}:{medicationList:OrderMedicationProps[]})=>{
  
  if(medicationList.length ===0 || medicationList === null) return null

  return <React.Fragment>
    {medicationList.map((item, index) => {
    const {
      medicationName,
      medicationDetails,
      dosageInfo = null,
    } = item;
    return (
      <div className="medic-row" key={index}>
        <div className="medic-name">
          <b>{medicationName.type}</b>
        </div>
        <div className="order-description">
          {" "}
          {`${medicationDetails.dose} ${medicationDetails.freq} ${medicationDetails.route}`}
          <div>{`F/U in: ${medicationDetails.fu}`}</div>
        </div>
      </div>
    )})}
  </React.Fragment>;
}

const NewOffGuideMedication:React.FC<{medicationList:OrderMedicationProps[]}> =({medicationList, ...restProps})=>{
  if(medicationList.length ===0 || medicationList === null) return null
  // Getting  offGuideline explanation input and keep it in the array
  const[explanationText , setExplanation] =  useState(medicationList.map((item, index) => {
    const { medicationName } = item;
    const key = medicationName.type;
    return { [key]: "" };
  }))

  const updateText = (value, key, index) => {
    const newArray = explanationText.map((item, ind) => {
      if (ind == index) {
        return { [key]: value };
      }
      return item;
    });
    console.log({ newArray });
    setExplanation([...newArray]);
  };

  return(<React.Fragment>
    {medicationList.map((item, index) => {
              const {
                medicationName,
                medicationDetails,
                dosageInfo = null,
              } = item;
              const key = medicationName.type;
              return (
                <div className="medic-row" key={index}>
                  <div className="medic-name">
                    <b>{medicationName.type}</b>
                  </div>
                  <div className="order-description">
                    {" "}
                    {`${medicationDetails.dose} ${medicationDetails.freq} ${medicationDetails.route}`}
                    <div>{`F/U in: ${medicationDetails.fu}`}</div>
                    <div className="explain-input">
                      Explain why you are selecting this <b>off guideline</b>{" "}
                      choice:
                      <textarea
                        value={explanationText[index][key]}
                        onChange={(e) => {
                          updateText(e.target.value, key, index);
                        }}
                        className="form-control"
                      ></textarea>
                    </div>
                  </div>
                </div>
              );
            })}

  </React.Fragment>)
}

export default ReviewOrder;
