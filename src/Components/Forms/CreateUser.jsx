import { useFormik } from 'formik';
import {useState,useEffect, useContext, useRef} from 'react'
// 'use client';
import { Modal} from 'flowbite-react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { UserContext } from '../Context/UserState';
const  CreateUser=()=> {
  const rootRef = useRef();

  const [openModal, setOpenModal] = useState([]);
  const props = { openModal, setOpenModal };

// define hooks to control the visibility of tippy
const[visiEmail,setVisiEmail]=useState(false);
const[visiName,setVisiName]=useState(false);
const[visiNumber,setVisiNumber]=useState(false);
const context=useContext(UserContext);
  const formik=useFormik({
    initialValues:{
      name:'',
      email:'',
      number:''
    },
    validate:values=>{
      // console.log("Touched properter ",formik.touched)
      let errors={};
      // console.log("In validation ",values.number.toString().length)
      if(!values.name){
        errors.name='Enter your name!'
      }
      if(!values.email){
        errors.email='Enter valid email address!'
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Enter valid email address!';
    }
     if(values.number.toString().length>10 || values.number.toString().length<10){
      errors.number='Enter valid phone number!'
    }
    // console.log("errors ",errors)

    return errors;


   },
   onSubmit:values=>{
    console.log("Submitted form data ",values)
    context.setUser(item=>[...item,values])
    // navigate('/')
    props.setOpenModal(undefined)
   }


  })

  // update content of tippy on each error message
  useEffect(()=>{
    // console.log("Touched attributes ",formik.touched)
    // console.log("error valuyes ",formik.errors)
      //  console.log(formik.errors)
    if(formik.errors.email && formik.touched.email){
      // console.log("hiii")
        setVisiEmail(true)
    }else{
      // console.log("not touched.")
       setVisiEmail(false)}
    if(formik.errors.number && formik.touched.number){
        setVisiNumber(true)
    }else setVisiNumber(false)
    if(formik.errors.name && formik.touched.name){
        setVisiName(true)
    }else setVisiName(false)
    
},[formik])

  
  return (
    <div ref={rootRef}>
      <button onClick={() => props.setOpenModal('form-elements')}>Create User+</button>
      <Modal root={rootRef.current ?? undefined} show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header />
        
        <div className=" px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Expand community by adding new user!</h3>
                <form className="space-y-6" onSubmit={formik.handleSubmit}>
                <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Your name</label>
                        <Tippy visible={visiName} content={formik.errors.name} placement='top-end'>
                        <input key='name' type="text" name="name"  placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name}
                        /></Tippy>
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Your email</label>
                        <Tippy visible={visiEmail} content={formik.errors.email} placement='top-end'>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com"  onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />
                        </Tippy>
                    </div>
                    <div>
                        <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Your number</label>
                        <Tippy visible={visiNumber} content={formik.errors.number} placement='top-end'>
                        <input type="number" name="number" id="number" placeholder="1234567890" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.number} />
                        </Tippy>
                    </div>
                   
                    
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create new user.</button>
                    
                </form>
            </div>
        
       </Modal>
    </div>
  )
}
export default CreateUser;

