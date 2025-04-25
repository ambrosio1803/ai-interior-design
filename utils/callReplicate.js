export default async function callReplicate(base64Image, style) {
  const response = await fetch('https://api.replicate.com/v1/predictions', {
    method: 'POST',
    headers: {
      'Authorization': 'Token r8_3UFLSBnl9IduabDM15blN1nBXFG1tmB08vp1R',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      version: 'c23c8b79c98a55f5f2cb99f03edc26f3c83df84450f587aad4c282cc974b287e',
      input: {
        image: base64Image,
        prompt: `interior design in ${style} style`,
      },
    }),
  })

  const json = await response.json()
  const predictionUrl = json.urls.get

  let result
  while (!result) {
    const res = await fetch(predictionUrl, {
      headers: { 'Authorization': 'Token r8_3UFLSBnl9IduabDM15blN1nBXFG1tmB08vp1R' },
    })
    const data = await res.json()
    if (data.status === 'succeeded') {
      result = data.output[0]
    } else if (data.status === 'failed') {
      throw new Error('La generación falló')
    }
    await new Promise((r) => setTimeout(r, 2000))
  }

  return result
}
