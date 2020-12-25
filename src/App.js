import React, { Fragment } from "react";
import MyResume from './Pages/MyResume/MyResume';

function App(props) {
  return (
    <Fragment>
      <MyResume theme = {props.theme}/>
    </Fragment>
  );
}

export default App;
