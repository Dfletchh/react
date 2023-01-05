import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState();
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input type="text" onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value)
          }}
          />
          <Employee name="Dean" role="Legend" />
          <Employee name="Abby" role={role} />
          <Employee name="James"/>
        </>
      ):(  
        <p>You don't have proper permissions</p>
      )}
    </div>
  );
}

export default App;
