import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { UserProvider, useUser } from "./lib/context/user";

function App() {
  const isLoginPage = window.location.pathname === "/login";

  return (
    <div>
      <UserProvider>
        <Navbar /> {/* Add the navbar before page content */}
        <main>{isLoginPage ? <Login /> : <Home />}</main>
      </UserProvider>
    </div>
  );
}

function Navbar() {
  const user = useUser();

  return (
    <nav>
      <a href="/">Idea tracker</a>
      <div>
        {user.current ? (
          <>
            <span>{user.current.email}</span>
            <button type="button" onClick={() => user.logout()}>
              Logout
            </button>
          </>
        ) : (
          <a href="/login">Login</a>
        )}
      </div>
    </nav>
  );
}

export default App;
