// a generic parallelogram shape component

export default function Parallelogram({ children }) {
  return (
    <div className="parallelogram h-3/4 w-2/3 bg-gray-800 -z-10">
      {children}
    </div>
  )
}