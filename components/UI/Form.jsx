import React,{useRef} from "react";
import classes from "../../styles/form.module.css";
import emailjs from 'emailjs-com';

const Form = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_55hwb2i', 'template_qq3cjks', e.target,'LkXt8QWDTXpohe2Ak')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <form className={`${classes.form}`} ref={form} onSubmit={sendEmail}>
      <div className={`${classes.form__group}`}>
        <input type="text" name="name" placeholder="Your Name" required />
      </div>
      <div className={`${classes.form__group}`}>
        <input type="email" name="user_email" placeholder="Your Email Address" required />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea type="text" name="message" rows={5} placeholder="Message" required />
      </div>

      <button className="primary__btn" type="submit" value="Send">
        Send
      </button>
    </form>
  );
};

export default Form;