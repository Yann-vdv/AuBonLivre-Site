import { useState } from 'react';
// import { useAuth } from '../../context/Auth';
import { useNavigate } from 'react-router-dom';
import LOGO from "../../images/LISTO.png"
import HIDE from "../../images/icons/hide.png"
import SHOW from "../../images/icons/show.png"
import userRequest from '../../api/user';
import { useAuth } from '../../context/Auth';

function Login() {

  const [showPass,setShowPass] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const [loginData,setLoginData] = useState({
    email:"",
    password:""
  }) 

  const handleSubmit = (event:any) => {
    event.preventDefault();
    // userRequest.login(loginData)
    // .then((res) => {
    //   console.log('res',res)
    // })
    // .catch((err) => {

    // })
    login({logged:true, id:1, token:'token'})
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-44 rounded-3xl w-auto" src={LOGO} alt="LISTO"/>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Se connecter</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Adresse email</label>
            <div className="mt-2">
              <input id="email" name="email" type="email" autoComplete="email" required className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={loginData.email} onChange={(e) => setLoginData({...loginData, email: e.target.value})}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Mot de passe</label>
            </div>
            <div className="mt-2 relative">
              <input id="password" name="password" type={showPass ? "text" : "password"} required className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={loginData.password} onChange={(e) => setLoginData({...loginData, password: e.target.value})}
              />
              <div className='absolute inset-y-0 right-0 items-center flex mr-3 cursor-pointer' onClick={() => setShowPass(!showPass)}>
                <img className='w-5' src={showPass ? SHOW : HIDE} alt='SHOW/HIDE'/>
              </div>
            </div>
          </div>

          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Connexion</button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer" onClick={() => navigate('inscription')}>Pas de compte ?</p>
      </div>
    </div>
  );
}

export default Login;