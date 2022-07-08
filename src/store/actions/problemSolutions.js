
export const getProblems = () => dispatch => {
  dispatch(setProblemLoading())
  // ADD: Get all problem with solutions 
  const problem1 = {
    "state": "resolved",
    "solution": {
      "results": [
        {
          "isFeasible": true,
          "goalValues": [
            {
              "expression": "sum x[i]*item[i].value over i=(1:N)",
              "sense": "maximize",
              "value": 130,
              "name": "Maximize the value of the items",
              "weight": 1
            },
            {
              "expression": "sum x[i]*item[i].value over i=(1:N)",
              "sense": "maximize",
              "value": 130,
              "name": "Maximize the value of the items",
              "weight": 1
            }
          ],
          "variableValues": [
            {
              "symbol": "x",
              "value": [
                1,
                1,
                1,
                1,
                0
              ],
              "within": "integers",
              "name": "Items in the knapsack",
              "range": {
                "lowerBound": 0,
                "upperBound": 1
              },
              "shape": {
                "type": "vector",
                "isPermutation": false,
                "size": {
                  "fixed": false,
                  "value": "N"
                }
              }
            },
            {
              "symbol": "y",
              "value": [
                1,
                1,
                1,
                1,
                0
              ],
              "within": "integers",
              "name": "Items in the knapsack",
              "range": {
                "lowerBound": 0,
                "upperBound": 1
              },
              "shape": {
                "type": "vector",
                "isPermutation": false,
                "size": {
                  "fixed": false,
                  "value": "N"
                }
              }
            }
          ]
        },
        {
          "isFeasible": false,
          "goalValues": [
            {
              "expression": "sum x[i]*item[i].value over i=(1:N)",
              "sense": "maximize",
              "value": 130,
              "name": "Maximize the value of the items",
              "weight": 1
            }
          ],
          "variableValues": [
            {
              "symbol": "x",
              "value": [
                1,
                1,
                1,
                1,
                0
              ],
              "within": "integers",
              "name": "Items in the knapsack",
              "range": {
                "lowerBound": 0,
                "upperBound": 1
              },
              "shape": {
                "type": "vector",
                "isPermutation": false,
                "size": {
                  "fixed": false,
                  "value": "N"
                }
              }
            }
          ]
        },
      ],
      "computingTime": 5015
    },
    "stateMessage": "The problem was successfully solved",
    "problem": {
      "name": "Basic binary knapsack problem",
      "description": "Optional description (optimal: 130)",
      "parameters": [
        {
          "symbol": "N",
          "value": 5,
          "name": "Number of items"
        },
        {
          "symbol": "MaxWeight",
          "value": 80,
          "name": "Maximum weight"
        }
      ],
      "variables": [
        {
          "name": "Items in the knapsack",
          "shape": {
            "type": "vector",
            "isPermutation": false,
            "size": {
              "fixed": false,
              "value": "N"
            }
          },
          "symbol": "x",
          "within": "integers",
          "range": {
            "lowerBound": 0,
            "upperBound": 1
          }
        }
      ],
      "goals": [
        {
          "name": "Maximize the value of the items",
          "expression": "sum x[i]*item[i].value over i=(1:N)",
          "sense": "maximize",
          "weight": 1
        }
      ],
      "constraints": [
        {
          "expression": "sum x[i]*item[i].weight over i=(1:N) <= MaxWeight",
          "name": "Limit the total weight of the items in the knapsack"
        }
      ],
      "classes": [
        {
          "attributes": [
            {
              "name": "Name",
              "symbol": "name"
            },
            {
              "name": "Value",
              "symbol": "value"
            },
            {
              "name": "Weight",
              "symbol": "weight"
            }
          ],
          "name": "Item",
          "symbol": "item"
        }
      ],
      "objects": [
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Item 1"
            },
            {
              "attribute": "value",
              "value": 33
            },
            {
              "attribute": "weight",
              "value": 15
            }
          ],
          "class": "item"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Item 2"
            },
            {
              "attribute": "value",
              "value": 24
            },
            {
              "attribute": "weight",
              "value": 20
            }
          ],
          "class": "item"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Item 3"
            },
            {
              "attribute": "value",
              "value": 36
            },
            {
              "attribute": "weight",
              "value": 17
            }
          ],
          "class": "item"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Item 4"
            },
            {
              "attribute": "value",
              "value": 37
            },
            {
              "attribute": "weight",
              "value": 8
            }
          ],
          "class": "item"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Item 5"
            },
            {
              "attribute": "value",
              "value": 12
            },
            {
              "attribute": "weight",
              "value": 31
            }
          ],
          "class": "item"
        }
      ]
    },
    "lastUpdate": 1605879754703
  }
  const problem2 = {
    problem: {
      name: "Test2",
    },
    result: 2,
  }
  const problem3 = {
    problem: {
      name: "Test3",
    },
    result: 3,
  }
  const problem4 = {
    problem: {
      name: "Test4",
    },
    result: 4,
  }

  let data = [problem1, problem2, problem3, problem4]

  dispatch({
    type: "setProblem",
    payload: data,
  })
}

export const selectProblem = (problem) => dispatch => {
  dispatch(setProblemLoading())
  dispatch({
    type: "selectProblem",
    payload: problem,
  })
}

export const updateAttributeStyle = (attr, style) => dispatch => {
  dispatch({
    type: 'addAttributeStyle',
    payload: {
      attr: attr,
      style: style
    }
  })
}

const setProblemLoading = () => {
  return {
    type: 'loading'
  }
}
