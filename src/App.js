import React,{useState} from 'react';
import AddUser from './components/User/user';
import UserList from './components/User/UserList';

function App() {
  const[userList,setUserList]=useState([]);
  const addUserHandler1=(uname,uage)=>{
    setUserList((...prevUserList)=>{
      return [...prevUserList,{name:uname,age:uage,id:Math.random().toString}];
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler1}/>
      <UserList users={userList}/>
    </div>
  );
}

export default App;
