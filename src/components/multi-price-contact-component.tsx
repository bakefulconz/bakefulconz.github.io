"use client";

import React from 'react'
import { ContactComponentProps } from "@/interfaces/contact-component-props";

const MultiPriceContactComponent = (props: ContactComponentProps) => {

  return (
    <React.Fragment>
      <span className="text-sm">
        {props.product.name}
      </span>
      {props.product.prices.map((price: [string, number]) => {
        return (
          <label key={`${props.product.name}_${price[0]}`}>
            <input type="checkbox" id={`${props.product.name} ${price[0]}`} onChange={props.onCheckboxChange} className="ml-2 mr-1" />                           
            <span className="ml-0 text-sm">
              {price[0]}
            </span>
          </label>
        )
      })}
    </React.Fragment>
  )
}
export default MultiPriceContactComponent