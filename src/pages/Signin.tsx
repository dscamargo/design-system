import { FormEvent, useCallback, useState } from 'react';
import { Envelope, Lock } from 'phosphor-react'
import axios from 'axios'

import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { Heading } from "../components/Heading";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import Logo from "../Logo";

export function Signin(){
  const [isUserSignedIn, setIsUserSignedIn] = useState(false)

  const handleSignin = useCallback(async(e: FormEvent)=>{
    e.preventDefault();

    await axios.post('/sessions', {
      email: 'admin@dscamargo.com',
      password: 'password'
    })

    setIsUserSignedIn(true)
  }, [])

  return (
    <div className='w-screen h-screen bg-gray-900 flex items-center justify-center flex-col'>
    <header className='flex flex-col items-center'>
      <Logo />
      <Heading size='lg' className='mt-4'>Ignite Lab</Heading>
      <Text size='lg' className='text-gray-400 mt-3'>Faça login e comece a usar</Text>
    </header>

    <form onSubmit={handleSignin} className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'>
      {isUserSignedIn && <Text>Login realizado</Text>}

      <label htmlFor='email' className='flex flex-col gap-3'>
        <Text className='font-semibold'>Endereço de E-mail</Text>
        <TextInput.Root>
          <TextInput.Icon>
            <Envelope />
          </TextInput.Icon>

          <TextInput.Input id='email' placeholder='Digite seu e-mail'></TextInput.Input>

        </TextInput.Root>
      </label>

      <label htmlFor='password' className='flex flex-col gap-3'>
        <Text className='font-semibold'>Sua senha</Text>
        <TextInput.Root>

          <TextInput.Icon>
            <Lock />
          </TextInput.Icon>

          <TextInput.Input type='password' placeholder='*********'></TextInput.Input>

        </TextInput.Root>
      </label>

      <label htmlFor='remember' className='flex items-center gap-2'>
        <Checkbox id='remember' />
        <Text size='sm' className='text-gray-200'>Lembrar me por 30 dias</Text>
      </label>

      <Button type='submit' className='mt-4'>
        Entrar na plataforma
      </Button>

      <footer className='flex items-center flex-col gap-4 mt-8'>
        <Text size='sm' asChild>
          <a href='' className='text-gray-400 underline text-sm hover:text-gray-200 cursor-pointer'>Esqueceu sua senha ?</a>
        </Text>
        <Text size='sm' asChild>
          <a href='' className='text-gray-400 underline text-sm hover:text-gray-200 cursor-pointer'>Não possui conta? Crie uma agora</a>
        </Text>
      </footer>

    </form>
  </div>
  )
}