import React from 'react'
import { useState, useEffect } from 'react'
import { CardContact } from './CardContact';
import { ContactApiService } from '../data/ApiService';

export const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [isLoading, setIsLoading] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timer;
        if (isSent) {
            setShowMessage(true);
            timer = setTimeout(() => {
                setShowMessage(false);
                setIsSent(false);
            }, 5000);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [isSent]);

    const handleChange = (e: { target: { id: any; value: any; }; }) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
          });
    }
 
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsLoading(true);

        const contactApiService = new ContactApiService();

        try {
            const data = await contactApiService.sendMail(formData);
            setIsSent(true);
            setIsLoading(false);
            resetForm();
        } catch (error) {
            console.error('Error:', error);
            setIsLoading(false);
        }
    };

    return (
        <section className="bg-gray-100 rounded-lg">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                <div className="lg:col-span-2 lg:py-12 flex flex-col justify-center">
                    <CardContact />
                </div>

                <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                {showMessage  && (
                <div className="text-green-500 mb-4">Votre message a bien été envoyé !</div>
                )}
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
                        value={formData.name}
                        required
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
                            value={formData.email}
                            required
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
                            value={formData.phone}
                            onChange={handleChange}
                            required
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
                        value={formData.message}
                        onChange={handleChange}
                        required
                        ></textarea>
                    </div>

                    <div className="mt-4">
                        <button
                        type="submit"
                        className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                        disabled={isLoading}
                        >
                        {isLoading ? "Envoi en cours..." : 'Envoyer'}
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </section>
    )
}
