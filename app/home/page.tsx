import Image from 'next/image';

const Page = () => {
    return (
        <div className='flex justify-center items-center pt-5 w-auto h-screen'>   
            <Image className='w-auto h-auto' src={'/Slider.jpg'} width={600} height={1000} alt="Code" />
        </div>

    )
}
export default Page;
