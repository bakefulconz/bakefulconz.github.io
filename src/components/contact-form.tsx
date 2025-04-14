"use client";
import Script from "next/script";
import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { Product } from "@/interfaces/product";

const ContactForm = ({products}:{products: Array<Product>}) => {
  const [recaptcha, setRecaptcha] = useState<string | null>()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [requestedProducts, setRequestedProducts] = useState<Array<string>>([])
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const endpoint = 'https://api.bakeful.co.nz/contactus'

  const handleCheckboxChange = (event: any) => {
    if (event.target.checked && !requestedProducts.includes(event.target.id)) {
      setRequestedProducts(prev => [...prev, event.target.id]);
    } else {
      setRequestedProducts(prev => prev.filter(product => product !== event.target.id));
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setSubmitting(true);
    e.preventDefault()

    if (!recaptcha) {
      console.log('Recaptcha value was not provided.');
      return;
    }

    if (firstName.length === 0 || firstName.length > 256) {
      alert('A First Name between 1 and 256 characters is required.');
      return;
    }

    if (lastName.length === 0 || lastName.length > 256) {
      alert('A Last Name between 1 and 256 characters is required.');
      return;
    }

    if (email.length === 0 || email.length > 256) {
      alert('An Email Address between 1 and 256 characters is required.');
      return;
    }

    if (message.length === 0 || message.length > 1024) {
      alert('A Message between 1 and 1024 characters is required.');
      return;
    }

    if (!Array.isArray(requestedProducts)) {
      alert('Requested products collection is required.');
      return;
    }

    const data = { firstName, lastName, email, message, requestedProducts, recaptcha }
    const fetchPromise = fetch(endpoint, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      body: JSON.stringify(data)
    });
    fetchPromise
      .then(response => response.json())
      .then(data => {
        setSubmitting(false);
        setSubmitted(true);
        console.log(data);
    })
  }
  return (
    <div>
      <Script src="https://www.google.com/recaptcha/api.js" async defer />
      <form className={`${submitted && "hidden"}`} action={endpoint} onSubmit={handleSubmit} method="POST">
        <div>Contact me if you want some sweet treats!</div>
        <div className="mt-5 text-left">
          <div className="grid grid-cols-[1fr,3fr] mt-2 mb-2">
            <div className="text-left text-lg">First Name:</div>
            <div className="col-start-2">
              <input type="text" className="form-control h-8 w-72 px-2 border-[1px] border-black bg-[#FFC8DD] rounded-md" value={firstName} onChange={(e) => setFirstName(e.target.value)} maxLength={256} required/><br/>
            </div>
          </div>

          <div className="grid grid-cols-[1fr,3fr] mt-2 mb-2">
            <div className="text-left text-lg">Last Name:</div>
            <div className="col-start-2">
              <input type="text" className="form-control h-8 w-72 px-2 border-[1px] border-black bg-[#FFC8DD] rounded-md" value={lastName} onChange={(e) => setLastName(e.target.value)} maxLength={256} required/><br/>
            </div>
          </div>

          <div className="grid grid-cols-[1fr,3fr] mt-2 mb-2">
            <div className="text-left text-lg">Email:</div>
            <div className="col-start-2">
              <input type="text" className="form-control h-8 w-72 px-2 border-[1px] border-black bg-[#FFC8DD] rounded-md" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={256} required/><br/>
            </div>
          </div>

          <div className="grid grid-cols-[1fr,3fr] mt-2 mb-2">
            <div className="text-left text-lg">Message:</div>
            <div className="col-start-2">
              <textarea rows={5} className="form-control w-96 px-2 border-[1px] border-black bg-[#FFC8DD] rounded-md" value={message} onChange={(e) => setMessage(e.target.value)} maxLength={10*1024} required/><br/>
            </div>
          </div>

          <div className="grid grid-cols-[1fr,3fr] mt-2 mb-2">
            <div className="text-left text-lg">Requested Products:</div>
            <div className="col-start-2 pt-1">
              {products.map((product: Product) => {
                return (
                  <div key={product.name}>
                    <label>
                      <input type="checkbox" id={product.name} onChange={handleCheckboxChange} />
                      <span className="ml-2">{product.name}</span>
                    </label>
                    <br />         
                  </div>
                )
              })}              
            </div>
          </div>

          <div className="grid grid-cols-[1fr,3fr] mt-2 mb-2">
            <div className="flex col-start-2">
              <ReCAPTCHA className="mr-0" sitekey="6LekqBcrAAAAAAYrdpNEiPY5zdbNFVGOd4ieb2t4" onChange={(e) => setRecaptcha(e)} />
              <span className={`text-2xl text-red-600 text-left ${recaptcha && "hidden"} block`}>*</span>
            </div>
          </div>
          
          <div className="grid grid-cols-[1fr,3fr] mt-2 mb-2">
            <div className="col-start-2">
              <button type="submit" className="clear-both border-[1px] border-black bg-[#FFC8DD] px-2 py-1 rounded mt-1 hover:bg-yellow-50 disabled:bg-gray-300" disabled={recaptcha === undefined || recaptcha === null || submitting}>{submitting ? "Sending..." : "Submit"}</button>
            </div>
          </div>
        </div>
      </form>
      <div className={`mt-2 text-lg ${!submitted && "hidden"}`}>
        Thank you. Your message has been sent.
      </div>      
    </div>
  )
}
export default ContactForm