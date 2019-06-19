const reducer = (oldState = {hogs:[]}, action) => {
  switch (action.type) {
    case "FETCHED_HOGS":
      return {hogs: action.hogs}
    case "ADD_HOG":
      return {hogs: [action.hog, ...oldState.hogs]}
    default:
      return oldState
  }
  return oldState
}

export default reducer
