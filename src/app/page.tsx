import Image from "next/image";
import { getProducts } from "@/utilities/get-products";
import { getFaqs } from "@/utilities/get-faqs";
import { Product } from "@/interfaces/product";
import { Faq } from "@/interfaces/faq";
import ContactForm from "@/components/contact-form";

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
      <ContactForm products={products}/>
    </div>
  );
}
