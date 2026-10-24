import React from 'react'

function Header() {
  return (
    <header className="bg-cream py-12 px-6 md:py-16 md:px-12 text-center border-b border-cream-dark shadow-sm">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        {/* Wedding Couple Name */}
        <h1 className="font-script text-brown text-6xl md:text-8xl tracking-wide select-none my-2 transition-all duration-300">
          Clara & Luiz
        </h1>

        {/* Elegant Divider with a Diamond symbol */}
        <div className="relative w-full max-w-xs flex items-center justify-center my-6">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-brown-light/35"></div>
          </div>
          <div className="relative bg-cream px-3 text-brown-light text-sm">
            <span>✦</span>
          </div>
        </div>

        {/* Subtitle and Description */}
        <h2 className="font-serif text-ink text-2xl md:text-3xl tracking-widest uppercase mb-3 font-medium">
          Lista de Presentes
        </h2>
        <p className="font-serif text-ink/80 text-sm md:text-base italic max-w-md leading-relaxed">
          Escolha um presente com carinho para celebrar conosco
        </p>
      </div>
    </header>
  )
}

export default Header
