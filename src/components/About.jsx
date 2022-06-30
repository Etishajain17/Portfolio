import React from 'react'
import SectionTitle from './SectionTitle'
function About() {
  return (
    <div className='flex flex-col items-center justify-center gap-10 py-20 md:flex-row md:gap-20'>
        <div className='w-full md:w-6/12'>
        <SectionTitle children="About Me" />
        <p  className='text-gray-600 text-md dark:text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima esse laborum velit tenetur vel id repellendus eos maiores sit expedita? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum velit sapiente quidem voluptatibus ratione molestiae accusamus ad unde distinctio id.</p>
        <a href="mailto:jainetisha0714@gmail.com" className='block mt-3 text-gray-700 underline text-md md:text-lg  dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-500'>jainetisha0714@gmail.com</a>
        </div>
        <img src={"https://avatars.githubusercontent.com/u/73745016?s=400&u=09d6fdfd768e4a5fda45570f9a44346701cb0bce&v=4"} alt="etisha jain"  className='object-cover w-full rounded-lg md:w-6/12'/>
    </div>
  )
}

export default About