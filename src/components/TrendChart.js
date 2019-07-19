import React from "react";

class TrendChart extends React.Component{
    constructor(props){
        super(props);
    }

    static getID = () => "TrendChart";

    render() {
        return <div style={{width:100, height:80, backgroundColor:'blue'}} />
    }
}

export default TrendChart;