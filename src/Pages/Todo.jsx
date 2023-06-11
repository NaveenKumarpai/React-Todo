import React, { useState, useEffect} from "react";
import axios from 'axios'; 
import {  Table } from 'react-bootstrap';
// import "./Todo.css";

const Todo= ()=>{
    const [users,setUsers] = useState([]);
   
    useEffect(() =>{
       
        getUsers();
    },[]);
    const getUsers = async()=>{
        let response = await axios.get("https://jsonplaceholder.typicode.com/todos",
     
        );
        
        setUsers(response.data);
      };
      // const createNewRecord = async () =>{
      //   const insertData= {
      //   task: " TODOLIST",
      //   username: "Naveen",
       
      //   };
      //   let response = await axios.post("http://localhost:3001/users",insertData);
      //   console.log(response.status);
      //   if(response.status ===201) {
      //       getUsers();
      //   };
      // };

      // const deleteUser = async(id) =>{
      //   let response = await axios.delete(`http://localhost:3001/users/${id}`);
      //   console.log(response.status);
      //   if(response.status === 200) {
      //       getUsers();
      //   };
       
      // };
      // const patchUser = async (id) =>{
      //   const patchData ={
      //       task: "Fetch",
      //   };
      //   let response = await axios.patch(`http://localhost:3001/users/${id}`,patchData);
      //   console.log(response.status);
      //   if(response.status ===200){
      //       getUsers();
      //   }
      // };
      // const putUser = async (id) =>{
      //   const putData ={
      //       task: "Fetch",
      //   };
      //   let response = await axios.put(`http://localhost:3001/users/${id}`,putData);
      //   console.log(response.status);
      //   if(response.status ===200){
      //       getUsers();
      //   }
      // };
    return(
  
        <div>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"10px 0px",
            }}>
                {/* <Button onClick={() =>createNewRecord()}>Create Task</Button>
                <Button onClick={() =>getUsers()}> Show All</Button> */}
            </div>
            <div>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Task</th>
                        <th>Completed</th> 
                    </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ?(
                            users.map((todo,index) =>(
                                <tr key={index}>
                                    <td>{todo.id}</td>
                                    <td>{todo.title}</td>
                                    <td>{todo.completed}</td>
{/*                                     
                                    <td>
                                        <Button onClick={() =>putUser(user.id)} >Put(Update)</Button>
                                    </td>
                                    <td>
                                        <Button onClick={() =>patchUser(user.id)}>Patch(Update)</Button>
                                    </td>
                                    <td>
                                        <Button onClick={() =>deleteUser(user.id)}>Delete</Button>
                                    </td> */}
                                </tr>
                            ))
                        ) :(
                        <tr>
                            <td>No Records Found</td>
                        </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </div>
        );
};

export default Todo;


