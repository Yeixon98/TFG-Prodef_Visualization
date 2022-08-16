
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
                [1,0,0,1,0],
                [0,1,0,0,1],
                [0,0,1,0,0]
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
          "name": "Minimizes the cost of assigning a teacher to a subject",
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
        }
      ]
    },
    "lastUpdate": 1605879754703
  }



  const problem2 = {
    "state": "resolved",
    "solution": {
      "results": [
        {
          "isFeasible": true,
          "goalValues": [
            {
              "expression": "(sum Distances[city[i]][city[(i) + (1)]] over i = (1:(N) - (1))) + (Distances[city[N]][city[1]])",
              "sense": "minimize",
              "value": 9,
              "name": "goal name",
              "weight": 1
            }
          ],
          "variableValues": [
            {
              "symbol": "city___",
              "value": [
                2,
                4,
                1,
                5,
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
        }
      ],
      "computingTime": 0
    },
    "stateMessage": "The problem was successfully solved",
    "problem": {
      "name": "TSP",
      "description": "Optional description (optimal: 130)",
      "parameters": [],
      "classes": [
        {
          "name": "Distances",
          "symbol": "Distances",
          "rowsVariableName": "N",
          "colsVariableName": "N"
        }
      ],
      "variables": [
        {
          "name": "city",
          "symbol": "city",
          "within": "integers",
          "shape": {
            "type": "vector",
            "isPermutation": true,
            "size": {
              "fixed": false,
              "value": { "value": { "name": "N" }, "type": "getter_variable" }
            }
          }
        }
      ],
      "goals": [
        {
          "name": "goal name",
          "sense": "minimize",
          "weight": { "$numberInt": "1" },
          "expression": {
            "type": "expression",
            "value": {
              "left": {
                "type": "sum_mult_definition",
                "value": {
                  "sumOrMult": "sum",
                  "expression": {
                    "value": {
                      "name": "Distances",
                      "rowIndex": {
                        "value": {
                          "name": "city",
                          "rowIndex": {
                            "value": { "name": "i" },
                            "type": "getter_variable"
                          }
                        },
                        "type": "getter_variable"
                      },
                      "colIndex": {
                        "value": {
                          "name": "city",
                          "rowIndex": {
                            "type": "expression",
                            "value": {
                              "left": {
                                "value": { "name": "i" },
                                "type": "getter_variable"
                              },
                              "right": {
                                "value": { "$numberInt": "1" },
                                "type": "prodef_number"
                              },
                              "operator": "+"
                            }
                          }
                        },
                        "type": "getter_variable"
                      }
                    },
                    "type": "getter_variable"
                  },
                  "upperBound": {
                    "type": "expression",
                    "value": {
                      "left": {
                        "value": { "name": "N" },
                        "type": "getter_variable"
                      },
                      "right": {
                        "value": { "$numberInt": "1" },
                        "type": "prodef_number"
                      },
                      "operator": "-"
                    }
                  },
                  "lowerBound": {
                    "value": { "$numberInt": "1" },
                    "type": "prodef_number"
                  },
                  "variableIterator": "i"
                }
              },
              "right": {
                "value": {
                  "name": "Distances",
                  "rowIndex": {
                    "value": {
                      "name": "city",
                      "rowIndex": {
                        "value": { "name": "N" },
                        "type": "getter_variable"
                      }
                    },
                    "type": "getter_variable"
                  },
                  "colIndex": {
                    "value": {
                      "name": "city",
                      "rowIndex": {
                        "value": { "$numberInt": "1" },
                        "type": "prodef_number"
                      }
                    },
                    "type": "getter_variable"
                  }
                },
                "type": "getter_variable"
              },
              "operator": "+"
            }
          }
        }
      ],
      "constraints": [],
      "objects": [
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "City 1"
            },
            {
              "attribute": "col1",
              "value": 0
            },
            {
              "attribute": "col2",
              "value": 4
            },
            {
              "attribute": "col3",
              "value": 5
            },
            {
              "attribute": "col4",
              "value": 1
            },
            {
              "attribute": "col5",
              "value": 8
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
              "attribute": "col1",
              "value": 1
            },
            {
              "attribute": "col2",
              "value": 0
            },
            {
              "attribute": "col3",
              "value": 2
            },
            {
              "attribute": "col4",
              "value": 8
            },
            {
              "attribute": "col5",
              "value": 7
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
              "attribute": "col1",
              "value": 6
            },
            {
              "attribute": "col2",
              "value": 4
            },
            {
              "attribute": "col3",
              "value": 0
            },
            {
              "attribute": "col4",
              "value": 9
            },
            {
              "attribute": "col5",
              "value": 1
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
              "attribute": "col1",
              "value": 3
            },
            {
              "attribute": "col2",
              "value": 4
            },
            {
              "attribute": "col3",
              "value": 3
            },
            {
              "attribute": "col4",
              "value": 0
            },
            {
              "attribute": "col5",
              "value": 8
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
              "attribute": "col1",
              "value": 1
            },
            {
              "attribute": "col2",
              "value": 9
            },
            {
              "attribute": "col3",
              "value": 3
            },
            {
              "attribute": "col4",
              "value": 6
            },
            {
              "attribute": "col5",
              "value": 0
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
                [0,9,4,10,0],
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
      "classes": [],
      "objects": [
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "City 1"
            },
            {
              "attribute": "city1",
              "value": 0
            },
            {
              "attribute": "city2",
              "value": 33
            },
            {
              "attribute": "city3",
              "value": 33
            },
            {
              "attribute": "city4",
              "value": 33
            },
            {
              "attribute": "city5",
              "value": 33
            },
            {
              "attribute": "city6",
              "value": 33
            },
            {
              "attribute": "city7",
              "value": 33
            },
            {
              "attribute": "city8",
              "value": 33
            },
            {
              "attribute": "city9",
              "value": 33
            },
            {
              "attribute": "city10",
              "value": 33
            },
            {
              "attribute": "city11",
              "value": 33
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
              "attribute": "city1",
              "value": 25
            },
            {
              "attribute": "city2",
              "value": 0
            },
            {
              "attribute": "city3",
              "value": 33
            },
            {
              "attribute": "city4",
              "value": 33
            },
            {
              "attribute": "city5",
              "value": 33
            },
            {
              "attribute": "city6",
              "value": 33
            },
            {
              "attribute": "city7",
              "value": 33
            },
            {
              "attribute": "city8",
              "value": 33
            },
            {
              "attribute": "city9",
              "value": 33
            },
            {
              "attribute": "city10",
              "value": 33
            },
            {
              "attribute": "city11",
              "value": 33
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
              "attribute": "city1",
              "value": 12
            },
            {
              "attribute": "city2",
              "value": 33
            },
            {
              "attribute": "city3",
              "value": 0
            },
            {
              "attribute": "city4",
              "value": 33
            },
            {
              "attribute": "city5",
              "value": 33
            },
            {
              "attribute": "city6",
              "value": 33
            },
            {
              "attribute": "city7",
              "value": 33
            },
            {
              "attribute": "city8",
              "value": 33
            },
            {
              "attribute": "city9",
              "value": 33
            },
            {
              "attribute": "city10",
              "value": 33
            },
            {
              "attribute": "city11",
              "value": 33
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
              "attribute": "city1",
              "value": 45
            },
            {
              "attribute": "city2",
              "value": 33
            },
            {
              "attribute": "city3",
              "value": 33
            },
            {
              "attribute": "city4",
              "value": 0
            },
            {
              "attribute": "city5",
              "value": 33
            },
            {
              "attribute": "city6",
              "value": 33
            },
            {
              "attribute": "city7",
              "value": 33
            },
            {
              "attribute": "city8",
              "value": 33
            },
            {
              "attribute": "city9",
              "value": 33
            },
            {
              "attribute": "city10",
              "value": 33
            },
            {
              "attribute": "city11",
              "value": 33
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
              "attribute": "city1",
              "value": 45
            },
            {
              "attribute": "city2",
              "value": 33
            },
            {
              "attribute": "city3",
              "value": 33
            },
            {
              "attribute": "city4",
              "value": 33
            },
            {
              "attribute": "city5",
              "value": 0
            },
            {
              "attribute": "city6",
              "value": 33
            },
            {
              "attribute": "city7",
              "value": 33
            },
            {
              "attribute": "city8",
              "value": 33
            },
            {
              "attribute": "city9",
              "value": 33
            },
            {
              "attribute": "city10",
              "value": 33
            },
            {
              "attribute": "city11",
              "value": 33
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
              "attribute": "city1",
              "value": 23
            },
            {
              "attribute": "city2",
              "value": 33
            },
            {
              "attribute": "city3",
              "value": 33
            },
            {
              "attribute": "city4",
              "value": 33
            },
            {
              "attribute": "city5",
              "value": 33
            },
            {
              "attribute": "city6",
              "value": 33
            },
            {
              "attribute": "city7",
              "value": 33
            },
            {
              "attribute": "city8",
              "value": 33
            },
            {
              "attribute": "city9",
              "value": 33
            },
            {
              "attribute": "city10",
              "value": 33
            },
            {
              "attribute": "city11",
              "value": 33
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
              "attribute": "city1",
              "value": 26
            },
            {
              "attribute": "city2",
              "value": 33
            },
            {
              "attribute": "city3",
              "value": 33
            },
            {
              "attribute": "city4",
              "value": 33
            },
            {
              "attribute": "city5",
              "value": 33
            },
            {
              "attribute": "city6",
              "value": 33
            },
            {
              "attribute": "city7",
              "value": 33
            },
            {
              "attribute": "city8",
              "value": 33
            },
            {
              "attribute": "city9",
              "value": 33
            },
            {
              "attribute": "city10",
              "value": 33
            },
            {
              "attribute": "city11",
              "value": 33
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
              "attribute": "city1",
              "value": 25
            },
            {
              "attribute": "city2",
              "value": 33
            },
            {
              "attribute": "city3",
              "value": 33
            },
            {
              "attribute": "city4",
              "value": 33
            },
            {
              "attribute": "city5",
              "value": 33
            },
            {
              "attribute": "city6",
              "value": 33
            },
            {
              "attribute": "city7",
              "value": 33
            },
            {
              "attribute": "city8",
              "value": 33
            },
            {
              "attribute": "city9",
              "value": 33
            },
            {
              "attribute": "city10",
              "value": 33
            },
            {
              "attribute": "city11",
              "value": 33
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
              "attribute": "city1",
              "value": 57
            },
            {
              "attribute": "city2",
              "value": 33
            },
            {
              "attribute": "city3",
              "value": 33
            },
            {
              "attribute": "city4",
              "value": 33
            },
            {
              "attribute": "city5",
              "value": 33
            },
            {
              "attribute": "city6",
              "value": 33
            },
            {
              "attribute": "city7",
              "value": 33
            },
            {
              "attribute": "city8",
              "value": 33
            },
            {
              "attribute": "city9",
              "value": 33
            },
            {
              "attribute": "city10",
              "value": 33
            },
            {
              "attribute": "city11",
              "value": 33
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
              "attribute": "city1",
              "value": 45
            },
            {
              "attribute": "city2",
              "value": 33
            },
            {
              "attribute": "city3",
              "value": 33
            },
            {
              "attribute": "city4",
              "value": 33
            },
            {
              "attribute": "city5",
              "value": 33
            },
            {
              "attribute": "city6",
              "value": 33
            },
            {
              "attribute": "city7",
              "value": 33
            },
            {
              "attribute": "city8",
              "value": 33
            },
            {
              "attribute": "city9",
              "value": 33
            },
            {
              "attribute": "city10",
              "value": 33
            },
            {
              "attribute": "city11",
              "value": 33
            }
          ],
          "class": "city"
        },
        {
          "attributes": [
            {
              "attribute": "name",
              "value": "City 11"
            },
            {
              "attribute": "city1",
              "value": 14
            },
            {
              "attribute": "city2",
              "value": 33
            },
            {
              "attribute": "city3",
              "value": 33
            },
            {
              "attribute": "city4",
              "value": 33
            },
            {
              "attribute": "city5",
              "value": 33
            },
            {
              "attribute": "city6",
              "value": 33
            },
            {
              "attribute": "city7",
              "value": 33
            },
            {
              "attribute": "city8",
              "value": 33
            },
            {
              "attribute": "city9",
              "value": 33
            },
            {
              "attribute": "city10",
              "value": 33
            },
            {
              "attribute": "city11",
              "value": 33
            }
          ],
          "class": "city"
        },
        
      ]
    },
    "lastUpdate": 1605820754703
  }
  
  const problem4 = {
    problem: {
      name: "Test4",
    },
    result: 4,
  }

  let data = [backpackSimple, backpackComplex, problem2, vrp, problem4]

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
