import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Landing } from './pages/Landing';
import { UserProvider } from './lib/context/user';
import { IdeasProvider } from './lib/context/ideas';

function App() {
  const isLoginPage = window.location.pathname === '/login';
  const isLandingPage = window.location.pathname === '/';

  return (
    <div>
      <UserProvider>
        <IdeasProvider>
          {/* <Navbar /> Add the navbar before page content */}
          <main>
            {isLandingPage ? (
              <Landing /> // Render the LandingPage component for the root path
            ) : isLoginPage ? (
              <Login />
            ) : (
              <Home />
            )}
          </main>
        </IdeasProvider>
      </UserProvider>
    </div>
  );
}

export default App;
