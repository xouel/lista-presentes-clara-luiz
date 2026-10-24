import React from 'react'

function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center animate-fadeIn">
      {/* Custom CSS/Tailwind Spinner */}
      <div className="w-10 h-10 border-4 border-brown-light/20 border-t-brown rounded-full animate-spin mb-4"></div>
      
      {/* Loading message */}
      <p className="font-serif text-ink/70 text-base italic tracking-wide">
        Carregando presentes...
      </p>
    </div>
  )
}

export default LoadingState
