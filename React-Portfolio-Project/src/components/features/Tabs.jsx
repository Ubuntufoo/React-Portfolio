//

export default function Tabs() {
  return (
    <div className="border-b border-gray-200 text-center text-sm font-medium text-gray-500 ">
      <ul className="-mb-px flex flex-wrap">
        <li className="mr-2">
          <a
            href="#"
            className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 "
          >
            Home
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="active inline-block rounded-t-lg border-b-2 border-purple-600 p-4 text-purple-600 "
            aria-current="page"
          >
            Calendar
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 "
          >
            Results
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 "
          >
            Live
          </a>
        </li>
      </ul>
    </div>
  )
}
