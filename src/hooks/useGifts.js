import { useState, useEffect, useCallback } from 'react'
import { fetchGifts, reservarGift } from '../services/sheetsApi'

export function useGifts() {
  const [gifts, setGifts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [reservaError, setReservaError] = useState(null)

  // Função para buscar e atualizar os presentes
  const loadGifts = useCallback(async (silent = false) => {
    if (!silent) setLoading(true)
    setError(null)
    try {
      const data = await fetchGifts()
      setGifts(data)
    } catch (err) {
      setError(err.message || 'Erro ao carregar presentes.')
    } finally {
      if (!silent) setLoading(false)
    }
  }, [])

  // Carrega os presentes no carregamento inicial
  useEffect(() => {
    loadGifts()
  }, [loadGifts])

  // Função assíncrona para reservar um presente
  const reservarProduto = async (id, nome) => {
    setReservaError(null)
    const gift = gifts.find((g) => g.id === id)
    if (!gift) {
      const msg = 'Produto não encontrado.'
      setReservaError(msg)
      return { sucesso: false, erro: msg }
    }

    try {
      const result = await reservarGift({
        id: gift.id,
        produto: gift.produto,
        sessao: gift.sessao,
        nome,
      })

      if (result.sucesso) {
        // Só atualiza o estado local para reservado se vier sucesso da API
        setGifts((prevGifts) =>
          prevGifts.map((g) =>
            g.id === id ? { ...g, reservado: true } : g
          )
        )
        return { sucesso: true }
      } else {
        const errorMsg = result.erro || 'Este presente já foi escolhido por outro convidado.'
        setReservaError(errorMsg)
        // Recarrega a lista silenciosamente para não fechar o modal
        await loadGifts(true)
        return { sucesso: false, erro: errorMsg }
      }
    } catch (err) {
      const errorMsg = err.message || 'Falha na conexão com o servidor. Tente novamente.'
      setReservaError(errorMsg)
      // Recarrega a lista silenciosamente para não fechar o modal
      await loadGifts(true)
      return { sucesso: false, erro: errorMsg }
    }
  }

  const isEmpty = gifts.length === 0 && !loading

  return {
    gifts,
    loading,
    isEmpty,
    error,
    reservaError,
    setReservaError,
    reservarProduto,
    reloadGifts: loadGifts,
  }
}
