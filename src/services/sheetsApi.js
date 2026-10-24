export async function fetchGifts() {
  const apiUrl = import.meta.env.VITE_API_URL
  if (!apiUrl) {
    throw new Error('A variável de ambiente VITE_API_URL não está configurada.')
  }

  const response = await fetch(apiUrl)
  if (!response.ok) {
    throw new Error(`Erro ao buscar presentes: ${response.statusText}`)
  }

  const data = await response.json()
  const { produtos = [], reservas = [] } = data

  // Criar um Set com os IDs das reservas para busca eficiente O(1)
  const reservedIds = new Set(reservas.map((r) => Number(r.id)))

  // Retorna os produtos no mesmo formato do hook useGifts
  return produtos.map((p) => ({
    id: Number(p.id),
    produto: p.produto,
    sessao: p.sessao,
    reservado: reservedIds.has(Number(p.id)),
  }))
}

export async function reservarGift({ id, produto, sessao, nome }) {
  const apiUrl = import.meta.env.VITE_API_URL
  if (!apiUrl) {
    throw new Error('A variável de ambiente VITE_API_URL não está configurada.')
  }

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify({
      id: Number(id),
      produto,
      sessao,
      nome,
    }),
  })

  if (!response.ok) {
    throw new Error(`Erro de rede ao enviar reserva: ${response.statusText}`)
  }

  const data = await response.json()
  return data
}
