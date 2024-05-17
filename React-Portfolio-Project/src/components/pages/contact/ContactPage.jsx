// child component showing a contact form

import KeyboardArrows from '../../features/KeyboardArrows'

export default function ContactPage({ keyClasses }) {
  const keyStyling = {
    up: keyClasses.keyActiveClass,
    down: keyClasses.keyActiveClass,
    left: keyClasses.keyInactiveClass,
    right: keyClasses.keyInactiveClass,
  }

  return (
    <div className="section h-screen">
      Contact
      <KeyboardArrows keyStyling={keyStyling} />
    </div>
  )
}
