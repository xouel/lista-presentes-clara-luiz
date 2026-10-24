import { useState } from 'react'
import Header from './components/Header'
import GiftSection from './components/GiftSection'
import ReservationModal from './components/ReservationModal'
import LoadingState from './components/LoadingState'
import EmptyState from './components/EmptyState'
import { useGifts } from './hooks/useGifts'

function App() {
  const {
    gifts,
    loading,
    isEmpty,
    error,
    reservaError,
    setReservaError,
    reservarProduto
  } = useGifts()
  const [produtoSelecionado, setProdutoSelecionado] = useState(null)

  // Find the selected product and open the reservation modal
  const handleSelectProduct = (id) => {
    const product = gifts.find((g) => g.id === id)
    if (product && !product.reservado) {
      setProdutoSelecionado(product)
    }
  }

  // Handle reservation confirmation asynchronously
  const handleConfirmReservation = async (guestName) => {
    if (produtoSelecionado) {
      const result = await reservarProduto(produtoSelecionado.id, guestName)
      if (result.sucesso) {
        setProdutoSelecionado(null)
      }
      return result
    }
    return { sucesso: false, erro: 'Nenhum produto selecionado.' }
  }

  // Group products by session (preserving order of insertion)
  const groupedProducts = gifts.reduce((acc, product) => {
    if (!acc[product.sessao]) {
      acc[product.sessao] = []
    }
    acc[product.sessao].push(product)
    return acc
  }, {})

  return (
    <div className="min-h-screen bg-cream/35 text-ink pb-16">
      <Header />
      
      {loading ? (
        <LoadingState />
      ) : error ? (
        <div className="max-w-md mx-auto my-16 px-6 py-12 bg-white/50 border border-cream-dark/60 rounded-2xl text-center shadow-sm animate-fadeIn">
          <span className="text-red-700 text-lg select-none mb-3 inline-block">✦</span>
          <h3 className="font-serif text-brown text-lg tracking-widest uppercase mb-2 font-medium">
            Erro ao Carregar Presentes
          </h3>
          <p className="font-serif text-ink/75 text-sm md:text-base italic leading-relaxed">
            {error}
          </p>
        </div>
      ) : isEmpty ? (
        <EmptyState />
      ) : (
        <>
          {/* Main Container */}
          <main className="max-w-5xl mx-auto px-6 mt-12">
            {Object.entries(groupedProducts).map(([sessao, products]) => (
              <GiftSection 
                key={sessao} 
                sessao={sessao} 
                products={products} 
                onSelectProduct={handleSelectProduct}
              />
            ))}
          </main>

          {/* Reservation Modal */}
          <ReservationModal
            product={produtoSelecionado}
            onConfirm={handleConfirmReservation}
            onClose={() => {
              setProdutoSelecionado(null)
              setReservaError(null)
            }}
            reservaError={reservaError}
            clearReservaError={() => setReservaError(null)}
          />
        </>
      )}
    </div>
  )
}

export default App
