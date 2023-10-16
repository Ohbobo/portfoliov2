import React from 'react'

export const ContactForm = () => {
  return (
    <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
                <p className="max-w-xl text-lg">
                At the same time, the fact that we are wholly owned and totally
                independent from manufacturer and other group control gives you
                confidence that we will only recommend what is right for you.
                </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                <form action="" className="space-y-4">
                <div>
                    <label className="sr-only" htmlFor="name">Name</label>
                    <input
                    className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                    placeholder="Nom / prénom"
                    type="text"
                    id="name"
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
                    />
                    </div>

                    <div>
                    <label className="sr-only" htmlFor="phone">Phone</label>
                    <input
                        className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                        placeholder="Téléphone"
                        type="tel"
                        id="phone"
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
