import React from 'react'

function Alert(props) {
const Capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}
return (
props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    {/* <strong>Holy guacamole!</strong> You should check in on some of those fields below. */}
    <strong>{Capitalize(props.alert.type)}</strong>: {props.alert.msg}
    {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>
)
}

export default Alert
