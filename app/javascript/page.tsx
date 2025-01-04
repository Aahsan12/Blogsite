import header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata = {
    title: 'JavaScript & TypeScript',
}

const page = () => {
    return (
        <>
        <div>
            <div>
                <h2 className="text-4xl text-center font-semibold mt-5">Java Script & Type Script</h2>
            </div>
            <div className="m-10 bg-slate-300 p-10 rounded-md text-lg text-justify">
                <p>**JavaScript** is a high-level, dynamic programming language primarily used to create interactive and dynamic web content. It enables client-side scripting, allowing developers to build features like form validation, animations, and event handling directly in the browser. JavaScript is widely used for both front-end and back-end development, especially with frameworks like React, Angular, and Node.js.
**TypeScript** is a superset of JavaScript that adds static typing, interfaces, and other features for better code quality and maintainability. It helps catch type-related errors during development rather than at runtime. TypeScript compiles to JavaScript, making it compatible with all JavaScript environments, and is commonly used in large-scale applications where type safety and tooling support are crucial.</p>
            </div>
            <div className="grid grid-cols-2 gap-5 m-10 bg-slate-300 p-10 rounded-md text-lg text-justify">
                <p><b>Functions of JS:</b><br/>
                JavaScript is a high-level, interpreted programming language that is widely used to make web pages interactive. It enables dynamic content by allowing functions like form validation, creating animations, handling user events, manipulating the Document Object Model (DOM), and making asynchronous requests to servers (via AJAX or Fetch). JavaScript runs on the client-side (in web browsers), which means it allows immediate interaction without the need for constant server communication. It’s used in both front-end and back-end development (using Node.js) and powers the behavior and functionality of most modern websites and web applications. Libraries and frameworks like React, Angular, and Vue.js make JavaScript even more powerful for building complex, user-friendly applications.</p>
<div>
                <p><b>Functions of TS:</b><br/>
                TypeScript is a statically typed superset of JavaScript developed by Microsoft. It introduces strong typing, interfaces, and type inference, which help developers avoid many common runtime errors and improve the quality of their code. TypeScript enables better tooling support, such as autocompletion, inline documentation, and error detection during the development phase. The primary benefit of TypeScript is that it allows developers to define and enforce strict types for variables and functions, making the code more predictable, readable, and maintainable, especially in large projects. TypeScript compiles to plain JavaScript, meaning it can run anywhere JavaScript is executed, but it helps developers catch errors at compile time rather than having to debug at runtime. TypeScript is especially popular for developing large-scale applications with frameworks like Angular and React.
                </p>
            </div>  
        </div>
{/* Comment Box Component */}
    
        <label className="block w-2/3 bg-slate-300 text-lg font-semibold text-center p-5 m-5 mx-60 rounded-md">
            <input type="text" className="w-2/3 p-2 m-2" placeholder="Enter your comment here"/>
        </label>
        <button className="bg-blue-500 text-white p-2 m-2 mx-64 rounded-md">Submit</button>
</div>

        </>

)
}
export default page;