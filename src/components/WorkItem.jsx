import React from 'react'

function WorkItem({imgUrl,title,tech,workUrl}) {
  return (
    <a href={workUrl} target="_blank" rel="noreferrer" className='overflow-hidden rounded-lg bg-slate-300 dark:bg-slate-800'>
        <img src={imgUrl} alt={title} className="object-cover w-full h-36 md:h-48"/>
        <div className='w-full p-5 text-gray-600 dark:text-gray-300 '>
            <h3 className='mb-2 text-lg font-semibold md:text-xl md:mb-3'>{title}</h3>
            <p className='flex flex-row flex-wrap items-center justify-start gap-2 text-xs md:text-sm'>
                {tech.map(item =>(
                    <span key={item}
                    className="inline-block px-2 py-1 rounded-md bg-slate-200 dark:bg-slate-900">{item}</span>
                ))}
            </p>
        </div>
    </a>
  )
}

export default WorkItem