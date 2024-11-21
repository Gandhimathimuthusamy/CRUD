import Form from './Form'
import Table from './Table'
import { getData } from "./api"
import { useEffect,useState } from 'react'
import {deleteData,postData, putData} from './api'
import SearchUser from './SearchUser'




function App() {
    const[users,setUsers]=useState([])
    const[openForm,setopenForm]=useState(false)
    const[edit,setEdit]=useState(false)
    const[initialForm,setForm]=useState({
      name:'', email:'', age:''  
    })
    const[search,setSearch]=useState('')

  useEffect(
    ()=>{
      getUsers()  
  
  },[])
  let getUsers = async ()=>{
     let res= await getData();
       setUsers(res.data)
  }


let addUser= async(user)=>{
  let data={
    name:user.name,
    email:user.email,
    age:user.age,
  }

  if(edit)
    await putData(user.id,data)
   else 
   await postData(data)
   getUsers()
   setopenForm(false)
   
}
let deleteUser = async (id)=>{
  await deleteData(id);
  // console.log(deleteProduct)
  getUsers() 
}

function editUser(value) {
  setEdit(true);
  setopenForm(true);
  setForm(value)

}
let showForm=()=>{
  setopenForm(true);
  setForm({
   name:'', email:'', age:''  
 })
  setEdit(false)
  
}
let closeForm=()=>{
 setopenForm(false)
}



  return (
    <div className='wrapper m-5 w-50'>
       
        <h1  className='text-primary'> User Management System</h1>
        <button className='btn btn-primary' onClick={()=>{showForm()}}>Add User</button>
        {!openForm && <SearchUser
            search={search}
            setSearch={setSearch}
           

          
          />
        }
        {
         !openForm && <Table 
            users={users.sort((a,b)=> a.name>b.name? 1 :-1)
              .filter(user=>
             
              ((user.name).toLowerCase()).includes((search).toLowerCase()))} 
            delete={deleteUser}
            edit={editUser}>
            

         </Table>
        }
     
        {
          openForm && <Form close={closeForm} data={initialForm} add={addUser} edit={editUser}/> 
        }
  
        
    </div>
    
 
  )
}

export default App;
