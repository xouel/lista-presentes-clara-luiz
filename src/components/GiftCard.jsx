import React from 'react'

function GiftCard({ product, onSelect }) {
  if (!product) return null

  const { id, produto, reservado } = product

  return (
    <div
      onClick={() => !reservado && onSelect && onSelect(id)}
      className={`bg-white border rounded-2xl p-6 flex flex-col items-center justify-between text-center min-h-[160px] transition-all duration-300 ${
        reservado
          ? 'border-cream-dark/50 opacity-55 grayscale-[60%] cursor-not-allowed shadow-none'
          : 'border-cream-dark/80 shadow-sm hover:shadow-md hover:border-brown-light/40 hover:-translate-y-0.5 cursor-pointer group'
      }`}
    >
      {/* Decorative Icon */}
      <span
        className={`text-xs select-none mb-3 transition-colors duration-300 ${
          reservado
            ? 'text-ink/20'
            : 'text-brown-light/40 group-hover:text-brown-light/75'
        }`}
      >
        ✦
      </span>

      {/* Product Name */}
      <h3 className="font-serif text-ink text-lg md:text-xl font-medium tracking-wide flex-grow flex items-center justify-center px-2">
        {produto}
      </h3>

      {/* Action Button */}
      <div className="mt-4 w-full">
        {reservado ? (
          <span className="inline-block w-full py-2 px-4 rounded-xl bg-cream-dark/30 border border-cream-dark/20 text-ink/40 font-serif text-xs md:text-sm font-semibold tracking-wider uppercase select-none">
            Reservado
          </span>
        ) : (
          <span className="inline-block w-full py-2 px-4 rounded-xl bg-cream border border-brown-light/20 text-brown font-serif text-xs md:text-sm font-medium tracking-wider uppercase select-none transition-colors duration-300 group-hover:bg-brown group-hover:text-cream group-hover:border-brown">
            Reservar
          </span>
        )}
      </div>
    </div>
  )
}

export default GiftCard
