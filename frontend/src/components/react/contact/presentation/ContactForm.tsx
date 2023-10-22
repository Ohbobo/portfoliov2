import React from 'react'
import { useState } from 'react'
import { CardContact } from './cardContact';

export const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e: { target: { id: any; value: any; }; }) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    fetch(`http://localhost:3000/mail/send?email=${formData.email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <section className="bg-gray-100 rounded-lg">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12 flex flex-col justify-center">
                <CardContact />
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="sr-only" htmlFor="name">Name</label>
                    <input
                    className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                    placeholder="Nom / prénom"
                    type="text"
                    id="name"
                    name='name'
                    onChange={handleChange}
                    />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input
                        className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                        placeholder="Adresse email"
                        type="email"
                        id="email"
                        name='email'
                        onChange={handleChange}
                    />
                    </div>

                    <div>
                    <label className="sr-only" htmlFor="phone">Phone</label>
                    <input
                        className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                        placeholder="Téléphone"
                        type="tel"
                        id="phone"
                        name='phone'
                        onChange={handleChange}
                    />
                    </div>
                </div>

                <div>
                    <label className="sr-only" htmlFor="message">Message</label>

                    <textarea
                    className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                    placeholder="Message"
                    rows={8}
                    id="message"
                    name='message'
                    onChange={handleChange}
                    ></textarea>
                </div>

                <div className="mt-4">
                    <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                    >
                    Envoyer
                    </button>
                </div>
                </form>
            </div>
            </div>
        </div>
    </section>
  )
}
