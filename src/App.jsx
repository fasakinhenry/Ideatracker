import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { UserProvider } from './lib/context/user';

function App() {
  const isLoginPage = window.location.pathname === '/login';

  return (
    <div>
      <UserProvider>
        <main>{isLoginPage ? <Login /> : <Home />}</main>
      </UserProvider>
    </div>
  );
}

export default App;
