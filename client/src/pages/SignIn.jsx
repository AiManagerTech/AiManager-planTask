// Dependencies
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Authentification on Firebase
import { useAuth } from '../firebase/authContext';

// Components

// Media

// Main function
const LogIn = () => {
  // Authentification on Firebase
  const { login, loginWhitGoogle, loginWhitFacebook, resetPassword } =
    useAuth();
  // console.log(user);

  const navigate = useNavigate();

  // Database
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState();

  // Funtions
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  // --> Error, no me está devolviendo el error
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(user.email, user.password);
      navigate('/');
    } catch (error) {
      console.log('error.message', error.message);
      setError(error.message);
    }
  };

  // Google Sigin
  const handleGoogleSigin = async () => {
    try {
      await loginWhitGoogle();
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  // Facebook Sigin
  const handleFacebookSigin = async () => {
    try {
      await loginWhitFacebook();
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  // Reset Password
  const handleResetPassword = async () => {
    if (!user.email) return setError('Please enter your email');
    try {
      await resetPassword(user.email);
      setError(
        'An email has been sent with a link to reset your password. Don`t forget to check spam'
      );
    } catch (error) {
      setError(error.message);
    }
  };

  // JSX
  // TODO: center content vertically
  return (
    <div className="flex flex-col min-h-screen overflow-hidden font-Raleway">
      {/*  Page content */}
      <main className="flex-grow">
        <section className="">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col justify-center">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="title">Bienvenido de nuevo!.</h1>
                <p className="subTitle">
                  Existimos para hacer más fácil el emprendimiento.
                </p>
              </div>

              {/* Form with Email*/}
              <div className="max-w-sm mx-auto">
                <form onSubmit={handleSubmit}>
                  {/* Email */}
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="label" htmlFor="email">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-input w-full inputInline"
                        placeholder="Ingrese su email"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  {/* Password */}
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label className="label" htmlFor="password">
                          Contraseña
                        </label>
                        <a
                          href="#!"
                          onClick={handleResetPassword}
                          className="text-sm font-medium text-orange-600 hover:underline cursor-pointer"
                        >
                          ¿Tiene problemas para iniciar sesión?
                        </a>
                      </div>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        className="form-input w-full inputInline"
                        placeholder="Ingresa tu contraseña"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  {/* Error */}
                  {error && (
                    <div className="flex flex-wrap my-6">
                      <div className="w-full px-4 py-2 bg-red-100 border border-red-500 rounded-full text-center">
                        <p className="text-red-500 font-bold">{error}</p>
                      </div>
                    </div>
                  )}
                  {/* Keep Sigin */}
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox" />
                          <span className="text-gray-600 ml-2">
                            Mantenerme registrado
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* Submit */}
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button type="submit" className="btn-primary w-full">
                        Ingresar
                      </button>
                    </div>
                  </div>
                </form>

                {/* Divider */}
                <div className="flex items-center my-6">
                  <div
                    className="border-t border-gray-300 flex-grow mr-3"
                    aria-hidden="true"
                  ></div>
                  <div className="text-gray-600 italic">O</div>
                  <div
                    className="border-t border-gray-300 flex-grow ml-3"
                    aria-hidden="true"
                  ></div>
                </div>

                {/* Login with Social Provider*/}
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full px-3">
                    <button
                      onClick={handleFacebookSigin}
                      className="py-2 px-4 bg-blue-700 text-white font-semibold rounded-full shadow-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 m-1 flex justify-center my-4 w-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                      </svg>
                      <span className="flex-auto pl-16 pr-8 -ml-16">
                        Continuar con Facebook
                      </span>
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full px-3">
                    <button
                      onClick={handleGoogleSigin}
                      className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75 m-1 flex justify-center my-4 w-full"
                    >
                      <svg
                        className="fill-current text-white flex-shrink-0"
                        width="22"
                        height="22"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                      </svg>
                      <span className="flex-auto pl-16 pr-8 -ml-16">
                        Continuar con Google
                      </span>
                    </button>
                  </div>
                </div>
                {/* </form> */}

                {/* Register */}
                {/* <div className="text-gray-600 text-center mt-6">
                  ¿No tienes una cuenta?{' '}
                  <Link
                    to="/register"
                    className="text-orange-500 hover:underline transition duration-150 ease-in-out"
                  >
                    Registrarse
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LogIn;
