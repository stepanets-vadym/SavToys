
import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { authRoutes, publicRoutes } from 'routes/routes';

const AppRouter = () => {

  const [user, setUser] = useState<boolean>(true)
  
  return (
      <Routes>
        {/* authorization Pages  */}
        {user &&
          authRoutes.map(({ path, Element }) => (
            <Route key={`Path name : ${path}`} path={path} element={Element} />
          ))}
        {/* Public Pages */}
        {publicRoutes.map(({ path, Element }) => (
          <Route key={`Path name : ${path}`} path={path} element={Element} />
        ))}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
  );
};

export default AppRouter;
