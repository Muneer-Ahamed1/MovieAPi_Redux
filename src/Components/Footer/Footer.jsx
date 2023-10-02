import React from 'react';

const Footer = () => {
  
  return (
    <footer className="flex flex-col items-center  text-center dark:text-white dark:bg-slate-600 bg-neutral-400 mt-[auto] ">
        <div className="foot-link p-2 ">
            <h1 className='capitalize'>@CopyRight movieRulz from API</h1>
        </div>

      {/* Copyright section */}
      <div className="w-full bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-slate-700 dark:text-white hover:text-lime-400">
        © 2023 Copyright: 
        <a
          className="text-neutral-800 dark:text-slate-50 hover:text-lime-500"
          href="https://tailwind-elements.com/"
        >
          MovieRulZ
        </a>
      </div>
    </footer>
  );
};

export default Footer;
