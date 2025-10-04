import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import { routes } from '@/routes.jsx'
import { AuthProvider } from '@/contexts/AuthProvider'
import PersistLogin from '@/services/PersistentLogin'
import store from './redux/store';
import { Provider } from 'react-redux';


function App() {
  return (
    // <AuthProvider>
        <Router>
          <Routes>
          <Route element={<PersistLogin />}>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={<route.element/>}>
                {/* Protected routes */}
              {route.children && route.children.map((childRoute, childIndex) => (
                  <Route key={childIndex} path={childRoute.path} element={<childRoute.element/>} />
              ))}
              </Route>
            ))}
          </Route>
          </Routes>
        </Router>
    // </AuthProvider>
  )
}

export default App
