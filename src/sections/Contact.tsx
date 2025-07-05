import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'
import { ContactForm } from '@/components/ContactForm';
import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/Card';

export const ContactSection = () => {
  return (
    <section id='Contact' className='py-16 lg:py-24'>
      <div className='container'>
        <SectionHeader eyebrow='Contact Me' title="Get In Touch" description='Have a project in mind? Or just want to say hi? Reach out—I’d love to connect'/>
        <div className='flex justify-center'>
        <Card className='mt-10 w-fit z-20'>
        <ContactForm /> 
        </Card>
        </div>
        {/* <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative overflow-hidden z-0 md:text-left'>
          <div style={{
            backgroundImage: `url(${grainImage.src})`
          }} className='absolute inset-0 -z-10 opacity-5'></div>
          <div className='flex flex-col gap-8 items-center md:flex-row md:gap-16'>
            <div>
          <h2 className='font-serif text-2xl md:text-3xl'>Let’s Build Your Next Website Together</h2>
          <p className='text-sm mt-2 md:text-base'>Have a project in mind? Reach out and let’s talk about how I can help make it happen.</p>
          </div>
          <div>
          <button className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900'>
            <span className='font-semibold'>Contact Me</span>
            <ArrowUpRightIcon className='size-4'/>
          </button>
          </div>
          </div>
        </div> */}
    </div>
  </section>
  )
};
