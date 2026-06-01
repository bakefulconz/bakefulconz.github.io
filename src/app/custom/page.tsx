import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image src="/divider.svg" className="ml-auto mr-auto mt-5 mb-5" width="800" height="150" alt="Divider" />
      <div className="md:text-lg text-sm">
        Here are some of the custom orders that I&apos;ve had the privilege to create 🤍
        <br />
        Please enquire if you require something custom.
      </div>
      <Image src="/custom-order-collage.jpg" className="ml-auto mr-auto mt-5 mb-5 w-[320px] md:w-[800px]" width="0" height="0" alt="Custom Orders" />
    </div>
  );
}
