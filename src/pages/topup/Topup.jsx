import { useState } from "react";
import { MdOutlineVerified } from "react-icons/md";
import { BsBoxArrowUp } from "react-icons/bs";
import ModalTopUpEnterpin from "./ModalTopUpEnterpin";
import { formatAmountField, parseAmountField } from "../../utils/formatAmount";

const paymentMethods = [
  { id: 1, name: "Bank Central Asia", icon: "/bca.svg" },
  { id: 2, name: "Bank Rakyat Indonesia", icon: "/bri.svg" },
  { id: 3, name: "Dana", icon: "/dana.svg" },
  { id: 4, name: "Shoope Pay", icon: "/shopee-pay.png" },
  { id: 5, name: "Ovo", icon: "/ovo.svg" },
];

function Topup() {
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState(0);
  const [method, setMethod] = useState(null);

  const tax = 2500;
  const subTotal = amount + tax;

  return (
    <main className="md:flex flex-col gap-6 md:px-10 md:py-7">
      <div className="hidden md:flex items-center gap-3">
        <BsBoxArrowUp className="text-xl text-blue-600"/>
        <p className="text-lg font-bold font-montserrat">Top Up Account</p>
      </div>
      <header className="shrink-0 bg-brand-primary p-3 text-white lg:hidden">
        Top-Up
      </header>
      <div className="lg:flex gap-6">
        <section className="p-6 md:grow md:px-7 md:border md:border-gray-200">
          <h2 className="text-lg md:text-base mb-5 font-medium lg:font-semibold font-montserrat">Account Information</h2>
          <article className="bg-gray-100 rounded-lg p-4 md:p-6 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                alt="Photo Profile"
                className="w-20 h-20 object-cover rounded-xl shrink-0"
              />

              <div className="flex flex-col items-start gap-1">
                <h1 className="font-semibold text-base lg:text-lg">
                  Tatang Sutarman
                </h1>
                <p className="text-gray-600">08123456789</p>

                <div className="inline-flex items-center gap-1.5 bg-brand-secondary text-white text-sm leading-none px-3 py-1.5 rounded-lg">
                  <MdOutlineVerified className="text-base shrink-0" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          </article>

          <article className="mt-5 flex flex-col gap-3">
            <h1 className="text-lg font-medium lg:font-semibold">Amount</h1>
            <p className="text-gray-500">
              Type the amount you want to transfer and then press continue to
              the next steps.
            </p>
            <div className="flex flex-col bg-[#ffffff] gap-1">
              <div className="flex items-center border border-t border-gray-300 bg-gray-50 rounded-lg py-1.5 px-2.5 w-full gap-3 h-11 lg:h-15">
                <img src="/money.svg" alt="" className="w-4 h-3.5" />
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Enter Nominal Transfer"
                  value={formatAmountField(amount)}
                  onChange={(e) => setAmount(parseAmountField(e.target.value))}
                  className="w-full outline-none"
                />
              </div>
            </div>
          </article>

          <article className="mt-5">
            <h1 className="text-lg font-medium mb-2">Payment Method</h1>
            <p className="text-gray-500">
              Choose your payment method for top up account
            </p>
            <div className="flex flex-col gap-3 mt-5">
              {paymentMethods.map((data) => (
                <label
                  key={data.id}
                  className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 cursor-pointer has-checked:border-blue-500 has-checked:bg-blue-50"
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={method === data.id}
                    onChange={() => setMethod(data.id)}
                  />
                  <img
                    src={data.icon}
                    alt={data.name}
                    className="w-10 h-10 object-contain"
                  />
                  <span className="text-lg text-gray-500">{data.name}</span>
                </label>
              ))}
            </div>
          </article>
        </section>

        <section className="p-6 md:grow md:border md:h-fit md:border-gray-200">
          <h1 className="text-lg pb-5 font-medium md:font-semibold lg:text-lg">Payment</h1>

          <div className="flex flex-col gap-3">
            <div className="flex justify-between text-lg">
              <p className="text-base text-gray-500 font-medium">Order</p>
              <p className="font-semibold text-base">
                {formatAmountField(amount) || "Rp 0"}
              </p>
            </div>
            <div className="flex justify-between text-lg">
              <p className="text-base text-gray-500 font-medium">Delivery</p>
              <p className="font-semibold text-base">Rp 0</p>
            </div>
            <div className="flex justify-between text-lg">
              <p className="text-base text-gray-500 font-medium">Tax</p>
              <p className="font-semibold text-base">{formatAmountField(tax)}</p>
            </div>
            <hr className="border-t border-gray-300 my-4" />
            <div className="flex justify-between text-lg">
              <p className="text-base text-gray-500 font-medium">Sub Total</p>
              <p className="font-semibold text-base">{formatAmountField(subTotal)}</p>
            </div>
            <button
              type="button"
              disabled={amount <= 0 || !method}
              className="bg-brand-secondary text-white rounded-lg h-13 mt-3 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => setShowModal(true)}
            >
              Submit
            </button>
            <p className="text-gray-500 text-base">
              *Get Discount if you pay with Bank Central Asia
            </p>
          </div>
        </section>
      </div>

      {showModal && (
        <ModalTopUpEnterpin
          setShowModal={setShowModal}
          amount={amount}
          method={method}
        />
      )}
    </main>
  );
}

export default Topup;
