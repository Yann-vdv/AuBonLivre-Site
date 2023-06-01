import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LOGO from "../../images/LISTO.png"
import HIDE from "../../images/icons/hide.png"
import SHOW from "../../images/icons/show.png"

function Register() {

  const [showPass,setShowPass] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-44 rounded-3xl w-auto" src={LOGO} alt="LISTO"/>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">S'inscrire</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST" autoComplete="on">
          <div className='grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className="sm:col-span-3">
              <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">Nom</label>
              <div className="mt-2">
                <input id="lastName" name="lastName" type="text" required className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">Prénom</label>
              <div className="mt-2">
                <input id="firstName" name="firstName" type="text" required className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Adresse email</label>
            <div className="mt-2">
              <input id="email" name="email" type="email" required className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Mot de passe</label>
            </div>
            <div className="mt-2 relative">
              <input id="password" name="password" type={showPass ? "text" : "password"} required className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              <div className='absolute inset-y-0 right-0 items-center flex mr-3 cursor-pointer' onClick={() => setShowPass(!showPass)}>
                <img className='w-5' src={showPass ? SHOW : HIDE} alt='SHOW/HIDE'/>
              </div>
            </div>
          </div>

          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Inscription</button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer" onClick={() => navigate('/')}>Déjà un compte ?</p>
      </div>
    </div>
  );
}

export default Register;