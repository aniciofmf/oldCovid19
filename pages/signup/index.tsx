import React from 'react'
import Link from 'next/link'
import Page from '../../components/page'

export default () => {
  console.log('')
  return (
    <Page>
      <header className="p-4 text-center text-gray-600 text-blue-800 mx-8 text-lg ">
        <div className="text-2xl font-bold mt-8 ">Empecemos el proceso con algunas fotos</div>
        <div className="mt-4">A continuación, vamos a necesitar que saques algunas fotos, tené tu pasaporte a mano. </div>
        <div className="mt-4">Después, vamos a completar 4 pasos con distinta información.</div>
        <div className="mt-4">¿Empezamos?</div>
        <footer className="fixed inset-x-0 bottom-0 p-8">
          <Link href="/signup/profile">
            <button className="bg-blue-400 text-white w-full p-2 shadow rounded-lg" type="button">Comenzar el registro</button>
          </Link>
        </footer>
      </header>
    </Page>
  )
}
