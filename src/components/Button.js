import React from 'react';
import './Public.css';

const MainButton = (props) => {
  return (
    <>
      <button className="btn btn-info btn-blue">{props.text}</button>
    </>
  )
}

export default MainButton;