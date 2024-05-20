// a custom shape component

export default function CombinedSlantedEdge({ children, classNames }) {

  return (
    <div className={`combined-slanted-edge ${classNames}`}>
    {children}
    </div>
  )
}