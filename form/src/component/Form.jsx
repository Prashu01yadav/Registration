import React,{useState} from 'react'

const Form = () => {
const[htmlFormData,sethtmlFormData]= useState({
    firstname:"",
    lastname:"",
    phone:"",
    password:"",
    email:"",
    dob:"",
    gender:"",
    checkbox:[]


});
const handleChange = (event) =>{

    if(event.target.name=== "checkbox"){
        if(event.target.checked){
            console.log("add to checkbox:", event.target.value)
            htmlFormData.checkbox= [...htmlFormData.checkbox,event.target.value]
        }
        else{
            htmlFormData.checkbox= [...htmlFormData.checkbox.filter((currSkill)=> currSkill !== event.target.value)]
        }
    }
        else{
            sethtmlFormData(()=>{
                return {...htmlFormData,
                [event.target.name] : event.target.value}
    
            })
        }
    
}
const onSubmitHandler = (e) => {
    e.preventDefault()
    console.log("submitted")
    console.log(htmlFormData);
}
  return (
    <>
    <div className="container">
        <div className="title"> Registration</div>
        <form action="#" onSubmit={(e) => onSubmitHandler(e)} >
            <div className="user-detail">
                <div className="input-box">
                    <span className="details">First Name</span>
                    <input type="text" placeholder="Enter your name" onChange={handleChange} value={htmlFormData.firstname} name="firstname" required/>

                </div>
                <div className="input-box">
                    <span className="details">Last name</span>
                    <input type="text" placeholder="Enter your last name" onChange={handleChange} value={htmlFormData.lastname} name="lastname" required/>

                </div>
                <div className="input-box">
                    <span className="details">Phone Number</span>
                    <input type="text" placeholder="Enter your Phone Number" onChange={handleChange} value={htmlFormData.phone} name="phone" required/>

                </div>
                <div className="input-box">
                    <span className="details">Passward</span>
                    <input type="password" placeholder="Enter your password" onChange={handleChange} value={htmlFormData.password} name="password" required/>

                </div>
                <div className="input-box">
                    <span className="details">Email </span>
                    <input type="text" placeholder="Email address" onChange={handleChange} value={htmlFormData.email} name="email" required/>

                </div>
                <div className="input-box">
                    <span className="details">DOB</span>
                    <input type="date" placeholder="enter your DOB" onChange={handleChange} value={htmlFormData.dob} name="dob"  required/>

                </div>
              
            <div className="input-box">Gender
                <span className="gender">
                <input type="radio" className="gender" name="gender" id='Male' onChange={handleChange} value="Male"/>
                <label htmlFor="Male">Male</label>
                <input type="radio" className="gender" name="gender" id='female' onChange={handleChange} value="Female"/>
                <label htmlFor="female">Female</label></span>
            </div>
            <div className="checkbox">
                <span className="check">Checkbox
                <input type="checkbox" className="check" name="checkbox" id='HTML' onChange={handleChange} value="HTML"/>
                <label htmlFor="HTML">HTML</label>
                <input type="checkbox" className="check" name="checkbox" id='CSS' onChange={handleChange} value="CSS"/>
                <label htmlFor="CSS">CSS</label></span>
            </div>
            <div className="input-box">
                <span className="details">Address</span>
                <textarea className="address" rows="4" cols="50"  onChange={handleChange} value={htmlFormData.address}  placeholder="enter your address" name="address"  required>
                </textarea>
            </div>
        

            </div>
            <div className="Reset">
            <div className="button">
                <input type="submit" id="submit"value="Register"/>
        </div>
        <div className="button">
            <input type="reset" value="Reset"/>
    </div>
      </div>
      </form>
        </div>
      
            
  
        

    </>
  )
}

export default Form