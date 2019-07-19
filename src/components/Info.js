import React from "react";

class Info extends React.Component{
    constructor(props){
        super(props);
    }

    static getID = () => "Info";

    render() {
        return <div style={{width:100, height:80, backgroundColor:'red'}} />;
    }
}

export default Info;