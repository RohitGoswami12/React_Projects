import './App.css';

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  return (
    <>
      <h1 className="text-3xl font-bold bg-orange-400 p-4">My New Project</h1>
    </>
  );
}

export default App;
