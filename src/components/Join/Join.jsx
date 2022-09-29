import React,{useRef, useState} from 'react';
import "./Join.css";
import emailjs from "@emailjs/browser"

const Join = () => {
    const form = useRef()

    const[values, setValues] = useState({
        user_email: ""
    })
    const sendEmail = (e) => {
        e.preventDefault(e)

        emailjs.sendForm(
            'service_jvu0gxq',
            'template_1bz490v', 
            e.target,
            'pSO-S4i9EtenLViU4'
            ).then(res=>{
                clear()
                console.log(res);
            }).catch(err=> console.log(err)
        )
    } 
    
    const clear = () => {
        setValues({
            user_email: null
        })
    }
  return (
    <div className='Join' id="join-us">
        <div className='left-j'>
            <hr />
            <div>
                <span className='stroke-text'>READY TO</span>
                <span>LEVEL UP</span>
            </div>

            <div >
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US </span>
            </div>
        </div>

        <div className='right-j'>
            <form ref={form} className='email-container' onSubmit={sendEmail}>
                <input type="email" required name="user_email" placeholder="Enter your email to join us" />
                <button className='btn btn-join'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join