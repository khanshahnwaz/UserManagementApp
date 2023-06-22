import React, { useContext } from 'react'
import Card from '../Card/Card'
import { UserContext } from '../Context/UserState'

const User = () => {
  const context=useContext(UserContext)
  
  const users= context.user.map((item,i)=>{
    return <Card key={i} name={item.name} number={item.number} email={item.email}/>
  })
  // const ele=users?1:0
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 relative top-12 z-20">
    
      {users?users:null}

    </div>
  )
}

export default User