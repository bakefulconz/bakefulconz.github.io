"use client";

import React from 'react'
import { ContactComponentProps } from "@/interfaces/contact-component-props";

const MultiPriceContactComponent = (props: ContactComponentProps) => {

  return (
    <React.Fragment>
      <span className="md:text-md text-sm">
        {props.product.name}
      </span>
      {props.product.prices.map((price: [string, number]) => {
        return (
          <React.Fragment key={`${props.product.name}_${price[0]}`}>
            <input type="checkbox" id={`${props.product.name} ${price[0]}`} onChange={props.onCheckboxChange} className="ml-2 mr-1" />                           
            <span className="ml-0 md:text-md text-sm">
              {price[0]}
            </span>
          </React.Fragment>
        )
      })}
    </React.Fragment>
  )
}
export default MultiPriceContactComponent