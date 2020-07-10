const fetchData = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(result => {
        return resolve(result)
      })
      .catch(err => reject(err))
  })
}


export default fetchData