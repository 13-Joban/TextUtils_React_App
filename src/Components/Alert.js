import React from 'react'

export default function Alert(props) {
    const captilize = (word) => {
        let  low = word.toLowerCase();
        return low.charAt(0).toUpperCase() + low.slice(1);
    }
  return (
    <div style={{height: '50px'}}>
   { props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{captilize(props.alert.type)} </strong> {props.alert.msg}
</div>}
   </div>
  )
}
