// a slanted edge shape component

export default function SlantedEdgeRight({ children, classNames }) {
  return (
    <div className={`slanted-edge-right ${classNames}`}>
      {children}
    </div>
  )
}