// a horizontal row of cards displaying project information

export default function Cards({ numCards, activePage }) {

  let addFade = false;
  if (activePage === 'projects') {
    addFade = true;
  }


  const cards = Array.from({ length: numCards }, (_, index) => (
    <div
      key={index}
      className={`${addFade? 'visible animate-fade' : 'invisible'} z-1 relative -ml-8 ${index % 2 === 0 ? 'h-1/2' : 'h-3/5'} w-1/5 -skew-x-12 cursor-pointer border border-black bg-cyan-900 transition-transform duration-300 hover:-translate-x-8 hover:-translate-y-10 hover:scale-110 shadow-xl`}
    ></div>
  ));

  return (
    <section className="flex container h-screen mx-auto items-center justify-center">
      {cards}
    </section>
  );
}
