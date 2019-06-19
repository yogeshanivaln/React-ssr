
import React from 'react';

const LeftArrow = (props) => {
  return (
    <div className="backArrow" onClick={props.goToPrevSlide}>
    <ion-icon name="arrow-dropleft-circle"></ion-icon>
    </div>
  );
}

export default LeftArrow;