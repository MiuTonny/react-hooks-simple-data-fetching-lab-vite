// create your App component here
// src/components/App.jsx
import { useEffect, useState } from "react";

export default function App() {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchDog() {
    setLoading(true);
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    setImageUrl(data.message);
    setLoading(false);
  }

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <main style={{ maxWidth: 520, margin: "40px auto", textAlign: "center" }}>
      <h1>Random Dog</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <img
          src={imageUrl}
          alt="Random dog"
          style={{ maxWidth: "100%", borderRadius: 8 }}
        />
      )}

      <div style={{ marginTop: 16 }}>
        <button onClick={fetchDog} disabled={loading}>
          Get another dog
        </button>
      </div>
    </main>
  );
}

  