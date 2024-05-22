// a slanted edge shape component

export default function SlantedEdgeRS({ children, classNames, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`slanted-edge-rs ${classNames}`}>
      {children}
    </div>
  )
}