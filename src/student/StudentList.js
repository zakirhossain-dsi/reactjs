import React from 'react';

class StudentList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: [{"id":10, "name":"Zakir", "age":"30"}, {"id":20, "name":"Saiful", "age":"18"}, {"id":30, "name":"Parveen", "age":"34"}]
        };
    }
    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.students.map((student, index) => <StudentRow  key={index} data={student} />)}
                </tbody>
            </table>
        );
    }
}

class StudentRow extends React.Component{
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        )
    }
}


export default StudentList;