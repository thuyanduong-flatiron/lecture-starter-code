const URL = 'http://localhost:3000'

const fetchingHogs = () => {
  return (dispatch) => {
    fetch(`${URL}/hogs`)
    .then(res => res.json())
    .then(hogs => {
      dispatch(fetchedHogs(hogs))
    })
  }
}
const fetchedHogs = (hogs) => ({type:"FETCHED_HOGS", hogs})

const addingHog = (name) => {
  return (dispatch) => {
    fetch(`${URL}/hogs`, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        name: name
      })
    }).then(res => res.json())
    .then(hog => {
      dispatch(addHog(hog))
    })
  }
}
const addHog = (hog) => ({type: "ADD_HOG", hog})

export {fetchingHogs, addingHog}
