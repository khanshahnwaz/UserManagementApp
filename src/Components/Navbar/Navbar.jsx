


import { Navbar } from 'flowbite-react';
import CreateUser from '../Forms/CreateUser';
export default function NavbarWithCTAButton() {
  return (
    <Navbar
      fluid
      rounded
    >
      <Navbar.Brand href="https://flowbite-react.com">
      
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          SKIDS
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
            <div  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><CreateUser/></div>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home
        </Navbar.Link>
        <Navbar.Link >
          About
        </Navbar.Link>
        <Navbar.Link >
          Services
        </Navbar.Link>
        <Navbar.Link >
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


