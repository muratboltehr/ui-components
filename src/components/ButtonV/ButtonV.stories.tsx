import React from "react";
import ButtonV from "./ButtonV";

export default {
  title: "ButtonV",
};

 const Active = () => (
  <div>
    <ButtonV type="button" active intent="primary">
      Primary Active
    </ButtonV>{" "}
    &nbsp;
    <ButtonV type="button" intent="success">
      Success Active
    </ButtonV>
    &nbsp;
    <ButtonV type="button" intent="danger">
      Danger Active
    </ButtonV>
    &nbsp;
    <ButtonV type="button" intent="warning">
      Warning Active
    </ButtonV>
  </div>
);

 const Disabled = () => (
  <div>
    <ButtonV type="button" disabled intent="primary">
      Primary
    </ButtonV>{" "}
    &nbsp;
    <ButtonV type="button" disabled intent="success">
      Success
    </ButtonV>
    &nbsp;
    <ButtonV type="button" disabled intent="danger">
      Danger
    </ButtonV>
    &nbsp;
    <ButtonV type="button" disabled intent="warning">
      Warning
    </ButtonV>
  </div>
);

const Size = () => (
  <div>
    <ButtonV type="button" size="small" intent="primary">
      Primary small
    </ButtonV>{" "}
    &nbsp;
    <ButtonV type="button" size="medium" intent="success">
      Success medium
    </ButtonV>
    &nbsp;
    <ButtonV size="large" type="button" intent="danger">
      Danger large
    </ButtonV>
    &nbsp;
    <ButtonV size="none" type="button" intent="warning">
      Warning none
    </ButtonV>
  </div>
);

 const Minimal = () => (
  <div>
    <ButtonV type="button" minimal intent="primary">
      Primary
    </ButtonV>{" "}
    &nbsp;
    <ButtonV type="button" minimal intent="success">
      Success
    </ButtonV>
    &nbsp;
    <ButtonV type="button" minimal intent="danger">
      Danger
    </ButtonV>
    &nbsp;
    <ButtonV type="button" minimal intent="warning">
      Warning
    </ButtonV>
  </div>
);

const Outlined = () => (
  <div>
    <ButtonV type="button" outlined intent="primary">
      Primary
    </ButtonV>{" "}
    &nbsp;
    <ButtonV type="button" outlined intent="success">
      Success
    </ButtonV>
    &nbsp;
    <ButtonV type="button" outlined intent="danger">
      Danger
    </ButtonV>
    &nbsp;
    <ButtonV type="button" outlined intent="warning">
      Warning
    </ButtonV>
  </div>
);

const Fill = () => (
  <div>
    <ButtonV type="button" fill intent="primary">
      Primary
    </ButtonV>{" "}
    &nbsp;
    <ButtonV type="button" fill intent="success">
      Success
    </ButtonV>
    &nbsp;
    <ButtonV type="button" fill intent="danger">
      Danger
    </ButtonV>
    &nbsp;
    <ButtonV type="button" fill intent="warning">
      Warning
    </ButtonV>
  </div>
);


const LeftIcon = () => (
  <div>
    <ButtonV type="button" leftIcon="save" intent="primary">
      Primary Active
    </ButtonV>{" "}
    &nbsp;
    <ButtonV type="button" leftIcon="save" intent="success">
      Success Active
    </ButtonV>
    &nbsp;
    <ButtonV type="button" leftIcon="save" intent="danger">
      Danger Active
    </ButtonV>
    &nbsp;
    <ButtonV type="button" leftIcon="save" intent="warning">
      Warning Active
    </ButtonV>
  </div>
);

const RightIcon = () => (
  <div>
    <ButtonV type="button" rightIcon="save" intent="primary">
      Primary Active
    </ButtonV>{" "}
    &nbsp;
    <ButtonV type="button" rightIcon="save" intent="success">
      Success Active
    </ButtonV>
    &nbsp;
    <ButtonV type="button" rightIcon="save" intent="danger">
      Danger Active
    </ButtonV>
    &nbsp;
    <ButtonV type="button" rightIcon="save" intent="warning">
      Warning Active
    </ButtonV>
  </div>
);

const Loading = () => (
  <div>
    <ButtonV type="button" loading rightIcon="save" intent="primary">
      Primary Active
    </ButtonV>{" "}
    &nbsp;
    <ButtonV type="button" loading rightIcon="save" intent="success">
      Success Active
    </ButtonV>
    &nbsp;
    <ButtonV type="button" loading rightIcon="save" intent="danger">
      Danger Active
    </ButtonV>
    &nbsp;
    <ButtonV type="button" loading rightIcon="save" intent="warning">
      Warning Active
    </ButtonV>
  </div>
);
