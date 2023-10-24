import React from 'react'
import { useState, useEffect } from 'react'
import { CardContact } from './CardContact';
import { API_URL } from '../../displayAndCrudAboutAndProjects/data/ApiRoutes';
import { CardContactAbout } from './CardContactAbout';

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
        let timer: string | number | NodeJS.Timeout | undefined
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
        try {
            const response = await fetch(`${API_URL}/mail/send?email=${formData.email}`, {
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
            });
        
            if (response.status === 201) {

                setIsSent(true);
                setShowMessage(true);
                setIsLoading(false);
                resetForm(); 
                setTimeout(() => {
                    setShowMessage(false);
                }, 5000);
            } else {
                console.log('Unexpected status code:', response.status);
            }
        } catch (error) {
            console.error("Error:", error);
            setIsLoading(false);
        }
    };
    return (
        <section className="bg-gray-100 rounded-lg">
            
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                <div className="lg:col-span-2 lg:py-12 flex flex-col justify-center gap-5">
                    <CardContact />
                    <CardContactAbout />
                </div>

                <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 relative">
                {showMessage  && (
                <div className="text-green-500 mb-4">Votre message a bien été envoyé !</div>
                )}
                 <div className="flex p-2 gap-1 absolute top-0 left-1">
                        <div className="circle">
                        <span className="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
                        </div>
                        <div className="circle">
                        <span className="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
                        </div>
                        <div className="circle">
                        <span className="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
                        </div>
                    </div>
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
