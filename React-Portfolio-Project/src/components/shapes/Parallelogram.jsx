// a generic parallelogram shape component



export default function Parallelogram({ children, parallelogramClasses}) {
  return (
    <div className={`${parallelogramClasses} parallelogram`}>
      {children}
    </div>
  )
}
