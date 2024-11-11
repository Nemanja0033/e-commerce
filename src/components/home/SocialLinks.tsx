import { Instagram, Facebook, X } from 'lucide-react';

const SocialLinks = () => {
  return (
    <>
    <h1 className='text-center text-2xl mb-6'>Stay connected with m o d e</h1>
     <div className="w-full flex justify-evenly gap-4 items-center">
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <Instagram className="w-8 h-8 text-gray-600 hover:text-gray-800 transition duration-300" />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <Facebook className="w-8 h-8 text-gray-600 hover:text-gray-800 transition duration-300" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <X className="w-8 h-8 text-gray-600 hover:text-gray-800 transition duration-300" />
      </a>
    </div>
    </>
  );
}

export default SocialLinks;
