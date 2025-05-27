'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        const res = await fetch('/api/auth/login',{
            method: 'POST',
            body: JSON.stringify({ email, password }),
        })

        const data = await res.json()

        if (res.ok) {
            router.push('/dashboard')
      } else {
        setError(data.message)add 
      }
   }

   return(
    <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f5f5f5'
        }}>
        <form 
            onSubmit={handleLogin}
            style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '8px',
                width: '100%',
                maxWidth: '400px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
            }}
        >
            <h2 style={{ textAlign:'center'}}>Login</h2>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <input 
                type="email"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            <input 
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            <button type='submit'>Login</button>
            <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </form>
    </div>
   )
}
