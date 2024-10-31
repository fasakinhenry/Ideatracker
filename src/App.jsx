import { Home } from "./pages/Home";
import { UserProvider } from "./lib/context/user";

function App() {
  const isLoginPage = window.location.pathname === "/login";

  return (
    <div>
      <UserProvider>
        <main>Home page</main>
      </UserProvider>
    </div>
  );
}

export default App;
