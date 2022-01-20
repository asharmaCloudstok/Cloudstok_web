import React, { useState } from "react";
import { Link } from "gatsby";
import { Transition } from "@headlessui/react";
import { FaChevronUp } from 'react-icons/fa';


function Nav({location}) {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState('home');
    
    return (
        <div>
            <nav className="bg-white-800 shadow-lg">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-7">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex-shrink-0">
                            <img
                                className="h-16 w-24"
                                src="https://cloudstok.com/img/white-logo.png"
                                alt="Workflow"
                            />
                        </div>
                        <div className="hidden md:block">
                            <div className="flex items-center space-x-4">
                                <Link
                                    to='/'
                                    activeClassName="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                                    className={"hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-medium px-3 py-2 rounded-md text-sm"}
                                >
                                    Home
                                </Link>

                                <Link
                                    to="/workinprogress"
                                    activeClassName="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                                    className="hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-medium px-3 py-2 rounded-md text-sm"
                                >
                                    Who we are
                                </Link>

                                <Link
                                    to='/services'
                                    partiallyActive={true}
                                    activeClassName=" bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                                    className={"hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-medium px-3 py-2 rounded-md text-sm flex"}                                >
                                    Services
                                    <FaChevronUp className="ml-1 mt-0.5" />
                                </Link>

                            
                                <Link
                                    to="/workinprogress"
                                    activeClassName="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                                    className="hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-medium px-3 py-2 rounded-md text-sm"
                                >
                                    Blogs and Case studies
                                </Link>


                                <Link
                                    to="/workinprogress"
                                    activeClassName="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                                    className="hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-medium px-3 py-2 rounded-md text-sm"
                                >
                                    Career
                                </Link>
                                <Link
                                    to='/contact'
                                    activeClassName="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                                    className={"hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-medium px-3 py-2 rounded-md text-sm"}
                                >
                                    Contact Us

                                </Link>
                            </div>
                        </div>
                        <div className="mr-2 flex md:hidden z-20">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white inline-flex items-center justify-center p-2 rounded-md text-white-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-200 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden absolute shadow rounded bg-white w-full z-20" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link
                                    to='/'
                                    activeClassName="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                                    className="hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-medium  block px-3 py-2 rounded-md text-base"
                                >
                                    Dashboard
                                </Link>

                                <Link
                                    to='/workinprogress'
                                    activeClassName="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                                    className="hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-medium  block px-3 py-2 rounded-md text-base"
                                >
                                    Who we are
                                </Link>

                                <Link
                                    to='/services'
                                    partiallyActive={true}
                                    activeClassName="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                                    className="hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-medium  block px-3 py-2 rounded-md text-base"
                                >
                                    Services
                                </Link>

                                <Link
                                    to='/workinprogress'
                                    activeClassName="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                                    className="hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-medium  block px-3 py-2 rounded-md text-base"
                                >
                                    Blogs and Case Studies
                                </Link>
                                <Link
                                    to='/workinpgrogress'
                                    activeClassName="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                                    className="hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-medium  block px-3 py-2 rounded-md text-base"
                                >
                                    Career
                                </Link>
                                <Link
                                    to='/contact'
                                    activeClassName="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                                    className="hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-medium  block px-3 py-2 rounded-md text-base"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    );
}

export default Nav;
