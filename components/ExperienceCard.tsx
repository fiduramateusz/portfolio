import { motion } from 'framer-motion';
import React from 'react';
import { urlFor } from '../sanity';
import { Experience } from '../typings';

type Props = {
	experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
	return (
		<article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
			<motion.img
				initial={{
					y: -100,
					opacity: 0,
				}}
				transition={{
					duration: 1.2,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				viewport={{
					once: true,
				}}
				className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
				src={urlFor(experience?.companyImage).url()}
				alt='experience'
			/>
			<div className='px-0 md:px-10'>
				<h4 className='text-4xl font-light'>{experience?.jobTitle}</h4>
				<p className='uppercase py-5 text-gray-200 text-sm'>
					{new Date(experience.dateStarted)
						.toDateString()
						.replace(/^\S+\s/, '')}{' '}
					-{' '}
					{new Date(experience.dateEnded).toDateString().replace(/^\S+\s/, '')}
				</p>
				<p className='font-bold text-l mt-1'>{experience.company}</p>
				<p className='text-m mt-1'>Working with:</p>
				<div className='flex space-x-2 my-2'>
					{experience?.technologies.map((technology) => (
						<img
							key={technology?._id}
							className='h-10 w-10 rounded-full'
							// src={urlFor(technology?.image).url()}
						/>
					))}
				</div>

				<ul className='list-disc space-y-4 ml-5 text-lg max-h-96 overflow-y-scroll pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#ffcccc]'>
					{experience.points.map((point, i) => (
						<li key={i}>{point}</li>
					))}
				</ul>
			</div>
		</article>
	);
}
