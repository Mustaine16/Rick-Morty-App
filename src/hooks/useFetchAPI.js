import { useState, useEffect } from 'react';
import fetchData from "../utils/fetchData"

const useFetchAPI = (API_URL) => {

  const [state, setState] = useState({})

  useEffect(() => {
    fetchAPI();
  }, [])

  async function fetchAPI(url = API_URL) {
    const data = await fetchData(url)
    setState({
      ...state,
      ...data,
      results: [
        ...state.results || "",
        ...data.results
      ]
    })
  }

  const handleFetchButton = () => {
    const nextUrl = state.info.next
    fetchAPI(nextUrl)
  }

  return { state, handleFetchButton }

}


export default useFetchAPI
