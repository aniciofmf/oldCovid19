type Traveler = {
    dni: string
    firstName: string
    lastName: string
    email: string
    phone: string,
    quarantineAddress?: {
        logitude: number,
        latitude: number,
        ref: string
    }
}

type TravelerTrackEvent = {
    dni: string
    happendAt: number
    kind: 'INFO' | 'REGISTER' | 'ALIVE'
    latitude: number
    longitude: number
    symtoms:Array<string>
}

type Token = {
    traveler: Traveler
}
