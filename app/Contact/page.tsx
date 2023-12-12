'use client'
import { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import EmailIcon from '@mui/icons-material/Email';
import { Button } from '@nextui-org/react';
import { useState } from 'react';

const Page = () => {
    const [isSuccess, setIsSuccess] = useState(false);

    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (form.current) {
          emailjs.sendForm('service_3yb6vgg', 'template_j4fyw0q', form.current, '39ux1Bew-qOnkdp0A').then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
          setIsSuccess(true);
          form.current.reset();
        } else {
          console.error('Form reference is null.');
        }
      };
      
      useEffect(() => {
        const timerId = setTimeout(() => {
            setIsSuccess(false);
        }, 5000);

        return () => {
            clearTimeout(timerId);
        };
    }, [isSuccess]);

  return (
    <>
    <div className='contact'>
          <div className='left-side'>
              <h1>Lets chat.</h1>
              <h1>Tell me about your</h1>
              <h1>Company</h1>
              <p>Lets create something together</p>
              <div className='buble'>
                  <EmailIcon className='eicon' />
                  <div className='mai'>
                      <p>Email me at:</p>
                      <p className='purple'>Gregory.mmensah@gmail.com</p>
                  </div>
              </div>
              {isSuccess && (
                <div className='mt-10'>
                    <h1 className='text-4xl text-white w-full'>Message Sent!</h1>
                </div>
              )}
          </div>
    
          <div className='right-side text-black flex flex-col'>
              <h1 className='text-4xl'>Send a message</h1>
              <form ref={form} onSubmit={sendEmail}>
                  <label>Full Name</label>
                  <input className='text-white mt-4 mb-4 w-full bg-transparent border border-black' name='name' type='text' id='name' placeholder='Enter your full Name*' required></input>
                  <label>Email</label>
                  <input
                      type='text'
                      className='text-white mt-4 mb-4 w-full bg-transparent border border-black'
                      name='email'
                      id='email'
                      placeholder='Enter your email*'>
                  </input>
                  <textarea id='message' className='text-white mt-4 mb-4 w-full bg-transparent border border-purple-500 rounded-lg' name='message'></textarea>
                  <Button
                      type='submit'
                      className='text-white border border-purple-500 py-2 rounded-lg hover:scale-50 transition-[2] ease-in'>
                      Submit
                  </Button>
              </form>
          </div>
      </div>
      </>
  )
}

export default Page
