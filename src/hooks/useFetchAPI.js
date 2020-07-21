import { useState, useEffect } from 'react';
import fetchData from "../utils/fetchData"

const useFetchAPI = (API_URL, type) => {

  const [state, setState] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    switch (type) {
      case "API":
        fetchAPI();
        break;
      case "CHARACTER":
        fetchCharacter();
        break;
      case "EPISODE":

        break;
      case "LOCATION":

        break;

      default:
          console.log("Type must be passed as argument to useFetchAPI");
        break;
    }
    // console.log("fetching");
    // console.log("URL: ", API_URL);
  }, [API_URL])

  async function fetchAPI(url = API_URL) {
    setLoading(true)
    const data = await fetchData(url)
    setState({
      ...state,
      ...data,
      results: [
        ...state.results || "",
        ...data.results
      ]
    })
    setLoading(false)
  }

  async function fetchCharacter(url = API_URL) {
    setLoading(true)
    const data = await fetchData(url)
    setState({ ...data })
    setLoading(false)
  }

  const handleFetchButton = () => {
    const nextUrl = state.info.next
    fetchAPI(nextUrl)
  }

  return { state, loading, handleFetchButton }

}


export default useFetchAPI
