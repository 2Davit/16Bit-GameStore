import { FC } from "react";
import { ContainerContact, ContactForm, Form, ContactUs, SendForm } from "./Contact.style";
import { useForm, ValidationError } from "@formspree/react";
import LogoG from "../../assets/1.png" 

const Contact: FC = () => {
  const [state, handleSubmit] = useForm("xyylapkg");
  if (state.succeeded) {
    return (
      <ContainerContact>
        <ContactForm>
          <ContactUs>Message sent ✔︎</ContactUs>
          <SendForm>
            <h5>Your message was sent correctly.</h5>
            <h5>Wait for our prompt reply.</h5>
          </SendForm>
        </ContactForm>
      </ContainerContact>
    );
  }
  return (
    <ContainerContact>
      <ContactForm>
        <ContactUs>Contact Us</ContactUs>
        <Form
          action="https://formspree.io/f/xyylapkg"
          method="POST"
          onSubmit={handleSubmit}
        >
          <label htmlFor="email">Your Email</label>
          <input placeholder='gamestore@16bit.com' id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="email">Your Message</label>
          <textarea placeholder='Hello, what can we do for you?' id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
          {/* <Logo src={LogoG} alt='logo gamestore'/> */}
        </Form>
      </ContactForm>
    </ContainerContact>
  );
};

export default Contact;
