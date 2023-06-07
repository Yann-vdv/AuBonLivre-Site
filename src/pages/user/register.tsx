import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LOGO from "../../images/LISTO.png"
import HIDE from "../../images/icons/hide.png"
import SHOW from "../../images/icons/show.png"
import "../../styles/register.css";

function Register() {

  const [showPass,setShowPass] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="page-register">
        <h2>Créer un compte</h2>
        <p className='register-explain'>Créer un compte pour accéder à toute nos fonctionnalités</p>

      <div className="register-form">
        <form className="space-y-6" action="#" method="POST" autoComplete="on">
          <div className='register-name'>
              <label htmlFor="email">Pseudonyme</label>
              <input id="pseudo" name="pseudo" type="text" required />
          </div>
          
          <div className='register-email'>
              <label htmlFor="email">E-mail</label>
              <div>
              <input id="email" name="email" type="email" required />
              </div>
          </div>

            <div className="register-password">
              <label htmlFor="password">Mot de passe</label>
              <input id="password" name="password" type={showPass ? "text" : "password"} required/>
            </div>

            <button type="submit" className="register-submit">S'incrire</button>
        </form>

        <p className='register-login' onClick={() => navigate('/')}>Déjà un compte ?</p>
      </div>
    </div>
  );
}

export default Register;