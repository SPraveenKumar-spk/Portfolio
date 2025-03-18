import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaAngleRight } from "react-icons/fa6";

const ContactMe = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;

    emailjs.sendForm(serviceId, templateId, form, publicKey).then(
      () => {
        setSubmitStatus("success");
        setIsSubmitting(false);
        form.reset();
      },
      (error) => {
        console.error("EmailJS error:", error);
        setSubmitStatus("error");
        setIsSubmitting(false);
      }
    );
  };

  return (
    <section
      id="contact"
      className="bg-gray-50 dark:bg-gray-900 py-10 px-6 sm:px-12 lg:px-24 scroll-mt-16"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            Contact Me
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Interested in hiring me? Let's connect! I'm excited to explore
            opportunities with you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-6 border border-gray-100 dark:border-gray-700"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              placeholder="e.g., Jane Smith"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              placeholder="e.g., jane.smith@company.com"
            />
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Company Name (Optional)
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              placeholder="e.g., TechCorp"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-y"
              placeholder="Tell me about the opportunity or role you have in mind..."
            />
          </div>

          <div className="text-center space-y-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`inline-flex items-center px-2 py-2 md:px-8 md:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer ${
                isSubmitting
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:from-blue-700 hover:to-indigo-700"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              {!isSubmitting && (
                <FaAngleRight className="mx-2 transform transition-transform duration-300 group-hover:translate-x-1.5" />
              )}
            </button>

            {submitStatus === "success" && (
              <p className="text-green-600 dark:text-green-400 text-sm">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-600 dark:text-red-400 text-sm">
                Failed to send message. Please try again or email me directly.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
