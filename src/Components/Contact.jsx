import Heading from "./Heading";

const Contact = () => {
  return (
    <section id="contact" className="py-20 ">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-12">
      <Heading heading="Contact Us"/>
          <p className="text-white -mt-4">
            Have a project in mind? Let's talk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Contact Info */}
          <div className="space-y-6 text-white mt-10">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Get In Touch
              </h3>
              <p className="text-[#e019bc]">
                Feel free to contact us for any questions,
                collaborations, or project discussions.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-[#e019bc]">
                  ibad30256@gmail.com
                </p>
              </div>

              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-[#e019bc]">
                  +92 324 3636771
                </p>
              </div>

              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-[#e019bc]">
                  Hyderabad, Pakistan
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-[#7b2cbf] p-8 rounded-2xl shadow-md space-y-5 text-white">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#e019bc] text-white py-3 rounded-lg hover:bg-[#7b2cbf]  transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;