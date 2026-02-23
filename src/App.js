import logo from "./logo.svg";
import "./App.css";
import Product from "./components/Product";
import Employees from "./components/Employees";
import { useState } from "react";

const products = [
  {
    code: "0001",
    name: "Pineapple",
    price: 12,
    image: "/pineapple.jpg",
    isActive: true,
  },
  {
    code: "0002",
    name: "Pear",
    price: 10,
    image: "/pear.jpg",
    isActive: false,
  },
  {
    code: "0003",
    name: "Strawberry",
    price: 16,
    image: "/strawberry.jpg",
    isActive: true,
  },
];

const employees = [
  {
    id: "E001",
    name: "John Doe",
    position: "Software Engineer",
    department: "IT",
    salary: 75000,
    active: true,
  },
  {
    id: "E002",
    name: "Jane Smith",
    position: "Project Manager",
    department: "Operations",
    salary: 85000,
    active: true,
  },
  {
    id: "E003",
    name: "Alice Johnson",
    position: "Data Analyst",
    department: "Marketing",
    salary: 68000,
    active: false,
  },
  {
    id: "E004",
    name: "Bob Brown",
    position: "HR Manager",
    department: "Human Resources",
    salary: 102000,
    active: true,
  },
];

const inititalizeArr = () => {
  const arrList = [];

  for (let i = 0; i < 5; i++) {
    arrList.push(`Item ${i + 1}`);
  }
  return arrList;
};

function App() {
  const updateArr = (action) => {
    if (action === "add") {
      setArr((prev) => [...arr, `Item ${arr.length + 1}`]);
    }

    if (action === "rem") {
      setArr((prev) => prev.slice(0, -1));
    }
  };

  const [arr, setArr] = useState(inititalizeArr);

  console.log(arr);

  const calculateFactorial = (n) => {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
      factorial *= i;
    }
    console.log(factorial);
  };

  return (
    <>
      <h1>Employees</h1>
      <div className="employee-list">
        {employees.map((employee) => {
          return employee.active && <Employees employee={employee} />;
        })}
      </div>

      <button onClick={() => calculateFactorial(9)}>Factorial</button>

      <div>
        {arr.map((item) => {
          return <h3 key={item}>{item}</h3>;
        })}
      </div>
      <button onClick={() => updateArr("add")}>Add</button>
      <button onClick={() => updateArr("rem")}>Remove</button>
    </>
  );
}

export default App;

{
  /* <h1>Products</h1>
   <div className='product-list'>
   {
    products.map((product) => {
      return <Product key={product.code} product={product}/>
    })
   }
   
   </div>
   <button onClick={() => handleClick("Hello!")}>Click Me</button> */
}
