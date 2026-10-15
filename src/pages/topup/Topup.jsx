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
    <>
      <div className="hidden md:flex items-center gap-3 ml-14 mt-10">
        <BsBoxArrowUp />
        <p className="text-xl font-semibold">Top Up Account</p>
      </div>

      <div className="lg:flex gap-10">
        <section className=" lg:mb-13 md:grow px-7 mt-8 md:border md:border-gray-300 md:p-10 md:mx-10 lg:ml-14 lg:mx-0">
          <h1 className="text-lg mb-5 lg:font-semibold">Account Information</h1>
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
            <h1 className="text-lg lg:font-semibold">Amount</h1>
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
            <h1 className="text-lg mb-2">Payment Method</h1>
            <p className="text-gray-500">
              Choose your payment method for top up account
            </p>
            <div className="flex flex-col gap-3 mt-5">
              {paymentMethods.map((data) => (
                <label
                  key={data.id}
                  className="flex items-center gap-3 p-4 border rounded-xl bg-white cursor-pointer has-checked:border-blue-500 has-checked:bg-blue-50"
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

        <section className="my-8 mx-5 md:border md:h-fit md:border-gray-300 md:p-7 lg:mr-14 md:mx-10 lg:mx-0">
          <h1 className="text-lg pb-5 md:font-semibold lg:text-2xl">Payment</h1>

          <div className="mx-4 flex flex-col gap-3">
            <div className="flex justify-between text-lg">
              <p className="lg:font-medium">Order</p>
              <p className="font-semibold">
                {formatAmountField(amount) || "Rp 0"}
              </p>
            </div>
            <div className="flex justify-between text-lg">
              <p className="lg:font-medium">Delivery</p>
              <p className="font-semibold">Rp 0</p>
            </div>
            <div className="flex justify-between text-lg">
              <p className="lg:font-medium">Tax</p>
              <p className="font-semibold">{formatAmountField(tax)}</p>
            </div>
            <hr className="border-t border-gray-400 my-4" />
            <div className="flex justify-between text-lg">
              <p className="lg:font-medium">Sub Total</p>
              <p className="font-semibold">{formatAmountField(subTotal)}</p>
            </div>
            <button
              type="button"
              disabled={amount <= 0 || !method}
              className="bg-brand-secondary text-white rounded-lg h-13 mt-3 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => setShowModal(true)}
            >
              Submit
            </button>
            <p className="text-gray-500 text-lg ">
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
    </>
  );
}

export default Topup;
