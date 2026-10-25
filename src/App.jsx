import "./App.css";
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'

function App() {
  return(
    <div>
  <h1 style={{ color: "blue" }}>
        This is clerk authentication
      </h1>
       <Show when="signed-out">
          <SignInButton fallbackRedirectUrl={"/dashboard"} forceRedirectUrl={"/dashboard"}/>
          <SignUpButton />
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </div>
  );
}

export default App;