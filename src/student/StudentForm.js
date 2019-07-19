import React from 'react';
import styles from './style.module.css';
import StudentList from './StudentList';

class StudentForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
              username: ''
            , age: null
            , errorMessage:""
            , description: "The content of a textarea goes in the value attribute"
            , department: "CSE"
            , data: [{"id":10, "name":"Zakir", "age":"30"}, {"id":20, "name":"Saiful", "age":"18"}, {"id":30, "name":"Parveen", "age":"34"}]
        };
    }

    studentFormSubmitHandler = (event) =>{
        event.preventDefault();
        let age = this.state.age;
        if(!Number(age)){
            alert("Your age must be a number.");
        }

        let students = this.state.data.slice();
        students.push({"id":40, "name":"Sohel", "age":40});
        this.setState({data:students});
    }

    formUpdateHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        let error = "";
        if("age" === name){
            if(value !== "" && !Number(value)){
                error = <strong>Your age must be a number</strong>;
            }
        }
        this.setState({errorMessage: error});
        this.setState({[name]: [value]});
    }

    render() {
        return(
            <div>
              <form onSubmit={this.studentFormSubmitHandler} style={{margin:"10px"}}>
                  <h1 className={styles.bigblue}>Student Registration Form</h1>
                  {this.state.errorMessage}
                  <label>Name: </label>
                  <input type="text" name="username" onChange={this.formUpdateHandler}/>

                  <label>Age:</label>
                  <input type="text" name="age" onChange={this.formUpdateHandler} />

                  <label>Department:</label>
                  <select value={this.state.department} name="department" onChange={this.formUpdateHandler}>
                      <option value="ICT">ICT</option>
                      <option value="CSE">CSE</option>
                      <option value="CPS">CPS</option>
                  </select>

                  <label>Description:</label>
                  <textarea value={this.state.description} name="description" onChange={this.formUpdateHandler} cols="100" rows="6"></textarea>

                  <br/>
                  <input type="submit" />
              </form>
                <StudentList students={this.state.data}/>
            </div>
        );
    }
}
export default StudentForm;