import React, { Fragment, useState } from "react"
import { Link } from "gatsby"
import { Transition, Menu } from "@headlessui/react"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

function Nav({ location }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isUp, setIsUp] = useState(true)

  return (
    <div>
      <nav className="bg-white-800 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-7">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <Link className="cursor-pointer" to='/'>
                <img
                  className="h-16 w-24"
                  src="https://cloudstok.com/img/white-logo.png"
                  alt="Workflow"
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <Link
                  to="/"
                  activeClassName="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                  className={
                    "hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-medium px-3 py-2 rounded-md text-sm"
                  }
                >
                  Home
                </Link>

                <Link
                  to="/whoweare"
                  activeClassName="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                  className="hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-medium px-3 py-2 rounded-md text-sm"
                >
                  Who we are
                </Link>
                {/* 
                <Link
                  to="/services"
                  partiallyActive={true}
                  activeClassName=" bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                  className={

                  }
                >
                  Services
                  <FaChevronUp className="ml-1 mt-0.5" /> */}
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button>
                      <Link
                        to="/services"
                        partiallyActive={true}
                        activeClassName="flex bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                        className={
                          "flex hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-medium px-3 py-2 rounded-md text-sm"
                        }
                      >
                        Services
                        <ChevronDownIcon
                          className="-mr-1 ml-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      </Link>
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg z-20 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div>
                        <Menu.Item>
                          <Link
                            to="/services/applications"
                            activeClassName="flex bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                            className={
                              "flex hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-medium px-3 py-2 rounded-md text-sm"
                            }
                          >
                            Application Development and Modernization
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            to="/services/devops"
                            activeClassName="flex bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                            className={
                              "flex hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-medium px-3 py-2 rounded-md text-sm"
                            }
                          >
                            DevOps as a Service
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            to="/services/cloud"
                            activeClassName="flex bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                            className={
                              "flex hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-medium px-3 py-2 rounded-md text-sm"
                            }
                          >
                            Cloud Manage Service
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            to="/services/apptesting"
                            activeClassName="flex bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                            className={
                              "flex hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-medium px-3 py-2 rounded-md text-sm"
                            }
                          >
                            Application Consulting and Testing
                          </Link>
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
                {/* </Link> */}

                <Link
                  to="/blogs"
                  activeClassName="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                  className="hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-medium px-3 py-2 rounded-md text-sm"
                >
                  Blogs and Case studies
                </Link>

                <Link
                  to="/career"
                  activeClassName="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                  className="hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-medium px-3 py-2 rounded-md text-sm"
                >
                  Career
                </Link>
                <Link
                  to="/contact"
                  activeClassName="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                  className={
                    "hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-medium px-3 py-2 rounded-md text-sm"
                  }
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
          {ref => (
            <div
              className="md:hidden absolute shadow rounded bg-white w-full z-20"
              id="mobile-menu"
            >
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/"
                  activeClassName="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                  className="hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-medium  block px-3 py-2 rounded-md text-base"
                >
                  Dashboard
                </Link>

                <Link
                  to="/whoweare"
                  activeClassName="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                  className="hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-medium  block px-3 py-2 rounded-md text-base"
                >
                  Who we are
                </Link>

                {/* <Link
                  to="/services"
                  partiallyActive={true}
                  activeClassName="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                  className="hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-medium  block px-3 py-2 rounded-md text-base"
                >
                  Services
                </Link> */}

                <Menu
                  as="div"
                  className="relative inline-block text-left w-full"
                  onClick={() => {
                    isUp === true ? setIsUp(!isUp) : setIsUp(false)
                  }}
                >
                  <div>
                    <Menu.Button className={"w-full"}>
                      <Link
                        to="/services"
                        partiallyActive={true}
                        activeClassName="flex bg-gradient-to-r flex justify-between w-full from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                        className={
                          "flex justify-between w-full hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-medium px-3 py-2 rounded-md text-sm"
                        }
                      >
                        Services
                        <ChevronDownIcon
                          className="-mr-1 h-5 w-5"
                          aria-hidden="true"
                        />
                      </Link>
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-78 rounded-md shadow-lg z-20 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div>
                        <Menu.Item>
                          <Link
                            to="/services/applications"
                            activeClassName="flex bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-3 rounded-md text-sm"
                            className={
                              "flex hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-medium px-3 py-3 rounded-md text-sm"
                            }
                          >
                            Application Development and Modernization
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            to="/services/devops"
                            activeClassName="flex bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                            className={
                              "flex hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-medium px-3 py-2 rounded-md text-sm"
                            }
                          >
                            DevOps as a Service
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            to="/services/cloud"
                            activeClassName="flex bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                            className={
                              "flex hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-medium px-3 py-2 rounded-md text-sm"
                            }
                          >
                            Cloud Manage Service
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            to="/services/apptesting"
                            activeClassName="flex bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                            className={
                              "flex hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-medium px-3 py-2 rounded-md text-sm"
                            }
                          >
                            Application Consulting and Testing
                          </Link>
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <Link
                  to="/blogs"
                  activeClassName="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                  className="hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-medium  block px-3 py-2 rounded-md text-base"
                >
                  Blogs and Case Studies
                </Link>
                <Link
                  to="/career"
                  activeClassName="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                  className="hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-medium  block px-3 py-2 rounded-md text-base"
                >
                  Career
                </Link>
                <Link
                  to="/contact"
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
  )
}

export default Nav
