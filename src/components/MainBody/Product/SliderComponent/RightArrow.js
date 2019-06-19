import React from 'react';

const RightArrow = (props) => {
  return (
    <div className="nextArrow" onClick={props.goToNextSlide}>
    <ion-icon name="arrow-dropright-circle"></ion-icon>
    </div>
  );
}

export default RightArrow;
