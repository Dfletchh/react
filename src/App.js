import "./index.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Employee from "./components/Employee";
import AddEmployee from "./components/AddEmployee";

function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Dean Fletcher",
      role: "Legend",
      img: "https://i.imgur.com/GCBVgXDb.jpg",
    },
    {
      id: 2,
      name: "Danny Dogs",
      role: "Manager",
      img: "https://i.imgur.com/TFMBQb.jpg",
    },
    {
      id: 3,
      name: "Grinch",
      role: "Intern",
      img: "https://i.imgur.com/uqExBdTb.jpg",
    },
    {
      id: 4,
      name: "Sean Cannon",
      role: "Intern",
      img: "https://i.imgur.com/Jvh1OQmb.jpg",
    },
    {
      id: 5,
      name: "Jelly Bean",
      role: "Developer",
      img: "https://i.imgur.com/C5lQTKXb.jpg",
    },
    {
      id: 6,
      name: "JoJo",
      role: "Developer",
      img: "https://i.imgur.com/jw4f2POb.jpg",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }

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
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
                />
              );
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
      ) : (
        <p>You don't have proper permissions</p>
      )}
    </div>
  );
}

export default App;
