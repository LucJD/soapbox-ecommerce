import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Logo from "../nav-images/flower.png";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s8qjfe8",
        "template_npd43ug",
        form.current,
        "UysOMcKiKT22oSQ9V"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return [
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="form_container p-5 rounded bg-white">
        <StyledContactForm>
          <div class="row">
            <h1 className="text-center signIn-color">Email Us</h1>
            {/* <div class="column">
          {<img alt="logo" src={Logo}></img>}
          </div> */}
            <div class="column">
              <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
              </form>
            </div>
          </div>
        </StyledContactForm>
        ,
      </div>
    </div>,
  ];
};

export default Contact;

// Styles

const StyledContactForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .row {
    display: flex;
  }

  .column {
    flex: 33.33%;
    padding: 5px;
    display: flex;
    justify-content: center;
  }

  .js-logo {
    justify-content: center;
  }

  img {
    width: 200%;
  }

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 80%;
    font-size: 12pt;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 10px;
      border: 1px solid rgb(220, 220, 220);
      color: black;
      font-family: "Montserrat", sans-serif;

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      font-family: "Montserrat", sans-serif;

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 0.25rem;
      font-family: "Montserrat", sans-serif;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: #986dc2;
      color: white;
      border: none;
      font-family: "Montserrat", sans-serif;
      font-size: 12pt;
    }
  }
`;
