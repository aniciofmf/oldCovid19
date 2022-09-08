import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import Loading from '../components/loading'
import { getToken } from '../services/business'
import { setTraveler } from '../redux/store'

export default () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()

  if (loading) return <Loading />

  return (
    <div className="h-screen bg-gray-200">
      <header className="flex justify-center pt-16">
        <div><img src="/img/logo_dnm.png?v1" width="108" alt="Dirección Nacional de Migraciones" /></div>
      </header>
      <div className="p-4 text-center font-bold text-2xl text-blue-900 leading-tight">Cuidá la vida, <br/> quedate en casa</div>
      <footer className="fixed w-full bottom-0 py-16 px-4 justify-center">
        <div>
          <div className="text-base font-semibold bg-blue-400 p-2 rounded-lg text-white text-center w-full mb-3 shadow-md">Quiero registrarme</div>
          <div
            className="text-base font-semibold text-blue-400 border border-blue-400 rounded-lg text-center p-2 w-full"
            onClick={() => {
              const token: Token = getToken()
              if (!token) {
                setLoading(true)
                router.push('/login')
              } else {
                dispatch(setTraveler(token.traveler))
                router.push('/home')
              }
            }}
          >
            Ya me registre
          </div>
        </div>
      </footer>
    </div>
  )
}
