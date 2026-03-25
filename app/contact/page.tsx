'use client';

import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('Please fill in all fields.');
      return;
    }

    // TODO: replace with real API call / endpoint
    console.log({ name, email, message });
    setStatus('Your message has been sent successfully!');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="min-h-[calc(100vh-120px)] bg-gradient-to-br from-slate-100 via-white to-cyan-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Get in Touch</h1>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Any question, feedback or custom offer? We’re here to help. Fill out the form and we’ll reach out within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-slate-200 p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-2" htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-3 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-2" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-3 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-3 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition"
                  rows={6}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-xl py-3 font-bold shadow-lg transition"
              >
                Send Message
              </button>

              {status && (
                <p className="text-center text-sm font-medium text-emerald-700">{status}</p>
              )}
            </form>
          </div>

          <aside className="bg-gradient-to-br from-cyan-700 via-blue-700 to-indigo-700 text-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Contact Info</h2>
            <p className="mb-3">Email: <a href="mailto:support@my-ecommerce-site.com" className="underline">support@my-ecommerce-site.com</a></p>
            <p className="mb-3">Phone: +1 (123) 456-7890</p>
            <p className="mb-3">Address: 123 Market St, Commerce City, CA</p>
            <div className="mt-6 bg-white text-slate-900 p-4 rounded-xl">
              <h3 className="font-semibold mb-1">Quick Reply</h3>
              <p className="text-sm">We typically respond within 1 business day. Thank you for reaching out!</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Contact;


