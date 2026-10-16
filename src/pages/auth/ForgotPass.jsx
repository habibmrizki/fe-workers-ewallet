import walletIcon from "../../assets/wallet-icon.png";
import { IoMailOutline } from "react-icons/io5";

function ForgotPass() {
    


  return (
    // wlt.design
    <main className="w-full min-h-screen flex justify-center items-center bg-brand-primary">
       <section className="w-full md:w-120 h-full px-4">
            <div className="w-full h-90 md:h-100 rounded-3xl flex flex-col justify-between bg-gray-200 px-5 py-10">
                <div className="flex gap-2 items-center">
                    <img src={walletIcon} alt="e-wallet icon workers" width={30} />
                    <h1 className="text-blue-600 text-[20px] md:text-base font-medium">E-Wallet</h1>
                </div>
                <h2 className="text-[18px] md:text-2xl font-medium">Fill Out Form Correctly 👋</h2>
                <p className="text-brand-charcoal font-montserrat text-xs md:text-sm">We will send new password to your email.</p>
                <div className="grid gap-2">
                    <label htmlFor="email" className="font-medium">Email</label>
                    <div className="relative">
                        <IoMailOutline className="absolute top-4 left-3 text-md text-gray-700"/>
                        <input id="email" name="email" className="w-full h-12 border rounded-md border-gray-300 pl-10 pr-4 placeholder:text-sm focus:outline-blue-500" placeholder="Enter Your Email" />
                    </div>
                </div>
                <button type="submit" className="w-full h-12 rounded-md text-white bg-blue-600  hover:bg-blue-700 font-semibold cursor-pointer">Submit</button>
            </div>
       </section>
    </main>
  )
}

export default ForgotPass