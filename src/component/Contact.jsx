import React from 'react';
import './contactStyle.css'
import './send_email.php'

/**
 * Contact Component
 * 
 * This component is responsible for rendering the contact form.
 * It uses a HTML form to send the user's contact information to 
 * the backend for processing.
 * 
 * @returns {jsx} Contact form
 */
function Contact() {
  return (
    // Fragment
    <>
      {/* Contact form */
      }
      <form action="send_email.php" method="POST">
        {/* Form label for name */
        }
        <label htmlFor="name">Name:</label><br />
        {/* Text input for name */
        }
        <input type="text" id="name" name="name" required /><br /><br />

        {/* Form label for email */
        }
        <label htmlFor="email">Email:</label><br />
        {/* Email input for email */
        }
        <input type="email" id="email" name="email" required /><br /><br />

        {/* Form label for message */
        }
        <label htmlFor="message">Message:</label><br />
        {/* Textarea for message */
        }
        <textarea id="message" name="message" rows="9" cols='50' required></textarea><br /><br />

        {/* Submit button */
        }
        <input type="submit" value="Submit" />
      </form>
    </>
  );
    }
export default Contact;
