import React from 'react'

function EmptyState() {
  return (
    <div className="max-w-md mx-auto my-16 px-6 py-12 bg-white/50 border border-cream-dark/60 rounded-2xl text-center shadow-sm animate-fadeIn">
      {/* Decorative Diamond */}
      <span className="text-brown-light/45 text-lg select-none mb-3 inline-block">✦</span>
      
      {/* Empty State Title */}
      <h3 className="font-serif text-brown text-lg tracking-widest uppercase mb-2 font-medium">
        Lista de Presentes
      </h3>
      
      {/* Empty State Message */}
      <p className="font-serif text-ink/75 text-sm md:text-base italic leading-relaxed">
        Nenhum presente disponível no momento.
      </p>
    </div>
  )
}

export default EmptyState
