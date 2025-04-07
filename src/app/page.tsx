import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-[800px] ml-auto mr-auto">
      <Image src="/banner-image.svg" className="ml-auto mr-auto" width="800" height="230" alt="Bakeful logo" />
      <div className="flex w-[800px] ml-auto mr-auto text-lg font-bold">
        <div className="flex-1">
            <Link href="/" className={`hover:text-shadow`}>Home</Link>
          </div>
          <div className="flex-1">
            <Link href="/" className={`hover:text-shadow`}>Products</Link>
          </div>
          <div className="flex-1">
            <Link href="/" className={`hover:text-shadow`}>FAQ</Link>
          </div>
          <div className="flex-1">
            <Link href="/" className={`hover:text-shadow`}>Contact</Link>
          </div>
          <div className="flex-1">
            <Link href="/" className={`hover:text-shadow`}>About</Link>
          </div>
      </div>
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
      <Image src="/divider.svg" className="ml-auto mr-auto mt-5 mb-5" width="800" height="150" alt="Divider" />
      <div className="mb-5">
        <div className="font-bold bg-[#FFC8DD] w-[800px] ml-auto mr-auto mb-5 rounded-md">Black Forest Cake - $70</div>
        <Image src="/black-forest-cake.jpg" className="ml-auto mr-auto mt-5" width="200" height="200" alt="Black Forest Cake" />
        <div>
          8&quot; 3 tiered moist chocolate cake layered with vanilla cream and cherries.
          <br />
          Topped with Whittakers dark chocolate ganache.
        </div>
      </div>
      <div className="mb-5">
        <div className="font-bold bg-[#FFC8DD] w-[800px] ml-auto mr-auto mb-5 rounded-md">Biscoff Brownie - $40</div>
        <Image src="/biscoff-brownie.jpg" className="ml-auto mr-auto mt-5" width="200" height="200" alt="Black Forest Cake" />
        <div>
          Populate me!
        </div>
      </div>
      <div className="mb-5">
        <div className="font-bold bg-[#FFC8DD] w-[800px] ml-auto mr-auto mb-5 rounded-md">Carrot Cake Cheesecake - $50</div>
        <Image src="/carrot-cake-cheesecake.jpg" className="ml-auto mr-auto mt-5" width="200" height="200" alt="Black Forest Cake" />
        <div>
          8&quot;? Cheesecake and carrot cake.
        </div>
      </div>
      <div className="mb-5">
        <div className="font-bold bg-[#FFC8DD] w-[800px] ml-auto mr-auto mb-5 rounded-md">Dark Chocolate and Crystallised Ginger Biscuits - $20</div>
        <Image src="/dark-chocolate-ginger-biscuits.jpg" className="ml-auto mr-auto mt-5" width="200" height="200" alt="Black Forest Cake" />
        <div>
          Populate me!
        </div>
      </div>
      <Image src="/divider.svg" className="ml-auto mr-auto mt-5 mb-5" width="800" height="150" alt="Divider" />
      <div className="w-[800px] text-left">
        <div className="text-lg font-bold text-center mb-5">Frequently Asked Questions</div>
        <div className="mb-2">
          <div className="text-md font-bold">Do you deliver outside of Hamilton?</div>
          <div className="text-sm">No sorry. Deliveries are by arrangement only and are charged depending on distance to travel.</div>
        </div>
        <div className="mb-2">
          <div className="text-md font-bold">Can I pick up my order?</div>
          <div className="text-sm">Yes, by arrangement only.</div>
        </div>
        <div className="mb-2">
          <div className="text-md font-bold">How much notice do I need to provide?</div>
          <div className="text-sm">Depends on the order. Probably a few days or something. Make sure you pay first.</div>
        </div>
        <div className="mb-2">
          <div className="text-md font-bold">Can you do custom orders?</div>
          <div className="text-sm">Please enquire and I&apos;ll do my best to meet your request.</div>
        </div>
        <div className="mb-2">
          <div className="text-md font-bold">Do you make Gluten Free items?</div>
          <div className="text-sm">Not at the moment.</div>
        </div>
        <div className="mb-2">
          <div className="text-md font-bold">Do items come sliced or unsliced?</div>
          <div className="text-sm">All items will be unsliced.</div>
        </div>
      </div>
      <Image src="/divider.svg" className="ml-auto mr-auto mt-5 mb-5" width="800" height="150" alt="Divider" />      
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
              <label>
                <input type="checkbox" />
                <span className="ml-2">Black Forest Cake</span>
              </label>
              <br />
              <label>
                <input type="checkbox" />
                <span className="ml-2">Biscoff Brownie</span>
              </label>
              <br />
              <label>
                <input type="checkbox" />
                <span className="ml-2">Carrot Cake Cheesecake</span>
              </label>
              <br />
              <label>
                <input type="checkbox" />
                <span className="ml-2">Dark Chocolate and Crystallised Ginger Biscuits</span>
              </label>
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
      <Image src="/divider.svg" className="ml-auto mr-auto mt-5 mb-5" width="800" height="150" alt="Divider" />      
      <div className="mb-5">
        Copyright © 2025 Bakeful
      </div>
    </div>
  );
}
