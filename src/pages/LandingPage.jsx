function LandingPage() {
  return (
    <main>
      <header className="bg-brand-primary px-5 lg:px-60 pt-20 overflow-hidden">
        <h1 className="text-white text-4xl lg:text-[60px] font-medium md:text-center mb-10">
          Experience the Future of Digital <br className="lg:block hidden" />
          Payments with E-Wallet
        </h1>

        <div className="flex flex-col lg:flex-row-reverse lg:items-end items-center lg:gap-60">
          <section className="flex-1 flex flex-col gap-6 text-center lg:text-left lg:self-center pb-10 lg:pb-0">
            <p className="text-white text-lg">
              Simplify Your Life with Secure and Convenient Mobile
              <br className="lg:block hidden" /> Payments
            </p>
            <div className="flex gap-5 justify-center lg:justify-start">
              <button className="flex items-center justify-center gap-3 bg-white w-full py-4 rounded-xl cursor-pointer">
                <img src="/gplay.svg" alt="Play Store" />
                <p className="text-brand-primary font-semibold">Play Store</p>
              </button>
              <button className="flex items-center justify-center gap-3 border border-white w-full py-4 rounded-xl cursor-pointer">
                <img src="/appstore.svg" alt="App Store" />
                <p className="text-white font-semibold">App Store</p>
              </button>
            </div>
            <div>
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <p className="text-white text-3xl lg:text-[50px]">4.6M</p>
                <img src="/user.svg" alt="Users" />
              </div>
              <p className="text-white mt-2">
                Around the world, we already have over 4.6M happy users
              </p>
            </div>
          </section>
          <section className="flex-1 relative max-w-lg mx-auto lg:mx-0 self-center lg:self-end translate-y-[6%]">
            <img
              src="/Mobile - Dashboard V2.svg"
              alt="Dashboard V2"
              className="block w-full translate-y-[2%]"
            />
            <img
              src="/Mobile - Dashboard V1.svg"
              alt="Dashboard V1"
              className="block absolute bottom-0 -right-10 w-4/5"
            />
          </section>
        </div>
      </header>
      <article className="my-15 px-5 lg:px-30 flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <img
            src="/Headphone.svg"
            alt="24/7 Support"
            className="w-13 h-13 bg-brand-primary p-3 rounded-[50%]"
          />
          <div className="text-center lg:text-left">
            <h1 className="font-bold text-lg text-brand-primary">
              24/7 Support
            </h1>
            <p className="text-brand-charcoal">
              We have 24/7 contact support so you can contact us whenever you
              want.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <img
            src="/Shield Done.svg"
            alt="Data Privacy"
            className="w-13 h-13 bg-brand-primary p-3 rounded-[50%]"
          />
          <div className="text-center lg:text-left">
            <h1 className="font-bold text-lg text-brand-primary">
              Data Privacy
            </h1>
            <p className="text-brand-charcoal">
              We make sure your data is safe and encrypted in our database.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <img
            src="/Downlaod.svg"
            alt="Easy Download"
            className="w-13 h-13 bg-brand-primary p-3 rounded-[50%]"
          />
          <div className="text-center lg:text-left">
            <h1 className="font-bold text-lg text-brand-primary p-3">
              Easy Download
            </h1>
            <p className="text-brand-charcoal">
              E-Wallet is 100% free to use on Google Play and App Store.
            </p>
          </div>
        </div>
      </article>

      <section className="mt-25 lg:flex lg:flex-row-reverse lg:px-30 lg:my-30">
        <div className="flex justify-center items-center relative lg:w-1/2">
          <div className="relative overflow-hidden rounded-lg bg-brand-secondary aspect-2/1 w-[calc(100%-2.5rem)] lg:w-155">
            <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-64 h-64 lg:w-80 lg:h-80 rounded-full border-28px lg:border-40 border-brand-background" />
            <div className="absolute -right-12 -bottom-16 w-48 h-48 lg:w-64 lg:h-64 rounded-full border-28px lg:border-40 border-brand-background" />
          </div>
          <img
            src="/Mobile - Dashboard V2.svg"
            alt=""
            className="w-50 lg:w-80 absolute -bottom-4.5 lg:-bottom-7"
          />
        </div>
        <div className="text-center px-5 mt-10 flex flex-col gap-5 lg:w-1/2 ">
          <h2 className="text-brand-background text-xl font-bold lg:text-left">
            WELCOME TO E-Wallet
          </h2>
          <h1 className="font-medium text-3xl lg:text-left text-brand-primary">
            Your All-in-One Digital Payment Solution
          </h1>
          <p className="text-brand-charcoal lg:text-left">
            Say goodbye to cash and hello to the future of payments! Secure,
            fast, and convenient.
          </p>
          <button className="bg-brand-primary hover:bg-brand-secondary text-white rounded-sm min-h-12 cursor-pointer lg:w-40 mb-3">
            Get Started
          </button>
        </div>
      </section>

      <section>
        <div className="bg-brand-background w-full px-5 py-10 lg:px-30 lg:py-16 flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
          <div className="flex justify-center lg:w-1/2">
            <img
              src="/notebook.svg"
              alt="notebook"
              className="w-full max-w-md lg:max-w-full"
            />
          </div>

          <div className="flex flex-col gap-3 lg:w-1/2">
            <h1 className="font-normal text-4xl text-white">
              All The Great E-Wallet Features.
            </h1>
            <p className="text-gray-300 text-lg">
              We have some great features from the application and it’s totally
              free.
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex gap-3 text-brand-green font-bold">
                <img src="/checkgreen.svg" alt="" />
                <p>Small Fee</p>
              </div>
              <div className="flex gap-3 text-brand-green font-bold">
                <img src="/checkgreen.svg" alt="" />
                <p>Data Secured</p>
              </div>
              <div className="flex gap-3 text-brand-green font-bold">
                <img src="/checkgreen.svg" alt="" />
                <p>User Friendly</p>
              </div>
              <button className="w-full bg-brand-primary hover:bg-brand-secondary text-white min-h-12 rounded-lg mt-5 lg:w-40 cursor-pointer">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 lg:px-30 mt-20 flex flex-col gap-5 lg:flex-row">
        <div className="flex flex-col gap-5 lg:w-1/2">
          <h1 className="font-medium text-4xl text-center lg:text-left lg:font-normal lg:text-[50px] text-brand-primary">
            100+ Trusted Partners
          </h1>
          <p className="text-center text-brand-charcoal lg:text-left lg:text-[20px]">
            We have reached global level and have 100+ brand partners around the
            globe.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mb-15 lg:flex-row lg:gap-5">
          <img src="/microsoft.svg" alt="Microsoft" />
          <img src="/dropbox.svg" alt="Dropbox" />
          <img src="/h&m.svg" alt="H&M" />
          <img src="/airbnb.svg" alt="Airbnb" />
          <img src="/canon.svg" alt="Canon" />
          <img src="/dell.svg" alt="Dell" />
        </div>
      </section>

      <section className="mb-15 relative">
        <article className="px-5 flex flex-col gap-5 lg:mt-20">
          <h1 className="font-medium text-3xl text-center lg:font-normal lg:text-[50px] text-brand-primary">
            What Our Users Are Saying
          </h1>
          <p className="text-center text-brand-charcoal">
            Ready to experience the future of payments? Download E-Wallet now.
          </p>
        </article>

        <article className="mt-10 px-5 lg:px-30 lg:flex lg:justify-center relative">
          <button className="hidden lg:block cursor-pointer">
            <img
              src="/arrow-up (2).svg"
              alt="Prev"
              className="absolute left-35  w-12 h-12 bg-brand-gray rounded-[50%] p-3"
            />
          </button>
          <div className="bg-brand-primary lg:w-fit rounded-3xl px-5 py-10 flex flex-col gap-3">
            <img
              src="/profilejames.svg"
              alt="James Bond"
              className="mx-auto block"
            />
            <p className="text-white text-center font-medium text-lg">
              James Bond
            </p>
            <div className="flex gap-3 justify-center">
              <img src="/bintang.svg" alt="star" />
              <img src="/bintang.svg" alt="star" />
              <img src="/bintang.svg" alt="star" />
              <img src="/bintang.svg" alt="star" />
              <img src="/bintang.svg" alt="star" />
              <p className="text-white text-lg">5.0</p>
            </div>
            <img src="/petik.svg" alt="quote" className="mx-auto block" />
            <p className="text-white text-center lg:px-10">
              I've been using E-Wallet for over two years now, and I'm very
              satisfied...
            </p>
          </div>
          <button className="hidden lg:block cursor-pointer">
            <img
              src="/arrow-right.svg"
              alt="Next"
              className="absolute right-35 bg-brand-primary w-12 h-12 rounded-[50%] p-3"
            />
          </button>
        </article>

        <div className="flex items-center justify-center gap-3 mt-8 lg:hidden">
          <button className="w-4 h-2 rounded-full bg-brand-primary transition-all"></button>
          <button className="w-2 h-2 rounded-full bg-gray-300 transition-all"></button>
          <button className="w-2 h-2 rounded-full bg-gray-300 transition-all"></button>
          <button className="w-2 h-2 rounded-full bg-gray-300 transition-all"></button>
        </div>
      </section>

      <section className="bg-brand-background px-5 pt-10">
        <div className="flex flex-col gap-5 lg:gap-30 lg:flex-row-reverse lg:justify-center">
          <div className="lg:flex lg:flex-col flex flex-col gap-5 lg:justify-center">
            <h1 className="text-4xl text-white">Download The App</h1>
            <p className="text-gray-300">
              Ready to experience the future of payments? Download e-wallet now
              and enjoy a world of convenience at your fingertips.
            </p>
            <div className="flex gap-5 justify-center lg:flex-row">
              <button className="flex justify-center gap-5 bg-brand-primary w-full p-5 rounded-xl cursor-pointer">
                <img src="/gplay.svg" alt="" />
                <p className="text-white">Play store</p>
              </button>
              <button className="flex justify-center  gap-5 border border-white p-5 w-full rounded-xl cursor-pointer">
                <img src="/appstore.svg" alt="" />
                <p className="text-white">Apps Store</p>
              </button>
            </div>
          </div>
          <div className="lg:flex-1 relative lg:max-w-md mx-auto lg:mx-0">
            <img
              src="/Mobile - Dashboard V2.svg"
              alt="Dashboard V2"
              className="w-full"
            />
            <img
              src="/Mobile - Dashboard V1.svg"
              alt="Dashboard V1"
              className="absolute bottom-0 -right-15 w-4/5"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
