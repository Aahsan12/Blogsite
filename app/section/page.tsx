import React from 'react';  
import Link from 'next/link';   


const Page = () => {
    return (
        <>
            <div className="text-4xl flex justify-center font-semibold text-blue-200 hover:text-white text-center p-5 mt-20 bg-gradient-to-r from-blue-500 to-blue-900 border-b-6 rounded-md border-blue-500">
            <h1>Our Category</h1>
            </div>
            <div className="grid grid-cols-3 gap-5 m-10">
                <div className="col">
                    <div className="card">
                        <img src="image1.jpg" width={500} alt="Placeholder" />
                    </div>
                        <div className="card-body font-semibold">
                            <h5 className="card-title text-xl">HTML & CSS</h5>
                    <Link href={'/htmlCss'}><button className="card-text bg-blue-300 rounded-sm p-5">View</button></Link>
                        </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="image3.jpg" width={500} alt="Placeholder" />
                    </div>
                    <div className="card-body font-semibold">
                            <h5 className="card-title text-xl">Java Script & Type Script</h5>
                            <Link href={'/javascript'}><button className="card-text bg-blue-300 rounded-sm p-5">View</button></Link>
                        </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="Slider.jpg" width={500} alt="Placeholder" />
                    </div>
                    <div className="card-body font-semibold">
                            <h5 className="card-title text-xl">Next Js & React</h5>
                           <Link href={'/Nextjs'}><button className="card-text bg-blue-300 rounded-sm p-5">View</button></Link>
                        </div>
                </div>
            </div>
            <div></div>
            <div></div>
        </>
    )
}
export default Page;