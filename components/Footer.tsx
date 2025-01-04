// components/Footer.js

const Footer = () => {
    return (
        <footer className="bg-blue-900s py-4 mt-20 opacity-65 text-blue-200 bg-gradient-to-r from-blue-500 to-blue-900 border-b-6 rounded-md border-blue-500 hover:text-white">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
                <div>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-blue-500">
                        Twitter
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-blue-700">
                        Facebook
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-pink-500">
                        Instagram
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
