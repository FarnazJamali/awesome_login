import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { FA_IR } from '../language/fa_IR'
import { Button, TextInput } from '../components/core'

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
    formState: { errors, isSubmitSuccessful },
    control,
    resetField,
    register,
  } = useForm({
    resolver: yupResolver(LoginFormValidation),
    defaultValues,
  })
  const onSubmit = (data) => console.log(data)

  return (
    <section className="w-full h-screen flex items-center justify-center lg:justify-between gap-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-5 w-4/5 sm:w-3/5 lg:w-1/3"
      >
        <div className="card w-full lg:w-96 bg-red-300 shadow-xl">
          <div className="card-body">
            <h2 className="card-title mx-auto">{FA_IR.Welcome}</h2>
            <div className="mt-10">
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
                    className="my-3 outline outline-purple-400 focus:outline-purple-300"
                    placeholder={FA_IR.Email}
                    ref={ref}
                  />
                )}
              />
              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
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
                    className="my-3 outline outline-purple-400 focus:outline-purple-300"
                    placeholder={FA_IR.Password}
                    type="password"
                    ref={ref}
                  />
                )}
              />
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}
            </div>
          </div>
        </div>
        <input type="submit" />
      </form>
    </section>
  )
}

export default Login
