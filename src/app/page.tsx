import Image from "next/image";
import { getProducts } from "@/utilities/get-products";
import { getFaqs } from "@/utilities/get-faqs";
import { Faq } from "@/interfaces/faq";
import ContactForm from "@/components/contact-form";
import ProductsComponent from "@/components/products-component";
import Link from "next/link";

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
        <br /><br />
        <span className="text-sm font-bold italic">Note: My baking days are Monday through to Friday. Pick up and delivery is in Hamilton.</span>
      </div>
      <Image id="products" src="/divider.svg" className="ml-auto mr-auto mt-5 mb-5" width="800" height="150" alt="Divider" />
      <div className="text-lg font-bold text-center mb-2">Product Range</div>
      <div className="flex md:text-lg text-sm font-bold mb-5">
        <Link href="/#limitedtime" className="flex-1 underline">Limited Time</Link>
        <Link href="/#cakes" className="flex-1 underline">Cakes</Link>
        <Link href="/#cheesecakes" className="flex-1 underline">Cheesecakes</Link>
        <Link href="/#brownies" className="flex-1 underline">Brownies</Link>
        <Link href="/#biscuits" className="flex-1 underline">Biscuits</Link>
      </div>
      <ProductsComponent productCategories={products} />
      <Image id="faq" src="/divider.svg" className="ml-auto mr-auto mt-5 mb-5" width="800" height="150" alt="Divider" />
      <div className="text-left">
        <div className="text-lg font-bold text-center mb-5">Frequently Asked Questions</div>
        {faqs.map((faq: Faq) => {
          return (
            <div key={faq.question} className="mb-2 whitespace-pre-wrap">
              <div className="font-bold">{faq.question}</div>
              <div className="text-sm">{faq.answer}</div>
            </div>         
          )
        })}
      </div>
      <Image id="contact" src="/divider.svg" className="ml-auto mr-auto mt-5 mb-5" width="800" height="150" alt="Divider" />      
      <ContactForm productCategories={products}/>
    </div>
  );
}
