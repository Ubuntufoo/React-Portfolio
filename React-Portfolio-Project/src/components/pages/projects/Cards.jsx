// a horizontal row of cards displaying project information

export default function Cards({ numCards }) {
  const cards = Array.from({ length: numCards }, (_, index) => (
    <div
      key={index}
      className={`z-1 relative -ml-8 ${index % 2 === 0 ? 'h-1/2' : 'h-3/5'} w-1/5 -skew-x-12 cursor-pointer border border-black bg-green-200 transition-transform duration-300 hover:-translate-x-8 hover:scale-125`}
    ></div>
  ));

  return (
    <section className="flex container h-screen mx-auto items-center justify-center">
      {cards}
    </section>
  );
}
