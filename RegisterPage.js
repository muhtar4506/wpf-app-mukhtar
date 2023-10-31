import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../../utils/context/AuthContext'
import { useAuth } from '../../../utils/hooks/auth.hook'
import { useHttp } from '../../../utils/hooks/http.hook'
import { useMessage } from '../../../utils/hooks/message.hook'
import logo from '../../../utils/img/logo.jpg'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import useLocalStorage from 'use-local-storage'

export const RegisterPage=()=>{


  const auth = useContext(AuthContext)
  const [user,setUser]=useLocalStorage("user", {})
  const message = useMessage()
  const history = useHistory()
  const {loading, request, error, clearError} = useHttp()
  const [form, setForm] = useState({
   firstname:'',lastname:'', email: '', password: '',confirmPassword:''
  })

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])


  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    console.log(form)
   setUser(form)
  //  history.push('/login')
  }
    return(
      <div
      class="min-h-screen flex flex-col items-center justify-center"
    >
      <div
        class="
          flex flex-col
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-8
          w-50
          max-w-md
        "
      >
         
        <div class="font-medium self-center text-xl sm:text-3xl text-gray-800">
          Регистрация
        </div>

        <div class="mt-10">
       
            <div class="flex flex-col mb-5">
              <label
                for="firstname"
                class="mb-1 text-xs tracking-wide text-gray-600"
                >Имя:</label
              >
              <div class="relative">
                <div
                  class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <i class="fas fa-user text-blue-500"></i>
                </div>

                <input
                  id="firstname"
                  type="text"
                  name="firstname"
                  onChange={changeHandler}
                  class="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Введите своё имя"
                />
              </div>
            </div>
            <div class="flex flex-col mb-5">
              <label
                for="lastname"
                class="mb-1 text-xs tracking-wide text-gray-600"
                >Фамилия:</label
              >
              <div class="relative">
                <div
                  class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <i class="fas fa-user text-blue-500"></i>
                </div>

                <input
                  id="lastname"
                  type="text"
                  name="lastname"
                  onChange={changeHandler}
                  class="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Введите фамилию"
                />
              </div>
            </div>
            <div class="flex flex-col mb-5">
              <label
                for="middlename"
                class="mb-1 text-xs tracking-wide text-gray-600"
                >Отчество:</label
              >
              <div class="relative">
                <div
                  class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <i class="fas fa-user text-blue-500"></i>
                </div>

                <input
                  id="middlename"
                  type="text"
                  name="middlename"
                  onChange={changeHandler}
                  class="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Введите отчество"
                />
              </div>
            </div>
            <div class="flex flex-col mb-5">
              <label
                for="email"
                class="mb-1 text-xs tracking-wide text-gray-600"
                >Почта:</label
              >
              <div class="relative">
                <div
                  class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <i class="fas fa-at text-blue-500"></i>
                </div>

                <input
                  id="email"
                  type="email"
                  name="email"
                  onChange={changeHandler}
                  class="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Введите email"
                />
              </div>
            </div>
            <div class="flex flex-col mb-6">
              <label
                for="password"
                class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >Пароль:</label
              >
              <div class="relative">
                <div
                  class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <span>
                    <i class="fas fa-lock text-blue-500"></i>
                  </span>
                </div>

                <input
                  id="password"
                  type="password"
                  name="password"
                  onChange={changeHandler}
                  class="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Введите пароль"
                />
              </div>
            </div>
            <div class="flex flex-col mb-6">
              <label
                for="password"
                class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >Подтвердите пароль:</label
              >
              <div class="relative">
                <div
                  class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <span>
                    <i class="fas fa-lock text-blue-500"></i>
                  </span>
                </div>

                <input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  onChange={changeHandler}
                  class="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Введите пароль ещё раз"
                />
              </div>
            </div>

            <div class="flex w-full">
              <button
                type="submit"
                onClick={registerHandler}
                class="
          
                "
              >
                <span class="mr-2 uppercase">Зарегистрироваться</span>
                <span>
             
                </span>
              </button>
            </div>
       
        </div>
      </div>
      <div class="flex justify-center items-center mt-6">
        <a
          href="#"
          target="_blank"
          class="
            inline-flex
            items-center
            text-gray-700
            font-medium
            text-xs text-center
          "
        >
          <span class="ml-2"
            > 
            <NavLink
              to="/login"
              class="text-xs ml-2 text-blue-500 font-semibold"
              >войти</NavLink
            ></span
          >
        </a>
      </div>
    </div>
    )
}