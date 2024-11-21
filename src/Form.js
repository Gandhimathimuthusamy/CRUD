import { useState } from "react"
function Form(props){
    const[user,setUser]=useState(props.data)
    const[submit,setSubmit]=useState(false)

    const emailVal =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


    let changeFormData=(event)=>{
        const {name,value} =event.target;
        setUser({...user,[name]:value})
        
    }
   
   
  
    return(
            <form>
                <div className="form-group">
                    <label>Name:</label>
                    <input className="form-control mt-2"
                      value={user.name}
                      type="text"
                      onChange={changeFormData}
                      name="name"
                      placeholder="Enter Name"
                    />  
                      {
                        submit && user.name ==='' &&
                          (user.email).match  
                         && <span className="text-danger">  User name required </span>
                      }
                      

                      
                   
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input className="form-control mt-2"
                       value={user.email}
                       onChange={changeFormData}
                      type="text"
                      name="email"
                      placeholder="Enter Email"
                   />
                      {
                        submit && 
                        !(user.email).match(emailVal) &&
                        <span className="text-danger"> Valid Email required </span>
                    
                      }
                      

                     
                </div>
              
                    <div className="form-group">
                    <label>Age:</label>
                    <input className="form-control mt-2"
                       value={user.age}
                       onChange={changeFormData}
                      type="number"
                      name="age"
                      placeholder="Enter Age"
                   />
                   {
                        submit && user.age ==='' && <span className="text-danger">  Age required </span>
                      }
                </div>

                 

                    <button className="btn btn-primary m-2  float-end "
                       
                      onClick={(e)=>{e.preventDefault()
                       
                        if(user.name && user.email && user.age){
                         props.add(user)
                        }
                        setSubmit(true)
                       }}
                     >Send</button>
                  
                    <button className="btn btn-danger  m-2 float-end"
                        onClick={(e)=>{
                            e.preventDefault() 
                            props.close()
                        }}
                      
                     >Cancel</button>
            </form>
      
    
    )

}
export default Form