import {useRef} from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_s3980wd', 'template_mirs9bj', form.current, {
        publicKey: '-bU2XFJJ0HD1eOXni',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };

  return (
    <div>
      <div className="container mt-5">
        
        <form ref={form} onSubmit={sendEmail} className="form-control card flex-center dir-column p-4">

        <h2 clasName="text-center"> CONTACT ME</h2>
          
          <input className="p-2 m-4" type="text" placeholder="Full Name" name="user_name" required/>

          <input className="p-2 m-4" type="email" placeholder="Email" name="user_email" required/>

          <input className="p-2 m-4" type="text" placeholder="Subject" name="subject" required/>

          <input className="p-2 m-4" type="text" placeholder="message" name="message" required/>

          <button type="submit" className="btn btn-primary"> Send Message </button>

        </form>
      </div>
    </div>

  );
}
  
  export default Contact;