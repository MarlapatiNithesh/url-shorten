import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleShorten = async () => {
    setError('');
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/shorten', {
        originalUrl,
      });
      setShortUrl(res.data.shortUrl);
    } catch (err) {
      setError('Invalid URL or server error.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-2xl font-bold mb-6">🔗 URL Shortener</h1>

      <input
        type="text"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
        placeholder="Enter your long URL..."
        className="border p-2 rounded w-full max-w-md mb-4"
      />

      <button
        onClick={handleShorten}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full max-w-md"
      >
        {loading ? 'Shortening...' : 'Shorten URL'}
      </button>

      {shortUrl && (
        <div className="mt-4">
          <p className="text-green-700">
            Short URL:{' '}
            <a href={shortUrl} className="text-blue-700 underline">
              {shortUrl}
            </a>
          </p>
        </div>
      )}

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <Link to="/stats" className="mt-6 text-blue-500 underline">
        Check Stats
      </Link>
    </div>
  );
}

