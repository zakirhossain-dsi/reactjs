import React from "react";

class Tooltip extends React.Component{
    render() {
        return <p style={{position: 'absolute', left: this.props.mouseX, top: this.props.mouseY}}>You are hovering on {this.props.id}</p>;
    }
}

export default Tooltip;