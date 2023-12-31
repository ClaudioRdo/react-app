import { Suspense } from 'react';
import {
  Route,
  NavLink,
  Routes,
  Navigate,
  BrowserRouter
} from 'react-router-dom';
import { routes } from './routes.ts';

export const Navigation = () => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <ul>
              {
                routes.map(route => (
                  <li key={route.to}>
                    <NavLink to={route.to}>{route.name}</NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>

          <Routes>
            {
              routes.map(({ to, Component, path }) => (
                <Route key={to} path={path} element={<Component />} />
              ))
            }
            <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}