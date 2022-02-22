import React from "react";
 
const Popup = props => {
  return (
    <div style={{zIndex:props.open?"-100":"100", transition: `all ${props.timeout / 
        1000}s`, opacity: props.open?1:0}}>
       {props.children}
   </div>
  );
};
 
export default Popup;