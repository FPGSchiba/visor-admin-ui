
function App() {
  return (
    <main>
      <h1>My todos</h1>
      <button onClick={() => {console.log("helps")}}>+ new</button>
      <ul>
          None
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>
    </main>
  );
}

export default App;
