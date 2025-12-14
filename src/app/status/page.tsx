"use client";

import { useEffect, useState } from "react";

export default function StatusPage() {
  const [status, setStatus] = useState<{ status: string; timestamp: string; service: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/health')
      .then(response => response.json())
      .then(data => {
        setStatus(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Health check failed:', error);
        setStatus({ status: 'error', timestamp: new Date().toISOString(), service: 'SportsTradeX' });
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-darkest flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-dark rounded-lg border border-white/10 p-8 text-center">
        <h1 className="text-2xl font-bold text-white mb-6">Application Status</h1>
        
        {loading ? (
          <div className="text-white">Checking application health...</div>
        ) : status?.status === 'ok' ? (
          <div>
            <div className="text-green-400 text-5xl mb-4">✓</div>
            <h2 className="text-xl font-semibold text-white mb-2">All Systems Operational</h2>
            <p className="text-white/80 mb-4">SportsTradeX is running successfully</p>
            <div className="text-sm text-white/60">
              <p>Service: {status.service}</p>
              <p>Checked: {new Date(status.timestamp).toLocaleString()}</p>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-red-400 text-5xl mb-4">✗</div>
            <h2 className="text-xl font-semibold text-white mb-2">System Error</h2>
            <p className="text-white/80 mb-4">There was an issue with the application</p>
            <div className="text-sm text-white/60">
              <p>Service: {status?.service || 'SportsTradeX'}</p>
              <p>Checked: {status?.timestamp ? new Date(status.timestamp).toLocaleString() : new Date().toLocaleString()}</p>
            </div>
          </div>
        )}
        
        <div className="mt-8">
          <a 
            href="/" 
            className="inline-block bg-lighter text-darkest font-medium px-6 py-3 rounded-full hover:bg-lighter/75 transition-colors"
          >
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
}