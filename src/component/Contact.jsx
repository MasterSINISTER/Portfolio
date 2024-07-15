import React from "react";
import './contactStyle.css'
function Contact() {
  return (
    <>
      <div class="container-contact">
        <div class="modal">
          <div class="modal__header">
            <span class="modal__title">New project</span>
            <button class="button-contact button--icon">
              <svg
                width="24"
                viewBox="0 0 24 24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
              </svg>
            </button>
          </div>
          <div class="modal__body">
            <div class="input">
              <label class="input__label">Project title</label>
              <input class="input__field" type="text" />
              <p class="input__description">
                The title must contain a maximum of 32 characters
              </p>
            </div>
            <div class="input">
              <label class="input__label">Description</label>
              <textarea class="input__field input__field--textarea"></textarea>
              <p class="input__description">
                Give your project a good description so everyone know what's it
                for
              </p>
            </div>
          </div>
          <div class="modal__footer">
            <button class="button button--primary">Create project</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
