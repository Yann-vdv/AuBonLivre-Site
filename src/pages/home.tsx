import React from 'react';
import { useAuth } from '../context/Auth';

function Home() {

  const { user,logout } = useAuth();

  console.log('user',user)

    React.useEffect(() => {
        console.log("i'm home")
    })

  return (
    <div className="Home">
        Home
        <button onClick={() => logout()}>deco</button>
    </div>
  );
}

export default Home;