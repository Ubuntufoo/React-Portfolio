// a slanted edge shape component facing left

export default function SlantedEdgeLS({ children, classNames, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`slanted-edge-ls ${classNames}`}>
      {children}
    </div>
  )
}