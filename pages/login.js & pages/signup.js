// pages/login.js
import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Login() {
  const [email, setEmail] = useState('');

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) alert(error.message);
    else alert('Check your email for the login link!');
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-2">Login to 3Dapps</h1>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="border p-2 mr-2"
      />
      <button onClick={handleLogin} className="bg-blue-600 text-white p-2 px-4 rounded">Login</button>
    </div>
  );
}