import UserGreeting from "./UserGreeting";

function App() {
    return (
        <>
            <UserGreeting isLoggedIn={true} userName="Bro" />
        </>
    );
}

export default App;
