
import { Link,useNavigate } from 'react-router-dom'
import { Input } from '../../componentes/Input'
import { useState, type FormEvent } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebaseConnection'

export function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if(email ==='' || password === '') {
      alert('Preencha todos os campos!');
    }
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        Navigate('/admin', { replace: true });
        setEmail('');
        setPassword('');
        alert('Usuário logado com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao fazer login:', error);
        alert('Erro ao fazer login. Verifique suas credenciais.');
      });
    
  }

  return (
    <div className='flex flex-col w-full h-screen py-4 items-center justify-center'>
      <h1>
        <Link to="/">
          <h1 className='mt-11 text-white mb-7 font-bold text-5xl'>
            Arvores
            <span className='bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent'> de Links</span>
          </h1>
        </Link>
        <form
         className="w-full maax-w-xl flex flex-col gap-4"
         onSubmit={handleSubmit}
         >
          <Input 
          placeholder='Digite o seu Email...'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <Input 
          placeholder='***********'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className='cursor-pointer w-full max-w-lg px-4 py-2 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors '
            type='submit'
          >
            <span className='text-gray-800 dark:text-gray-200 font-bold '>Entrar</span>
          </button>
        </form>
      </h1>
    </div>
  )
}
