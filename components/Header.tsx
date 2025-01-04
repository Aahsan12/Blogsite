import Link from 'next/link';


const header = () => {
  return (
    <header className="header bg-blue-900 text-5xl p-5 hover:text-white
    text-center font-semibold w-auto opacity-65 text-blue-950 bg-gradient-to-r from-blue-500 to-blue-900 border-b-6 rounded-md border-blue-500">      
      <h1><Link href="/">My Blogs</Link></h1>
    </header>
  );
}
export default header;