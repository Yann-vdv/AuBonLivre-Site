import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LOGO from "../../images/LISTO.png"
import HIDE from "../../images/icons/hide.png"
import SHOW from "../../images/icons/show.png"
import "../../styles/register.css";
import userRequest from '../../api/user';

function Register() {

  const [showPass,setShowPass] = useState(false);
  const navigate = useNavigate();

  const [registerData,setRegisterData] = useState({
    username:"",
    email:"",
    password:"",
    password2:""
  })

  const handleSubmit = (event:any) => {
    event.preventDefault();
    userRequest.register(registerData)
    .then((res) => {
      navigate('/')
    })
    .catch((err) => {
      console.error('Erreur inscription',err);
    })
  }

  return (
    <div className='page'>
      <div className="page-register pt-4 pb-1">
        <h2 className='font-semibold text-xl'>Créer un compte</h2>
        <p className='register-explain'>Créer un compte pour accéder à toute nos fonctionnalités</p>

        <div className="register-form">
          <form className="space-y-6" onSubmit={handleSubmit} autoComplete="on">
            <div className='register-name'>
              <label htmlFor="email">Pseudonyme</label>
              <input id="pseudo" name="pseudo" type="text" required 
                value={registerData.username} onChange={(e) => setRegisterData({...registerData, username: e.target.value})}/>
            </div>
            
            <div className='register-email'>
              <label htmlFor="email">E-mail</label>
              <input id="email" name="email" type="email" required 
                value={registerData.email} onChange={(e) => setRegisterData({...registerData, email: e.target.value})}/>
            </div>

            <div className="register-password">
              <label htmlFor="password">Mot de passe</label>
              <input id="password" name="password" type={showPass ? "text" : "password"} required
                value={registerData.password} onChange={(e) => setRegisterData({...registerData, password: e.target.value})}/>
            </div>

            <div className="register-password">
              <label htmlFor="password2">Confirmer le mot de passe</label>
              <input id="password2" name="password2" type={showPass ? "text" : "password"} required
                value={registerData.password2} onChange={(e) => setRegisterData({...registerData, password2: e.target.value})}/>
            </div>

            <button type="submit" className="register-submit">S'incrire</button>
          </form>

          <p className='register-login' onClick={() => navigate('/')}>Déjà un compte ?</p>
        </div>
      </div>
    </div>
  );
}

export default Register;