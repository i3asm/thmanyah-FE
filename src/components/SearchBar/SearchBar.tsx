'use client'
import {useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";


export default function SearchBar() {

  // explanation: use effect triggers side effects on changes or rerenders. when u pass a second param [dependencies] it
  // uses it as the trigger for running the function in the first param.
  // in the function I set a bounce timer of 500ms.
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get('q') || '');
  useEffect(() => {
    console.log('useEffect ran')
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      setSearchValue(searchValue.trim());
      if (searchValue) {
        params.set('q', searchValue.trim());
        router.push(`search?${params.toString()}`);
      } else {
        params.delete('q');
        router.push(`?${params.toString()}`);
      }

    }, 50);

    return () => clearTimeout(timer);
  }, [searchValue]);


  // const dropdownRef = useRef(null);
  // const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);
  // useEffect(() => {
  //   function handleClickOutside(event: MouseEvent) {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setDropdownMenu(false);
  //     }
  //   }
  //
  //   if (dropdownMenu) {
  //     document.addEventListener('mousedown', handleClickOutside);
  //   }
  //
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, [dropdownMenu]);
  // const menuItems = [
  //   [
  //     {display: 'Log in', url: 'login'},
  //     {display: 'Sign up', url: 'register'},
  //     {display: 'Settings', url: 'settings'}
  //   ],
  //   [
  //     {display: 'Recents', url: 'recents'}
  //   ],
  //   [
  //     {display: 'Contact & feedback', url: 'contect-us'},
  //     {display: 'Clear data...', url: 'clear-data'}
  //   ],
  // ]

  return (
      <div className="flex items-center gap-6 p-3">
        <svg className="md:hidden" width="45" height="50" viewBox="0 0 363 399" id="logo-mobile" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path
              d="M0 267.154V131.714C0.000987483 120.481 2.95865 109.446 8.57578 99.7176C14.1929 89.9894 22.2716 81.9111 32 76.2944L149.3 8.57437C159.029 2.9572 170.066 0 181.3 0C192.534 0 203.571 2.9572 213.3 8.57437L330.59 76.2944C340.318 81.9111 348.397 89.9894 354.014 99.7176C359.631 109.446 362.589 120.481 362.59 131.714V267.154C362.587 278.386 359.629 289.419 354.012 299.146C348.395 308.872 340.317 316.949 330.59 322.564L213.28 390.284C203.551 395.902 192.514 398.859 181.28 398.859C170.046 398.859 159.009 395.902 149.28 390.284L31.99 322.564C22.2649 316.947 14.1892 308.87 8.57394 299.144C2.95871 289.418 0.00172875 278.385 0 267.154V267.154Z"
              fill="url(#paint0_linear_1)"></path>
          <path
              d="M212.45 368.604L317.45 307.994C321.01 305.931 324.342 303.498 327.39 300.734L213.28 234.914C203.55 229.299 192.514 226.343 181.28 226.344V350.604C181.279 354.252 182.239 357.836 184.063 360.996C185.886 364.155 188.509 366.779 191.668 368.603C194.827 370.428 198.411 371.388 202.059 371.388C205.707 371.389 209.291 370.428 212.45 368.604V368.604Z"
              fill="url(#paint1_linear_1)"></path>
          <path
              d="M327.37 300.734C333.413 295.274 338.244 288.608 341.552 281.165C344.859 273.722 346.568 265.669 346.57 257.524V137.644C346.571 133.996 345.611 130.412 343.788 127.253C341.964 124.093 339.341 121.47 336.182 119.645C333.023 117.821 329.439 116.861 325.791 116.86C322.143 116.86 318.559 117.82 315.4 119.644L200.11 186.214C194.385 189.521 189.631 194.276 186.325 200.002C183.02 205.728 181.28 212.223 181.28 218.834V226.294C192.514 226.293 203.55 229.249 213.28 234.864L327.37 300.734Z"
              fill="url(#paint2_radial_1)"></path>
          <defs>
            <linearGradient id="paint0_linear_1" x1="264.38" y1="53.7644" x2="45.98" y2="436.614"
                            gradientUnits="userSpaceOnUse">
              <stop offset="0.31" stopColor="#3ADEE6"></stop>
              <stop offset="0.44" stopColor="#38D8E0"></stop>
              <stop offset="0.61" stopColor="#33C6CE"></stop>
              <stop offset="0.82" stopColor="#2BA9B0"></stop>
              <stop offset="1" stopColor="#21888F"></stop>
            </linearGradient>
            <linearGradient id="paint1_linear_1" x1="288.51" y1="362.514" x2="46.98" y2="133.834"
                            gradientUnits="userSpaceOnUse">
              <stop offset="0.15" stopColor="#9B7DD9"></stop>
              <stop offset="0.37" stopColor="#7D63B3"></stop>
              <stop offset="0.57" stopColor="#664F95"></stop>
              <stop offset="0.75" stopColor="#584283"></stop>
              <stop offset="0.88" stopColor="#533E7D"></stop>
            </linearGradient>
            <radialGradient id="paint2_radial_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(91.39 51.4944) scale(480.67)">
              <stop offset="0.35" stopColor="#FF78C9"></stop>
              <stop offset="0.42" stopColor="#FD7ECB"></stop>
              <stop offset="0.51" stopColor="#F890D1"></stop>
              <stop offset="0.62" stopColor="#EFAEDB"></stop>
              <stop offset="0.66" stopColor="#EBBCE0"></stop>
            </radialGradient>
          </defs>
        </svg>

        <div className="hidden md:flex gap-2">
          <svg className="fill-gray-500 h-6" strokeWidth="0" viewBox="0 0 512 512"
               xmlns="http://www.w3.org/2000/svg">
            <path
                d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
          </svg>
          <svg className="fill-gray-500 h-6" strokeWidth="0" viewBox="0 0 512 512"
               xmlns="http://www.w3.org/2000/svg">
            <path
                d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
          </svg>
        </div>
        <input className="border border-gray-600 rounded-xl grow p-1 text-center" type="text"
               placeholder="Search through over 70 million podcasts and episodes..." value={searchValue}
               onChange={(e) => setSearchValue(e.target.value)}/>
        <button className="hidden md:block">Log in</button>
        <button className="hidden md:block">Sign up</button>
        <div className="relative">
          <div className="p-1 hover:cursor-pointer" onClick={(e) => console.log('clicked')}>
            <svg className="fill-gray-200 h-6 cursor-pointer" strokeWidth="0" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                  d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
            </svg>
          </div>
          {/*{dropdownMenu && (*/}
          {/*    <div*/}
          {/*        className="absolute top-full left-0 w-[120px] bg-white border border-gray-200 shadow-lg rounded-md z-10">*/}
          {/*      {}*/}
          {/*      <div className="p-2 hover:bg-gray-100 cursor-pointer">Option 1</div>*/}
          {/*      <div className="p-2 hover:bg-gray-100 cursor-pointer">Option 2</div>*/}
          {/*      <div className="p-2 hover:bg-gray-100 cursor-pointer">Option 3</div>*/}
          {/*    </div>*/}
          {/*)}*/}
        </div>
      </div>
  );

}