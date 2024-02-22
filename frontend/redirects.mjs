const strapiRedirects = async () => {
  const apiUrl = process.env.STRAPI_API_URL || 'http://localhost:1337/api'

  return fetch(`${apiUrl}/redirects?pagination[start]=0&pagination[limit]=-1`)
    .then((res) => res.json())
    .then((response) => {
      const redirects = response.data?.map((redirect) => ({
        source: redirect.attributes.from,
        destination: redirect.attributes.to,
        permanent: redirect.attributes.type === 'permanent',
      }))

      return redirects ?? []
    }).catch((error) => {
      console.error('Error fetching redirects:', error.message)
      return []
    })
}

export default strapiRedirects
