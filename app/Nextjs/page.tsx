import header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata = {
    title: 'Next Js & React',
}

const page = () => {
    return (
        <>
        <div>
            <div>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center font-semibold mt-5">Next Js & React</h2>
            </div>
            <div className="m-10 bg-slate-300 p-10 rounded-md text-lg text-justify">
                <p className="text-sm sm:text-justify sm:text-base md:text-lg lg:text-xl">React is a popular JavaScript library developed by Facebook for building user interfaces, especially for single-page applications (SPAs). It enables developers to build reusable UI components and efficiently update the UI using a virtual DOM. React uses a declarative approach, where developers describe what the UI should look like, and React takes care of updating the DOM as the data changes. It is widely used for front-end development and integrates well with various other libraries and frameworks for routing, state management, and more. React can be used with both JavaScript and TypeScript.
                Next.js is a powerful React framework that enables developers to build full-stack web applications with ease. It offers features like server-side rendering (SSR), static site generation (SSG), and API routes, which enhance performance and SEO. Next.js simplifies React development by providing routing, automatic code splitting, and optimized performance out of the box. It also supports server-side logic, making it ideal for building complex applications that require both front-end and back-end functionality. Next.js allows developers to create production-ready web apps quickly, with built-in support for features like pre-rendering, file-based routing, and seamless deployment.      
                </p>
            </div>
            <div className="grid grid-cols-2 gap-5 m-10 bg-slate-300 p-10 rounded-md text-lg text-justify">
                <p className="text-sm sm:text-justify sm:text-base md:text-lg lg:text-xl"><b>Functions of React:</b><br/>
                React is primarily used for building interactive and dynamic user interfaces. Its core function is to break down complex UIs into smaller, reusable components. React uses a virtual DOM to efficiently update the actual DOM, ensuring faster performance by minimizing direct manipulation of the DOM. It allows developers to build component-based architectures, manage state and props, and handle user interactions. React also supports the declarative approach, where the developer specifies how the UI should look based on state and data, and React takes care of updating the UI as needed.</p>
<div>
                <p className="text-sm sm:text-justify sm:text-base md:text-lg lg:text-xl"><b>Functions of NextJS :</b><br/>
                Next.js enhances React by providing powerful features like server-side rendering (SSR) and static site generation (SSG), which improve the performance and SEO of web applications. Its primary function is to allow developers to build full-stack applications with ease, including both front-end (React) and back-end (API routes). Next.js automates tasks like routing, code splitting, and pre-rendering, making development faster and more efficient. It also offers out-of-the-box performance optimizations like automatic image optimization, smart caching, and static file serving, ensuring web applications are production-ready with minimal configuration.
                </p>
            </div>  
        </div>
{/* Comment Box Component */}
    
<label className="block w-full sm:w-2/3 lg:w-1/3 bg-slate-300 text-lg font-semibold text-center p-5 m-5 mx-auto rounded-md">
  <input
    type="text"
    className="w-full p-2 m-2 rounded-md"
    placeholder="Enter your comment here"
  />
</label>

<div className="flex justify-center">
  <button className="w-full sm:w-2/3 lg:w-1/3 bg-blue-500 text-white p-2 m-2 rounded-md">
    Submit
  </button>
</div>
</div>

        </>

)
}
export default page;