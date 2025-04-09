import Image from "next/image";
import Link from "next/link";
import { getProducts } from "@/utilities/get-products";
import { getFaqs } from "@/utilities/get-faqs";
import { Product } from "@/interfaces/product";
import { Faq } from "@/interfaces/faq";

export default async function Home() {
  const products = await getProducts();
  const faqs = await getFaqs();

  return (
    <div>
      <Image src="/divider.svg" className="ml-auto mr-auto mt-5 mb-5" width="800" height="150" alt="Divider" />
      <div>
        Welcome to Bakeful!
        <br /><br />
        Baking + Grateful = Bakeful ❤️
        <br /><br />
        I&apos;m passionate about creating yummy homemade treats that you will love.
        <br /><br />
        Everything is baked to order, just for you 🎀
      </div>
      <Image id="products" src="/divider.svg" className="ml-auto mr-auto mt-5 mb-5" width="800" height="150" alt="Divider" />
      {products.map((product: Product) => {
        return (
          <div key={product.name} className="mb-5">
            <div className="font-bold bg-[#FFC8DD] ml-auto mr-auto mb-5 rounded-md">{product.name} - ${product.price}</div>
            <div className="flex flex-row ml-auto mr-auto">
              <Image src={product.image} className="mt-5 mr-5 ml-auto" width="200" height="200" alt={product.name} />
              <Image src={product.image2} className="mt-5 mr-auto" width="200" height="200" alt={product.name} />
            </div>
            <div className="whitespace-pre-wrap">
              {product.description}
            </div>
          </div>          
        )
      })}
      <Image id="faq" src="/divider.svg" className="ml-auto mr-auto mt-5 mb-5" width="800" height="150" alt="Divider" />
      <div className="w-[800px] text-left">
        <div className="text-lg font-bold text-center mb-5">Frequently Asked Questions</div>
        {faqs.map((faq: Faq) => {
          return (
            <div key={faq.question} className="mb-2">
              <div className="text-md font-bold">{faq.question}</div>
              <div className="text-sm">{faq.answer}</div>
            </div>         
          )
        })}
      </div>
      <Image id="contact" src="/divider.svg" className="ml-auto mr-auto mt-5 mb-5" width="800" height="150" alt="Divider" />      
      <div>
        <div>Contact me if you want some sweet treats!</div>
        <div className="mt-5 text-left">
          <div className="grid grid-cols-[1fr,3fr] mt-2 mb-2">
            <div className="text-left text-lg">First Name:</div>
            <div className="col-start-2">
              <input type="text" className="form-control h-8 w-72 border-[1px] border-black bg-[#FFC8DD] rounded-md" maxLength={256} required/><br/>
            </div>
          </div>

          <div className="grid grid-cols-[1fr,3fr] mt-2 mb-2">
            <div className="text-left text-lg">Last Name:</div>
            <div className="col-start-2">
              <input type="text" className="form-control h-8 w-72 border-[1px] border-black bg-[#FFC8DD] rounded-md" maxLength={256} required/><br/>
            </div>
          </div>

          <div className="grid grid-cols-[1fr,3fr] mt-2 mb-2">
            <div className="text-left text-lg">Email:</div>
            <div className="col-start-2">
              <input type="text" className="form-control h-8 w-72 border-[1px] border-black bg-[#FFC8DD] rounded-md" maxLength={256} required/><br/>
            </div>
          </div>

          <div className="grid grid-cols-[1fr,3fr] mt-2 mb-2">
            <div className="text-left text-lg">Message:</div>
            <div className="col-start-2">
              <textarea rows={5} className="form-control w-96 border-[1px] border-black bg-[#FFC8DD] rounded-md" maxLength={256} required/><br/>
            </div>
          </div>

          <div className="grid grid-cols-[1fr,3fr] mt-2 mb-2">
            <div className="text-left text-lg">Requested Products:</div>
            <div className="col-start-2 pt-1">
              {products.map((product: Product) => {
                return (
                  <>
                    <label key={product.name}>
                      <input type="checkbox" />
                      <span className="ml-2">{product.name}</span>
                    </label>
                    <br />         
                  </>
                )
              })}              
            </div>
          </div>

          <div className="grid grid-cols-[1fr,3fr]">
            <Image src="/not-a-robot.jpg" className="col-start-2 mt-2 mb-2" width="300" height="150" alt="Not a robot" />
          </div>

          <div className="grid grid-cols-[1fr,3fr] mt-2 mb-2">
            <div className="col-start-2">
              <button type="submit" className="clear-both border-[1px] border-black bg-[#FFC8DD] px-2 py-1 rounded mt-1 hover:bg-yellow-50 disabled:bg-gray-300">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
