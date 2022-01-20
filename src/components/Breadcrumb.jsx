import { Link } from "gatsby"
import React from "react"

const Breadcrumb = ({route1, route2}) => {
  return (
    <nav class="flex py-6 " aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 flex-wrap">
        <li class="inline-flex items-center">
            <Link to='/'
            class="text-lg text-gray-900 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            Home
          </Link>
        </li>
        <li>
          <div class="flex items-center">
            <svg
              class="w-6 h-6 text-gray-700"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <Link
             to="/contact"
              class="ml-1 text-lg text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              {route1 || 'contact'}
            </Link>
          </div>
        </li>
      {route2 && <li>
          <div class="flex items-center">
            <svg
              class="w-6 h-6 text-gray-700 hidden md:block"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <Link
             to={'/service-details'}
              class="md:ml-1 text-lg text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              {route2}
            </Link>
          </div>
        </li>}
        {/* <li aria-current="page">
          <div class="flex items-center">
            <svg
              class="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">
              FlowBite
            </span>
          </div>
        </li> */}
      </ol>
    </nav>
  )
}

export default Breadcrumb
