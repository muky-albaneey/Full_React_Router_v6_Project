import { Form, redirect, useActionData, useLoaderData, useNavigate, useNavigation, useSearchParams } from 'react-router-dom'
import { loginUser } from '../../Api';
import './login.css';

export async function loginLoader({request}){
  return new URL(request.url).searchParams.get("message");
}

  export async function actionLoader({request}) {
      const formData = await request.formData();
      const email = formData.get('email');
      const password = formData.get('password');
      const pathName = new URL(request.url).searchParams.get("redirectTo") || '/host';
    
      try {

        const data = await loginUser({email, password}); 
        localStorage.setItem("loggedIn", true);
        // console.log(data)
        return redirect(pathName)
      } catch (err) {

        return err.message
      }
    
  }
const Login = () => {
  // const [message] = useSearchParams()
  const errorMessage = useActionData();
  const message = useLoaderData();  
  const navigation = useNavigation();
  const navigate= useNavigate();
  const isLoggedIn = localStorage.getItem("loggedIn");
  
  if(isLoggedIn){
    navigate('/host', {replace : true})
  }
  // console.log(navigation)
  return (
    <div className='formWrapper flexColStart '>

      {message && <h2>{message}</h2>}
      {errorMessage ? <h2>{errorMessage}</h2> : null}
       <Form 
                method="post" 
               className='form flexColStart'
               replace
            >
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button disabled={navigation.state === "submitting"} className='lBtn'>
                   {navigation.state === "submitting" ? "Logginin..." : "Login"}
                </button>
               
            </Form>
    </div>
  )
}

export default Login
