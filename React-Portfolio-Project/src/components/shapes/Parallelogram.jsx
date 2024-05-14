// a generic parallelogram shape component

export default function Parallelogram({ children }) {
  return (
    <div className="parallelogram absolute h-3/4 w-2/3 bg-white -z-10">
      {children}
    </div>
  )
}