const initstates = {
  problems: [],
  selectProblem: {},
  selectResult: 0,
};

const problemSolutionsReducer = (state = initstates, action) => {
  switch (action.type) {
    case 'setProblem':
      return {
        ...state,
        problems: action.payload,
        loading: false
      }

    case 'selectProblem':
      return {
        ...state,
        selectProblem: action.payload,
        loading: false
      }

    case 'selectResult':
      return {
        ...state,
        selectResult: action.payload,
        loading: false
      }

    case 'loading':
      return {
        ...state,
        loading: true
      }

    default:
      return state
  }
}

export default problemSolutionsReducer
