"use client";
import Script from "next/script";
import React, { useEffect, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { Product } from "@/interfaces/product";

const ContactForm = ({products}:{products: Array<Product>}) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [deliveryMethod, setDeliveryMethod] = useState('')
  const [requestedProducts, setRequestedProducts] = useState<Array<string>>([])
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [numDots, setNumDots] = useState(0);

  const reCaptchaRef: any = React.createRef();

  const endpoint = 'https://api.bakeful.co.nz/contactus'

  useEffect(() => {
    // Only activate the timer if the submitting process is going on.
    if (!submitting) {
      return () => {};
    }
    // This timer will allow for a simple 'Submitting...' status message where the dots range from 0-3 in loop.
    const interval = setInterval(() => {
      setNumDots(prev => prev >= 3 ? 0 : prev + 1);
    }, 200);

    return () => {
      setNumDots(0);
      clearInterval(interval);
    }
}, [submitting]);

  const handleCheckboxChange = (event: any) => {
    if (event.target.checked && !requestedProducts.includes(event.target.id)) {
      setRequestedProducts(prev => [...prev, event.target.id]);
    } else {
      setRequestedProducts(prev => prev.filter(product => product !== event.target.id));
    }
  }

  const handleRadioButtonChange = (event: any) => {
    setDeliveryMethod(event.target.value);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setSubmitting(true);
    e.preventDefault()
    
    let hasError: boolean = false;

    let recaptcha = null
    try {
      reCaptchaRef.current.reset();
      recaptcha = await reCaptchaRef.current.executeAsync();
    } catch (error) {
      console.log('Error retrieving recaptcha token ', error);
    }

    if (!recaptcha) {
      console.log('Recaptcha value was not provided.');
      hasError = true;
    }

    if (!hasError && (firstName.length === 0 || firstName.length > 256)) {
      alert('A First Name between 1 and 256 characters is required.');
      hasError = true;
    }

    if (!hasError && (lastName.length === 0 || lastName.length > 256)) {
      alert('A Last Name between 1 and 256 characters is required.');
      hasError = true;
    }

    if (!hasError && (email.length === 0 || email.length > 256)) {
      alert('An Email Address between 1 and 256 characters is required.');
      hasError = true;
    }

    if (!hasError && (message.length === 0 || message.length > 1024)) {
      alert('A Message between 1 and 1024 characters is required.');
      hasError = true;
    }

    if (!hasError && !Array.isArray(requestedProducts)) {
      alert('Requested products collection is required.');
      hasError = true;
    }

    if (hasError) {
      setSubmitting(false);
      return;
    }

    const data = { firstName, lastName, email, message, deliveryMethod, requestedProducts, recaptcha }
    const fetchPromise = fetch(endpoint, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      body: JSON.stringify(data)
    });
    fetchPromise
      .then(response => response.json())
      .finally(() => setSubmitting(false))
      .catch(reason => {
        alert('Failed to submit your contact request. Please try again later.')
        console.log(reason)
      })
      .then(data => {
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
            <div className="text-left pt-1 md:text-lg text-sm">First Name:<span className="text-red-600">*</span></div>
            <div className="col-start-2">
              <input type="text" className="form-control h-8 md:w-72 w-64 px-2 border-[1px] border-black bg-[#FFC8DD] rounded-md" value={firstName} onChange={(e) => setFirstName(e.target.value)} maxLength={256} required/><br/>
            </div>
          </div>

          <div className="grid grid-cols-[1fr,3fr] mt-2 mb-2">
            <div className="text-left pt-1 md:text-lg text-sm">Last Name:<span className="text-red-600">*</span></div>
            <div className="col-start-2">
              <input type="text" className="form-control h-8 md:w-72 w-64 px-2 border-[1px] border-black bg-[#FFC8DD] rounded-md" value={lastName} onChange={(e) => setLastName(e.target.value)} maxLength={256} required/><br/>
            </div>
          </div>

          <div className="grid grid-cols-[1fr,3fr] mt-2 mb-2">
            <div className="text-left pt-1 md:text-lg text-sm">Email:<span className="text-red-600">*</span></div>
            <div className="col-start-2">
              <input type="text" className="form-control h-8 md:w-72 w-64 px-2 border-[1px] border-black bg-[#FFC8DD] rounded-md" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={256} required/><br/>
            </div>
          </div>

          <div className="grid grid-cols-[1fr,3fr] mt-2 mb-2">
            <div className="text-left pt-1 md:text-lg text-sm">Message:<span className="text-red-600">*</span></div>
            <div className="col-start-2">
              <textarea rows={5} className="form-control md:w-96 w-64 px-2 border-[1px] border-black bg-[#FFC8DD] rounded-md" value={message} onChange={(e) => setMessage(e.target.value)} maxLength={10*1024} required/><br/>
            </div>
          </div>

          <div className="grid grid-cols-[1fr,3fr] mt-2 mb-2">
            <div className="text-left md:text-lg text-sm">Delivery & Pick-up:<span className="text-red-600">*</span></div>
            <div className="col-start-2 pt-1 md:text-md text-sm">
              <div onChange={handleRadioButtonChange}>
                  <label>
                    <input type="radio" id="delivery-west" value="Delivery Hamilton West" name="delivery" required />
                    <span className="ml-2">Delivery Hamilton West</span>
                  </label>
                  <br />
                  <label>
                    <input type="radio" id="delivery-east" value="Delivery Hamilton East" name="delivery" required />
                    <span className="ml-2">Delivery Hamilton East</span>
                  </label>
                  <br />
                  <label>
                    <input type="radio" id="pick-up" value="Pick-up" name="delivery" required />
                    <span className="ml-2">Pick-up</span>
                  </label>
                  <br />
                  <label>
                    <input type="radio" id="unknown" value="Unknown" name="delivery" required />
                    <span className="ml-2">Unknown</span>
                  </label>                  
                </div>            
            </div>
          </div>

          <div className="grid grid-cols-[1fr,3fr] mt-2 mb-2">
            <div className="text-left md:text-lg text-sm">Requested Products:</div>
            <div className="col-start-2 pt-1">
              {products.map((product: Product) => {
                return (
                  <div key={product.name}>
                    <label>
                      <input type="checkbox" id={product.name} onChange={handleCheckboxChange} />
                      <span className="ml-2 md:text-md text-sm">{product.name}</span>
                    </label>
                    <br />         
                  </div>
                )
              })}              
            </div>
          </div>

          <ReCAPTCHA ref={reCaptchaRef} size="invisible" className="mr-0 ml-0" sitekey="6LcDJR8rAAAAAKrmMiQgNgvTUv1WDveDboRQRRpw" />          
          <div className="grid grid-cols-[1fr,3fr] mt-2 mb-2">
            <div className="col-start-2">
              <button type="submit" className={`clear-both border-[1px] min-w-24 ${submitting && "text-left"} border-black bg-[#FFC8DD] px-2 py-1 rounded mt-1 hover:bg-yellow-50 disabled:bg-gray-300`} disabled={submitting}>{submitting ? `Sending${".".repeat(numDots)}` : "Submit"}</button>
              <br />
              <div className="text-xs text-gray-500 pt-1">
                This site is protected by reCAPTCHA and the Google
                <a className="text-blue-700" href="https://policies.google.com/privacy"> Privacy Policy</a> and
                <a className="text-blue-700" href="https://policies.google.com/terms"> Terms of Service</a> apply.
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className={`mt-2 md:text-lg text-md ${!submitted && "hidden"}`}>
        Thank you. Your message has been sent.
      </div>      
    </div>
  )
}
export default ContactForm