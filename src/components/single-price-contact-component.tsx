"use client";

import React from 'react'
import { ContactComponentProps } from "@/interfaces/contact-component-props";

const SinglePriceContactComponent = (props: ContactComponentProps) => {
  return (
    <React.Fragment key={props.product.name}>
      <input type="checkbox" id={props.product.name} onChange={props.onCheckboxChange} />
      <span className="ml-2 md:text-md text-sm">
        {props.product.name}
      </span>
    </React.Fragment>
  )
}
export default SinglePriceContactComponent