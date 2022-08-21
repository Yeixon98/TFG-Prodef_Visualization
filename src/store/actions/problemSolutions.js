
export const getProblems = () => dispatch => {
  dispatch(setProblemLoading())
  // ADD: Get all problem with solutions 
  const backpackSimple = {
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
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
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
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
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
          "value": 21,
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

  const backpackComplex = {
    "state": "resolved",
    "solution": {
      "results": [
        {
          "isFeasible": true,
          "goalValues": [
            {
              "expression": "***",
              "sense": "minimize",
              "value": 84,
              "name": "Minimizes the cost of assigning a teacher to a subject",
              "weight": 1
            }
          ],
          "variableValues": [
            {
              "symbol": "x",
              "value": [
                [1,1,1,1,1,1],
                [0,1,0,0,1,0],
                [0,0,1,0,0,1]
              ],
              "within": "integers",
              "name": "Assigning a teacher to a subject",
              "range": {
                "lowerBound": 0,
                "upperBound": 1
              },
              "shape": {
                "type": "matrix",
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
          "isFeasible": true,
          "goalValues": [
            {
              "expression": "***",
              "sense": "minimize",
              "value": 84,
              "name": "Minimizes the cost of assigning a teacher to a subject",
              "weight": 1
            }
          ],
          "variableValues": [
            {
              "symbol": "x",
              "value": [
                [1,0,1,0,1,1],
                [0,0,1,0,1,0],
                [0,0,1,1,0,1]
              ],
              "within": "integers",
              "name": "Assigning a teacher to a subject",
              "range": {
                "lowerBound": 0,
                "upperBound": 1
              },
              "shape": {
                "type": "matrix",
                "isPermutation": false,
                "size": {
                  "fixed": false,
                  "value": "N"
                }
              }
            }
          ]
        }
      ],
      "computingTime": 5015
    },
    "stateMessage": "The problem was successfully solved",
    "problem": {
      "name": "Assignment 2D",
      "description": "Optional description (optimal: 130)",
      "parameters": [],
      "variables": [],
      "goals": [
        {
          "name": "Minimize the cost of assigning a teacher to a subject",
          "expression": "*",
          "sense": "minimize",
          "weight": 1
        }
      ],
      "constraints": [
        {
          "expression": "***",
          "name": "***"
        }
      ],
      "classes": [
        {
          "attributes": [
            {
              "name": "Name",
              "symbol": "name"
            }
          ],
          "name": "Profesor",
          "symbol": "profesor"
        },
        {
          "attributes": [
            {
              "name": "Name",
              "symbol": "name"
            },
            {
              "attribute": "Time",
              "symbol": "time"
            },
            {
              "attribute": "Cost",
              "symbol": "cost"
            }
          ],
          "name": "Subjects",
          "symbol": "subjects"
        }
      ],
      "objects": [
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Profesor 1"
            }
          ],
          "class": "profesor"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Profesor 2"
            }
          ],
          "class": "profesor"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Profesor 3"
            }
          ],
          "class": "profesor"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Subjects 1"
            },
            {
              "attribute": "time",
              "value": 168
            },
            {
              "attribute": "cost",
              "value": 25
            }
          ],
          "class": "subjects"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Subjects 2"
            },
            {
              "attribute": "time",
              "value": 168
            },
            {
              "attribute": "cost",
              "value": 25
            }
          ],
          "class": "subjects"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Subjects 3"
            },
            {
              "attribute": "time",
              "value": 168
            },
            {
              "attribute": "cost",
              "value": 25
            }
          ],
          "class": "subjects"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Subjects 4"
            },
            {
              "attribute": "time",
              "value": 168
            },
            {
              "attribute": "cost",
              "value": 25
            }
          ],
          "class": "subjects"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Subjects 5"
            },
            {
              "attribute": "time",
              "value": 168
            },
            {
              "attribute": "cost",
              "value": 25
            }
          ],
          "class": "subjects"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Subjects 6"
            },
            {
              "attribute": "time",
              "value": 168
            },
            {
              "attribute": "cost",
              "value": 25
            }
          ],
          "class": "subjects"
        }
      ]
    },
    "lastUpdate": 1605879754703
  }

  const tsp = {
    "state": "resolved",
    "solution": {
      "results": [
        {
          "isFeasible": true,
          "goalValues": [
            {
              "expression": "(sum Distances[city[i]][city[(i) + (1)]] over i = (1:(N) - (1))) + (Distances[city[N]][city[1]])",
              "sense": "minimize",
              "value": 18,
              "name": "goal name",
              "weight": 1
            }
          ],
          "variableValues": [
            {
              "symbol": "city",
              "value": [
                0,
                2,
                4,
                1,
                3
              ],
              "within": "integers",
              "name": "city",
              "range": {
                "lowerBound": "-Infinity",
                "upperBound": "Infinity"
              },
              "shape": {
                "type": "vector",
                "isPermutation": true,
                "size": {
                  "fixed": false,
                  "value": "N"
                }
              }
            }
          ]
        },
        {
          "isFeasible": true,
          "goalValues": [
            {
              "expression": "(sum Distances[city[i]][city[(i) + (1)]] over i = (1:(N) - (1))) + (Distances[city[N]][city[1]])",
              "sense": "minimize",
              "value": 10,
              "name": "goal name",
              "weight": 1
            }
          ],
          "variableValues": [
            {
              "symbol": "city",
              "value": [
                3,
                0,
                1,
                2,
                4,
              ],
              "within": "integers",
              "name": "city",
              "range": {
                "lowerBound": "-Infinity",
                "upperBound": "Infinity"
              },
              "shape": {
                "type": "vector",
                "isPermutation": true,
                "size": {
                  "fixed": false,
                  "value": "N"
                }
              }
            }
          ]
        }
      ],
      "computingTime": 0
    },
    "stateMessage": "The problem was successfully solved",
    "problem": {
      "name": "TSP",
      "description": "Optional description (optimal: 130)",
      "parameters": [],
      "variables": [],
      "goals": [
        {
          "name": "***",
          "expression": "***",
          "sense": "minimize",
          "weight": 1
        }
      ],
      "constraints": [],
      "classes": [
        {
          "attributes": [
            {
              "name": "Name",
              "symbol": "name"
            },
            {
              "name": "Distance",
              "symbol": "distance"
            },
            {
              "name": "Large",
              "symbol": "large"
            }
          ],
          "name": "City",
          "symbol": "city"
        },
      ],
      "objects": [
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "City 1 Very long Extend"
            },
            {
              "attribute": "distance",
              "value": [0,4,5,1,8]
            },
            {
              "attribute": "large",
              "value": 25
            }
          ],
          "class": "city"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "City 2"
            },
            {
              "attribute": "distance",
              "value": [1,0,2,8,7]
            },
            {
              "attribute": "large",
              "value": 18
            }
          ],
          "class": "city"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "City 3"
            },
            {
              "attribute": "distance",
              "value": [6,4,0,9,1]
            },
            {
              "attribute": "large",
              "value": 30
            }
          ],
          "class": "city"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "City 4"
            },
            {
              "attribute": "distance",
              "value": [3,4,3,0,8]
            },
            {
              "attribute": "large",
              "value": 38
            }
          ],
          "class": "city"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "City 5"
            },
            {
              "attribute": "distance",
              "value": [1,9,3,6,0]
            },
            {
              "attribute": "large",
              "value": 15
            }
          ],
          "class": "city"
        },
      ]
    },
    "lastUpdate": 1604909954703
  }
  
  const vrp = {
    "state": "resolved",
    "solution": {
      "results": [
        {
          "isFeasible": true,
          "goalValues": [
            {
              "expression": "***",
              "sense": "minimize",
              "value": 6208,
              "name": "***",
              "weight": 1
            }
          ],
          "variableValues": [
            {
              "symbol": "x",
              "value": [
                [0,8,6,2,5,0],
                [0,7,1,3,0],
                [0,9,4,0],
              ],
              "within": "integers",
              "name": "routes",
              "range": {
                "lowerBound": "-Infinity",
                "upperBound": "Infinity"
              },
              "shape": {
                "type": "matrix",
                "isPermutation": true,
                "size": {
                  "fixed": false,
                  "value": "N"
                }
              }
            }
          ]
        },
        {
          "isFeasible": true,
          "goalValues": [
            {
              "expression": "***",
              "sense": "minimize",
              "value": 6208,
              "name": "***",
              "weight": 1
            }
          ],
          "variableValues": [
            {
              "symbol": "x",
              "value": [
                [0,2,4,1,0],
                [0,6,3,0],
                [0,1,5,7,3,0],
              ],
              "within": "integers",
              "name": "routes",
              "range": {
                "lowerBound": "-Infinity",
                "upperBound": "Infinity"
              },
              "shape": {
                "type": "matrix",
                "isPermutation": true,
                "size": {
                  "fixed": false,
                  "value": "N"
                }
              }
            }
          ]
        }
      ],
      "computingTime": 5015
    },
    "stateMessage": "The problem was successfully solved",
    "problem": {
      "name": "Problema de VRP",
      "description": "Optional description (optimal: 130)",
      "parameters": [],
      "variables": [],
      "goals": [],
      "constraints": [],
      "classes": [
        {
          "attributes": [
            {
              "name": "Name",
              "symbol": "name"
            },
            {
              "name": "Distance",
              "symbol": "distance"
            },
            {
              "name": "Large",
              "symbol": "large"
            }
          ],
          "name": "City",
          "symbol": "city"
        },
      ],
      "objects": [
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "City 1"
            },
            {
              "attribute": "distance",
              "value": [0,1,2,4,5,4,6,4,9,8]
            },
            {
              "attribute": "large",
              "value": 20
            }
          ],
          "class": "city"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "City 2"
            },
            {
              "attribute": "distance",
              "value": [2,0,4,6,6,5,4,9,8,5]
            },
            {
              "attribute": "large",
              "value": 25
            }
          ],
          "class": "city"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "City 3"
            },
            {
              "attribute": "distance",
              "value": [2,4,0,6,6,5,4,9,8,5]
            },
            {
              "attribute": "large",
              "value": 30
            }
          ],
          "class": "city"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "City 4"
            },
            {
              "attribute": "distance",
              "value": [2,4,6,0,6,5,4,9,8,5]
            },
            {
              "attribute": "large",
              "value": 15
            }
          ],
          "class": "city"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "City 5"
            },
            {
              "attribute": "distance",
              "value": [2,4,6,6,0,5,4,9,8,5]
            },
            {
              "attribute": "large",
              "value": 35
            }
          ],
          "class": "city"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "City 6"
            },
            {
              "attribute": "distance",
              "value": [2,4,6,6,5,0,4,9,8,5]
            },
            {
              "attribute": "large",
              "value": 40
            }
          ],
          "class": "city"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "City 7"
            },
            {
              "attribute": "distance",
              "value": [2,4,6,6,5,4,0,9,8,5]
            },
            {
              "attribute": "large",
              "value": 20
            }
          ],
          "class": "city"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "City 8"
            },
            {
              "attribute": "distance",
              "value": [2,4,6,6,5,4,9,0,8,5]
            },
            {
              "attribute": "large",
              "value": 30
            }
          ],
          "class": "city"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "City 9"
            },
            {
              "attribute": "distance",
              "value": [2,4,6,6,5,4,9,8,0,5]
            },
            {
              "attribute": "large",
              "value": 27
            }
          ],
          "class": "city"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "City 10"
            },
            {
              "attribute": "distance",
              "value": [2,4,6,6,5,4,9,8,5,0]
            },
            {
              "attribute": "large",
              "value": 12
            }
          ],
          "class": "city"
        },
      ]
    },
    "lastUpdate": 1605820754703
  }
  

  let data = [backpackSimple, backpackComplex, tsp, vrp]

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

export const rgbToHex = (r, g, b) => {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}