import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Image src="/divider.svg" className="ml-auto mr-auto mt-5 mb-5" width="800" height="150" alt="Divider" />
      <div className="md:text-lg text-sm">
        My name is Krystal, I&apos;m a wife and mum who loves to bake and create!
        <br /><br />
        I enjoy baking for my family and friends. At my church you&apos;ll find me regularly providing baking for after a service.
        <br /><br />
        I&apos;ve always enjoyed baking and I strive to achieve a high standard in all I do.
        <br /><br />
        Let me add some sweetness into your day! 🤍
      </div>
      <Image src="/justin-krystal.png" className="ml-auto mr-auto mt-5 mb-5" width="600" height="400" alt="Justin and Krystal" />
    </div>
  );
}
