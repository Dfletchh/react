import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      name: "Dean Fletcher",
      role: "Legend",
      img: "https://i.imgur.com/GCBVgXDb.jpg",
    },
    {
      name: "Danny Dogs",
      role: "Manager",
      img: "https://i.imgur.com/TFMBQb.jpg",
    },
    {
      name: "Grinch",
      role: "Intern",
      img: "https://i.imgur.com/uqExBdTb.jpg",
    },
    {
      name: "Sean Cannon",
      role: "Intern",
      img: "https://i.imgur.com/Jvh1OQmb.jpg",
    },
    {
      name: "Jelly Bean",
      role: "Developer",
      img: "https://i.imgur.com/C5lQTKXb.jpg",
    },
    {
      name: "JoJo",
      role: "Developer",
      img: "https://i.imgur.com/jw4f2POb.jpg",
    },
  ]);
  const showEmployees = true;
  return (
    <div className='App'>
      {showEmployees ? (
        <>
          <input
            type='text'
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className='flex flex-wrap justify-center'>
            {employees.map((employee) => {
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>You don't have proper permissions</p>
      )}
    </div>
  );
}

export default App;
