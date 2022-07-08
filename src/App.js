import 'App.css'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { MemoryRouter, Switch, Redirect } from 'react-router-dom'
import { GuardProvider, GuardedRoute } from 'react-router-guards'

import Home from 'pages/Home'
import NotFound from 'pages/NotFound'
import View from 'pages/ViewSolution'
import Loading from 'pages/Loading'

import { getProblems } from 'store/actions/problemSolutions'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProblems())
  }, [dispatch])

  return (
    <MemoryRouter>
      <GuardProvider loading={Loading} error={NotFound}>
        <div
          style={{
            backgroundColor: '#ffffff',
            minHeight: '100vh',
          }}
          id='App'
        >
          <Switch>
            <GuardedRoute path='/' exact component={Home} />
            <GuardedRoute path='/viewSolution' exact component={View} />
            <GuardedRoute path='/404' component={NotFound} />
            <Redirect to='/404' />
          </Switch>
        </div>
      </GuardProvider>
    </MemoryRouter>
  )
}

export default App;
