import React, { useState } from 'react';
import '../assets/styles/Contact.scss';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const generateEmailPreview = () => {
    return `Name: ${name}
Email/Phone: ${email}

Message:
${message}`;
  };

  const previewEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const isNameEmpty = !name.trim();
    const isEmailEmpty = !email.trim();
    const isMessageEmpty = !message.trim();

    setNameError(isNameEmpty);
    setEmailError(isEmailEmpty);
    setMessageError(isMessageEmpty);

    if (!isNameEmpty && !isEmailEmpty && !isMessageEmpty) {
      const subject = encodeURIComponent(`New message from ${name}`);
      const body = encodeURIComponent(generateEmailPreview());

      const mailtoLink = `mailto:yourmail@gmail.com?subject=${subject}&body=${body}`;

      window.location.href = mailtoLink;

      // reset form
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>

          <p>
            Got a project waiting to be realized? Let's collaborate and make it happen!
          </p>

          <Box
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={previewEmail}
          >
            <div className="form-flex">
              <TextField
                fullWidth
                required
                label="Your Name"
                placeholder="What's your name?"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? 'Please enter your name' : ''}
                InputProps={{
                  style: {
                    color: '#050f0b',
                    backgroundColor: '#ffffff',
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: '#050f0b',
                  },
                }}
              />

              <TextField
                fullWidth
                required
                label="Email / Phone"
                placeholder="How can I reach you?"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={
                  emailError
                    ? 'Please enter your email or phone number'
                    : ''
                }
                InputProps={{
                  style: {
                    color: '#050f0b',
                    backgroundColor: '#ffffff',
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: '#050f0b',
                  },
                }}
              />
            </div>

            <TextField
              fullWidth
              required
              multiline
              rows={8}
              label="Message"
              placeholder="Send me any inquiries or questions"
              variant="outlined"
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? 'Please enter the message' : ''}
              InputProps={{
                style: {
                  color: '#050f0b',
                  backgroundColor: '#ffffff',
                },
              }}
              InputLabelProps={{
                style: {
                  color: '#050f0b',
                },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;                       