import React from "react";

class DailyChart extends React.Component{
    constructor(props){
        super(props);
    }

    static getID = () => "DailyChart";

    render() {
        return <div style={{width:100, height:80, backgroundColor:'yellow'}} />;
    }
}

export default DailyChart;