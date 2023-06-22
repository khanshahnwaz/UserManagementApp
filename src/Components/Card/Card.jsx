import React from 'react'
import DeleteModal from '../Modals/DeleteUser'
import EditUser from '../Modals/EditUser'
import user1 from '../Assets/user1.png'
const Card = (props) => {
  console.log("I am in card component. ")
  return (
    
<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto">
    <div className="flex justify-end px-4 pt-4 ">
      
        
    </div>
    <div className="flex flex-col items-center pb-10 ">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={user1} alt="User"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{props.email}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{props.number}</span>

        <div className="flex mt-4 space-x-3 md:mt-6 ">
       
        <EditUser name={props.name} email={props.email} number={props.number}/>
       
     
        <DeleteModal name={props.name} email={props.email} number={props.number}/>
      
        </div>
    </div>
</div>

  )
}

export default Card