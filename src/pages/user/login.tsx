import { useState } from 'react';
// import { useAuth } from '../../context/Auth';
import { useNavigate } from 'react-router-dom';
import LOGO from "../../images/LISTO.png"
import HIDE from "../../images/icons/hide.png"
import SHOW from "../../images/icons/show.png"
import "../../styles/login.css";
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
    <div className="page-login">
        <h2>Bonjour!</h2>
        <p className='login-explain'>Connectez-vous pour découvrir toutes nos fonctionnalités</p>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <div className='login-email'>
            <label htmlFor="email">E-mail</label>
            <div>
              <input id="email" name="email" type="email" autoComplete="email" required
                value={loginData.email} onChange={(e) => setLoginData({...loginData, email: e.target.value})}
              />
            </div>
          </div>

          <div>
            <div className='login-password'>
              <label htmlFor="password">Mot de passe</label>
              <input id="password" name="password" type={showPass ? "text" : "password"} required
                value={loginData.password} onChange={(e) => setLoginData({...loginData, password: e.target.value})}
              />
            </div>
          </div>

          <div>
            <button className='login-submit' type="submit" >Connexion</button>
          </div>
        </form>
        <p className='login-or'>------------------  ou  ------------------</p>
        <p className='login-signin' onClick={() => navigate('inscription')}>Pas de compte ?</p>
      </div>
    </div>
  );
}

export default Login;