// a slanted edge shape component facing left

export default function SlantedEdgeLS({ children, classNames }) {
  return (
    <div className={`slanted-edge-ls ${classNames}`}>
      {children}
    </div>
  )
}