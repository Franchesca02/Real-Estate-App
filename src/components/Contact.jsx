import { useState } from 'react';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';


const Contact = () => {

    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "06c2a5df-7ed7-4cf9-bd76-ac078ce2ac7a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };

  return (
    <motion.div
    initial={{opacity: 0, x: -200}}
    transition={{duration: 1}}
    whileInView={{opacity: 1, x: 0}}
    viewport={{once: true}}
      className="text-center px-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Connect{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          With Us
        </span>
      </h1>
      <p className="text-gray-500 mb-12 max-w-80 mx-auto text-center">
        Ready to Make a Move? Let’s Build Your Future Home Together!
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8">
        <div className="flex flex-wrap">
          <div className="md:w-1/2 text-left w-full">
            Your Name
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 px-4 mt-2 rounded py-3 outline-none"
            />
          </div>

          <div className="md:w-1/2 text-left w-full md:pl-4">
            Your Email
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 px-4 mt-2 rounded py-3 outline-none"
            />
          </div>
        </div>
        <div className="text-left my-6">
          Message
          <textarea
            name="Message"
            placeholder="Type a Message..."
            required
            className="w-full border border-gray-300 rounded py-3 px-4 resize-none mt-2 h-48 outline-none"
          ></textarea>
        </div>

        <button className="py-2 text-white bg-blue-600 px-12 mb-10 rounded">
            {result ? result : "Send a Message"}</button>
      </form>
    </motion.div>
  );
};

export default Contact;
