// a slanted edge shape component facing left

export default function SlantedEdgeLeft({ children, classNames }) {
  return (
    <div className={`slanted-edge-left ${classNames}`}>
      {children}
    </div>
  )
}