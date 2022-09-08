/* eslint-disable max-len */
// export setToken()

import { getTraveler } from './dataaccess'

export enum SYMTOMS {
    FEVER='FEVER',
    COUGH='COUGH',
    SHORTNESS_OF_BREATH='SHORTNESS_OF_BREATH'
}

export const login = (id: string) : Promise<Token> => getTraveler(id).then((t: Traveler) => ({ traveler: t } as Token))

export const getToken = () : Token => (sessionStorage.getItem('token') ? JSON.parse(atob(sessionStorage.getItem('token'))) : null)
export const setToken = (token: Token) : void => sessionStorage.setItem('token', btoa(JSON.stringify(token)))
