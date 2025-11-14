"use client";
import React, { useState } from 'react'
import { Category } from "@/interfaces/category";
import { Product } from "@/interfaces/product";
import Image from 'next/image';
import ModalComponent from './modal-component';

const ProductsComponent = ({productCategories}:{productCategories: Array<Category>}) => {
  const [selectedImage, setSelectedImage] = useState('')

  const handleModalClose = () => {
    setSelectedImage('')
  }

  const handleOnClicked = (imageSource: string) => {
    setSelectedImage(imageSource);
  }

  return (
    <div>
      {productCategories.map((productCategory: Category) => {
        return (
          <div key={productCategory.name}>
            <div id={productCategory.name.replace(/\s/g, "").toLowerCase()} className="font-bold bg-[url(/sprinkles-bg.jpg)] bg-bottom-right ml-auto mr-auto mb-5 rounded-md md:text-xl p-3">{productCategory.name}</div>
            {productCategory.items.map((product: Product) => {
              const hasNamedPrices = product.prices[0][0] !== "";
              const numSizes = product.prices.length;
              return (
                <div key={product.name} className="mb-5 text-sm">
                  <div className="font-bold bg-[#FFC8DD] ml-auto mr-auto md:w-xl mb-5 rounded-md md:text-lg text-sm">{product.name}&nbsp;
                    {!hasNamedPrices ? `$${product.prices[0][1]}` : ""}
                    {hasNamedPrices && `[`}
                    {hasNamedPrices && product.prices.map((priceItem: [string, number], index: number) => {
                      return (<span key={priceItem[0]}>{priceItem[0]} ${priceItem[1]}{index < numSizes - 1 && `/`}</span>);
                    })}
                    {hasNamedPrices && `]`}
                  </div>
                  <div className="flex flex-row ml-auto mr-auto">
                    <Image src={product.image} className="mt-5 mr-5 ml-auto cursor-zoom-in max-w-[45vw]" width="200" height="200" alt={product.name} onClick={() => handleOnClicked(product.image)} />
                    <Image src={product.image2} className="mt-5 mr-auto cursor-zoom-in max-w-[45vw]" width="200" height="200" alt={product.name} onClick={() => handleOnClicked(product.image2)} />
                  </div>
                  <div className="whitespace-pre-wrap">
                    {product.description}
                  </div>
                </div>
              )
            })}
          </div>          
        )
      })}
      {selectedImage && (
        <ModalComponent
          selectedImage={selectedImage}
          onClose={handleModalClose}
        />
      )}
    </div>
  )
}
export default ProductsComponent