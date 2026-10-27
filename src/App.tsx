import HomePage from "./app/page";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <HomePage />
      </main>
    </div>
  );
}
