


import { useState,useEffect,useRef, useContext } from 'react';
import { useFormik } from 'formik';
import { Modal } from 'flowbite-react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { UserContext } from '../Context/UserState';
const  EditUser=(prop)=> {
  const rootRef = useRef();

  const [openModal, setOpenModal] = useState([]);
  const props = { openModal, setOpenModal };

  // define hooks to control the visibility of tippy
const[visiEmail,setVisiEmail]=useState(false);
const[visiName,setVisiName]=useState(false);
const[visiNumber,setVisiNumber]=useState(false);
const context=useContext(UserContext);

// hook to keep updated data
const[newData,setNewData]=useState();
  const formik=useFormik({
    initialValues:{
      name:prop.name,
      email:prop.email,
      number:prop.number
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
    // console.log("submitted edut data",values)
    setNewData(values)
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


useEffect(()=>{
  if(newData){
    const newUsers= context.user.map((item)=>{
      // console.log("hello hello")
      if((item.name===prop.name) && (item.email===prop.email) && (item.number===prop.number)){
        console.log("matched.",item)
      return newData;
    }else return item;
  })
  context.setUser(newUsers)
}

},[newData])



  return (
    <div ref={rootRef}>
      <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => props.setOpenModal('form-elements')}>Edit</button>
      <Modal  root={rootRef.current ?? undefined} show={props.openModal === 'form-elements'} size="md" popup onClose={() =>{
       props.setOpenModal(undefined)

         }}>
        <Modal.Header />
       
        <div className=" px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Edit your user details</h3>
                <form className="space-y-6" action="#" onSubmit={formik.handleSubmit}>
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
                   
                    
                    <button type="submit"  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Submit updated data</button>
                    
                </form>
            </div>
        
      </Modal>
    </div>
  )
}
export default EditUser;

