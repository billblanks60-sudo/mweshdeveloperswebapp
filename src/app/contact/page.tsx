'use client';

import React, { useState } from 'react';
import { Navbar, Footer } from '@/components';
import { Button, Input, Textarea } from '@material-tailwind/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-4 text-white text-4xl md:text-6xl font-bold">
            Get In Touch
          </h1>
          <p className="text-green-100 text-lg">
            We'd love to hear from you. Send us a message!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {[
              {
                icon: '📍',
                title: 'Address',
                info: '123 Tech Street, Silicon Valley, CA 94025',
              },
              {
                icon: '📞',
                title: 'Phone',
                info: '+1 (555) 123-4567',
              },
              {
                icon: '📧',
                title: 'Email',
                info: 'hello@mweshdevelopers.com',
              },
              {
                icon: '🕐',
                title: 'Business Hours',
                info: 'Mon - Fri: 9:00 AM - 6:00 PM PST',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-4 shadow-lg rounded-2xl bg-white border border-slate-200">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h6 className="mb-1 text-gray-800 text-lg font-semibold">
                  {item.title}
                </h6>
                <p className="text-gray-600">
                  {item.info}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="shadow-lg p-8 rounded-2xl bg-white border border-slate-200">
              {submitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg">
                  <p className="text-green-700 font-semibold text-sm">
                    ✓ Message sent successfully! We'll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="mb-2 font-semibold text-gray-700 text-sm">
                      Name
                    </p>
                    <Input
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <p className="mb-2 font-semibold text-gray-700 text-sm">
                      Email
                    </p>
                    <Input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <p className="mb-2 font-semibold text-gray-700 text-sm">
                    Subject
                  </p>
                  <Input
                    name="subject"
                    placeholder="What is this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <p className="mb-2 font-semibold text-gray-700 text-sm">
                    Message
                  </p>
                  <Textarea
                    name="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  fullWidth
                  className="bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold py-3"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h4 className="mb-6 text-center text-gray-800 text-2xl font-bold">
            Our Location
          </h4>
          <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-600">
              Map integration coming soon
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
