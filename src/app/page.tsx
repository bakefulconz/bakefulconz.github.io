import Image from "next/image";
import { getProducts } from "@/utilities/get-products";
import { getFaqs } from "@/utilities/get-faqs";
import { Faq } from "@/interfaces/faq";
import ContactForm from "@/components/contact-form";
import ProductsComponent from "@/components/products-component";

export default async function Home() {
  const products = await getProducts();
  const faqs = await getFaqs();

  return (
    <div>
      <Image src="/divider.svg" className="ml-auto mr-auto mt-5 mb-5" width="800" height="150" alt="Divider" />
      <div className="md:text-lg text-sm">
        Welcome to Bakeful!
        <br /><br />
        Baking + Grateful = Bakeful ❤️
        <br /><br />
        I&apos;m passionate about creating yummy homemade treats that you will love.
        <br /><br />
        Everything is baked to order, just for you 🎀
      </div>
      <Image id="products" src="/divider.svg" className="ml-auto mr-auto mt-5 mb-5" width="800" height="150" alt="Divider" />
      <ProductsComponent products={products} />
      <Image id="faq" src="/divider.svg" className="ml-auto mr-auto mt-5 mb-5" width="800" height="150" alt="Divider" />
      <div className="text-left">
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
