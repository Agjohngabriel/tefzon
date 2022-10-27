import GuestLayout from "../../../components/GuestLayout";

const Index = () => {
  return (
    <GuestLayout>
      <section
        className="py-5 sm:py-10 lg:py-20 px-4 lg:px-16 overflow-hidden relative z-10 mx-auto"
        data-aos="fade-up"
        id="contact"
      >
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-center text-slate-900 dark:text-gray-200 lg:justify-between mx-auto">
            <div
              className="w-full lg:w-1/2 xl:w-6/12 px-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="max-w-[570px] mb-12 lg:mb-0">
                <p className="text-base text-4xl font-extrabold text-body-color leading-relaxed stand__out__text mx-5">
                  Contact Us
                </p>
                <div className="my-2 ">
                  <img
                    src="/img/contact.png"
                    alt="soccer"
                    className="relative animate-up"
                  />
                </div>

                <p className="text-base text-2xl font-medium text-body-color leading-relaxed mb-9 mx-5">
                  Please choose a topic and read the FAQs. If we haven't
                  answered your question, please use the form to get in touch.
                </p>
              </div>
            </div>
            <div
              className="w-full lg:w-1/2 xl:w-5/12 px-4"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="2000"
            >
              <div className="bg-gray-100 dark:bg-slate-800 relative rounded-lg p-8 sm:p-12 shadow-lg">
                <form>
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="
                                    w-full
                                    rounded
                                    p-3
                                    text-gray-800
                                    dark:text-gray-50
                                    dark:bg-slate-700
                                    border-gray-500
                                    dark:border-slate-600
                                    outline-none
                                    focus-visible:shadow-none
                                    focus:border-primary
                                    "
                      name="full_name"
                      id="full_name"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="
                                    w-full
                                    rounded
                                    p-3
                                    text-gray-800
                                    dark:text-gray-50
                                    dark:bg-slate-700
                                    border-gray-500
                                    dark:border-slate-600
                                    outline-none
                                    focus-visible:shadow-none
                                    focus:border-primary
                                    "
                      name="email"
                      id="email"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      inputMode="numeric"
                      placeholder="Your Phone"
                      className="
                                    w-full
                                    rounded
                                    p-3
                                    text-gray-800
                                    dark:text-gray-50
                                    dark:bg-slate-700
                                    border-gray-500
                                    dark:border-slate-600
                                    outline-none
                                    focus-visible:shadow-none
                                    focus:border-primary
                                    "
                      name="phone_number"
                      id="phone_number"
                    />
                  </div>
                  <div className="mb-6">
                    <textarea
                      placeholder="Your Message"
                      className="
                                    w-full
                                    rounded
                                    p-3
                                    text-gray-800
                                    dark:text-gray-50
                                    dark:bg-slate-700
                                    border-gray-500
                                    dark:border-slate-600
                                    outline-none
                                    focus-visible:shadow-none
                                    focus:border-primary
                                    "
                      name="message"
                      id="message"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="
                                    w-full
                                    text-gray-100
                                    hover:text-gray-700
                                    bg-[#6544DE]
                                    rounded
                                    border border-primary
                                    dark:border-slate-600
                                    p-3
                                    transition
                                    ease-in-out
                                    duration-500
                                    hover:bg-[#6544DE]/70
                                    "
                    >
                      Send Message
                    </button>
                  </div>
                </form>
                <div>
                  <span className="absolute -top-10 -right-9 z-[-1]">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                        fill="#6544DE"
                      />
                    </svg>
                  </span>
                  <span className="absolute -right-10 top-[90px] z-[-1]">
                    <svg
                      width="34"
                      height="134"
                      viewBox="0 0 34 134"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="31.9993"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 31.9993 132)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="31.9993"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 31.9993 117.333)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="31.9993"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 31.9993 102.667)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="31.9993"
                        cy="88"
                        r="1.66667"
                        transform="rotate(180 31.9993 88)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="31.9993"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 31.9993 73.3333)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="31.9993"
                        cy="45"
                        r="1.66667"
                        transform="rotate(180 31.9993 45)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="31.9993"
                        cy="16"
                        r="1.66667"
                        transform="rotate(180 31.9993 16)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="31.9993"
                        cy="59"
                        r="1.66667"
                        transform="rotate(180 31.9993 59)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="31.9993"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 31.9993 30.6666)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="31.9993"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 31.9993 1.66665)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="17.3333"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 17.3333 132)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="17.3333"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 17.3333 117.333)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="17.3333"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 17.3333 102.667)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="17.3333"
                        cy="88"
                        r="1.66667"
                        transform="rotate(180 17.3333 88)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="17.3333"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 17.3333 73.3333)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="17.3333"
                        cy="45"
                        r="1.66667"
                        transform="rotate(180 17.3333 45)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="17.3333"
                        cy="16"
                        r="1.66667"
                        transform="rotate(180 17.3333 16)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="17.3333"
                        cy="59"
                        r="1.66667"
                        transform="rotate(180 17.3333 59)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="17.3333"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 17.3333 30.6666)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="17.3333"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 17.3333 1.66665)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="2.66536"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 2.66536 132)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="2.66536"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 2.66536 117.333)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="2.66536"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 2.66536 102.667)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="2.66536"
                        cy="88"
                        r="1.66667"
                        transform="rotate(180 2.66536 88)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="2.66536"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 2.66536 73.3333)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="2.66536"
                        cy="45"
                        r="1.66667"
                        transform="rotate(180 2.66536 45)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="2.66536"
                        cy="16"
                        r="1.66667"
                        transform="rotate(180 2.66536 16)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="2.66536"
                        cy="59"
                        r="1.66667"
                        transform="rotate(180 2.66536 59)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="2.66536"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 2.66536 30.6666)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="2.66536"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 2.66536 1.66665)"
                        fill="#6544DE"
                      />
                    </svg>
                  </span>
                  <span className="absolute -left-7 -bottom-7 z-[-1]">
                    <svg
                      width="107"
                      height="134"
                      viewBox="0 0 107 134"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="104.999"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 104.999 132)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="104.999"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 104.999 117.333)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="104.999"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 104.999 102.667)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="104.999"
                        cy="88"
                        r="1.66667"
                        transform="rotate(180 104.999 88)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="104.999"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 104.999 73.3333)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="104.999"
                        cy="45"
                        r="1.66667"
                        transform="rotate(180 104.999 45)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="104.999"
                        cy="16"
                        r="1.66667"
                        transform="rotate(180 104.999 16)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="104.999"
                        cy="59"
                        r="1.66667"
                        transform="rotate(180 104.999 59)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="104.999"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 104.999 30.6666)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="104.999"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 104.999 1.66665)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="90.3333"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 90.3333 132)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="90.3333"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 90.3333 117.333)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="90.3333"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 90.3333 102.667)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="90.3333"
                        cy="88"
                        r="1.66667"
                        transform="rotate(180 90.3333 88)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="90.3333"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 90.3333 73.3333)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="90.3333"
                        cy="45"
                        r="1.66667"
                        transform="rotate(180 90.3333 45)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="90.3333"
                        cy="16"
                        r="1.66667"
                        transform="rotate(180 90.3333 16)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="90.3333"
                        cy="59"
                        r="1.66667"
                        transform="rotate(180 90.3333 59)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="90.3333"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 90.3333 30.6666)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="90.3333"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 90.3333 1.66665)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="75.6654"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 75.6654 132)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="31.9993"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 31.9993 132)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="75.6654"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 75.6654 117.333)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="31.9993"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 31.9993 117.333)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="75.6654"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 75.6654 102.667)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="31.9993"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 31.9993 102.667)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="75.6654"
                        cy="88"
                        r="1.66667"
                        transform="rotate(180 75.6654 88)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="31.9993"
                        cy="88"
                        r="1.66667"
                        transform="rotate(180 31.9993 88)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="75.6654"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 75.6654 73.3333)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="31.9993"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 31.9993 73.3333)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="75.6654"
                        cy="45"
                        r="1.66667"
                        transform="rotate(180 75.6654 45)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="31.9993"
                        cy="45"
                        r="1.66667"
                        transform="rotate(180 31.9993 45)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="75.6654"
                        cy="16"
                        r="1.66667"
                        transform="rotate(180 75.6654 16)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="31.9993"
                        cy="16"
                        r="1.66667"
                        transform="rotate(180 31.9993 16)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="75.6654"
                        cy="59"
                        r="1.66667"
                        transform="rotate(180 75.6654 59)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="31.9993"
                        cy="59"
                        r="1.66667"
                        transform="rotate(180 31.9993 59)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="75.6654"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 75.6654 30.6666)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="31.9993"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 31.9993 30.6666)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="75.6654"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 75.6654 1.66665)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="31.9993"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 31.9993 1.66665)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="60.9993"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 60.9993 132)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="17.3333"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 17.3333 132)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="60.9993"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 60.9993 117.333)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="17.3333"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 17.3333 117.333)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="60.9993"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 60.9993 102.667)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="17.3333"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 17.3333 102.667)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="60.9993"
                        cy="88"
                        r="1.66667"
                        transform="rotate(180 60.9993 88)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="17.3333"
                        cy="88"
                        r="1.66667"
                        transform="rotate(180 17.3333 88)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="60.9993"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 60.9993 73.3333)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="17.3333"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 17.3333 73.3333)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="60.9993"
                        cy="45"
                        r="1.66667"
                        transform="rotate(180 60.9993 45)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="17.3333"
                        cy="45"
                        r="1.66667"
                        transform="rotate(180 17.3333 45)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="60.9993"
                        cy="16"
                        r="1.66667"
                        transform="rotate(180 60.9993 16)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="17.3333"
                        cy="16"
                        r="1.66667"
                        transform="rotate(180 17.3333 16)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="60.9993"
                        cy="59"
                        r="1.66667"
                        transform="rotate(180 60.9993 59)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="17.3333"
                        cy="59"
                        r="1.66667"
                        transform="rotate(180 17.3333 59)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="60.9993"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 60.9993 30.6666)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="17.3333"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 17.3333 30.6666)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="60.9993"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 60.9993 1.66665)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="17.3333"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 17.3333 1.66665)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="46.3333"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 46.3333 132)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="2.66536"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 2.66536 132)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="46.3333"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 46.3333 117.333)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="2.66536"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 2.66536 117.333)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="46.3333"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 46.3333 102.667)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="2.66536"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 2.66536 102.667)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="46.3333"
                        cy="88"
                        r="1.66667"
                        transform="rotate(180 46.3333 88)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="2.66536"
                        cy="88"
                        r="1.66667"
                        transform="rotate(180 2.66536 88)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="46.3333"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 46.3333 73.3333)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="2.66536"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 2.66536 73.3333)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="46.3333"
                        cy="45"
                        r="1.66667"
                        transform="rotate(180 46.3333 45)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="2.66536"
                        cy="45"
                        r="1.66667"
                        transform="rotate(180 2.66536 45)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="46.3333"
                        cy="16"
                        r="1.66667"
                        transform="rotate(180 46.3333 16)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="2.66536"
                        cy="16"
                        r="1.66667"
                        transform="rotate(180 2.66536 16)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="46.3333"
                        cy="59"
                        r="1.66667"
                        transform="rotate(180 46.3333 59)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="2.66536"
                        cy="59"
                        r="1.66667"
                        transform="rotate(180 2.66536 59)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="46.3333"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 46.3333 30.6666)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="2.66536"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 2.66536 30.6666)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="46.3333"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 46.3333 1.66665)"
                        fill="#6544DE"
                      />
                      <circle
                        cx="2.66536"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 2.66536 1.66665)"
                        fill="#6544DE"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-2 lg:px-12 ">
        <div className="rounded-lg bg-[#6E4BEC]/60 text-white p-4 lg:p-8 my-12 flex flex-col md:flex-row space-between items-center justify-between relative overflow-hidden">
          {/* <!-- LEFT PART --> */}
          <div className="flex flex-col lg:ml-10 max-w-sm lg:max-w-xl z-10">
            <div className="hero-text  pt-5">
              <h4 className="lg:text-5xl text-center md:text-left font-bold text-white md:pb-2">
                Don't listen to what they say, Go See
              </h4>

              <p className="text-center md:text-left text-white opacity-70 mb-3 md:pb-6">
                Your ultimate travel companion. Carries all the information you
                need while travelling
              </p>

              <div className="get-app flex space-x-5 justify-center md:justify-start">
                <button className="apple bg-white shadow-md px-3 py-2 rounded-lg flex items-center space-x-1">
                  <div className="logo">
                    <svg
                      className="w-10 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      width="419.955"
                      height="512"
                      viewBox="0 0 419.955 512"
                    >
                      <g transform="translate(-46.022)">
                        <path d="M185.255,512c-76.2-.439-139.233-155.991-139.233-235.21,0-129.4,97.075-157.734,134.487-157.734,16.86,0,34.863,6.621,50.742,12.48,11.1,4.087,22.588,8.306,28.975,8.306,3.823,0,12.832-3.589,20.786-6.738,16.963-6.753,38.071-15.146,62.651-15.146h.146c18.354,0,74,4.028,107.461,54.272l7.837,11.777-11.279,8.511c-16.113,12.158-45.513,34.336-45.513,78.267,0,52.031,33.3,72.041,49.292,81.665,7.061,4.248,14.37,8.628,14.37,18.208,0,6.255-49.922,140.566-122.417,140.566-17.739,0-30.278-5.332-41.338-10.034-11.191-4.761-20.845-8.862-36.8-8.862-8.086,0-18.311,3.823-29.136,7.881C221.5,505.73,204.752,512,185.753,512Z" />
                        <path d="M351.343,0c1.888,68.076-46.8,115.3-95.425,112.342C247.9,58.015,304.54,0,351.343,0Z" />
                      </g>
                    </svg>
                  </div>
                  <div className="text">
                    <p
                      className=" text-xs text-gray-600"
                      style={{ ["font-size" as any]: "0.5rem" }}
                    >
                      Download on the
                    </p>
                    <p className=" text-xs font-semibold text-gray-900">
                      Apple Store
                    </p>
                  </div>
                </button>
                <button className="google bg-white shadow-md px-3 py-2 rounded-lg flex items-center space-x-1">
                  <div className="image">
                    <svg
                      className="w-10 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      width="436.057"
                      height="469.847"
                      viewBox="0 0 436.057 469.847"
                    >
                      <g transform="translate(-16.896)">
                        <path
                          d="M270.336,234.965,34.39,462.165A40.146,40.146,0,0,1,16.9,428.672V41.258A40.146,40.146,0,0,1,34.39,7.765Z"
                          fill="#2196f3"
                        />
                        <path
                          d="M352.9,155.6l-82.56,79.36L34.39,7.765a31.446,31.446,0,0,1,2.773-1.92A40.363,40.363,0,0,1,77.91,5.2Z"
                          fill="#4caf50"
                        />
                        <path
                          d="M452.95,234.965a40.791,40.791,0,0,1-21.333,36.267L352.9,314.325l-82.56-79.36L352.9,155.6l78.72,43.093A40.791,40.791,0,0,1,452.95,234.965Z"
                          fill="#ffc107"
                        />
                        <path
                          d="M352.9,314.325,77.91,464.725a40.9,40.9,0,0,1-40.747-.64,31.44,31.44,0,0,1-2.773-1.92l235.947-227.2Z"
                          fill="#f44336"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="text">
                    <p
                      className="text-xs text-gray-600"
                      style={{ ["font-size" as any]: "0.5rem" }}
                    >
                      Download it from
                    </p>
                    <p className="text-xs font-semibold text-gray-900">
                      Google play
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* <!-- RIGHT PART --> */}
          <div className="pt-8 md:pt-0 justify-center lg:ml-auto z-10 animate-fade-in-down">
            <div className="hero-image ">
              <svg
                width="522"
                height="294"
                viewBox="0 0 522 394"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M479.539 115.059C478.587 111.735 477.578 108.436 476.539 105.164L475.977 110.93L449.257 100.957L451.795 76.2832L468.392 82.6983C467.931 81.5685 467.469 80.4517 466.95 79.3349L452.083 73.6211L453.669 57.5964C452.862 56.5186 452.011 55.4018 451.117 54.272L449.343 72.5433L425.522 63.3492L428.406 41.2731C434.376 43.5326 440.273 45.7879 446.099 48.0388C444.844 46.5844 443.518 45.1299 442.133 43.6495L428.766 38.5461L429.66 31.7284C428.795 30.9882 427.93 30.261 427.036 29.5338L425.998 37.5072C417.346 34.2477 408.78 31.0142 400.243 27.8327L402.219 13.3923C401.325 12.9378 400.416 12.4962 399.494 12.0937L397.432 26.8457C386.919 22.9499 376.609 19.1321 366.775 15.522L368.462 2.13346C367.525 1.96465 366.573 1.79583 365.578 1.65298L363.963 14.5091C353.725 10.7561 344.063 7.24993 335.325 4.12031L335.815 0.31543C334.835 0.31543 333.854 0.445294 332.931 0.52321L332.599 3.1204L327.149 1.15952C325.284 1.39327 323.438 1.66597 321.611 1.97763L332.239 5.87341L329.557 26.4302L298.294 14.2753L299.116 7.49666C298.107 7.82563 297.097 8.16327 296.088 8.50956L295.526 13.1975L289.556 10.899L285.951 12.3274L295.194 15.8986L292.022 42.338L262.201 31.222L263.167 23.0408C262.144 23.5733 261.105 24.1187 260.081 24.6771L259.433 30.1831L253.823 28.0924L250.809 29.7805L259.101 32.8712L255.828 60.5443L227.896 50.1555L228.92 42.5717L225.834 44.3897L225.2 49.0777L220.686 47.3895L217.802 49.1036L224.911 51.7008L221.854 74.2314L193.721 63.4012L193.952 61.8039L191.442 62.9986C190.491 63.4401 189.539 63.8557 188.558 64.2972L190.563 65.0763L187.448 86.6979L161.723 76.6858L162.761 70.972L159.762 71.3615L158.983 75.6209L150.446 72.2965C148.413 72.4523 146.38 72.6082 144.332 72.7381L158.507 78.2571L154.772 98.8918L125.341 87.555L127.937 73.8289L124.966 74.0756L122.616 86.5031L100.106 77.9065C98.6644 78.2701 97.2224 78.6467 95.7804 79.0622L96.6024 79.3869L91.8438 104.593L71.8865 97.0997L73.4871 88.1913C72.4056 88.7757 71.3097 89.386 70.2427 89.9964L69.1467 96.0738L63.7537 94.061C62.8596 94.6583 61.9656 95.2557 61.1004 95.879L68.6565 98.684L63.3932 127.85L42.3689 120.059L44.2867 110.151C43.0466 111.449 41.8065 112.748 40.6096 114.046L39.6435 119.059L37.0767 118.111C36.4711 118.825 35.8943 119.539 35.3031 120.267L39.1388 121.682L32.8229 154.524L17.2493 149.005C16.86 149.797 16.4995 150.589 16.1245 151.394L32.3182 157.121L25.6129 191.793L4.61741 184.768C4.41553 185.625 4.22808 186.495 4.04062 187.365L25.1082 194.39L17.4368 234.075C10.9622 232.647 5.15096 231.387 0.132813 230.297C0.132813 231.193 0.132807 232.089 0.262587 232.985C5.15095 234.049 10.7459 235.27 16.9609 236.647L9.85186 273.384H8.19357C8.5108 274.254 8.82804 275.137 9.1597 275.981H9.36158V276.293C9.98164 277.916 10.6594 279.5 11.3515 281.085L12.3321 276.059C19.5421 276.254 27.6749 276.565 36.5576 277.02L30.2128 312.173C30.9915 313.199 31.7702 314.225 32.5777 315.238L39.456 277.163C45.6999 277.5 52.2898 277.916 59.1393 278.461L50.3143 325.211C47.4303 325.86 45.0222 326.509 42.8736 327.042C44.6424 328.903 46.4593 330.713 48.3243 332.47C70.0264 327.198 118.881 318.185 183.05 323.977C223.138 327.587 254.4 338.95 287.306 351.079V351.429L288.748 351.585C315.195 361.325 342.261 371.285 374.172 376.882C377.878 375.324 381.613 373.648 385.362 371.83L385.737 368.883L388.78 370.09L391.894 368.48L385.968 366.194L388.405 347.456C396.855 350.823 404.637 353.944 411.751 356.819C412.645 356.247 413.553 355.663 414.447 355.065C406.718 351.936 398.124 348.482 388.751 344.755L392.356 317.224L422.969 327.457L420.503 350.884C421.556 350.157 422.594 349.417 423.633 348.676L425.738 328.34L441.989 333.73L444.095 331.665L426.041 325.626L428.925 297.901L456.943 307.836L455.919 318.302C457.058 316.848 458.168 315.38 459.25 313.887L459.74 308.836L462.163 309.693C462.667 308.939 463.143 308.186 463.605 307.42L459.971 306.121L462.711 277.786L476.482 282.864L477.477 280.422L462.97 275.085L465.638 247.516L485.566 254.996C485.783 254.139 485.999 253.282 486.186 252.399L465.898 244.789L468.061 222.414L489.964 230.855C490.08 229.959 490.181 229.05 490.282 228.154L468.335 219.7L470.267 199.663L491.709 208.013C491.709 207.078 491.709 206.143 491.781 205.208L470.526 196.936L472.79 173.561L491.161 180.755C491.161 179.794 491.032 178.82 490.959 177.859L473.035 170.964L475.53 145.433L487.499 149.901C487.326 148.901 487.153 147.901 486.965 146.901L475.79 142.719L478.515 114.67L479.539 115.059ZM449.012 75.3093L446.459 99.9826L421.945 90.8924L425.176 66.2191L449.012 75.3093ZM100.294 219.531L130.907 229.764L125.558 259.281C114.901 256.684 104.404 254.087 94.223 251.684L100.294 219.531ZM91.4256 251.009C83.4513 249.113 75.679 247.295 68.1806 245.555L74.7128 210.973L97.4964 218.609L91.4256 251.009ZM100.784 216.921L107.057 183.703L137.339 194.442L131.398 227.154L100.784 216.921ZM140.064 195.416L170.058 206.065L165.371 238.53L134.138 228.141L140.064 195.416ZM140.54 192.819L146.308 161.224L175.061 171.821L170.49 203.429L140.54 192.819ZM172.826 207.104L202.301 217.57L197.975 249.477L168.154 239.439L172.826 207.104ZM173.216 204.506L177.772 172.925L206.901 183.664L202.661 214.96L173.216 204.506ZM209.669 184.69L239.807 195.793L236.115 226.829L205.444 215.947L209.669 184.69ZM382.045 138.888L378.945 161.445L349.846 149.965L352.73 127.461L382.045 138.888ZM352.975 124.877L355.989 100.905L385.737 112.008L382.406 136.213L352.975 124.877ZM378.585 164.133L375.802 184.106L346.962 172.964L349.528 152.667L378.585 164.133ZM346.962 148.901L317.949 137.642L320.833 115.306L349.846 126.396L346.962 148.901ZM346.63 151.589L344.078 171.899L314.892 160.653L317.559 140.265L346.63 151.589ZM343.746 174.587L340.79 197.962L311.517 186.988L314.589 163.38L343.746 174.587ZM308.706 185.911L278.928 174.743L281.812 150.732L311.82 162.315L308.706 185.911ZM308.36 188.599L304.726 216.856L275.222 205.974L278.654 177.483L308.36 188.599ZM304.38 219.453L300.457 249.529L271.214 239.14L274.862 208.61L304.38 219.453ZM272.439 204.87L242.893 193.988L246.296 165.276L275.871 176.366L272.439 204.87ZM240.124 192.962L209.972 181.898L213.938 153.225L243.527 164.328L240.124 192.962ZM242.576 196.676L272.122 207.558L268.431 238.153L238.899 227.673L242.576 196.676ZM270.896 241.828L300.111 252.217L296.203 282.253L267.19 272.553L270.896 241.828ZM302.88 253.217L332.542 263.735L328.836 293.162L298.987 283.188L302.88 253.217ZM303.24 250.555L307.148 220.505L336.623 231.374L332.873 261.008L303.24 250.555ZM307.494 217.83L311.171 189.586L340.502 200.598L336.969 228.647L307.494 217.83ZM343.27 201.689L371.937 212.441L368.13 240.231L339.752 229.699L343.27 201.689ZM343.602 199L346.486 175.626L375.398 186.768L372.24 209.727L343.602 199ZM378.21 187.871L404.973 198.182L402.003 220.895L375.066 210.792L378.21 187.871ZM378.585 185.183L381.339 165.094L407.929 175.483L405.319 195.52L378.585 185.183ZM381.699 162.419L384.8 139.849L411.26 150.017L408.29 172.704L381.699 162.419ZM385.175 137.161L388.491 112.969L414.808 122.799L411.606 147.355L385.175 137.161ZM388.866 110.267L392.644 82.6723L418.773 92.4118L415.154 120.098L388.866 110.267ZM393.019 80.0102L396.451 54.9863L422.407 64.9854L419.062 89.7237L393.019 80.0102ZM390.25 78.9713L360.156 67.7514L363.386 42.2341L393.668 53.9214L390.25 78.9713ZM389.89 81.6464L386.097 109.229L356.335 98.1126L359.824 70.4395L389.89 81.6464ZM353.566 97.0737L324.625 86.2694L328.23 58.6613L357.07 69.4007L353.566 97.0737ZM353.22 99.7618L350.206 123.721L321.208 112.566L324.279 88.9445L353.22 99.7618ZM318.439 111.449L287.998 99.7618L290.81 76.3871L321.51 87.8667L318.439 111.449ZM318.093 114.137L315.209 136.46L284.956 124.734L287.638 102.476L318.093 114.137ZM314.834 139.148L312.181 159.549L282.187 147.992L284.667 127.409L314.834 139.148ZM282.216 123.565L252.612 112.034L255.236 89.9574L284.956 101.411L282.216 123.565ZM281.899 126.266L279.419 146.875L249.829 135.473L252.28 114.696L281.899 126.266ZM279.087 149.576L276.203 173.613L246.628 162.523L249.512 138.174L279.087 149.576ZM247.06 134.408L217.975 123.357L220.787 102.58L249.512 113.761L247.06 134.408ZM246.729 137.109L243.845 161.484L214.298 150.485L217.615 125.954L246.729 137.109ZM211.529 149.355L182.69 138.551L186.266 113.813L214.817 124.825L211.529 149.355ZM211.169 152.03L207.276 180.781L178.162 170.107L182.329 141.265L211.169 152.03ZM175.364 169.133L146.712 158.562L151.917 129.915L179.546 140.304L175.364 169.133ZM143.972 157.562L114.05 146.524L119.487 117.747L149.178 128.889L143.972 157.562ZM143.496 160.159L137.728 191.793L107.446 181.054L113.474 149.121L143.496 160.159ZM104.822 180.106L82.0526 172.029L88.1378 139.772L110.849 148.147L104.822 180.106ZM104.317 182.703L98.0443 215.973L75.2031 208.337L81.5623 174.574L104.317 182.703ZM72.4489 207.376L53.1262 200.883L59.3123 166.639L78.8225 173.574L72.4489 207.376ZM71.9586 209.974L65.3831 244.828C58.6634 243.27 52.1744 241.789 46.0027 240.387L52.6647 203.532L71.9586 209.974ZM67.6326 248.048C75.1166 249.788 82.889 251.606 90.8776 253.502L86.2344 278.098C78.0583 277.267 70.0552 276.565 62.3549 275.981L67.6326 248.048ZM93.6751 254.165C103.856 256.593 114.353 259.138 125.024 261.774L121.275 282.448C110.431 280.838 99.6449 279.513 89.104 278.396L93.6751 254.165ZM127.822 262.463C138.651 265.151 149.639 267.93 160.627 270.774L158.06 289.097C146.928 286.72 135.551 284.682 124.188 282.955L127.822 262.463ZM128.283 259.866L133.604 230.582L164.924 241.049L161.002 268.151C150.129 265.411 139.17 262.645 128.355 259.969L128.283 259.866ZM167.693 241.984L197.557 251.97L194.168 276.968C184.074 274.228 173.98 271.527 163.814 268.878L167.693 241.984ZM200.325 252.892L231.689 263.372L228.906 286.746C218.566 283.708 207.852 280.669 196.965 277.656L200.325 252.892ZM200.686 250.295L205.012 218.44L235.726 229.336L232.006 260.762L200.686 250.295ZM234.486 264.411L264.033 274.293L261.307 296.888C251.92 293.85 242.013 290.785 231.732 287.733L234.486 264.411ZM234.803 261.749L238.524 230.374L268.056 240.867L264.35 271.631L234.803 261.749ZM266.816 275.215L295.8 284.915L292.8 307.862L288.979 306.459C281.308 303.615 272.987 300.732 264.162 297.836L266.816 275.215ZM298.54 285.837L328.389 295.824L325.332 320.094C315.718 316.458 305.783 312.723 295.526 308.887L298.54 285.837ZM331.172 296.759L358.988 306.044L355.614 331.678C346.885 328.284 337.752 324.774 328.216 321.146L331.172 296.759ZM331.518 294.161L335.224 264.774L363.285 274.747L359.348 303.472L331.518 294.161ZM335.556 262.112L339.391 232.439L367.755 242.828L363.761 272.007L335.556 262.112ZM370.423 243.932L397.605 253.957L393.841 282.812L366.443 273.085L370.423 243.932ZM370.798 241.27L374.59 213.532L401.556 223.648L397.951 251.282L370.798 241.27ZM404.425 224.648L432.501 235.179L429.617 262.878L400.777 252.256L404.425 224.648ZM404.771 221.96L407.742 199.273L435.14 209.818L432.775 232.439L404.771 221.96ZM408.088 196.585L410.698 176.561L437.476 186.949L435.399 207.065L408.088 196.585ZM411.044 173.873L414.015 151.108L440.143 161.159L437.807 184.222L411.044 173.873ZM414.375 148.42L417.62 123.799L443.056 133.305L440.417 158.419L414.375 148.42ZM417.922 121.15L421.542 93.4896L446.185 102.58L443.301 130.538L417.922 121.15ZM399.796 30.6246C408.347 33.8192 416.985 37.0527 425.565 40.3121L422.681 62.3233L396.797 52.3371L399.796 30.6246ZM366.4 18.275C376.234 21.8851 386.588 25.69 397.028 29.5987L394.057 51.2723L363.775 39.5849L366.4 18.275ZM334.979 6.8084C343.746 9.98996 353.407 13.5092 363.631 17.1972L360.949 38.4292L332.297 27.3652L334.979 6.8084ZM331.951 30.1831L360.617 41.2471L357.387 66.8165L328.547 56.0641L331.951 30.1831ZM297.934 16.9764L329.139 29.0144L325.764 54.9863L294.747 43.4158L297.934 16.9764ZM294.43 46.0519L325.418 57.6094L321.813 85.2176L291.099 73.738L294.43 46.0519ZM261.884 33.9101L291.69 45.026L288.359 72.7121L258.596 61.5961L261.884 33.9101ZM258.279 64.2712L288.042 75.3872L285.23 98.7619L255.554 87.3472L258.279 64.2712ZM227.536 52.7916L255.51 63.2453L252.785 86.2305L224.479 75.3093L227.536 52.7916ZM224.118 78.0233L252.453 88.9315L249.843 111.008L221.148 99.8397L224.118 78.0233ZM193.187 66.1282L221.349 76.9585L218.465 98.8008L190.13 87.7758L193.187 66.1282ZM189.683 90.4509L218.033 101.489L215.149 122.266L186.597 111.267L189.683 90.4509ZM161.117 79.3219L186.929 89.373L183.915 110.151L157.368 99.9826L161.117 79.3219ZM156.892 102.58L183.526 112.852L179.95 137.642L152.422 127.253L156.892 102.58ZM124.721 90.1912L154.167 101.528L149.682 126.201L120.006 115.072L124.721 90.1912ZM99.3421 80.4127L121.981 89.1393L117.281 114.098L94.6124 105.593L99.3421 80.4127ZM94.0933 108.216L116.776 116.721L111.34 145.524L88.6281 137.148L94.0933 108.216ZM71.4251 99.7099L91.3535 107.19L85.9604 136.135L66.2195 128.863L71.4251 99.7099ZM65.6571 131.499L85.3692 138.759L79.284 171.055L59.7593 164.12L65.6571 131.499ZM41.8642 122.734L62.9173 130.526L57.1205 163.146L35.6347 155.523L41.8642 122.734ZM35.0291 158.134L56.5437 165.769L50.3431 200.065L28.3383 192.715L35.0291 158.134ZM27.8191 195.312L49.9105 202.688L43.1908 239.828C34.9282 237.958 27.2423 236.244 20.2487 234.699L27.8191 195.312ZM36.9037 274.436C28.0499 273.981 19.917 273.67 12.707 273.462L19.7151 237.257C26.7088 238.815 34.4091 240.529 42.6861 242.451L36.9037 274.436ZM39.7877 274.579L45.5557 243.036C51.7274 244.438 58.202 245.919 64.9073 247.477L59.5575 275.838C52.708 275.293 46.1036 274.916 39.8165 274.579H39.7877ZM53.2415 324.484L61.8935 278.617C69.5938 279.202 77.5824 279.916 85.7585 280.734L78.3611 319.926C68.5267 321.367 60.091 322.977 53.2992 324.484H53.2415ZM81.4325 319.445L88.6425 280.981C99.1835 282.097 109.984 283.435 120.842 285.032L115.19 316.199C102.688 316.965 91.3679 318.146 81.4325 319.445ZM118.189 316.043L123.726 285.461C135.118 287.201 146.524 289.24 157.685 291.629L154.21 315.679C141.347 315.367 129.292 315.549 118.189 316.095V316.043ZM188.688 317.952C187.03 317.77 185.386 317.575 183.699 317.432C174.499 316.601 165.631 316.069 157.108 315.77L160.512 292.252C165.443 293.343 170.312 294.503 175.119 295.733C180.166 297.031 185.516 298.499 191.111 300.096L188.688 317.952ZM175.912 293.278C170.981 291.98 165.948 290.824 160.887 289.707L163.497 271.527C173.691 274.189 183.858 276.89 193.879 279.63L191.457 297.473C186.035 295.979 180.829 294.551 175.912 293.278ZM224.565 324.159C213.708 321.591 202.685 319.635 191.558 318.302L193.908 300.953C204.002 303.901 214.846 307.264 226.137 310.926L224.565 324.159ZM194.283 298.33L196.677 280.487C207.593 283.487 218.307 286.526 228.675 289.577L226.454 308.303C215.178 304.615 204.348 301.265 194.254 298.33H194.283ZM256.996 333.392C247.464 330.262 237.658 327.353 227.42 324.847L228.949 311.861C238.538 314.991 248.401 318.354 258.394 321.77L256.996 333.392ZM229.266 309.199L231.501 290.395C241.797 293.46 251.689 296.525 261.076 299.577L258.726 319.055C248.69 315.627 238.812 312.303 229.237 309.173L229.266 309.199ZM288.143 344.365C278.856 340.95 269.397 337.534 259.793 334.301L261.235 322.743C270.68 326.016 280.212 329.392 289.686 332.808L288.143 344.365ZM261.509 320.068L263.859 300.486C272.396 303.291 280.471 306.095 287.926 308.849L292.541 310.563L289.988 330.132C280.471 326.691 270.925 323.341 261.48 320.042L261.509 320.068ZM320.919 356.13C310.825 352.741 301.077 349.131 291.387 345.56L290.911 345.391L292.425 333.808C302.519 337.457 312.613 341.145 322.347 344.768L320.919 356.13ZM292.743 331.132L295.281 311.589C305.557 315.424 315.493 319.164 325.087 322.808L322.664 342.093C312.887 338.431 302.851 334.755 292.743 331.132ZM350.97 365.182C341.554 362.753 332.499 359.987 323.673 357.065L325.115 345.807C334.474 349.287 343.573 352.715 352.239 356.013L350.97 365.182ZM325.433 343.105L327.855 323.847C337.372 327.475 346.505 330.981 355.253 334.366L352.658 353.325C343.905 350.014 334.806 346.586 325.433 343.092V343.105ZM382.348 371.675C372.723 370.212 363.188 368.3 353.782 365.948L354.994 357.117C364.958 360.922 374.331 364.532 382.853 367.844L382.348 371.675ZM383.199 365.182C374.677 361.87 365.318 358.26 355.354 354.468L357.964 335.535C367.77 339.353 377.027 342.989 385.65 346.417L383.199 365.182ZM385.997 343.716C377.345 340.305 368.121 336.682 358.325 332.847L361.858 307.082L389.573 316.341L385.997 343.716ZM389.919 313.692L362.232 304.433L366.155 275.773L393.553 285.5L389.919 313.692ZM423.243 324.834L392.702 314.614L396.364 286.487L426.113 297.044L423.243 324.834ZM426.387 294.356L396.711 283.825L400.474 255.009L429.314 265.644L426.387 294.356ZM457.188 305.161L429.155 295.239L432.112 266.579L459.899 276.812L457.188 305.161ZM460.187 274.085L432.429 263.852L435.313 236.166L462.884 246.555L460.187 274.085ZM463.071 243.789L435.515 233.465L437.851 210.844L465.249 221.388L463.071 243.789ZM465.508 218.674L438.11 208.13L440.187 188.014L467.498 198.676L465.508 218.674ZM467.714 195.897L440.49 185.3L442.883 162.172L469.964 172.561L467.714 195.897ZM470.224 169.925L443.172 159.536L445.767 134.408L472.689 144.472L470.224 169.925ZM472.963 141.732L446.041 131.668L448.925 103.71L475.674 113.683L472.963 141.732Z"
                  fill="white"
                  fillOpacity="0.96"
                />
                <path
                  d="M91.6391 92.5965C103.24 82.1496 103.24 65.2117 91.6391 54.7648C80.0385 44.3179 61.2303 44.3179 49.6297 54.7648C38.0291 65.2117 38.0291 82.1496 49.6297 92.5965C61.2303 103.043 80.0385 103.043 91.6391 92.5965Z"
                  fill="white"
                  fillOpacity="0.96"
                />
                <path
                  d="M70.6371 101.079C64.6194 101.079 58.7368 99.4715 53.7332 96.4607C48.7297 93.4499 44.8299 89.1706 42.527 84.1638C40.2241 79.1571 39.6216 73.6478 40.7956 68.3326C41.9696 63.0175 44.8674 58.1352 49.1226 54.3032C53.3777 50.4712 58.7991 47.8616 64.7012 46.8043C70.6033 45.7471 76.721 46.2897 82.2806 48.3636C87.8403 50.4374 92.5922 53.9494 95.9354 58.4554C99.2787 62.9613 101.063 68.2589 101.063 73.6782C101.052 80.942 97.8425 87.9054 92.1389 93.0418C86.4354 98.1781 78.7031 101.068 70.6371 101.079V101.079ZM70.6371 47.5764C64.9046 47.5764 59.3008 49.1073 54.5344 51.9754C49.7679 54.8435 46.053 58.92 43.8592 63.6895C41.6655 68.4589 41.0915 73.7071 42.2099 78.7704C43.3282 83.8336 46.0887 88.4845 50.1422 92.1349C54.1957 95.7853 59.3602 98.2712 64.9825 99.2784C70.6049 100.286 76.4326 99.7686 81.7288 97.793C87.025 95.8175 91.5517 92.4719 94.7365 88.1795C97.9213 83.8871 99.6212 78.8406 99.6212 73.6782C99.6135 66.7577 96.5574 60.1226 91.1235 55.229C85.6896 50.3355 78.3218 47.5833 70.6371 47.5764V47.5764Z"
                  fill="#263238"
                />
                <path
                  d="M82.3465 49.0938C85.7868 53.9093 87.4196 59.5922 87.0046 65.3061C86.5895 71.02 84.1486 76.463 80.041 80.8339C75.9333 85.2048 70.3761 88.2727 64.1872 89.5861C57.9983 90.8994 51.5046 90.3889 45.6621 88.1295C48.1736 91.645 51.5655 94.5811 55.5653 96.7023C59.5651 98.8235 64.0614 100.071 68.6933 100.343C73.3253 100.616 77.9637 99.9074 82.2363 98.2735C86.5088 96.6396 90.2965 94.1263 93.2951 90.9355C96.2938 87.7446 98.4199 83.965 99.5028 79.9002C100.586 75.8353 100.595 71.5984 99.5305 67.5297C98.4659 63.4609 96.3567 59.6736 93.3724 56.4719C90.388 53.2701 86.6117 50.7431 82.3465 49.0938V49.0938Z"
                  fill="#6E4BEC"
                />
                <path
                  opacity="0.5"
                  d="M82.3465 49.0938C85.7868 53.9093 87.4196 59.5922 87.0046 65.3061C86.5895 71.02 84.1486 76.463 80.041 80.8339C75.9333 85.2048 70.3761 88.2727 64.1872 89.5861C57.9983 90.8994 51.5046 90.3889 45.6621 88.1295C48.1736 91.645 51.5655 94.5811 55.5653 96.7023C59.5651 98.8235 64.0614 100.071 68.6933 100.343C73.3253 100.616 77.9637 99.9074 82.2363 98.2735C86.5088 96.6396 90.2965 94.1263 93.2951 90.9355C96.2938 87.7446 98.4199 83.965 99.5028 79.9002C100.586 75.8353 100.595 71.5984 99.5305 67.5297C98.4659 63.4609 96.3567 59.6736 93.3724 56.4719C90.388 53.2701 86.6117 50.7431 82.3465 49.0938V49.0938Z"
                  fill="white"
                  fillOpacity="0.96"
                />
                <path
                  d="M75.1923 60.4369L74.3415 72.397L60.4839 75.7344L53.9228 66.2157L62.1999 56.5801L75.1923 60.4369ZM94.9044 75.3058L84.1903 79.5392C84.1903 79.5392 81.4794 88.5515 80.917 90.7331C83.7719 91.7212 86.7423 92.4139 89.7709 92.7979C89.7709 92.7979 95.6254 87.2659 97.0529 83.5389C97.0529 83.5909 96.058 77.2797 94.9044 75.3058ZM69.208 94.59C69.208 94.59 60.3397 88.6814 58.2056 86.7984C58.2056 86.7984 50.6351 87.9541 48.6307 87.9541C49.5584 90.6984 51.0234 93.2711 52.9567 95.5509C56.6048 97.8062 60.8355 99.1791 65.2425 99.5376L69.208 94.59ZM60.7723 50.217C63.6853 48.7813 66.7788 47.6652 69.9867 46.8926C64.5755 46.9865 59.2973 48.4196 54.7304 51.0351C56.7021 50.5589 58.7312 50.3016 60.7723 50.2689V50.217ZM94.616 64.5015L97.5865 62.3848C94.9816 57.3446 90.7041 53.1567 85.3439 50.3988L82.907 50.0871C82.907 50.0871 85.4881 55.2815 85.0555 56.9048C88.5727 59.0983 91.7828 61.6665 94.616 64.5535V64.5015ZM41.4928 78.877C41.924 78.9257 42.3617 78.8902 42.7762 78.7731C42.7396 75.0705 43.5189 71.3983 45.069 67.9688C44.5408 65.9146 44.1936 63.826 44.0307 61.7225C41.977 65.4193 40.9105 69.497 40.916 73.6307C40.9134 75.4096 41.1067 77.1843 41.4928 78.9289V78.877Z"
                  fill="#263238"
                />
                <path
                  d="M65.56 100.196H65.1707C60.6207 99.8372 56.2526 98.4185 52.4956 96.0796L52.3658 95.9757C50.3767 93.6423 48.8765 91.002 47.9388 88.1841L47.6793 87.353H48.631C50.5489 87.353 58.004 86.2232 58.0905 86.2103L58.451 86.1453L58.7106 86.3921C60.787 88.262 69.5399 94.1187 69.6265 94.1836L70.2033 94.5732L65.56 100.196ZM53.4184 95.0667C56.8295 97.152 60.7553 98.4538 64.8535 98.8586L68.1989 94.781C66.2666 93.4824 60.1237 89.3139 57.9607 87.4959C56.6341 87.6907 52.0197 88.3659 49.6116 88.5607C50.4763 90.9025 51.7624 93.1004 53.4184 95.0667V95.0667ZM90.0595 93.5084H89.7279C86.6258 93.1186 83.583 92.4128 80.6578 91.4046L80.0665 91.1969L80.2107 90.6515C80.7731 88.4698 83.3831 79.8082 83.4985 79.4316L83.585 79.1329L95.2363 74.5229L95.5391 75.0553C96.736 77.0682 97.7165 83.2365 97.7598 83.4962V83.652V83.8079C96.3178 87.6257 90.5498 93.0668 90.3191 93.3006L90.0595 93.5084ZM81.7681 90.3658C84.2575 91.2089 86.8384 91.8139 89.4683 92.1708C90.5354 91.1319 95.02 86.6518 96.3178 83.5092C95.9406 81.034 95.3475 78.5894 94.5442 76.1981L84.7963 80.0939C84.3637 81.5223 82.4602 87.8595 81.7681 90.3658V90.3658ZM41.8825 79.5874H41.4066H40.8875L40.7865 79.1329C40.3958 77.3624 40.1978 75.5619 40.1953 73.7567C40.1893 69.5242 41.2806 65.3488 43.3821 61.5629L44.5069 59.5112L44.7376 61.7967C44.9152 63.855 45.2573 65.8991 45.7614 67.9131V68.1338L45.6605 68.3546C44.1584 71.6953 43.399 75.2691 43.4254 78.8732V79.3407L42.9351 79.5095C42.5895 79.5765 42.2356 79.6026 41.8825 79.5874V79.5874ZM43.5984 64.251C42.2962 67.2556 41.631 70.4535 41.6373 73.6788C41.6422 75.1148 41.7772 76.548 42.0411 77.9642C42.1333 74.541 42.8998 71.1598 44.305 67.978C43.9823 66.7504 43.7463 65.5056 43.5984 64.251V64.251ZM60.1526 76.4838L53.0435 66.2119L61.9406 55.8232L75.9568 59.9787L75.034 72.9646L60.1526 76.4838ZM54.8028 66.2119L60.8159 74.9255L73.6496 71.8348L74.4427 60.8357L62.4597 57.2776L54.8028 66.2119ZM94.5009 65.4068L94.0539 64.9003C91.2554 62.0836 88.0944 59.577 84.6377 57.4334L84.2483 57.1867L84.3493 56.7581C84.6232 55.6933 83.2101 52.265 82.2583 50.3561L81.7248 49.2783L85.7047 49.8237C91.204 52.6393 95.5861 56.9353 98.2357 62.1084L98.4808 62.5758L94.5009 65.4068ZM85.8489 56.5893C89.0921 58.625 92.0801 60.9719 94.7605 63.5887L96.7216 62.1993C94.1984 57.5209 90.1815 53.6277 85.1856 51.0184L84.1474 50.8885C85.0579 52.7085 85.6232 54.653 85.8201 56.6413L85.8489 56.5893ZM50.4623 52.6935L54.3701 50.46C59.0506 47.7824 64.4575 46.3135 70.0014 46.2136L76.0433 46.0967L70.2754 47.4862C67.1289 48.2523 64.0941 49.3508 61.2341 50.7586L61.0754 50.8366H60.8736C58.8932 50.8814 56.9266 51.1475 55.0191 51.6287L50.4623 52.6935ZM63.2096 48.3822C61.8557 48.6992 60.5302 49.1072 59.2441 49.6029C59.72 49.6029 60.1814 49.6029 60.6861 49.538C61.1908 49.473 61.8685 48.9926 63.1807 48.4601L63.2096 48.3822Z"
                  fill="#263238"
                />
                <path
                  d="M61.4851 50.1294L60.0723 50.3892L61.5002 56.6873L62.9131 56.4275L61.4851 50.1294Z"
                  fill="#263238"
                />
                <path
                  d="M84.7759 56.3765L74.918 59.8467L75.4429 61.0562L85.3008 57.586L84.7759 56.3765Z"
                  fill="#263238"
                />
                <path
                  d="M95.6261 75.3956L94.1841 75.3047C94.4296 71.746 94.3379 68.1749 93.9102 64.6302L95.3522 64.4614C95.8013 68.0917 95.893 71.7507 95.6261 75.3956V75.3956Z"
                  fill="#263238"
                />
                <path
                  d="M74.8012 71.8671L73.8926 72.8755L83.7458 80.0764L84.6545 79.0681L74.8012 71.8671Z"
                  fill="#263238"
                />
                <path
                  d="M59.7722 75.618L57.4922 86.6748L58.9099 86.9119L61.1899 75.8551L59.7722 75.618Z"
                  fill="#263238"
                />
                <path
                  d="M69.3952 95.2619L69.0059 93.9633C72.9569 92.9504 79.2729 91.1064 80.4553 90.2363L81.3782 91.2363C79.5901 92.6128 70.4334 95.0022 69.3952 95.2619Z"
                  fill="#263238"
                />
                <path
                  d="M53.7825 65.5777L44.9219 67.3833L45.2401 68.6499L54.1007 66.8443L53.7825 65.5777Z"
                  fill="#263238"
                />
                <path
                  d="M48.0983 88.3934C45.4656 85.6381 43.4308 82.4621 42.0996 79.0305L43.5416 78.6279C44.8434 81.886 46.7985 84.9011 49.3096 87.5233L48.0983 88.3934Z"
                  fill="#263238"
                />
                <path
                  d="M403.289 310.849C403.289 310.849 431.336 318.121 440.363 321.978C449.39 325.835 480.739 342.95 486.954 347.235C493.169 351.521 497.884 363.935 502.167 369.065C506.449 374.194 514.525 386.622 519.269 381.908C524.013 377.194 519.269 364.364 515.476 357.936C511.684 351.508 504.532 348.092 501.691 344.664C498.85 341.236 487.43 326.692 477.437 314.277C467.443 301.862 460.334 295.434 450.788 292.019C441.242 288.604 432.259 289.019 429.879 288.591C427.5 288.162 418.473 283.877 418.473 283.877C418.473 283.877 411.364 306.992 403.289 310.849Z"
                  fill="white"
                  fillOpacity="0.96"
                />
                <path
                  d="M516.86 383.612H516.6C512.418 383.378 507.66 377.236 503.824 372.301C503.002 371.249 502.252 370.275 501.589 369.47C499.635 366.872 497.909 364.141 496.427 361.302C493.543 356.108 490.226 350.342 486.506 347.771C480.478 343.589 449.374 326.552 440.059 322.578C431.176 318.799 403.36 311.566 403.086 311.488C402.948 311.452 402.824 311.38 402.732 311.281C402.639 311.181 402.582 311.059 402.567 310.93C402.551 310.802 402.578 310.673 402.645 310.559C402.712 310.445 402.815 310.353 402.942 310.293C410.671 306.618 417.737 283.958 417.809 283.724C417.835 283.63 417.885 283.542 417.955 283.467C418.025 283.393 418.113 283.334 418.213 283.296C418.31 283.254 418.415 283.232 418.523 283.232C418.63 283.232 418.736 283.254 418.833 283.296C421.313 284.477 428.177 287.607 430.052 287.944C430.571 288.035 431.494 288.087 432.762 288.165C439.028 288.324 445.221 289.417 451.09 291.399C460.29 294.723 467.342 300.606 478.027 313.877C483.002 320.072 488.337 326.798 492.778 332.395C497.22 337.992 500.839 342.55 502.267 344.264C503.602 345.696 505.095 347.001 506.722 348.16C509.808 350.537 513.658 353.498 516.11 357.64C520.205 364.549 524.834 377.379 519.801 382.313C519.445 382.709 518.998 383.031 518.49 383.255C517.982 383.479 517.425 383.601 516.86 383.612V383.612ZM404.975 310.618C410.931 312.189 432.777 318.033 440.679 321.396C450.038 325.396 481.329 342.524 487.385 346.719C491.365 349.485 494.739 355.445 497.71 360.692C499.154 363.468 500.836 366.138 502.743 368.678C503.406 369.496 504.185 370.47 505.006 371.548C508.28 375.755 513.211 382.106 516.701 382.3C517.088 382.325 517.477 382.263 517.831 382.12C518.186 381.978 518.496 381.758 518.734 381.482C522.974 377.288 518.907 365.133 514.841 358.25C512.488 354.732 509.415 351.647 505.785 349.16C504.074 347.946 502.509 346.575 501.113 345.07C499.671 343.356 496.109 338.862 491.61 333.187C487.111 327.513 481.834 320.864 476.859 314.67C466.361 301.619 459.468 295.853 450.557 292.593C444.829 290.666 438.788 289.6 432.676 289.438C431.71 289.415 430.747 289.337 429.792 289.204C427.744 288.828 421.255 285.867 418.977 284.802C417.694 288.711 411.854 305.618 404.975 310.618Z"
                  fill="#263238"
                />
                <path
                  opacity="0.2"
                  d="M501.686 344.668C498.802 341.252 487.425 326.695 477.432 314.28C467.439 301.866 460.33 295.438 450.784 292.023C441.238 288.607 432.254 289.023 429.875 288.594C427.496 288.166 418.469 283.88 418.469 283.88C418.469 283.88 417.229 287.893 415.195 292.854C420.401 294.386 426.861 296.308 433.941 298.425C451.404 303.619 479.624 325.033 483.2 331.487C485.94 336.396 470.222 333.37 458.845 331.292C470.38 337.46 483.229 344.668 486.949 347.239C493.121 351.524 497.879 363.939 502.162 369.068C506.445 374.198 514.52 386.625 519.264 381.911C524.008 377.197 519.264 364.367 515.472 357.939C511.679 351.511 504.527 348.096 501.686 344.668Z"
                  fill="black"
                />
                <path
                  d="M501.69 344.668C498.806 341.253 487.428 326.696 477.435 314.281C473.167 308.659 468.241 303.465 462.741 298.789C462.741 300.659 462.741 302.685 462.741 304.866C462.136 317.333 452.95 322.592 446.303 324.774C458.877 331.02 481.79 343.655 486.981 347.24C493.153 351.525 497.912 363.94 502.194 369.069C506.477 374.198 514.552 386.626 519.297 381.912C524.041 377.198 519.297 364.368 515.504 357.94C511.712 351.512 504.53 348.097 501.69 344.668Z"
                  fill="white"
                  fillOpacity="0.96"
                />
                <path
                  d="M516.86 383.611H516.601C512.419 383.378 507.66 377.235 503.825 372.301C503.003 371.249 502.253 370.275 501.589 369.47C499.636 366.872 497.91 364.141 496.427 361.302C493.543 356.107 490.227 350.341 486.506 347.77C481.459 344.277 458.705 331.694 445.914 325.344C445.796 325.282 445.7 325.192 445.636 325.084C445.572 324.975 445.544 324.853 445.555 324.73C445.565 324.608 445.614 324.491 445.696 324.393C445.777 324.294 445.888 324.219 446.015 324.175C452.994 321.889 461.415 316.682 461.992 304.839C462.079 302.8 462.093 300.774 461.992 298.813C461.988 298.687 462.025 298.562 462.099 298.454C462.172 298.347 462.279 298.26 462.406 298.207C462.533 298.153 462.675 298.134 462.814 298.151C462.953 298.169 463.084 298.223 463.189 298.307C467.587 301.826 472.144 306.644 477.998 313.89C482.973 320.084 488.309 326.811 492.75 332.408C497.191 338.005 500.811 342.563 502.238 344.277C503.573 345.708 505.066 347.013 506.694 348.173C509.78 350.549 513.63 353.51 516.082 357.653C520.177 364.561 524.806 377.391 519.773 382.326C519.419 382.716 518.975 383.033 518.472 383.255C517.97 383.477 517.42 383.598 516.86 383.611V383.611ZM447.904 324.876C460.882 331.369 482.425 343.316 487.328 346.718C491.308 349.484 494.682 355.445 497.653 360.691C499.096 363.468 500.779 366.138 502.685 368.678C503.349 369.496 504.127 370.47 504.949 371.547C508.223 375.755 513.154 382.105 516.644 382.3C517.031 382.324 517.42 382.262 517.774 382.12C518.129 381.977 518.439 381.758 518.677 381.482C522.917 377.287 518.85 365.132 514.784 358.25C512.431 354.731 509.358 351.647 505.728 349.16C504.017 347.946 502.451 346.575 501.056 345.069V345.069C499.614 343.355 496.052 338.862 491.553 333.187C487.054 327.512 481.776 320.863 476.802 314.669C472.849 309.523 468.379 304.716 463.449 300.307C463.449 301.813 463.449 303.358 463.377 304.904C462.857 316.63 455.013 322.214 447.904 324.876Z"
                  fill="#263238"
                />
                <path
                  d="M501.69 344.668C498.806 341.253 487.428 326.696 477.435 314.281C473.167 308.659 468.241 303.465 462.741 298.789C462.741 300.659 462.741 302.685 462.741 304.866C462.136 317.333 452.95 322.592 446.303 324.774C458.877 331.02 481.79 343.655 486.981 347.24C493.153 351.525 497.912 363.94 502.194 369.069C506.477 374.198 514.552 386.626 519.297 381.912C524.041 377.198 519.297 364.368 515.504 357.94C511.712 351.512 504.53 348.097 501.69 344.668Z"
                  fill="#6E4BEC"
                />
                <path
                  d="M516.86 383.611H516.601C512.419 383.378 507.66 377.235 503.825 372.301C503.003 371.249 502.253 370.275 501.589 369.47C499.636 366.872 497.91 364.141 496.427 361.302C493.543 356.107 490.227 350.341 486.506 347.77C481.459 344.277 458.705 331.694 445.914 325.344C445.796 325.282 445.7 325.192 445.636 325.084C445.572 324.975 445.544 324.853 445.555 324.73C445.565 324.608 445.614 324.491 445.696 324.393C445.777 324.294 445.888 324.219 446.015 324.175C452.994 321.889 461.415 316.682 461.992 304.839C462.079 302.8 462.093 300.774 461.992 298.813C461.988 298.687 462.025 298.562 462.099 298.454C462.172 298.347 462.279 298.26 462.406 298.207C462.533 298.153 462.675 298.134 462.814 298.151C462.953 298.169 463.084 298.223 463.189 298.307C467.587 301.826 472.144 306.644 477.998 313.89C482.973 320.084 488.309 326.811 492.75 332.408C497.191 338.005 500.811 342.563 502.238 344.277C503.573 345.708 505.066 347.013 506.694 348.173C509.78 350.549 513.63 353.51 516.082 357.653C520.177 364.561 524.806 377.391 519.773 382.326C519.419 382.716 518.975 383.033 518.472 383.255C517.97 383.477 517.42 383.598 516.86 383.611V383.611ZM447.904 324.876C460.882 331.369 482.425 343.316 487.328 346.718C491.308 349.484 494.682 355.445 497.653 360.691C499.096 363.468 500.779 366.138 502.685 368.678C503.349 369.496 504.127 370.47 504.949 371.547C508.223 375.755 513.154 382.105 516.644 382.3C517.031 382.324 517.42 382.262 517.774 382.12C518.129 381.977 518.439 381.758 518.677 381.482C522.917 377.287 518.85 365.132 514.784 358.25C512.431 354.731 509.358 351.647 505.728 349.16C504.017 347.946 502.451 346.575 501.056 345.069V345.069C499.614 343.355 496.052 338.862 491.553 333.187C487.054 327.512 481.776 320.863 476.802 314.669C472.849 309.523 468.379 304.716 463.449 300.307C463.449 301.813 463.449 303.358 463.377 304.904C462.857 316.63 455.013 322.214 447.904 324.876Z"
                  fill="#263238"
                />
                <path
                  opacity="0.2"
                  d="M515.473 357.936C511.667 351.521 504.529 348.092 501.688 344.664C498.847 341.236 487.427 326.691 477.434 314.277C476.785 313.459 476.136 312.667 475.501 311.9L475.011 311.316C474.535 310.745 474.074 310.186 473.569 309.654L473.05 309.057L471.723 307.537L471.247 307.018L469.906 305.55C469.762 305.407 469.618 305.265 469.488 305.109C469.027 304.628 468.565 304.148 468.046 303.693L467.7 303.343C467.224 302.862 466.748 302.408 466.258 301.953L465.999 301.707L464.456 300.317L464.311 300.187C463.754 299.694 463.191 299.226 462.624 298.785C462.624 300.655 462.624 302.68 462.624 304.862C462.516 307.498 461.927 310.1 460.88 312.563C471.81 319.939 481.154 327.951 483.115 331.483C485.855 336.392 470.137 333.366 458.76 331.288L460.88 332.431L461.211 332.6L465.321 334.834L465.609 334.989L467.527 336.041H467.657L469.719 337.171L469.863 337.262L471.738 338.301L471.94 338.418L473.886 339.496H473.973L475.674 340.457L476.02 340.651L479.337 342.547L479.683 342.742L480.966 343.495L481.183 343.625L482.538 344.417L482.798 344.573L483.822 345.183L484.067 345.339L485.119 345.989L485.264 346.08L486.028 346.56L486.244 346.703L486.965 347.183C493.137 351.469 497.896 363.883 502.178 369.013C506.461 374.142 514.536 386.57 519.28 381.856C520.517 380.49 521.203 378.787 521.227 377.025C521.703 371.181 518.314 362.753 515.473 357.936Z"
                  fill="black"
                />
                <path
                  d="M502.699 354.51C501.257 357.912 496.051 355.38 492.244 352.913C496.008 358.341 499.238 365.47 502.223 369.054C506.549 374.249 514.581 386.611 519.325 381.897C524.069 377.184 519.325 364.353 515.532 357.925C511.74 351.497 504.588 348.082 501.747 344.654C502.739 346.119 503.341 347.772 503.506 349.481C503.671 351.191 503.395 352.912 502.699 354.51Z"
                  fill="#263238"
                />
                <path
                  d="M516.859 383.61H516.599C512.417 383.376 507.659 377.234 503.823 372.299C503.001 371.247 502.251 370.273 501.588 369.468C499.634 366.87 497.908 364.139 496.426 361.3C494.883 358.573 493.282 355.755 491.566 353.275C491.476 353.147 491.438 352.994 491.459 352.843C491.48 352.693 491.56 352.554 491.683 352.45C491.806 352.347 491.966 352.286 492.135 352.277C492.303 352.269 492.469 352.314 492.604 352.405C496.267 354.781 499.151 355.859 500.708 355.443C501.004 355.358 501.273 355.209 501.491 355.01C501.709 354.811 501.871 354.568 501.963 354.3C502.624 352.804 502.89 351.19 502.74 349.586C502.59 347.981 502.028 346.43 501.098 345.054C501.035 344.985 500.989 344.905 500.963 344.819C500.937 344.733 500.931 344.643 500.946 344.555C500.961 344.467 500.996 344.383 501.05 344.308C501.103 344.233 501.174 344.168 501.256 344.119C501.411 344.019 501.602 343.977 501.79 344.001C501.978 344.025 502.149 344.114 502.266 344.249C503.601 345.68 505.094 346.986 506.722 348.145C509.807 350.522 513.658 353.482 516.109 357.625C520.204 364.533 524.833 377.363 519.8 382.298C519.446 382.696 518.999 383.02 518.491 383.247C517.982 383.473 517.426 383.597 516.859 383.61V383.61ZM494.392 355.041C495.546 356.885 496.642 358.82 497.709 360.715C499.153 363.492 500.835 366.162 502.742 368.702C503.405 369.52 504.184 370.494 505.006 371.572C508.279 375.779 513.211 382.129 516.7 382.324C517.088 382.349 517.476 382.287 517.83 382.144C518.185 382.001 518.495 381.782 518.733 381.506C522.973 377.312 518.906 365.157 514.84 358.274C512.487 354.755 509.414 351.671 505.784 349.184C505.107 348.652 504.443 348.145 503.838 347.652C504.486 350.02 504.299 352.512 503.304 354.781V354.781C503.143 355.239 502.861 355.654 502.482 355.992C502.102 356.329 501.637 356.577 501.127 356.716C499.512 357.123 497.267 356.556 494.392 355.015V355.041Z"
                  fill="#263238"
                />
                <path
                  d="M338.643 324.124C338.643 324.124 365.262 343.811 380.46 346.382C395.659 348.953 399.466 335.253 403.749 324.553C406.358 317.93 407.954 311.019 408.493 304.009L394.722 300.581C394.722 300.581 390.915 307.424 387.108 309.567C383.301 311.71 376.178 305.671 371.419 306.97C366.661 308.268 346.242 322.046 338.643 324.124Z"
                  fill="white"
                  fillOpacity="0.96"
                />
                <path
                  d="M384.082 347.351C382.823 347.347 381.568 347.234 380.333 347.013C365.12 344.416 339.279 325.43 338.184 324.625C338.083 324.549 338.008 324.449 337.964 324.337C337.921 324.225 337.912 324.105 337.938 323.989C337.962 323.874 338.02 323.767 338.107 323.68C338.193 323.593 338.305 323.529 338.429 323.496C342.538 322.34 350.686 317.613 357.852 313.444C363.851 309.977 369.013 306.952 371.234 306.38C373.772 305.692 376.728 306.809 379.598 307.886C382.467 308.964 385.092 309.951 386.808 309.016C390.398 306.99 394.104 300.355 394.147 300.29C394.217 300.151 394.341 300.041 394.495 299.978C394.649 299.916 394.823 299.907 394.984 299.952L408.769 303.367C408.924 303.412 409.058 303.501 409.151 303.621C409.245 303.74 409.293 303.884 409.288 304.03C408.74 311.118 407.13 318.107 404.501 324.807C404.14 325.703 403.78 326.625 403.419 327.56C399.742 336.871 395.69 347.351 384.082 347.351ZM340.087 324.34C345.047 327.898 367.384 343.507 380.607 345.741C393.83 347.974 398.026 337.365 402.006 327.093L403.088 324.327C405.583 317.92 407.153 311.251 407.76 304.484L395.099 301.342C394.147 302.965 390.889 308.211 387.514 310.12C385.221 311.419 382.208 310.276 379.035 309.081C376.411 308.094 373.685 307.068 371.652 307.614C369.619 308.159 364.284 311.263 358.674 314.535C352.027 318.379 344.615 322.69 340.087 324.34Z"
                  fill="#263238"
                />
                <path
                  opacity="0.2"
                  d="M338.646 324.118C338.646 324.118 365.266 343.805 380.464 346.376C395.663 348.947 399.47 335.247 403.753 324.547C406.362 317.924 407.958 311.013 408.497 304.003L394.726 300.575C394.726 300.575 390.919 307.418 387.112 309.561C383.305 311.704 376.182 305.665 371.423 306.964C366.664 308.262 346.246 322.04 338.646 324.118Z"
                  fill="black"
                />
                <path
                  d="M392.418 331.634C392.235 331.631 392.06 331.567 391.927 331.454C391.794 331.341 391.712 331.188 391.697 331.024C391.308 325.011 389.78 323.128 389.765 323.115C389.665 322.98 389.625 322.815 389.653 322.655C389.681 322.494 389.776 322.349 389.917 322.247C390.058 322.146 390.237 322.097 390.417 322.108C390.597 322.12 390.766 322.192 390.89 322.31C390.962 322.388 392.707 324.427 393.139 330.946C393.147 331.117 393.081 331.285 392.955 331.413C392.828 331.541 392.652 331.621 392.462 331.634H392.418Z"
                  fill="#263238"
                />
                <path
                  d="M282.073 273.18C282.073 273.18 292.527 287.309 295.858 291.594C299.189 295.88 331.504 330.123 331.504 330.123C331.504 330.123 338.166 330.968 351 327.124C363.834 323.28 374.361 313.424 374.361 313.424L386.718 323.267C386.718 323.267 401.384 319.839 411.852 311.657C422.321 303.476 423.72 281.79 423.72 281.79C423.72 281.79 400.432 266.817 392.357 259.103C384.281 251.39 367.626 242.832 359.551 241.079C351.476 239.326 343.862 238.079 343.862 238.079C343.862 238.079 336.263 252.208 323.905 259.051C311.547 265.895 302.03 267.194 295.858 268.479C289.687 269.765 281.597 268.051 282.073 273.18Z"
                  fill="#6E4BEC"
                />
                <path
                  d="M333.424 330.847C332.749 330.857 332.075 330.827 331.405 330.756C331.232 330.731 331.074 330.653 330.958 330.535C329.631 329.133 298.571 296.214 295.268 291.954C291.966 287.695 281.569 273.683 281.469 273.54C281.407 273.444 281.367 273.338 281.353 273.228C281.274 272.721 281.311 272.205 281.462 271.711C281.614 271.218 281.876 270.757 282.233 270.359C283.675 268.8 286.66 268.631 290.077 268.437C291.966 268.365 293.846 268.165 295.701 267.839C296.408 267.683 297.143 267.541 297.965 267.385C307.023 265.87 315.691 262.859 323.532 258.502C335.558 251.828 343.143 237.933 343.215 237.79C343.286 237.664 343.4 237.563 343.54 237.5C343.68 237.437 343.839 237.415 343.993 237.439C344.08 237.439 351.708 238.738 359.726 240.439C367.743 242.14 384.788 250.828 392.892 258.619C400.996 266.411 423.923 281.072 424.154 281.228C424.253 281.29 424.333 281.374 424.386 281.471C424.439 281.569 424.464 281.678 424.457 281.786C424.457 282.695 422.899 303.992 412.33 312.212C401.76 320.432 386.994 323.9 386.85 323.9C386.735 323.929 386.613 323.932 386.497 323.907C386.381 323.882 386.274 323.83 386.186 323.757L374.362 314.251C372.127 316.238 362.566 324.289 351.29 327.679C345.558 329.578 339.528 330.648 333.424 330.847ZM331.866 329.549C333.207 329.652 339.682 329.886 350.771 326.549C363.287 322.796 373.67 313.121 373.771 313.017C373.905 312.902 374.083 312.838 374.268 312.838C374.453 312.838 374.632 312.902 374.766 313.017L386.835 322.64C389.157 322.043 402.077 318.536 411.349 311.303C420.621 304.07 422.698 284.981 422.885 282.15C419.915 280.228 399.352 266.839 391.738 259.593C383.821 252.035 367.224 243.491 359.307 241.79C352.545 240.361 346.056 239.192 344.181 238.894C342.739 241.4 335.529 253.425 324.195 259.671C316.241 264.12 307.441 267.203 298.239 268.761L295.989 269.203C294.061 269.561 292.103 269.769 290.135 269.826C287.179 270.008 284.367 270.164 283.3 271.32C283.082 271.563 282.921 271.844 282.827 272.146C282.733 272.447 282.707 272.762 282.752 273.073C283.862 274.566 293.307 287.357 296.422 291.318C299.537 295.279 329.213 326.679 331.866 329.497V329.549Z"
                  fill="#263238"
                />
                <path
                  opacity="0.2"
                  d="M409.316 298.429L418.271 297.624L414.248 295.598C414.248 295.598 410.21 293.182 402.597 289.105C394.983 285.027 373.05 272.574 373.05 272.574L395.891 280.235C395.891 280.235 379.77 268.951 364.542 260.068C349.315 251.186 341.196 253.225 341.196 253.225L337.995 246.732C340.203 244.016 342.166 241.146 343.864 238.148C343.864 238.148 351.478 239.447 359.553 241.148C367.628 242.849 384.269 251.42 392.358 259.12C400.448 266.821 423.722 281.794 423.722 281.794C423.722 281.794 422.914 294.143 418.069 303.727L409.316 298.429ZM334.087 295.195C329.96 292.849 325.619 290.825 321.109 289.144C321.109 289.144 332.761 297.624 342.61 302.052C352.458 306.48 359.625 309.311 359.625 309.311L335.89 309.713L359.178 317.778C359.178 317.778 342.321 327.569 334.981 330.166C340.453 329.8 345.845 328.778 351.016 327.128C363.85 323.232 374.305 313.427 374.305 313.427L358.212 303.117C353.958 302.091 340.115 298.598 334.087 295.195ZM349.574 297.585L358.226 303.117L359.481 303.415L349.574 297.585Z"
                  fill="black"
                />
                <path
                  d="M372.718 253.763C362.884 249.335 346.575 247.608 337.736 246.984C336.354 248.675 334.876 250.301 333.309 251.854C339.524 252.179 359.553 253.568 370.166 258.347C374.982 260.516 381.587 265.944 388.58 271.697C398.991 280.254 410.628 289.812 421.746 293.422C422.208 291.604 422.568 289.877 422.842 288.319C413.037 284.851 402.164 275.917 392.416 267.905C384.817 261.658 378.241 256.256 372.718 253.763Z"
                  fill="#263238"
                />
                <path
                  d="M236.245 176.002C236.245 176.002 223.065 173.21 215.711 173.21H195.941L165.27 159.951L133.546 111.787L121.52 118.409C121.52 118.409 133.921 144.94 137.021 156.458C140.121 167.977 153.301 181.586 154.469 182.287C155.637 182.989 179.661 192.754 192.062 196.948C204.463 201.143 224.622 207.766 224.622 207.766C224.622 207.766 244.378 228.011 251.357 237.088C258.336 246.165 272.295 265.657 275.006 269.89C277.717 274.124 286.628 276.877 291.286 275.474C295.943 274.072 306.008 270.28 312.988 270.28C319.967 270.28 331.59 267.137 338.179 262.255C344.769 257.372 349.802 244.074 348.273 240.27C346.745 236.465 343.226 234.335 340.126 229.79C337.026 225.245 317.645 190.001 317.645 190.001C317.645 190.001 341.683 190.001 364.164 183.028L356.796 193.845L372.297 199.429C372.297 199.429 389.731 183.028 393.22 174.652C396.71 166.276 398.267 155.796 395.167 154.406C392.067 153.017 383.92 154.757 375.787 155.445C367.654 156.134 342.837 161.029 335.411 161.029C327.984 161.029 308.272 158.588 300.14 161.38C292.007 164.172 280.37 169.756 274.184 171.158C267.997 172.561 262.561 173.95 259.461 173.95C256.361 173.95 236.245 176.002 236.245 176.002Z"
                  fill="white"
                  fillOpacity="0.96"
                />
                <path
                  d="M288.403 276.502C283.241 276.502 276.665 273.762 274.387 270.217C271.589 265.918 257.587 246.336 250.767 237.453C244.177 228.882 225.863 210.04 224.205 208.326C222.201 207.663 203.469 201.495 191.804 197.56C179.806 193.509 155.436 183.652 154.067 182.834C152.913 182.133 139.474 168.303 136.33 156.616C133.273 145.279 120.987 118.956 120.857 118.671C120.794 118.527 120.788 118.368 120.84 118.221C120.893 118.074 121.001 117.948 121.146 117.866L133.158 111.23C133.327 111.141 133.528 111.113 133.72 111.152C133.811 111.172 133.897 111.209 133.971 111.26C134.046 111.312 134.107 111.377 134.153 111.451L165.876 159.499L196.158 172.614H215.741C222.806 172.614 234.876 175.095 236.318 175.393C238.178 175.212 256.506 173.316 259.534 173.316C263.412 172.967 267.242 172.275 270.969 171.251L274.084 170.537C279.124 169.078 284.036 167.28 288.778 165.16C292.628 163.576 296.608 161.94 299.968 160.797C306.053 158.706 318.339 159.499 327.366 160.018C330.697 160.226 333.581 160.395 335.556 160.395C339.767 160.395 350.106 158.719 359.219 157.239C365.968 156.148 372.341 155.109 375.788 154.824C378.167 154.616 380.518 154.33 382.796 154.044C388.362 153.356 393.164 152.746 395.558 153.837C399.509 155.616 397.173 167.199 393.971 174.887C390.467 183.289 373.61 199.223 372.889 199.898C372.787 199.989 372.658 200.051 372.517 200.076C372.376 200.102 372.23 200.089 372.096 200.041L356.595 194.457C356.499 194.422 356.412 194.369 356.339 194.302C356.267 194.235 356.212 194.155 356.177 194.067C356.121 193.884 356.146 193.688 356.249 193.522L362.579 184.224C348.395 188.117 333.695 190.279 318.872 190.652C321.958 196.236 338.051 225.415 340.819 229.467C341.998 231.137 343.319 232.721 344.77 234.207C346.569 235.912 348.011 237.896 349.024 240.063C350.755 244.362 345.189 257.971 338.714 262.763C331.908 267.814 320.112 270.944 313.075 270.944C307.553 270.944 299.896 273.45 294.82 275.112C293.58 275.515 292.498 275.879 291.59 276.151C290.555 276.422 289.479 276.54 288.403 276.502V276.502ZM122.429 118.684C124.174 122.437 134.888 145.759 137.729 156.343C140.771 167.68 153.692 181.016 154.874 181.782C156.056 182.549 179.777 192.171 192.366 196.379C204.623 200.521 224.71 207.131 224.912 207.196C225.024 207.233 225.123 207.296 225.2 207.378C225.402 207.586 245.071 227.753 251.992 236.752C258.914 245.751 272.873 265.321 275.67 269.606C278.266 273.619 286.946 276.099 291.099 274.905L294.286 273.879C299.449 272.191 307.264 269.632 313.032 269.632C319.81 269.632 331.201 266.62 337.762 261.75C344.323 256.88 349.053 244.037 347.626 240.492C346.666 238.467 345.308 236.615 343.617 235.025C342.124 233.489 340.765 231.852 339.55 230.129C336.465 225.623 317.82 191.73 317.026 190.288C316.97 190.192 316.94 190.085 316.94 189.977C316.94 189.868 316.97 189.761 317.026 189.665C317.089 189.57 317.177 189.492 317.284 189.437C317.39 189.382 317.51 189.354 317.632 189.353C317.877 189.353 341.814 189.275 363.906 182.406C364.046 182.367 364.196 182.365 364.337 182.402C364.478 182.439 364.604 182.513 364.699 182.614C364.786 182.723 364.833 182.855 364.833 182.99C364.833 183.125 364.786 183.257 364.699 183.367L357.777 193.522L372.039 198.716C374.461 196.392 389.343 181.99 392.486 174.471C396.351 165.186 396.971 156.031 394.764 154.992C392.774 154.096 387.958 154.694 382.854 155.33C380.561 155.616 378.181 155.901 375.788 156.109C372.399 156.408 366.054 157.408 359.335 158.525C349.702 160.083 339.752 161.693 335.412 161.693C333.393 161.693 330.48 161.524 327.12 161.317C318.281 160.771 306.183 160.018 300.4 162.005C297.084 163.135 293.118 164.771 289.297 166.342C284.477 168.507 279.478 170.331 274.343 171.796L271.243 172.51C267.4 173.569 263.448 174.274 259.448 174.614C256.419 174.614 236.477 176.679 236.275 176.705C236.194 176.718 236.111 176.718 236.03 176.705C235.885 176.705 222.835 173.926 215.654 173.926H195.942C195.837 173.946 195.729 173.946 195.625 173.926L165.011 160.667C164.88 160.61 164.77 160.52 164.694 160.408L133.287 112.814L122.429 118.684Z"
                  fill="#263238"
                />
                <path
                  opacity="0.2"
                  d="M361.224 187.272L364.021 183.155C363.364 184.664 362.417 186.058 361.224 187.272V187.272ZM288.85 188.726C288.85 188.726 300.054 195.219 304.077 197.596C308.1 199.972 334.532 232.658 334.532 232.658L296.911 216.114L341.699 243.54L289.787 233.865L343.53 249.591L302.779 247.579C302.779 247.579 346.659 251.604 342.189 256.045C337.719 260.487 328.75 264.512 318.007 264.915C307.264 265.317 294.272 259.72 294.272 259.72C294.272 259.72 307.25 267.382 302.332 267.785C297.415 268.187 285.317 272.226 278.597 264.967C271.877 257.708 229.339 205.686 229.339 205.686L211.876 195.193L214.558 199.634C214.558 199.634 161.666 183.48 154.052 176.597C149.986 172.922 142.314 162.313 136.07 153.223C136.445 154.365 136.777 155.43 137.022 156.391C140.122 167.91 153.302 181.519 154.47 182.22C155.638 182.922 179.662 192.687 192.063 196.881C204.464 201.076 224.623 207.764 224.623 207.764C224.623 207.764 244.379 228.009 251.358 237.086C258.337 246.163 272.296 265.655 275.007 269.888C277.718 274.122 286.629 276.875 291.287 275.472C295.944 274.07 306.01 270.278 312.989 270.278C319.968 270.278 331.591 267.135 338.18 262.253C344.77 257.37 349.803 244.072 348.274 240.267C346.746 236.463 343.227 234.333 340.127 229.788C337.027 225.243 317.646 189.999 317.646 189.999C317.646 189.999 341.656 189.999 364.122 183.038C364.803 181.615 365.395 180.158 365.896 178.675L367.684 174.649C367.684 174.649 343.948 185.532 330.509 185.934C317.07 186.337 288.85 188.726 288.85 188.726ZM395.154 154.365C394.954 154.276 394.747 154.202 394.534 154.145C394.63 155.2 394.477 156.262 394.087 157.261C391.852 163.754 375.341 192.752 375.341 192.752C375.341 192.752 375.672 193.973 376.191 195.635C381.527 190.285 390.828 180.48 393.265 174.611C396.697 166.209 398.254 155.82 395.154 154.365V154.365Z"
                  fill="black"
                />
                <path
                  d="M124.174 124.201L138.032 118.578L133.547 111.787L121.535 118.409C121.535 118.409 122.588 120.76 124.174 124.201Z"
                  fill="#263238"
                />
                <path
                  d="M124.174 124.856C124.083 124.868 123.991 124.868 123.9 124.856C123.811 124.821 123.731 124.772 123.664 124.709C123.598 124.647 123.545 124.573 123.511 124.492C121.924 120.999 120.857 118.713 120.857 118.713C120.794 118.57 120.788 118.411 120.84 118.264C120.893 118.117 121.001 117.991 121.146 117.908L133.158 111.272C133.327 111.183 133.528 111.156 133.72 111.194C133.811 111.214 133.897 111.251 133.971 111.303C134.046 111.354 134.107 111.419 134.153 111.493L138.652 118.298C138.694 118.379 138.716 118.468 138.716 118.557C138.716 118.647 138.694 118.736 138.652 118.817C138.623 118.906 138.573 118.987 138.506 119.057C138.439 119.126 138.356 119.182 138.262 119.22L124.419 124.843C124.339 124.859 124.256 124.863 124.174 124.856V124.856ZM122.429 118.687L124.563 123.336L136.993 118.298L133.287 112.688L122.429 118.687Z"
                  fill="#263238"
                />
                <path
                  d="M356.783 193.808C356.886 192.286 357.552 190.839 358.677 189.7C359.801 188.56 361.318 187.793 362.984 187.523C369.184 186.133 376.553 189.263 378.485 191.016C380.417 192.769 376.928 197.989 374.159 202.184C371.391 206.378 358.326 199.742 356.783 193.808Z"
                  fill="#263238"
                />
                <path
                  d="M371.188 204.143C370.769 204.142 370.35 204.116 369.934 204.066C364.699 203.351 357.288 198.559 356.076 193.949C356.068 193.902 356.068 193.854 356.076 193.807C356.188 192.143 356.912 190.561 358.134 189.31C359.356 188.058 361.007 187.21 362.825 186.898C369.184 185.457 376.74 188.508 379.004 190.56C381.268 192.612 378.139 197.456 375.096 202.144L374.851 202.507C374.473 203.062 373.929 203.51 373.281 203.799C372.633 204.089 371.908 204.208 371.188 204.143V204.143ZM357.504 193.755C358.614 197.65 365.521 202.17 370.136 202.845C371.347 203.001 372.919 202.975 373.596 201.923L373.842 201.546C376.077 198.092 379.465 192.872 377.98 191.534C376.207 189.95 369.025 186.898 363.156 188.223C361.668 188.448 360.305 189.112 359.282 190.112C358.259 191.111 357.633 192.388 357.504 193.742V193.755Z"
                  fill="#263238"
                />
                <path
                  d="M340.114 229.754C337.014 225.222 317.634 189.965 317.634 189.965C327.808 189.782 337.944 188.77 347.916 186.939C345.219 181.615 340.936 169.369 351.578 159.071C346.249 160.042 340.853 160.693 335.428 161.019C328.059 161.019 308.289 158.578 300.157 161.37C292.024 164.162 280.387 169.746 274.201 171.148C268.015 172.551 262.578 173.94 259.478 173.94C256.378 173.94 236.219 176.031 236.219 176.031C236.219 176.031 223.039 173.239 215.685 173.239H195.944L186.571 169.187C185.453 178.004 185.974 186.926 188.114 195.588C189.556 196.094 190.853 196.562 192.065 196.977C204.466 201.159 224.625 207.795 224.625 207.795C224.625 207.795 244.38 228.04 251.359 237.117C258.339 246.194 272.297 265.686 275.008 269.919C277.719 274.153 286.631 276.906 291.288 275.503C295.946 274.101 306.011 270.309 312.99 270.309C319.97 270.309 331.592 267.166 338.182 262.284C344.772 257.401 349.805 244.103 348.276 240.298C346.748 236.493 343.215 234.299 340.114 229.754Z"
                  fill="#6E4BEC"
                />
                <path
                  d="M288.405 276.505C283.243 276.505 276.667 273.765 274.389 270.22C271.591 265.921 257.59 246.339 250.769 237.456C244.179 228.885 225.866 210.043 224.207 208.329C222.203 207.666 203.471 201.498 191.806 197.563L187.84 196.174C187.733 196.135 187.638 196.073 187.562 195.994C187.487 195.915 187.434 195.821 187.408 195.719C185.23 186.983 184.703 177.979 185.85 169.085C185.867 168.983 185.909 168.885 185.974 168.799C186.039 168.713 186.125 168.643 186.225 168.592C186.328 168.544 186.441 168.519 186.557 168.519C186.672 168.519 186.786 168.544 186.889 168.592L196.103 172.578H215.743C222.809 172.578 234.878 175.059 236.32 175.357C238.18 175.176 256.508 173.28 259.536 173.28C263.414 172.931 267.244 172.239 270.971 171.215L274.086 170.501C279.126 169.042 284.038 167.245 288.78 165.124C292.63 163.54 296.61 161.904 299.97 160.761C306.055 158.67 318.341 159.463 327.368 159.982C330.699 160.19 333.583 160.359 335.558 160.359C340.885 160.023 346.183 159.386 351.42 158.45C351.569 158.422 351.724 158.439 351.862 158.498C352 158.556 352.113 158.653 352.184 158.774C352.255 158.894 352.284 159.031 352.266 159.165C352.248 159.3 352.184 159.426 352.084 159.528C341.6 169.67 346.114 181.889 348.551 186.681C348.597 186.768 348.621 186.864 348.621 186.96C348.621 187.057 348.597 187.152 348.551 187.24C348.502 187.329 348.431 187.407 348.344 187.468C348.256 187.529 348.154 187.57 348.046 187.59C338.419 189.337 328.647 190.349 318.831 190.616C321.917 196.2 338.01 225.379 340.778 229.431C341.957 231.101 343.278 232.685 344.729 234.171C346.528 235.876 347.97 237.86 348.983 240.027C350.714 244.326 345.148 257.935 338.673 262.727C331.867 267.778 320.071 270.908 313.034 270.908C307.511 270.908 299.854 273.414 294.779 275.076C293.539 275.479 292.457 275.843 291.549 276.115C290.53 276.395 289.469 276.526 288.405 276.505V276.505ZM188.72 195.096L192.325 196.395C204.582 200.537 224.669 207.147 224.871 207.212C224.983 207.249 225.082 207.312 225.159 207.394C225.361 207.602 245.03 227.769 251.951 236.768C258.873 245.767 272.831 265.337 275.629 269.622C278.225 273.635 286.905 276.115 291.058 274.921L294.245 273.895C299.407 272.207 307.223 269.648 312.991 269.648C319.768 269.648 331.16 266.636 337.721 261.766C344.282 256.896 349.012 244.053 347.585 240.508C346.625 238.483 345.267 236.631 343.576 235.041C342.083 233.505 340.724 231.868 339.509 230.145V230.145C336.423 225.639 317.778 191.746 316.985 190.304C316.929 190.208 316.899 190.101 316.899 189.993C316.899 189.884 316.929 189.777 316.985 189.681C317.048 189.586 317.136 189.508 317.242 189.453C317.349 189.398 317.469 189.37 317.591 189.369C327.403 189.179 337.178 188.223 346.806 186.512C344.326 181.318 340.735 169.981 349.603 160.073C344.923 160.891 340.188 161.433 335.429 161.696C333.41 161.696 330.497 161.527 327.137 161.32C318.298 160.774 306.199 160.021 300.417 162.008C297.1 163.138 293.135 164.774 289.313 166.345C284.494 168.511 279.494 170.334 274.36 171.799L271.26 172.514C267.417 173.572 263.465 174.277 259.464 174.617C256.436 174.617 236.493 176.682 236.291 176.708C236.21 176.721 236.127 176.721 236.046 176.708C235.902 176.708 222.852 173.929 215.671 173.929H195.944C195.84 173.949 195.732 173.949 195.627 173.929L187.191 170.111C186.228 178.46 186.744 186.893 188.72 195.096V195.096Z"
                  fill="#263238"
                />
                <path
                  opacity="0.2"
                  d="M348.404 241.052C348.366 240.774 348.299 240.5 348.202 240.234C348.008 239.763 347.782 239.303 347.524 238.857C345.779 235.832 342.765 233.728 340.054 229.767C339.232 228.559 337.242 225.17 334.791 220.859L333.464 218.534L332.542 216.859C332.066 216.028 331.59 215.171 331.1 214.262L330.119 212.509L327.985 208.704C327.048 207.029 326.139 205.38 325.245 203.795C324.005 201.536 322.823 199.406 321.77 197.523C321.251 196.575 320.76 195.705 320.328 194.926L319.679 193.77L319.218 192.913L317.574 189.939H319.016C327.652 189.684 336.255 188.855 344.755 187.459V187.459L347.755 186.926C347.077 185.577 346.499 184.189 346.024 182.771C340.996 184.446 335.737 185.494 330.393 185.888C316.968 186.29 288.748 188.719 288.748 188.719C288.748 188.719 299.952 195.212 303.976 197.588C307.999 199.964 334.431 232.65 334.431 232.65L296.809 216.106L341.597 243.532L289.685 233.858L343.429 249.584L302.678 247.571C302.678 247.571 346.558 251.597 342.088 256.038C337.617 260.479 328.648 264.505 317.905 264.907C307.162 265.31 294.17 259.713 294.17 259.713C294.17 259.713 307.148 267.374 302.231 267.777C297.314 268.18 285.215 272.218 278.496 264.959C271.776 257.7 229.237 205.678 229.237 205.678L211.774 195.186L214.457 199.627C214.457 199.627 201.19 195.575 187.059 190.679C187.347 192.303 187.679 193.926 188.111 195.575L190.015 196.25L190.303 196.354L192.062 196.965C204.463 201.146 224.623 207.782 224.623 207.782C224.623 207.782 235.74 219.171 244.234 228.689C245.301 229.884 246.325 231.04 247.276 232.144L249.093 234.273C249.367 234.624 249.641 234.949 249.915 235.273C250.434 235.922 250.925 236.572 251.357 237.104C252.453 238.52 253.708 240.195 255.078 242.026L256.75 244.285C258.755 246.999 260.903 249.947 262.994 252.856L264.782 255.336C266.541 257.791 268.229 260.154 269.728 262.271L271.805 265.232L272.41 266.102C273.203 267.232 273.852 268.193 274.371 268.946L275.006 269.907C276.022 271.328 277.408 272.505 279.044 273.335C279.753 273.725 280.49 274.072 281.25 274.374C281.625 274.517 282.014 274.66 282.418 274.789C283.943 275.313 285.538 275.654 287.162 275.802C288.546 275.952 289.949 275.846 291.286 275.491C291.863 275.322 292.526 275.101 293.262 274.867L295.655 274.088C297.357 273.53 299.275 272.919 301.265 272.348C305.042 271.151 308.99 270.447 312.988 270.257C316.73 270.157 320.437 269.589 324.005 268.569C324.784 268.361 325.562 268.128 326.341 267.881C327.12 267.634 327.783 267.413 328.475 267.154C331.964 265.957 335.235 264.299 338.18 262.232C339.051 261.572 339.848 260.837 340.559 260.037C341.764 258.695 342.831 257.256 343.746 255.739C344.38 254.687 344.972 253.596 345.505 252.493C346.039 251.389 346.514 250.285 346.947 249.207C347.149 248.662 347.336 248.129 347.495 247.597C348.118 245.812 348.472 243.96 348.548 242.091C348.532 241.741 348.484 241.394 348.404 241.052V241.052Z"
                  fill="black"
                />
                <path
                  d="M274.229 171.121C268.029 172.51 262.607 173.913 259.507 173.913C257.546 173.913 248.821 174.744 242.635 175.354C241.323 180.73 240.342 191.236 251.749 193.807C266.486 197.119 273.869 184.717 278.224 169.939C276.918 170.4 275.584 170.794 274.229 171.121V171.121Z"
                  fill="#263238"
                />
                <path
                  d="M256.404 195.006C254.774 194.994 253.152 194.802 251.574 194.434C239.302 191.681 240.73 180.15 241.927 175.228C241.957 175.095 242.033 174.974 242.145 174.883C242.256 174.792 242.397 174.736 242.547 174.722C249.209 174.059 257.558 173.267 259.505 173.267C263.382 172.919 267.212 172.227 270.94 171.203L274.054 170.488C275.383 170.178 276.688 169.792 277.962 169.333C278.087 169.29 278.222 169.279 278.353 169.301C278.484 169.324 278.605 169.378 278.704 169.459C278.802 169.54 278.874 169.643 278.911 169.759C278.948 169.874 278.949 169.996 278.914 170.112C273.982 186.812 266.585 195.006 256.404 195.006ZM243.225 175.955C241.941 181.591 241.566 190.85 251.876 193.175C263.412 195.772 271.661 188.513 277.111 170.995C276.208 171.288 275.289 171.54 274.357 171.748L271.257 172.462C267.414 173.521 263.462 174.225 259.461 174.566C258.063 174.566 252.295 175.059 243.225 175.955Z"
                  fill="#263238"
                />
                <path
                  d="M225.836 137.97C223.574 138.086 221.326 137.581 219.39 136.521C217.454 135.461 215.92 133.897 214.992 132.036C211.503 125.4 224.293 118.413 227.394 119.05C230.494 119.686 231.273 123.244 233.162 122.543C235.051 121.842 237.041 117.349 244.784 117.349C252.528 117.349 247.884 119.79 250.22 123.634C252.556 127.478 264.554 126.075 268.433 132.01C272.312 137.944 271.922 147.009 270.754 150.852C269.586 154.696 267.265 160.631 259.911 159.228C252.556 157.826 248.274 143.528 245.491 140.035C242.708 136.542 225.836 137.97 225.836 137.97Z"
                  fill="#263238"
                />
                <path
                  d="M262.002 160.109C261.241 160.107 260.482 160.033 259.738 159.888C254.085 158.81 250.336 151.018 247.582 145.318C246.855 143.625 245.978 141.987 244.958 140.422C243.155 138.11 232.282 138.084 225.851 138.604C223.448 138.72 221.062 138.181 219.004 137.058C216.946 135.934 215.312 134.278 214.315 132.306C212.988 129.799 213.623 127.02 216.132 124.254C219.463 120.592 225.303 117.982 227.538 118.489C229.023 118.918 230.314 119.771 231.215 120.917C232.124 121.878 232.484 122.216 232.902 122.008C233.473 121.693 233.984 121.298 234.417 120.839C235.695 119.497 237.291 118.431 239.088 117.718C240.885 117.006 242.837 116.665 244.799 116.722C247.524 116.722 248.937 117.008 249.687 117.722C249.963 118.057 250.156 118.442 250.253 118.849C250.35 119.257 250.349 119.679 250.25 120.086C250.07 121.203 250.282 122.342 250.855 123.345C251.749 124.813 254.662 125.462 257.748 126.15C261.973 127.111 266.775 128.189 269.068 131.695C272.918 137.591 272.774 146.733 271.461 151.044C270.654 153.642 268.693 160.109 262.002 160.109ZM233.162 137.019C238.324 137.019 244.511 137.5 246.14 139.617C247.215 141.252 248.141 142.963 248.909 144.733C251.533 150.174 255.109 157.615 260.041 158.55C266.386 159.758 268.693 155.226 270.048 150.642C271.288 146.538 271.49 137.864 267.799 132.293C265.809 129.254 261.324 128.241 257.373 127.345C253.826 126.553 250.754 125.865 249.572 123.891C248.876 122.694 248.599 121.336 248.779 119.995C248.779 119.255 248.851 118.826 248.606 118.592C248.361 118.359 246.904 118.008 244.77 118.008C243.001 117.95 241.24 118.255 239.621 118.901C238.002 119.547 236.567 120.516 235.426 121.735C234.867 122.331 234.187 122.824 233.422 123.189C231.98 123.722 230.956 122.67 230.091 121.748C229.388 120.821 228.379 120.116 227.207 119.735C225.765 119.411 220.516 121.501 217.257 125.072C215.815 126.696 214.286 129.189 215.627 131.734C216.479 133.478 217.902 134.947 219.706 135.942C221.51 136.938 223.609 137.413 225.721 137.305V137.305C226.457 137.253 229.528 137.019 233.047 137.019H233.162Z"
                  fill="#263238"
                />
                <path
                  d="M223.455 137.967C221.893 145.211 221.115 152.574 221.133 159.952C221.522 169.718 223.844 177.405 227.723 178.444C231.602 179.483 241.667 179.496 241.667 179.496C241.667 179.496 249.425 190.314 254.847 191.015C260.269 191.716 271.978 179.496 273.059 175.302C274.141 171.107 268.027 162.394 268.027 162.394C268.027 162.394 273.059 158.199 272.67 152.966C272.281 147.733 267.248 144.941 264.537 147.031C262.708 148.683 261.374 150.724 260.658 152.966C260.658 152.966 257.169 152.966 256.794 151.576C256.419 150.187 257.947 150.525 256.404 147.681C254.861 144.837 249.036 145.239 249.425 142.097C249.814 138.954 252.525 137.915 250.579 136.162C248.632 134.409 243.224 133.02 237.024 133.02C230.823 133.02 223.455 137.967 223.455 137.967Z"
                  fill="white"
                  fillOpacity="0.96"
                />
                <path
                  d="M255.294 191.69C255.112 191.703 254.928 191.703 254.746 191.69C249.512 191.028 242.605 181.976 241.278 180.184C239.36 180.184 231.054 180.067 227.507 179.106C223.498 178.029 220.845 170.886 220.412 160.017C220.402 152.608 221.184 145.215 222.748 137.941C222.777 137.78 222.876 137.635 223.022 137.538C223.339 137.344 230.65 132.526 237.024 132.526C243.124 132.526 248.92 133.902 251.098 135.863C252.54 137.162 251.905 138.396 251.242 139.538C250.67 140.392 250.297 141.342 250.146 142.33C249.988 143.525 251.069 144.018 253.03 144.785C254.697 145.253 256.13 146.232 257.082 147.551C258.12 149.408 257.933 150.148 257.616 150.836C257.551 150.94 257.509 151.054 257.494 151.172C257.48 151.291 257.491 151.41 257.529 151.524C257.673 152.031 258.971 152.329 260.182 152.407C260.935 150.218 262.289 148.235 264.119 146.642C264.74 146.178 265.496 145.886 266.297 145.801C267.098 145.716 267.909 145.841 268.633 146.161C270.057 146.798 271.258 147.776 272.105 148.988C272.952 150.2 273.412 151.599 273.434 153.031C273.78 157.641 270.248 161.407 268.979 162.588C270.262 164.471 274.891 171.679 273.809 175.574C272.728 179.47 261.495 191.69 255.294 191.69ZM224.104 138.344C222.591 145.457 221.838 152.684 221.854 159.926C222.244 169.912 224.637 176.938 227.925 177.821C231.66 178.834 241.566 178.847 241.667 178.847C241.788 178.847 241.907 178.874 242.012 178.927C242.118 178.979 242.208 179.054 242.273 179.145C244.378 182.08 250.766 189.833 254.948 190.365C259.966 191.028 271.271 179.08 272.367 175.146C273.261 171.938 269.094 165.108 267.421 162.744C267.328 162.616 267.289 162.462 267.31 162.31C267.331 162.158 267.412 162.017 267.537 161.913C267.537 161.913 272.324 157.861 271.964 153.018C271.945 151.828 271.571 150.665 270.881 149.65C270.191 148.635 269.21 147.807 268.041 147.252C267.559 147.039 267.019 146.951 266.484 146.999C265.949 147.048 265.439 147.229 265.013 147.525C263.295 149.092 262.036 151.02 261.35 153.135C261.314 153.274 261.225 153.398 261.099 153.486C260.973 153.573 260.817 153.619 260.658 153.615C259.981 153.615 256.592 153.524 256.087 151.732C255.936 151.23 255.987 150.697 256.231 150.226C256.404 149.849 256.577 149.499 255.756 148.018C254.926 146.99 253.746 146.233 252.396 145.862C250.536 145.122 248.43 144.278 248.704 142.084C248.875 140.932 249.302 139.824 249.959 138.824C250.651 137.668 250.809 137.331 250.074 136.668C248.445 135.214 243.441 133.721 237.024 133.721C231.717 133.747 225.373 137.538 224.104 138.344Z"
                  fill="#263238"
                />
                <path
                  opacity="0.2"
                  d="M273.062 175.3C274.23 171.119 268.029 162.392 268.029 162.392C268.029 162.392 273.062 158.198 272.672 152.964C270.048 161.301 262.881 160.899 262.881 160.899C262.881 160.899 260.199 167.755 249.903 172.184C239.607 176.612 228.864 177.378 224.827 175.82L224.625 175.755C225.238 176.98 226.354 177.943 227.74 178.443C231.604 179.495 241.684 179.495 241.684 179.495C241.684 179.495 249.442 190.312 254.864 191.013C260.286 191.714 271.98 179.495 273.062 175.3Z"
                  fill="black"
                />
                <path
                  d="M227.725 156.762C227.663 156.776 227.599 156.776 227.537 156.762L223.211 155.723C223.103 155.697 223.004 155.648 222.921 155.58C222.839 155.512 222.775 155.428 222.735 155.333C222.686 155.245 222.66 155.147 222.66 155.048C222.66 154.948 222.686 154.851 222.735 154.762L227.768 147.087C227.865 146.938 228.025 146.829 228.212 146.785C228.398 146.741 228.597 146.766 228.763 146.854C228.929 146.941 229.05 147.085 229.099 147.253C229.147 147.421 229.12 147.6 229.022 147.75L224.451 154.684L227.811 155.515C227.994 155.561 228.15 155.67 228.244 155.818C228.339 155.966 228.365 156.142 228.316 156.307C228.277 156.427 228.201 156.534 228.096 156.614C227.991 156.695 227.862 156.746 227.725 156.762Z"
                  fill="#263238"
                />
                <path
                  d="M226.557 161.991C226.415 161.989 226.278 161.95 226.161 161.879C226.045 161.807 225.954 161.707 225.9 161.589C225.846 161.472 225.832 161.343 225.859 161.218C225.886 161.093 225.953 160.978 226.052 160.887C226.138 160.81 228.301 158.914 232.887 159.667C232.98 159.681 233.07 159.712 233.15 159.757C233.23 159.803 233.299 159.863 233.353 159.933C233.407 160.003 233.444 160.083 233.463 160.166C233.482 160.25 233.482 160.336 233.464 160.42C233.429 160.588 233.321 160.738 233.164 160.835C233.008 160.932 232.815 160.97 232.627 160.939C228.792 160.316 227.09 161.796 227.061 161.809C226.926 161.927 226.745 161.992 226.557 161.991Z"
                  fill="#263238"
                />
                <path
                  d="M232.758 144.891C232.609 144.89 232.463 144.849 232.34 144.774C232.186 144.675 232.082 144.525 232.05 144.358C232.017 144.19 232.059 144.018 232.167 143.878C233.155 142.71 234.403 141.741 235.83 141.032C237.258 140.323 238.834 139.891 240.458 139.761C240.552 139.752 240.648 139.761 240.738 139.787C240.829 139.812 240.913 139.854 240.984 139.91C241.056 139.966 241.114 140.035 241.155 140.112C241.196 140.189 241.219 140.273 241.222 140.359C241.23 140.444 241.219 140.53 241.19 140.611C241.161 140.693 241.114 140.768 241.053 140.833C240.991 140.899 240.916 140.952 240.831 140.991C240.746 141.03 240.654 141.053 240.559 141.06C239.151 141.177 237.784 141.554 236.544 142.166C235.304 142.778 234.217 143.612 233.349 144.618C233.283 144.704 233.194 144.773 233.091 144.821C232.988 144.868 232.874 144.892 232.758 144.891Z"
                  fill="#263238"
                />
                <path
                  d="M227.726 145.239C227.559 145.239 227.396 145.189 227.264 145.096C226.743 144.697 226.081 144.478 225.397 144.478C224.713 144.478 224.051 144.697 223.53 145.096C223.382 145.204 223.193 145.255 223.004 145.238C222.815 145.221 222.641 145.137 222.52 145.005C222.458 144.941 222.411 144.866 222.382 144.785C222.353 144.705 222.342 144.619 222.35 144.534C222.358 144.45 222.385 144.367 222.429 144.292C222.473 144.217 222.534 144.15 222.607 144.096C223.387 143.503 224.376 143.178 225.397 143.178C226.418 143.178 227.407 143.503 228.187 144.096C228.299 144.182 228.379 144.297 228.416 144.425C228.453 144.553 228.446 144.688 228.396 144.812C228.346 144.936 228.255 145.044 228.135 145.12C228.015 145.196 227.873 145.238 227.726 145.239V145.239Z"
                  fill="#263238"
                />
                <path
                  d="M236.434 145.293C236.434 146.449 235.828 147.384 235.078 147.384C234.328 147.384 233.723 146.449 233.723 145.293C233.723 144.138 234.328 143.203 235.078 143.203C235.828 143.203 236.434 144.138 236.434 145.293Z"
                  fill="#263238"
                />
                <path
                  d="M225.201 146.342C225.201 147.498 224.596 148.433 223.846 148.433C223.096 148.433 222.49 147.498 222.49 146.342C222.49 145.187 223.096 144.239 223.846 144.239C224.596 144.239 225.201 145.187 225.201 146.342Z"
                  fill="#263238"
                />
                <path
                  d="M347.094 200.094C347.094 200.094 342.436 202.184 342.061 204.626C341.686 207.067 345.161 209.509 349.415 210.911C353.669 212.314 356.005 210.21 354.837 206.717C353.669 203.223 347.094 200.094 347.094 200.094Z"
                  fill="#6E4BEC"
                />
                <path
                  d="M351.881 212.002C350.953 211.986 350.036 211.824 349.17 211.521C345.248 210.223 340.85 207.626 341.34 204.535C341.773 201.834 346.258 199.743 346.777 199.509C346.878 199.465 346.989 199.441 347.101 199.441C347.214 199.441 347.325 199.465 347.426 199.509C347.714 199.652 354.304 202.821 355.53 206.535C355.878 207.286 355.986 208.11 355.841 208.913C355.696 209.717 355.303 210.467 354.708 211.08C353.934 211.706 352.921 212.036 351.881 212.002V212.002ZM347.079 200.834C345.71 201.509 343.013 203.132 342.753 204.73C342.465 206.587 345.291 208.885 349.646 210.314C351.42 210.898 352.905 210.833 353.698 210.145C354.091 209.695 354.34 209.158 354.419 208.591C354.498 208.023 354.403 207.447 354.145 206.924C353.237 204.145 348.406 201.496 347.079 200.834V200.834Z"
                  fill="#263238"
                />
                <path
                  d="M376.797 197.381C376.885 196.445 376.627 195.509 376.064 194.717C375.501 193.926 374.664 193.324 373.683 193.005C368.871 191.493 363.811 190.725 358.715 190.732C347.871 190.732 345.924 190.732 345.535 196.667C345.146 202.602 345.535 206.095 349.414 207.134C353.293 208.173 367.251 208.887 371.116 208.186C374.361 207.523 376.293 202.939 376.797 197.381Z"
                  fill="#6E4BEC"
                />
                <path
                  d="M365.882 209.069C360.114 209.069 352.125 208.498 349.212 207.705C344.554 206.407 344.468 201.927 344.814 196.576C345.247 190.084 347.842 190.084 358.715 190.084C363.889 190.078 369.028 190.86 373.914 192.395C375.048 192.758 376.017 193.45 376.669 194.361C377.321 195.273 377.62 196.353 377.519 197.434C376.913 204.069 374.635 208.212 371.26 208.822C369.479 209.044 367.679 209.127 365.882 209.069V209.069ZM358.672 191.33C347.712 191.33 346.559 191.33 346.213 196.654C345.823 202.576 346.213 205.563 349.587 206.459C353.423 207.498 367.208 208.16 370.929 207.498C373.553 207.03 375.514 203.108 376.033 197.278C376.106 196.484 375.887 195.69 375.41 195.019C374.934 194.348 374.225 193.837 373.394 193.564C368.675 192.081 363.713 191.322 358.715 191.317L358.672 191.33Z"
                  fill="#263238"
                />
                <path
                  d="M352.904 208.064C352.733 208.066 352.567 208.011 352.437 207.911C352.307 207.811 352.222 207.671 352.197 207.519C352.111 207.051 350.251 196.13 352.197 190.806C352.257 190.642 352.386 190.507 352.556 190.429C352.726 190.351 352.924 190.337 353.106 190.39C353.286 190.449 353.435 190.568 353.52 190.723C353.606 190.878 353.623 191.056 353.567 191.221C351.707 196.247 353.567 207.207 353.567 207.311C353.593 207.482 353.544 207.656 353.431 207.796C353.319 207.937 353.15 208.032 352.962 208.064H352.904Z"
                  fill="#263238"
                />
                <path
                  d="M359.942 208.77C359.776 208.77 359.615 208.718 359.486 208.623C359.357 208.529 359.269 208.397 359.235 208.25C359.106 207.718 356.106 195.018 359.74 190.304C359.787 190.222 359.853 190.151 359.933 190.094C360.013 190.037 360.105 189.996 360.204 189.974C360.303 189.952 360.406 189.949 360.506 189.965C360.607 189.981 360.702 190.016 360.786 190.068C360.87 190.119 360.941 190.187 360.994 190.265C361.048 190.343 361.082 190.431 361.095 190.522C361.107 190.613 361.099 190.705 361.069 190.793C361.039 190.881 360.989 190.962 360.922 191.031C357.649 195.29 360.62 207.913 360.648 207.978C360.687 208.148 360.65 208.325 360.545 208.471C360.439 208.617 360.275 208.719 360.086 208.757L359.942 208.77Z"
                  fill="#263238"
                />
                <path
                  d="M366.084 209.067C365.905 209.065 365.734 209.004 365.601 208.897C365.468 208.789 365.384 208.642 365.363 208.482C365.363 208.041 364.209 197.782 366.963 191.757C367 191.677 367.054 191.605 367.122 191.545C367.19 191.484 367.27 191.436 367.359 191.404C367.447 191.371 367.542 191.355 367.637 191.355C367.733 191.355 367.827 191.373 367.915 191.406C368.003 191.439 368.083 191.488 368.15 191.549C368.218 191.61 368.271 191.682 368.307 191.762C368.343 191.841 368.361 191.927 368.361 192.013C368.361 192.099 368.341 192.184 368.304 192.263C365.68 197.977 366.79 208.249 366.862 208.353C366.878 208.523 366.819 208.692 366.698 208.823C366.576 208.954 366.402 209.037 366.214 209.054L366.084 209.067Z"
                  fill="#263238"
                />
                <path
                  d="M364.153 183.639C364.077 183.653 363.999 183.653 363.923 183.639C363.741 183.586 363.59 183.47 363.504 183.316C363.417 183.163 363.402 182.985 363.461 182.821C363.692 182.211 368.955 168.017 372.113 164.147C372.169 164.078 372.239 164.02 372.32 163.975C372.401 163.931 372.491 163.901 372.585 163.888C372.679 163.875 372.774 163.878 372.867 163.898C372.959 163.918 373.046 163.954 373.123 164.005C373.199 164.055 373.264 164.118 373.314 164.191C373.363 164.264 373.396 164.345 373.411 164.43C373.426 164.514 373.422 164.6 373.4 164.683C373.377 164.766 373.337 164.845 373.281 164.914C370.282 168.628 364.918 183.094 364.86 183.237C364.8 183.359 364.701 183.463 364.575 183.535C364.449 183.607 364.302 183.643 364.153 183.639V183.639Z"
                  fill="#263238"
                />
                <path
                  d="M134.887 115.114V99.5313C134.887 94.5317 130.316 87.8439 128.629 84.5455C126.942 81.2471 125.976 81.0653 123.553 81.5068C121.131 81.9483 121.39 85.4026 121.39 85.4026C120.311 83.2284 118.93 81.1863 117.281 79.3251C115.118 77.1435 105.226 77.7928 103.063 81.7146C100.9 85.6363 100.409 95.8303 103.784 103.206C106.462 108.669 110.604 113.448 115.839 117.114C117.813 118.432 119.912 119.592 122.111 120.581L134.887 115.114Z"
                  fill="#6E4BEC"
                />
                <path
                  d="M122.113 121.191C122.003 121.196 121.893 121.173 121.796 121.126C119.548 120.119 117.405 118.932 115.393 117.581C110.028 113.878 105.804 109.001 103.122 103.413C99.7763 96.1022 99.9926 85.7524 102.415 81.3371C103.497 79.3893 106.381 77.9608 110.144 77.5063C112.769 77.1816 116.345 77.3375 117.83 78.8049C119.05 80.1171 120.1 81.5505 120.959 83.0773C121.082 82.5235 121.378 82.0129 121.812 81.6056C122.247 81.1984 122.801 80.9115 123.411 80.7788C126.223 80.2723 127.463 80.6878 129.28 84.1811C129.611 84.8304 130.058 85.6095 130.563 86.4926C132.697 90.2065 135.61 95.284 135.61 99.4785V115.062C135.612 115.184 135.575 115.304 135.503 115.407C135.432 115.511 135.329 115.594 135.206 115.646L122.416 121.087C122.324 121.141 122.221 121.177 122.113 121.191V121.191ZM112.437 78.701C111.738 78.7007 111.039 78.7441 110.346 78.8309C107.102 79.2204 104.578 80.4281 103.699 81.9605C101.723 85.5186 101.031 95.4529 104.448 102.92C107.032 108.296 111.091 112.993 116.244 116.568C118.091 117.793 120.044 118.883 122.084 119.827L134.125 114.711V99.4785C134.125 95.5827 131.241 90.5182 129.251 87.1289C128.732 86.2329 128.27 85.4277 127.924 84.7654C126.295 81.6098 125.574 81.7397 123.598 82.0903C121.623 82.441 121.997 85.2979 122.012 85.3238C122.034 85.4091 122.037 85.4974 122.02 85.5837C122.004 85.67 121.97 85.7525 121.918 85.8267C121.814 85.9765 121.648 86.0829 121.457 86.1225C121.266 86.1621 121.065 86.1317 120.898 86.0379C120.732 85.9441 120.614 85.7947 120.57 85.6225C119.527 83.509 118.19 81.5235 116.59 79.7139C115.38 78.949 113.91 78.5905 112.437 78.701V78.701Z"
                  fill="#263238"
                />
                <path
                  d="M120.425 104.258C120.248 104.257 120.079 104.198 119.946 104.093C119.814 103.988 119.728 103.844 119.704 103.687C119.496 102.22 119.788 100.731 120.54 99.4168C121.291 98.1023 122.468 97.0239 123.914 96.324L120.684 85.5326C120.66 85.4499 120.655 85.3638 120.668 85.2792C120.681 85.1946 120.713 85.1131 120.761 85.0395C120.809 84.9659 120.873 84.9016 120.949 84.8503C121.025 84.799 121.111 84.7617 121.203 84.7405C121.294 84.717 121.389 84.7102 121.483 84.7205C121.577 84.7307 121.668 84.7578 121.75 84.8002C121.832 84.8426 121.904 84.8994 121.961 84.9672C122.018 85.035 122.06 85.1125 122.083 85.195L125.457 96.4928C125.503 96.6429 125.488 96.8028 125.413 96.9434C125.339 97.0841 125.212 97.196 125.053 97.259C123.741 97.7861 122.652 98.679 121.946 99.8059C121.24 100.933 120.954 102.234 121.131 103.518C121.145 103.603 121.14 103.689 121.117 103.772C121.093 103.855 121.051 103.933 120.993 104.001C120.935 104.068 120.863 104.125 120.78 104.167C120.697 104.209 120.606 104.236 120.511 104.245L120.425 104.258Z"
                  fill="#263238"
                />
                <path
                  d="M107.593 98.1688C107.489 98.1689 107.385 98.1479 107.29 98.1075C107.195 98.0671 107.112 98.0082 107.046 97.935C106.984 97.8699 106.939 97.7944 106.911 97.7131C106.883 97.6317 106.873 97.5461 106.882 97.4613C106.892 97.3765 106.92 97.2943 106.965 97.2195C107.011 97.1448 107.072 97.079 107.146 97.026C111.35 94.1625 116.33 92.3685 121.566 91.8316C121.755 91.8168 121.942 91.8678 122.09 91.9742C122.238 92.0806 122.334 92.2342 122.36 92.403C122.372 92.4877 122.365 92.5736 122.339 92.6558C122.313 92.7379 122.27 92.8146 122.21 92.8813C122.151 92.9479 122.078 93.0031 121.994 93.0437C121.911 93.0842 121.819 93.1092 121.725 93.1173C116.798 93.6489 112.107 95.3223 108.113 97.974C108.047 98.0387 107.967 98.0897 107.877 98.1234C107.787 98.157 107.691 98.1725 107.593 98.1688Z"
                  fill="#263238"
                />
                <path
                  d="M118.018 93.4006C117.87 93.4005 117.725 93.3594 117.604 93.2827C117.483 93.206 117.391 93.0975 117.34 92.9721L111.572 78.6875C111.507 78.5256 111.516 78.3471 111.597 78.1913C111.679 78.0355 111.825 77.915 112.005 77.8564C112.094 77.8256 112.188 77.8113 112.284 77.8144C112.379 77.8174 112.472 77.8377 112.558 77.8741C112.645 77.9105 112.722 77.9622 112.785 78.0261C112.849 78.09 112.897 78.1648 112.928 78.246L118.696 92.5305C118.757 92.6943 118.747 92.8732 118.666 93.0303C118.586 93.1873 118.441 93.3106 118.263 93.3746L118.018 93.4006Z"
                  fill="#263238"
                />
                <path
                  d="M111.918 95.1284C111.775 95.1295 111.635 95.0917 111.517 95.0198C111.398 94.948 111.307 94.8455 111.254 94.7259L104.737 80.1686C104.67 80.0082 104.674 79.8306 104.749 79.6732C104.825 79.5158 104.965 79.3908 105.14 79.3245C105.228 79.2929 105.323 79.2772 105.417 79.2784C105.512 79.2795 105.606 79.2975 105.693 79.3313C105.78 79.3651 105.859 79.414 105.925 79.4752C105.991 79.5364 106.043 79.6088 106.078 79.6881L112.595 94.2454C112.631 94.3247 112.648 94.4094 112.647 94.4948C112.645 94.5801 112.625 94.6644 112.588 94.7428C112.55 94.8212 112.496 94.8922 112.428 94.9517C112.36 95.0112 112.28 95.058 112.192 95.0895C112.103 95.1161 112.011 95.1293 111.918 95.1284Z"
                  fill="#263238"
                />
                <path
                  d="M108.371 97.0892C108.256 97.0887 108.142 97.0637 108.039 97.0163C107.937 96.969 107.848 96.9005 107.78 96.8164C106.028 94.5581 104.685 92.0642 103.8 89.4274C103.021 86.6095 101.824 86.4407 101.81 86.4407C101.717 86.4408 101.624 86.4238 101.538 86.3909C101.452 86.3579 101.375 86.3097 101.31 86.249C101.245 86.1884 101.195 86.1166 101.162 86.0379C101.129 85.9593 101.114 85.8754 101.118 85.7914C101.122 85.618 101.201 85.4528 101.338 85.3314C101.476 85.21 101.661 85.1421 101.853 85.1421C102.084 85.1421 104.132 85.259 105.199 89.1158C106.048 91.59 107.313 93.9328 108.948 96.0633C109.003 96.133 109.043 96.212 109.064 96.2956C109.085 96.3792 109.088 96.4657 109.072 96.5502C109.056 96.6348 109.021 96.7156 108.97 96.788C108.919 96.8604 108.853 96.9231 108.775 96.9723C108.658 97.0491 108.516 97.0901 108.371 97.0892V97.0892Z"
                  fill="#263238"
                />
                <path
                  d="M355.745 302.085C345.247 301.657 329.933 294.19 329.284 293.865C329.19 293.83 329.105 293.778 329.036 293.712C328.966 293.645 328.912 293.566 328.879 293.48C328.845 293.394 328.832 293.302 328.84 293.211C328.849 293.12 328.879 293.031 328.928 292.951C328.977 292.871 329.044 292.801 329.125 292.746C329.206 292.691 329.299 292.652 329.398 292.632C329.497 292.612 329.6 292.61 329.699 292.628C329.799 292.646 329.893 292.683 329.976 292.735C330.135 292.813 345.636 300.371 355.817 300.787C356.008 300.787 356.191 300.855 356.327 300.977C356.462 301.099 356.538 301.264 356.538 301.436C356.538 301.608 356.462 301.773 356.327 301.895C356.191 302.017 356.008 302.085 355.817 302.085H355.745Z"
                  fill="#263238"
                />
                <path
                  d="M374.362 314.074C374.21 314.076 374.062 314.03 373.944 313.944L346.964 296.179C346.885 296.13 346.819 296.068 346.768 295.995C346.717 295.922 346.684 295.84 346.669 295.755C346.654 295.67 346.658 295.584 346.682 295.5C346.705 295.417 346.747 295.339 346.805 295.27C346.92 295.133 347.09 295.042 347.278 295.015C347.466 294.989 347.659 295.029 347.815 295.128L374.722 312.957C374.799 313.006 374.864 313.069 374.913 313.141C374.963 313.213 374.995 313.293 375.009 313.377C375.022 313.461 375.016 313.547 374.992 313.628C374.968 313.71 374.925 313.787 374.866 313.853C374.804 313.92 374.727 313.974 374.64 314.012C374.553 314.05 374.458 314.071 374.362 314.074V314.074Z"
                  fill="#263238"
                />
                <path
                  d="M224.623 208.419C224.533 208.421 224.443 208.408 224.359 208.379C224.275 208.35 224.198 208.306 224.133 208.25L196.995 185.472C196.862 185.349 196.787 185.184 196.787 185.011C196.787 184.839 196.862 184.674 196.995 184.55C197.062 184.49 197.141 184.441 197.229 184.408C197.317 184.375 197.411 184.358 197.506 184.358C197.602 184.358 197.696 184.375 197.784 184.408C197.872 184.441 197.951 184.49 198.018 184.55L221.335 204.107L212.121 190.498C212.022 190.35 211.992 190.172 212.038 190.004C212.084 189.836 212.202 189.692 212.366 189.602C212.531 189.512 212.728 189.485 212.914 189.527C213.101 189.568 213.262 189.675 213.361 189.823L225.301 207.458C225.393 207.592 225.427 207.751 225.398 207.907C225.369 208.062 225.278 208.202 225.142 208.302C224.992 208.398 224.806 208.44 224.623 208.419V208.419Z"
                  fill="#263238"
                />
                <path
                  d="M297.287 192.069C297.096 192.069 296.913 192 296.778 191.879C296.642 191.757 296.566 191.592 296.566 191.42C296.566 191.247 296.642 191.082 296.778 190.96C296.913 190.839 297.096 190.77 297.287 190.77L312.356 189.692L306.242 188.628C306.149 188.614 306.059 188.583 305.979 188.537C305.899 188.491 305.83 188.431 305.776 188.361C305.723 188.291 305.685 188.212 305.666 188.128C305.647 188.044 305.647 187.958 305.665 187.874C305.683 187.79 305.719 187.709 305.771 187.637C305.823 187.565 305.891 187.502 305.97 187.454C306.049 187.406 306.138 187.372 306.232 187.355C306.326 187.338 306.422 187.338 306.516 187.355L317.836 189.329C318.027 189.339 318.206 189.417 318.333 189.547C318.46 189.676 318.525 189.845 318.514 190.017C318.502 190.189 318.415 190.35 318.272 190.465C318.128 190.579 317.941 190.638 317.749 190.627L297.403 192.082L297.287 192.069Z"
                  fill="#263238"
                />
              </svg>
            </div>
          </div>

          {/* <!-- DÉCORATION --> */}
          <div className="absolute bg-[#6E4BEC] opacity-60 w-96 h-96 -top-10 -right-16 md:w-[800px] md:h-[800px] md:left-[45%] md:top-[-150%] rounded-full shadow-2xl z-0"></div>
        </div>
      </div>
    </GuestLayout>
  );
};

export default Index;
