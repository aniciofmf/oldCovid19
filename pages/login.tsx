import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import Loading from '../components/loading'
import { login, setToken } from '../services/business'
import { setTraveler } from '../redux/store'

export default () => {
  const [loading, setLoading] = useState(false)
  const [dni, setDNI] = useState('')
  const [hasErrors, setHasErrors] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()

  if (loading) return <Loading />

  const confirm = () => {
    setLoading(true)
    login(dni).then((token: Token) => {
      if (token.traveler) {
        dispatch(setTraveler(token.traveler))
        setToken(token)
        router.push('/home')
      } else {
        setLoading(false)
        setHasErrors(true)
      }
    })
  }

  return (
    <div className="h-screen bg-gray-200">
      <header className="text-center pt-12">
        <div className="text-blue-900 font-bold text-2xl pt-4 mb-2">Ingresar</div>
        <div className="text-gray-600 text-lg leading-snug">Ingresá tu número de documento <br/> y luego tomate una selfie para <br/> validar tu identidad </div>
      </header>
      <article className="pt-16 p-4">
        <div>
          <div className="text-sm text-blue-900 px-1">Ingresá tu DNI</div>
          <input
            className={`px-3 mt-2 h-10 w-full rounded-lg shadow-xs focus:outline-none ${hasErrors ? 'border border-red-600' : ''}`}
            value={dni}
            type="tel"
            placeholder="20123123"
            onChange={(e) => {
              setDNI(e.target.value)
            }}
          />
          {hasErrors ? <div className="text-sm text-red-600 pt-1">Lo sentimos, ese DNI no está registrado</div> : ''}
        </div>
        <div className="py-4">
          <button
            className={`w-full h-10 text-white font-semibold rounded-lg ${dni ? 'bg-blue-400 shadow-md' : 'bg-gray-400 '}`}
            type="button"
            onClick={() => {
              setHasErrors(false)
              confirm()
            }}
          >
            Ingresar

          </button>
        </div>
      </article>
    </div>
  )
}
