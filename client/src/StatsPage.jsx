import { useState } from 'react';
import axios from 'axios';

export default function StatsPage() {
  const [code, setCode] = useState('');
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(null);

  const fetchStats = async () => {
    setError(null);
    try {
      const res = await axios.get(`https://url-shorten-server-weq9.onrender.com/api/stats/${code}`);
      setStats(res.data);
    } catch (err) {
      setStats(null);
      setError('Short URL not found');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-2xl font-bold mb-4">📊 Stats for Short URL</h1>
      <input
        type="text"
        placeholder="Enter short code (e.g. abc123)"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="p-2 border rounded w-full max-w-md mb-2"
      />
      <button onClick={fetchStats} className="bg-blue-600 text-white px-4 py-2 rounded">
        Get Stats
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {stats && (
        <div className="mt-6 p-4 border rounded bg-white shadow w-full max-w-md">
          <p><strong>Original URL:</strong> {stats.originalUrl}</p>
          <p><strong>Short ID:</strong> {stats.shortId}</p>
          <p><strong>Clicks:</strong> {stats.clicks}</p>
          <p><strong>Created At:</strong> {new Date(stats.createdAt).toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}

