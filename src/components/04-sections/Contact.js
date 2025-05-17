import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const { error } = await supabase.from('contact_messages').insert([form]);

    if (error) {
      console.error(error);
      setStatus('error');
    } else {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="Contact" className="relative z-10 text-[#d2f0d2] font-mono py-20 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl text-center mb-12 text-[#9fffd8] tracking-widest">📬 Contact Me</h2>

      <div className="flex gap-8">
        <div className="w-full hidden md:block p-6 border-l backdrop-brightness-75 backdrop-blur-md bg-[#010a25]/50 border-[#9fffd8] rounded shadow-md hover:shadow-xl transition-all duration-300 flex flex-col space-y-4">
          <h3 className="text-xl text-[#9fffd8]">Get in Touch</h3>
          <p className="text-[#88ffcc]">
            I would love to hear from you! Whether you have a question, a project in mind, or just want to say hi,
            feel free to reach out.
          </p>
          <p className="text-[#88ffcc]">
            You can also find me on social media or check out my projects on GitHub.
          </p>

          <ul className="flex gap-4 mt-16">
            <li className="flex items-center gap-2">
              <a href="mailto:you@example.com" className="text-[#9fffd8] hover:text-[#88ffcc] transition duration-300 flex flex-col items-center">
                <div className="w-6 h-6">
                  <svg fill="#9fffd8" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" id="memory-email">
                    <path d="M1 5H2V4H20V5H21V18H20V19H2V18H1V5M3 17H19V9H18V10H16V11H14V12H12V13H10V12H8V11H6V10H4V9H3V17M19 6H3V7H5V8H7V9H9V10H13V9H15V8H17V7H19V6Z"></path>
                  </svg>
                </div>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-[#9fffd8] hover:text-[#88ffcc] transition duration-300 flex flex-col items-center">
                <div className="w-6 h-6">
                  <svg fill="#9fffd8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0.5C5.37 0.5 0 5.87 0 12.5C0 17.9 3.44 22.4 8.21 23.98C8.82 24.08 9 23.72 9 23.42V21.17C5.66 21.91 4.97 19.48 4.97 19.48C4.42 18.08 3.63 17.71 3.63 17.71C2.55 17 3.71 17.02 3.71 17.02C4.91 17.1 5.55 18.25 5.55 18.25C6.6 20.02 8.28 19.5 9.02 19.19C9.13 18.41 9.45 17.88 9.81 17.59C7.14 17.29 4.33 16.23 4.33 11.58C4.33 10.27 4.79 9.22 5.55 8.41C5.43 8.1 5.03 6.82 5.66 5.12C5.66 5.12 6.64 4.78 8.99 6.39C9.91 6.13 10.91 6 11.91 6C12.91 6 13.91 6.13 14.83 6.39C17.18 4.78 18.16 5.12 18.16 5.12C18.79 6.82 18.39 8.1 18.27 8.41C19.03 9.22 19.49 10.27 19.49 11.58C19.49 16.25 16.68 17.28 14 17.57C14.45 17.94 14.84 18.68 14.84 19.84V23.42C14.84 23.73 15.02 24.09 15.63 23.98C20.4 22.4 23.84 17.9 23.84 12.5C23.84 5.87 18.47 0.5 11.84 0.5H12Z"/>
                  </svg>
                </div>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-[#9fffd8] hover:text-[#88ffcc] transition duration-300 flex flex-col items-center">
                <div className="w-6 h-6">
                  <svg fill="#9fffd8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.1c.66-1.26 2.27-2.6 4.7-2.6 5.03 0 5.95 3.3 5.95 7.6V24h-5V15c0-2.15-.04-4.91-3-4.91s-3.47 2.35-3.47 4.77V24h-5V8z"/>
                  </svg>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="w-full
         mx-auto flex flex-col gap-6">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="p-3 rounded backdrop-brightness-75 backdrop-blur-md bg-[#010a25]/50 border border-[#9fffd8] placeholder-[#88ffcc] focus:outline-none"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            required
            className="p-3 rounded backdrop-brightness-75 backdrop-blur-md bg-[#010a25]/50 border border-[#9fffd8] placeholder-[#88ffcc] focus:outline-none"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message"
            rows="5"
            required
            className="p-3 rounded backdrop-brightness-75 backdrop-blur-md bg-[#010a25]/50 border border-[#9fffd8] placeholder-[#88ffcc] focus:outline-none"
          />
          <button
            type="submit"
            className="p-3 rounded backdrop-brightness-75 backdrop-blur-md bg-[#010a25]/50 border border-[#9fffd8] placeholder-[#88ffcc] focus:outline-none"
          >
            Send Message
          </button>

          {status === 'success' && <p className="text-green-400">✅ Message sent!</p>}
          {status === 'error' && <p className="text-red-400">❌ Message failed to send. Please contact me by email if the issue persists. :)</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
