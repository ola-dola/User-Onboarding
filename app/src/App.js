import React, { useState } from 'react';
import './App.css';
import FormWithFormik from './Components/UserForm';
import UserContainer from './Components/UserContainer';

function App() {
  const [userList, setUserList] = useState([]);

  return (
    <div className="App">
      <UserContainer userList={userList}/>
      <FormWithFormik userList={userList} setUserList={setUserList} />
    </div>
  );
}

export default App;
