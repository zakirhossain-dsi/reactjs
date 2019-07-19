import React from 'react'

export const Expandable = ComposedComponent =>
    class extends React.Component{
        constructor(props){
            super(props);
            const collapsed = props.hidden && props.hidden === true ? true : false
            this.state = {collapsed};
        }

        expandCollapse = () => {
           let collapsed = !this.state.collapsed;
           this.setState({collapsed})
        }

        render() {
            return <ComposedComponent expandCollapse = {this.expandCollapse} {...this.props} {...this.state} />
        }
    }