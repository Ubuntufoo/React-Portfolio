// a generic parallelogram shape component

export default function Parallelogram({ children }) {
  return (
    <div className="parallelogram h-3/4 w-2/3 bg-cyan-900 -z-10">
      {children}
    </div>
  )
}