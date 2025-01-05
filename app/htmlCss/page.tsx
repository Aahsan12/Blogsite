import header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata = {
    title: 'HTML & CSS',
}

const page = () => {
    return (
        <div>
            <div>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center font-semibold mt-5">HTML & CSS</h2>
            </div>
            <div className="m-10 bg-slate-300 p-10 rounded-md text-lg text-justify">
                <p className="text-sm sm:text-justify sm:text-base md:text-lg lg:text-xl">HTML "HyperText Markup Language" is the foundation of web development, providing the basic structure for web pages. It uses a system of tags and attributes to organize and display content such as text, images, links, forms, and other media. Common HTML elements include `div`, `p`, `img`, `a`, and `header`, among many others. 
CSS "Cascading Style Sheets" works alongside HTML to style and format these elements. CSS allows developers to control the layout, color schemes, typography, and overall design of a webpage. It provides powerful tools for creating responsive designs, adapting layouts to different screen sizes, and making websites visually appealing and user-friendly. CSS styles are applied through selectors, properties, and values, and can be written inline, internally within a `style` tag, or externally in a separate `.css` file.
Together, HTML and CSS form the core of front-end web development, allowing developers to create structured, visually engaging websites.</p>
            </div>
            <div className="grid grid-cols-2 gap-5 m-10 bg-slate-300 p-10 rounded-md text-lg text-justify">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl"><b>Functions of HTML:</b><br/>
Content Structuring: HTML provides the structure and organization of a web page by using various elements tags like headings, paragraphs, links, lists, forms, and more. It helps in placing and structuring the content in a way that makes it easy to read and understand.
Embedding Media: HTML allows the inclusion of various media types such as images, audio, video, and interactive content. It uses tags like "img", "audio", "video", and "iframe" to integrate media into web pages.
Creating Hyperlinks: HTML allows you to create links to other pages, both internal within the same website and external to other websites. This is done using the a tag, enabling web navigation.
Building Forms: HTML enables the creation of forms where users can input data. Forms are used for collecting information like contact details, search queries, and more. Elements like "input", "select", and "textarea" are used to create form fields.
Semantic Markup: HTML provides semantic elements like "header", "footer", "article", and "section", which help define the structure of a page clearly. This improves accessibility, SEO, and makes the code easier to maintain.</p>
<div>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl"><b>Functions of CSS:</b><br/>
                Styling the Layout: CSS controls the layout of a webpage, including the position, size, and alignment of elements. It helps in arranging content by using properties like display, position, flex, grid, and float.
Design and Appearance: CSS is responsible for the visual aspects of a webpage, such as colors, fonts, and spacing. Properties like color, font-family, background-color, and margin are used to style elements, making them more visually appealing.
Responsive Design: CSS allows the creation of responsive web designs that adapt to different screen sizes and devices. Media queries are used to apply different styles depending on the viewport size, ensuring that websites are mobile-friendly.\
Transitions and Animations: CSS enables smooth transitions and animations that enhance user experience. Using properties like transition, transform, and keyframes, developers can create dynamic visual effects such as hover effects or page animations.
Separation of Content and Design: One of the core functions of CSS is to separate the content structure provided by HTML from its visual styling. This makes it easier to maintain and update the design without affecting the content, leading to more efficient web development and consistent design changes across multiple pages.
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
)}
export default page;