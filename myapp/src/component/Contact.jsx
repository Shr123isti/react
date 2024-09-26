import React from 'react'
import './index.css'


const Contact = () => {
  return (
    <div >
    <div className="Contact"></div>
    <div className="Contt">
     <p>
        Mobile Number : 8005488473
      <br></br>
      <br></br> Email : dg-upt@up.gov.in
      <br></br><br></br>

For Booking / Tour Packages Related Query Contact : 0522- 4004402, 2612659
<br></br><br></br>

For Tourism Policy Related Query Contact on this Email id :<br></br>
uptourismpolicy@gmail.com , investment.uptourism@gmail.com
<br>
</br>
<br></br>
Public Dealing Timing : 10:00 AM to 5:00 PM Working Days : Monday to Friday
<br></br>
<br></br>
</p>
<form>
    <label>Enter Your First Name:
        <input type="text" cols="10" row="10"/>
    </label>
    <br></br>
    <label>Enter Your Last Name:
        <input type="text" cols="10" row="10"/>
    </label>
    <br></br>
    <label>Enter Your Email-id:
        <input type="email" cols="10" row="10"/>
    </label>
    <br></br>
    <label>Enter Your Phone number:
        <input type="number" cols="10" row="10"/>
    </label>
    <br></br>
    <label>Enter Your Age:
        <input type="Number" cols="10" row="10"/>
    </label>
    <br></br>
    <label>Enter Your Address:
        <input type="Text" cols="10" row="10"/>
    </label>
    <br></br>
    <label>Enter Your reason to contact :
        <input type="text" cols="10" row="10"/>
    </label>
    <br></br>
    <label>Any feedback or suggestion:
    <textarea name="describe" id ="describe" cols="50" row="500" placeholder="feedback or suggestion" ></textarea>
    </label>
    <br></br>
    <button>submit</button>


</form>

</div>
    </div>
    )
}

export default Contact