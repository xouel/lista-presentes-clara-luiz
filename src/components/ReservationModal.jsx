import React, { useState, useEffect } from 'react'

function ReservationModal({ product, onConfirm, onClose, reservaError, clearReservaError }) {
  if (!product) return null

  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Reset input when product changes
  useEffect(() => {
    setName('')
    setError('')
    if (clearReservaError) {
      clearReservaError()
    }
  }, [product])

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const trimmedName = name.trim()
    if (!trimmedName) {
      setError('Por favor, informe seu nome para confirmar o presente.')
      return
    }

    setError('')
    setIsSubmitting(true)
    try {
      await onConfirm(trimmedName)
    } catch (err) {
      setError('Erro de conexão com o servidor. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle click on backdrop overlay
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget && !isSubmitting) {
      onClose()
    }
  }

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div className="bg-cream border border-cream-dark p-8 rounded-2xl shadow-2xl w-full max-w-md text-center flex flex-col items-center animate-scaleIn">
        {/* Decorative Diamond */}
        <span className="text-brown-light/60 text-sm select-none mb-2">✦</span>

        {/* Modal Title */}
        <h3 className="font-serif text-brown text-lg tracking-widest uppercase mb-1 font-medium">
          Reservar Presente
        </h3>
        
        {/* Product Name */}
        <h4 className="font-serif text-ink text-xl md:text-2xl font-semibold mb-6 italic">
          "{product.produto}"
        </h4>

        {/* Reservation Form */}
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-6">
            <label
              htmlFor="guest-name"
              className="block font-serif text-ink text-sm font-medium mb-2 text-left"
            >
              Seu nome completo:
            </label>
            <input
              id="guest-name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                if (e.target.value.trim()) setError('')
                if (clearReservaError) clearReservaError()
              }}
              placeholder="Digite seu nome..."
              className="w-full px-4 py-3 rounded-xl border border-brown-light/25 bg-white text-ink font-serif text-sm focus:outline-none focus:border-brown focus:ring-1 focus:ring-brown transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              autoFocus
              disabled={isSubmitting}
            />
            {error && (
              <p className="text-red-700 font-serif text-xs mt-2 text-left leading-relaxed">
                {error}
              </p>
            )}
            {reservaError && !error && (
              <p className="text-red-700 font-serif text-xs mt-2 text-left leading-relaxed">
                {reservaError}
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="w-full flex flex-col gap-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 rounded-xl bg-brown hover:bg-brown-light text-cream font-serif text-sm font-semibold tracking-wider uppercase select-none transition-colors duration-300 cursor-pointer shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Confirmando...' : 'Confirmar Presente'}
            </button>
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="w-full py-3 px-6 rounded-xl border border-brown-light/20 text-brown font-serif text-sm font-medium tracking-wider uppercase select-none hover:bg-cream-dark/35 transition-colors duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ReservationModal
