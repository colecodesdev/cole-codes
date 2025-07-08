"use client";
import emailjs from "@emailjs/browser"
import { useState } from "react";
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import dotenv from 'dotenv'

export const ContactForm = () => {

    const[formData, setFormData] = useState({
        name: "",
        company: "",
        phone: "",
        email: "",
        message: "",
    })

    const SERVICE_ID = 'service_t4cn2xg';
    const TEMPLATE_ID = 'template_cyzfdgm';
    const PUBLIC_KEY = 'ZHs_871fM5mduIaVX';

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, PUBLIC_KEY).then((result) => {
            alert("Message Sent");
            setFormData({name: "", company: "", phone: "", email: "", message: ""})
        }).catch(() => alert("Oops! Something went wrong. Please try again."))
    }

    return <section id="Contact" className='flex flex-items justify-center'>
        <div className="">
            <form className='space-y-6' onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4 py-10 px-10">
                    <div className="flex gap-4">
                    <input onChange={(e) => setFormData({...formData, name: e.target.value})} value={formData.name} placeholder='Name' type="text" name='name' id='name' required className="w-full bg-white border-white/10 rounded-3xl px-4 py-3 text-gray-950 hover:outline-none focus:outline-none required"/>
                    <input onChange={(e) => setFormData({...formData, company: e.target.value})}  value={formData.company}  placeholder='Company Name' type="text" name='company' id='company' required className="w-full bg-white border-white/10 rounded-3xl px-4 py-3  text-gray-950 hover:outline-none focus:outline-none"/>
                    </div>
                    <div className="flex gap-4">
                     <input onChange={(e) => setFormData({...formData, phone: e.target.value})}  value={formData.phone}  placeholder='Phone' type="text" name='phone' id='phone' required className="w-full bg-white border-white/10 rounded-3xl px-4 py-3  text-gray-950 hover:outline-none focus:outline-none required"/>
                     <input onChange={(e) => setFormData({...formData, email: e.target.value})}  value={formData.email}  placeholder='E-Mail' type="text" name='email' id='email' required className="w-full bg-white border-white/10 rounded-3xl px-4 py-3  text-gray-950 hover:outline-none focus:outline-none required"/>
                    </div>
                    <textarea onChange={(e) => setFormData({...formData, message: e.target.value})}  value={formData.message}  placeholder='Write me a message!' name='message' rows={5} id='message' required className="w-full bg-white border-white/10 rounded-3xl px-4 py-3 resize-none text-gray-950 hover:outline-none focus:outline-none"/>
                </div>
                    <div className="flex justify-center items-center">
                    <button type="submit"  className='inline-flex items-center gap-2 border border-white bg-white text-gray-950 h-12 px-6 rounded-xl mb-6'>
                    <span className='font-semibold'>Contact Me</span>
                    <ArrowUpRightIcon className='size-4'/>
                    </button>
                    </div>
            </form>
        </div>
    </section>
}