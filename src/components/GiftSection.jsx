import React from 'react'
import GiftCard from './GiftCard'

function GiftSection({ sessao, products, onSelectProduct }) {
  if (!products || products.length === 0) return null

  return (
    <section className="mb-12 animate-fadeIn">
      {/* Section Title with elegant right-aligned line divider */}
      <div className="flex items-center gap-4 mb-8">
        <h2 className="font-serif text-brown text-xl md:text-2xl font-semibold tracking-widest uppercase">
          {sessao}
        </h2>
        <div className="flex-grow border-t border-brown-light/25"></div>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <GiftCard 
            key={product.id} 
            product={product} 
            onSelect={onSelectProduct}
          />
        ))}
      </div>
    </section>
  )
}

export default GiftSection
