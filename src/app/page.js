import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin, AiFillMail} from 'react-icons/ai'
import Image from 'next/image'
import sparefins from '../../public/sparefins.png'



export default function Home() {
  return (
    <main className='bg-white px-10'>
      <section className='min-h-screen text-center'>
        <nav className='py-10 mb-12 flex justify-between'>
        <h1 className='text-xl'>KayKelly</h1>
        <ul className='flex items-center gap-8'>
          <li>
            <BsFillMoonStarsFill className='cursor-pointer text-2xl' />
          </li>
          <li><a className=' bg-gradient-to-r from-blue-400 to-teal-400 px-4 py-2 rounded-lg' href="#">Resume</a></li>
        </ul>
        </nav>
        <div className='text-center p-10'>
          <h2 className='text-5xl py-2 text-teal-600 font-medium'>Kay Kelly</h2>
          <h3 className='text-2xl py-2'>Web Developer</h3>
       </div>
       <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 mb-12'>
        <AiFillGithub className='hover:text-black' />
        <AiFillLinkedin className='hover:text-black' />
        <AiFillMail className='hover:text-black' />
       </div>
       <div>
        <h3 className='text-center text-2xl text-teal-600 font-medium mb-4'>Front End</h3>
        <p className='mb-8'>HTML, CSS, Tailwind, Bootstrap, React, Next.js, Handlebars</p>

        <h3 className='text-2xl text-teal-600 font-medium mb-4'>Back End</h3>
        <p className='mb-8'>Node.js, Express.js, MongoDB, Mongoose</p>

        <h3 className='text-2xl text-teal-600 font-medium mb-4'>Languages</h3>
        <p>Javascript</p>
        </div>
        <div className='flex gap-10 py-10'>
          <div className='basis-1/2 mx-auto hover:bg-black hover:bg-opacity-50'>
          <Image src={sparefins} className='' />
          </div>
        </div>
      </section>
    </main>
  )
}
