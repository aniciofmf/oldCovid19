import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import moment from 'moment'
import axios from 'axios'
import Link from 'next/link'
import { newTrack } from '../redux/store'
import { getToken, SYMTOMS } from '../services/business'

const STYLE_SELECTED = 'rounded-lg border border-orange-400 bg-orange-400 text-white text-base font-bold'
const STYLE_UNSELECTED = 'rounded-lg border border-orange-400 text-orange-400 text-base font-bold'

export default () => {
  const [geoSupport, setGeoSupport] = useState<boolean>(false)
  // const traveler: TravelerTrackEvent = useSelector((state) => state.travelerTracker.traveler)
  const [myPosition, setMyPosition] = useState(null)
  const [token, setToken] = useState<Token>(null)
  const [showSucess, setShowSuccess] = useState(false)
  const [symtoms, setSymtoms] = useState < {
    fever: boolean,
    cough: boolean,
    shortnessBreath: boolean,
  } >({
    fever: false,
    cough: false,
    shortnessBreath: false,
  })

  const dispatch = useDispatch()
  const myTrace : Array<TravelerTrackEvent> = useSelector((state) => state.travelerTracker.trace)
  useEffect(() => {
    const t : Token = getToken()
    const setPosition = (position) => {
      setMyPosition(position)
      setToken(t)
      dispatch(newTrack({
        happendAt: new Date().getTime(),
        kind: 'ALIVE',
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        dni: t.traveler.dni,
        symtoms: [],

      }))
      // console.log(myPosition)
    }

    if (navigator.geolocation) {
      setGeoSupport(true)
      navigator.geolocation.getCurrentPosition(setPosition)
    } else {
      setGeoSupport(false)
    }
  }, [])

  const Success = () => (
    <div className="h-screen flex justify-center items-center">
      <div className="">
        <div className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
          <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
          <p>Gracias por informar sobre tus síntomas.</p>
        </div>
        <Link href="/home">
          <div className="text-center mt-4">
            Volver al home
          </div>
        </Link>
      </div>
    </div>
  )
  const report = (track: TravelerTrackEvent) => {
    axios.post('https://us-central1-travelertracker.cloudfunctions.net/newTrackTraveler', track)
    setShowSuccess(true)
  }

  const reportSymtom = () => {
    const newSymtoms = []
    if (symtoms.cough) { newSymtoms.push(SYMTOMS.COUGH) }

    if (symtoms.fever) { newSymtoms.push(SYMTOMS.FEVER) }

    if (symtoms.shortnessBreath) { newSymtoms.push(SYMTOMS.SHORTNESS_OF_BREATH) }

    const t: TravelerTrackEvent = {
      happendAt: new Date().getTime(),
      kind: 'INFO',
      latitude: myPosition.coords.latitude,
      longitude: myPosition.coords.longitude,
      dni: token.traveler.dni,
      symtoms: newSymtoms,
    }

    dispatch(newTrack(t))
    report(t)
  }

  const reportAlive = () => {
    const t: TravelerTrackEvent = {
      happendAt: new Date().getTime(),
      kind: 'ALIVE',
      latitude: myPosition.coords.latitude,
      longitude: myPosition.coords.longitude,
      dni: token.traveler.dni,
      symtoms: [],
    }
    dispatch(newTrack(t))
    report(t)
  }


  if (showSucess) return <Success />

  return (
    <div className="h-screen bg-gray-200">
      <header className="px-4 pt-24 pb-6 bg-blue-400 text-white rounded-b-lg">
        <div className="text-2xl font-bold mb-2 leading-tight">¿Vos, o algunas de las personas de tu grupo, presentan o presentaron algún síntoma?</div>
        <div className="flex text-base text-gray-200">
          <div className="w-full">Seleccioná uno o varios</div>
        </div>
      </header>
      <article className="px-4 pt-8 pb-12">
        <div>
          <div>
            <div
              onClick={() => setSymtoms({ ...symtoms, fever: !symtoms.fever })}
              className={`p-2 text-center mb-3 w-full ${symtoms.fever ? STYLE_SELECTED : STYLE_UNSELECTED}`}
            >
              Fiebre (+38)

            </div>
            <div
              onClick={() => setSymtoms({ ...symtoms, cough: !symtoms.cough })}
              className={`p-2 text-center mb-3 w-full ${symtoms.cough ? STYLE_SELECTED : STYLE_UNSELECTED}`}
            >
              Tos seca

            </div>
            <div
              onClick={() => setSymtoms({ ...symtoms, shortnessBreath: !symtoms.shortnessBreath })}
              className={`p-2 text-center mb-3 w-full ${symtoms.shortnessBreath ? STYLE_SELECTED : STYLE_UNSELECTED}`}
            >
              Falta de aliento

            </div>
          </div>
        </div>
        <footer>
          {symtoms.cough || symtoms.fever || symtoms.shortnessBreath ? <div className="p-2 bg-red-700 text-white text-center w-full rounded-lg font-bold" onClick={() => reportSymtom()}>Informar situación</div> : <div className="p-2 border border-teal-500 text-teal-500 text-center w-full rounded-lg font-bold" onClick={() => reportAlive()}>Ningún síntoma</div>}
        </footer>
      </article>
      <div className="text-center text-xs fixed inset-x-0 bottom-0 p-4 ">{myPosition ? `Mi Ubicación ${myPosition.coords.latitude} - ${myPosition.coords.longitude}` : 'GPS no está disponible'}</div>
    </div>
  )
}
