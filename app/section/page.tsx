import Link from 'next/link';

const Page = () => {
  return (
    <>
      <div className="text-4xl flex justify-center font-semibold text-blue-200 hover:text-white text-center p-5 mt-20 bg-gradient-to-r from-blue-500 to-blue-900 border-b-6 rounded-md border-blue-500">
        <h1>Our Category</h1>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 m-10">
        {/* HTML & CSS */}
        <div className="col">
          <div className="card">
            <img src="image1.jpg" className="w-full h-auto" alt="HTML and CSS learning resources" />
          </div>
          <div className="card-body font-semibold">
            <h5 className="card-title text-xl sm:text-2xl">HTML & CSS</h5>
            <Link href={'/htmlCss'}>
              <button className="card-text bg-blue-300 hover:bg-blue-400 rounded-sm p-3 text-white transition duration-300 w-full">
                View
              </button>
            </Link>
          </div>
        </div>

        {/* JavaScript & TypeScript */}
        <div className="col">
          <div className="card">
            <img src="image3.jpg" className="w-full h-auto" alt="JavaScript and TypeScript learning resources" />
          </div>
          <div className="card-body font-semibold">
            <h5 className="card-title text-xl sm:text-2xl">JavaScript & TypeScript</h5>
            <Link href={'/javascript'}>
              <button className="card-text bg-blue-300 hover:bg-blue-400 rounded-sm p-3 text-white transition duration-300 w-full">
                View
              </button>
            </Link>
          </div>
        </div>

        {/* Next.js & React */}
        <div className="col">
          <div className="card">
            <img src="Slider.jpg" className="w-full h-auto" alt="Next.js and React learning resources" />
          </div>
          <div className="card-body font-semibold">
            <h5 className="card-title text-xl sm:text-2xl">Next Js & React</h5>
            <Link href={'/Nextjs'}>
              <button className="card-text bg-blue-300 hover:bg-blue-400 rounded-sm p-3 text-white transition duration-300 w-full">
                View
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
