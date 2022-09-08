import React, { useState, useEffect } from 'react'
import * as facemesh from '@tensorflow-models/facemesh'
import Link from 'next/link'
import Page from '../../components/page'

export default () => (
  <Page>
    <header className="p-4 bg-blue-400 rounded-b-lg text-white">
      <div className="flex mb-8">
        <div className="flex items-center">
          <div><IconBack /></div>
          <Link href="/signup/quarantine_address">
            <div className="ml-2">Volver</div>
          </Link>
        </div>
        <div className=" flex justify-end w-full">
          <div className="bg-gray-200 text-gray-600 font-bold px-2 rounded-full">
            <div>Paso 4: Síntomas</div>
          </div>
        </div>
      </div>
      <div className="text-2xl font-bold">
        ¿Vos, o algunas de las personas de tu grupo, presentan o presentaron algún síntoma?
      </div>
      <div className="text-base font-thin mt-2">
        Seleccioná uno o varios
      </div>
    </header>

    <footer className="px-4 py-2 mx-4 rounded-lg fixed inset-x-0 bottom-0 flex justify-center bg-blue-400 mb-8">
      <Link href="/signup/active_gps">
        <button className=" text-white font-semibold" type="button">Continuar</button>
      </Link>
    </footer>

  </Page>
)


const IconBack = () => (
  <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M9.53714 20.0827L0.292152 10.9458C-0.097384 10.5612 -0.097384 9.93981 0.292152 9.5542L9.53714 0.417333C10.0995 -0.139111 11.0144 -0.139111 11.5777 0.417333C12.14 0.973776 12.14 1.87687 11.5777 2.43332L3.66913 10.2505L11.5777 18.0657C12.14 18.6231 12.14 19.5262 11.5777 20.0827C11.0144 20.6391 10.0995 20.6391 9.53714 20.0827Z" fill="white" />
  </svg>

)
