const initstates = {
  problems: [],
  selectProblem: {},
  selectResult: 0,
  attributeStyle: {
    width: 'default',
    height: 'default',
    color: 'default'
  },
};

const problemSolutionsReducer = (state = initstates, action) => {
  switch (action.type) {
    case 'setProblem':
      return {
        ...state,
        problems: action.payload,
        loading: false
      }

    case 'addProblem':
      const newProblems = state.problems.map(problem => problem)
      newProblems.push(action.payload)
      return {
        ...state,
        problems: newProblems,
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

    case 'addAttributeStyle':
      let data = {}
      if (state.attributeStyle['width'] === action.payload.attr) {
        data['width'] = 'default'
      }
      else {
        data['width'] = state.attributeStyle['width']
      }
      if (state.attributeStyle['height'] === action.payload.attr) {
        data['height'] = 'default'
      }
      else {
        data['height'] = state.attributeStyle['height']
      }
      if (state.attributeStyle['color'] === action.payload.attr) {
        data['color'] = 'default'
      }
      else {
        data['color'] = state.attributeStyle['color']
      }
      if (action.payload.style !== 'default') {
        data[action.payload.style] = action.payload.attr
      }
      return {
        ...state,
        attributeStyle: data, 
        loading: false,
      }

    case 'resetAttrStyle':
      return {
        ...state,
        attributeStyle: {
          width: 'default',
          height: 'default',
          color: 'default'
        },
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
