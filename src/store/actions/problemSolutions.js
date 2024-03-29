
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
              "expression": "***",
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
        {
          "isFeasible": false,
          "goalValues": [
            {
              "expression": "***",
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
      ],
      "computingTime": 5015
    },
    "stateMessage": "The problem was successfully solved",
    "problem": {
      "name": "Basic binary knapsack problem",
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
              "value": 20
            },
            {
              "attribute": "weight",
              "value": 18
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
              "value": 24
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
              "value": "Item 4"
            },
            {
              "attribute": "value",
              "value": 24
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
              "value": "Item 5"
            },
            {
              "attribute": "value",
              "value": 34
            },
            {
              "attribute": "weight",
              "value": 28
            }
          ],
          "class": "item"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Item 6"
            },
            {
              "attribute": "value",
              "value": 39
            },
            {
              "attribute": "weight",
              "value": 27
            }
          ],
          "class": "item"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Item 7"
            },
            {
              "attribute": "value",
              "value": 30
            },
            {
              "attribute": "weight",
              "value": 10
            }
          ],
          "class": "item"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Item 8"
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
              "value": "Item 9"
            },
            {
              "attribute": "value",
              "value": 42
            },
            {
              "attribute": "weight",
              "value": 24
            }
          ],
          "class": "item"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Item 10"
            },
            {
              "attribute": "value",
              "value": 30
            },
            {
              "attribute": "weight",
              "value": 18
            }
          ],
          "class": "item"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Item 11"
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
              "value": "Item 12"
            },
            {
              "attribute": "value",
              "value": 37
            },
            {
              "attribute": "weight",
              "value": 18
            }
          ],
          "class": "item"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Item 13"
            },
            {
              "attribute": "value",
              "value": 40
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
              "value": "Item 14"
            },
            {
              "attribute": "value",
              "value": 24
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
              "value": "Item 15"
            },
            {
              "attribute": "value",
              "value": 18
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
              "value": "Item 16"
            },
            {
              "attribute": "value",
              "value": 26
            },
            {
              "attribute": "weight",
              "value": 24
            }
          ],
          "class": "item"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Item 17"
            },
            {
              "attribute": "value",
              "value": 38
            },
            {
              "attribute": "weight",
              "value": 24
            }
          ],
          "class": "item"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Item 18"
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
              "value": "Item 19"
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
              "value": "Item 20"
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
              "value": "Item 21"
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
              "value": "Item 22"
            },
            {
              "attribute": "value",
              "value": 24
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
              "value": "Item 23"
            },
            {
              "attribute": "value",
              "value": 24
            },
            {
              "attribute": "weight",
              "value": 15
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
                [1,0,0,0,0,1],
                [0,1,0,0,1,0],
                [0,0,0,1,0,0],
                [0,0,1,0,0,0]
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
                [1,0,1,0,0,1],
                [0,1,0,0,1,0],
                [0,0,0,1,0,0]
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
      "goals": [],
      "constraints": [],
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
              "value": "Profesor 4"
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
              "expression": "***",
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
                3,
                5,
                8,
                6,
                9,
                7
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
              "expression": "***",
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
      "name": "Problem TSP",
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
              "value": [0,4,5,1,8,6,1,8,4,3]
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
              "value": [1,0,2,8,7,6,1,8,4,3]
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
              "value": [6,4,0,9,1,6,1,8,4,3]
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
              "value": [3,4,3,0,8,6,1,8,4,3]
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
              "value": [1,9,3,6,0,6,1,8,4,3]
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
              "value": "City 6"
            },
            {
              "attribute": "distance",
              "value": [1,9,3,6,6,0,1,8,4,3]
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
              "value": "City 7"
            },
            {
              "attribute": "distance",
              "value": [1,9,3,6,6,1,0,8,4,3]
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
              "value": "City 8"
            },
            {
              "attribute": "distance",
              "value": [1,9,3,6,6,1,8,0,4,3]
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
              "value": "City 9"
            },
            {
              "attribute": "distance",
              "value": [1,9,3,6,6,1,8,4,0,3]
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
              "value": "City 10"
            },
            {
              "attribute": "distance",
              "value": [1,9,3,6,6,1,8,4,0]
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
              "name": "goal name",
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
              "name": "goal name",
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
      "name": "Problem VRP",
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
  
  const  processingTask = {
    "state": "resolved",
    "solution": {
      "results": [
        {
          "isFeasible": true,
          "goalValues": [
            {
              "expression": "***",
              "sense": "minimize",
              "value": 127,
              "name": "goal name",
              "weight": 1
            }
          ],
          "variableValues": [
            {
              "symbol": "x",
              "value": [
                [-1,0,-1,2,-1],
                [0,1,0,3,-1],
                [1,-1,2,-1,3],
              ],
              "within": "integers",
              "name": "Processing time of the task",
              "range": {
                "lowerBound": "-Infinity",
                "upperBound": "Infinity"
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
      "name": "The Job Shop Problem",
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
            }
          ],
          "name": "Machine",
          "symbol": "machine"
        },
        {
          "attributes": [
            {
              "name": "Name",
              "symbol": "name"
            }
          ],
          "name": "Time",
          "symbol": "time"
        },
        {
          "attributes": [
            {
              "name": "Name",
              "symbol": "name"
            },
            {
              "name": "Data",
              "symbol": "data"
            }
          ],
          "name": "Task",
          "symbol": "task"
        },
      ],
      "objects": [
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Machine 1"
            }
          ],
          "class": "machine"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Machine 2"
            }
          ],
          "class": "machine"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Machine 3"
            }
          ],
          "class": "machine"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Time 1"
            }
          ],
          "class": "time"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Time 2"
            }
          ],
          "class": "time"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Time 3"
            }
          ],
          "class": "time"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Time 4"
            }
          ],
          "class": "time"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Time 5"
            }
          ],
          "class": "time"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Task 1"
            },
            {
              "attribute": "data",
              "value": 12
            }
          ],
          "class": "task"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Task 2"
            },
            {
              "attribute": "data",
              "value": 20
            }
          ],
          "class": "task"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Task 3"
            },
            {
              "attribute": "data",
              "value": 18
            }
          ],
          "class": "task"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Task 4"
            },
            {
              "attribute": "data",
              "value": 50
            }
          ],
          "class": "task"
        },
      ]
    },
    "lastUpdate": 1605800054703
  }

  const  assignment3D = {
    "state": "resolved",
    "solution": {
      "results": [
        {
          "isFeasible": true,
          "goalValues": [
            {
              "expression": "***",
              "sense": "minimize",
              "value": 127,
              "name": "***",
              "weight": 1
            }
          ],
          "variableValues": [
            {
              "symbol": "x",
              "value": [
                [-1,1,-1,2,2],
                [0,2,0,3,-1],
                [1,0,-1,-1,3],
              ],
              "within": "integers",
              "name": "Assignment teacher, classroom, subject",
              "range": {
                "lowerBound": "-Infinity",
                "upperBound": "Infinity"
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
      "name": "Assignment 3D",
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
            }
          ],
          "name": "Teacher",
          "symbol": "teacher"
        },
        {
          "attributes": [
            {
              "name": "Name",
              "symbol": "name"
            }
          ],
          "name": "Classroom",
          "symbol": "classroom"
        },
        {
          "attributes": [
            {
              "name": "Name",
              "symbol": "name"
            },
            {
              "name": "Data",
              "symbol": "data"
            }
          ],
          "name": "Subject",
          "symbol": "subject"
        },
      ],
      "objects": [
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Teacher 1"
            }
          ],
          "class": "teacher"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Teacher 2"
            }
          ],
          "class": "teacher"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Teacher 3"
            }
          ],
          "class": "teacher"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Classroom 1"
            }
          ],
          "class": "classroom"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Classroom 2"
            }
          ],
          "class": "classroom"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Classroom 3"
            }
          ],
          "class": "classroom"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Classroom 4"
            }
          ],
          "class": "classroom"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Classroom 5"
            }
          ],
          "class": "classroom"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Subject 1"
            },
            {
              "attribute": "data",
              "value": 12
            }
          ],
          "class": "subject"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Subject 2"
            },
            {
              "attribute": "data",
              "value": 20
            }
          ],
          "class": "subject"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Subject 3"
            },
            {
              "attribute": "data",
              "value": 18
            }
          ],
          "class": "subject"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "Subject 4"
            },
            {
              "attribute": "data",
              "value": 50
            }
          ],
          "class": "subject"
        },
      ]
    },
    "lastUpdate": 1605800054703
  }

  let data = []
  // let data = [backpackSimple, backpackComplex, tsp, vrp, processingTask, assignment3D]

  dispatch({
    type: "setProblem",
    payload: data,
  })
}

export const addProblem = (problem) => dispatch => {
  dispatch({
    type: "addProblem",
    payload: problem,
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

export const perc2color = (perc) => {
	var r, g, b = 0;
	if(perc < 50) {
		r = 255;
		g = Math.round(5.1 * perc);
	}
	else {
		g = 255;
		r = Math.round(510 - 5.10 * perc);
	}
	var h = r * 0x10000 + g * 0x100 + b * 0x1;
	return '#' + ('000000' + h.toString(16)).slice(-6);
}

export const readFile = () => dispatch => {
  dispatch(setProblemLoading())
  let fileToLoad = document.getElementById("FileUpload").files[0];
  let fileReader = new FileReader();
  
  fileReader.onload = function(fileLoadedEvent){
    let fileRead = fileLoadedEvent.target.result;
    const problem = JSON.parse(fileRead)
    dispatch(addProblem(problem))
  };

  fileReader.readAsText(fileToLoad, "UTF-8"); 
}