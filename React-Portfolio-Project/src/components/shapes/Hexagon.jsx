// a hexagon shaped component

export default function Hexagon({ children, classNames }) {
  return (
    <div className={`hexagon ${classNames}`}>
      {children}
    </div>
  )
}