import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { FA_IR } from '../language/fa_IR'
import { Button, TextInput } from '../components/core'
//@ts-ignore
import AuthLogin from '../assets/undraw_account_re_o7id-blue.svg'

const defaultValues = { email: '', password: '' }
const LoginFormValidation = yup.object({
  email: yup
    .string()
    .email(FA_IR.ErrorEmailFormat)
    .required(FA_IR.ErrorRequired),
  password: yup.string().required(FA_IR.ErrorRequired),
})

const Login = () => {
  const {
    handleSubmit,
    formState: { errors},
    control,
    resetField,
    register,
  } = useForm({
    resolver: yupResolver(LoginFormValidation),
    defaultValues,
  })
  const onSubmit = (data) => console.log(data)

  return (
    <section className="w-full h-screen flex items-center justify-center px-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-5 w-4/5"
      >
        <div className="card w-full lg:w-4/5 bg-indigo-200 shadow-xl p-3 rounded-lg">
          <div className="card-body">
            <h5 className="card-title mx-auto text-center">{FA_IR.Welcome}</h5>
            <div className="mt-5">
              <Controller
                control={control}
                name="email"
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <TextInput
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    
                    placeholder={FA_IR.Email}
                    ref={ref}
                  />
                )}
              />
              {errors.email && (
                <p className="text-red-600 font-bold my-1">{errors.email.message}</p>
              )}

              <Controller
                control={control}
                name="password"
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <TextInput
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    className="mt-5"
                    placeholder={FA_IR.Password}
                    type="password"
                    ref={ref}
                  />
                )}
              />
              {errors.password && (
                <p className="text-red-600 font-bold my-1">{errors.password.message}</p>
              )}
            </div>
          <Button className="btn-secondary w-full mt-5" type="submit">{ FA_IR.Login}</Button>
          </div>
        </div>
      </form>
      <img src={AuthLogin} alt="AuthLogin" className='hidden lg:block w-1/2' />
    </section>
  )
}

export default Login
