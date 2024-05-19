// a generic parallelogram shape component

export default function Parallelogram({ children }) {
  return (
    <div className="parallelogram h-full lg:h-5/6 md:h-3/4 w-full md:w-3/4 bg-cyan-900">
      {children}
    </div>
  )
}