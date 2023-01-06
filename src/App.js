import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('dev');
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input 
            type="text" 
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value)
            }}
          />
          <div className="flex flex-wrap justify-center">
            <Employee 
              name="Dean" 
              role={role} 
              img="https://imgur.com/gallery/GCBVgXD"
            />
            <Employee 
              name="Dean" 
              role={role} 
              img="https://imgur.com/gallery/GCBVgXD"
            />
            <Employee 
              name="Dean" 
              role={role} 
              img="https://imgur.com/gallery/GCBVgXD"
            />
          </div>
        </>
      ) : (  
        <p>You don't have proper permissions</p>
      )}
    </div>
  );
}

export default App;
