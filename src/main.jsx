import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './views/Home'
import ErrorRoute from './views/Error'

import Chilean from './views/Countries/Chilean'
import Brazilian from './views/Countries/Brazilian'
import England from './views/Countries/England'
import Spain from './views/Countries/Spain'
import USA from './views/Countries/USA'
import Argentina from './views/Countries/Argentina'
import China from './views/Countries/China'
import Japan from './views/Countries/Japan'
import France from './views/Countries/France'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'



const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorRoute />
  },
  {
    path: '/Chile',
    element: <Chilean />,
  },
  {
    path: '/Brazil',
    element: <Brazilian />,
  },
  {
    path: '/USA',
    element: <USA />,
  },
  {
    path: '/England',
    element: <England />,
  },
  {
    path: '/Spain',
    element: <Spain />,
  },
  {
    path: '/Argentina',
    element: <Argentina />,
  },
  {
    path: '/China',
    element: <China />,
  },
  {
    path: '/Japan',
    element: <Japan />,
  },
  {
    path: '/France',
    element: <France />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myRouter} />
  </React.StrictMode>,
)
