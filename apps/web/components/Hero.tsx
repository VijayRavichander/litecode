import HeroImage from "../assets/code_image.jpeg"
import Image from 'next/image';
export const Hero = () => {
    return <div className="min-h-80 bg-black">
    <div className="">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 text-white ">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Welcome to Litecode</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Your path to crushing your next coding round: Master the fundamentals, Practice consistently, Learn from failures, Stay up-to-date with industry trends, and Code with intent.</p>
            <p className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700">
                Get started
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </p>
            <a href="/problems" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-white hover:text-black ">
                Solve Problems
            </a> 
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex py-5">
            <Image className= "rounded-md" src={HeroImage} alt="mockup" />
        </div>                
    </div>
</div>
    </div>
}


export default Hero;