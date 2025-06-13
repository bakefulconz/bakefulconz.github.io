"use client";

import React from 'react'
import { ContactComponentProps } from "@/interfaces/contact-component-props";

const SinglePriceContactComponent = (props: ContactComponentProps) => {
  return (
    <label key={props.product.name}>
      <input type="checkbox" id={props.product.name} onChange={props.onCheckboxChange} />
      <span className="ml-2 text-sm">
        {props.product.name}
      </span>
    </label>
  )
}
export default SinglePriceContactComponent