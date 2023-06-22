'use client';

import { Button, Modal } from 'flowbite-react';
import { useContext, useState } from 'react';
import { UserContext } from '../Context/UserState';
const DeleteUser=(prop)=> {
  const [openModal, setOpenModal] = useState([]);
  const props = { openModal, setOpenModal };
  const context=useContext(UserContext)
  const deleteUser=()=>{
    // 
       console.log("Deleting user ",context.user)
       const updatedUsers=context.user.filter((item)=>(item.name!=prop.name) || (item.email!=prop.email) || (item.number!=prop.number))
      //  context.setUser(items=>{items.filter((item,i)=>i!=0 )})
      context.setUser(updatedUsers);
       console.log("Deleted and left",context.user)
      //  close the modal
       props.setOpenModal(undefined)
  }
  return (
    <>
      <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700" onClick={() => props.setOpenModal('pop-up')}>Delete</button>
      <Modal show={props.openModal === 'pop-up'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            {/* <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" /> */}
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete {prop.name} ?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => deleteUser()}>
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default DeleteUser;
