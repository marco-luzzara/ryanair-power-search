import { Airport } from "./model/Airport"
import { ListAvailableOneWayFlightsParams, ListAvailableRoundTripFlightsParams } from "./model/ListAvailableFlightParams"

export default class ApiEndpointBuilder {
    // ******** AIRPORTS ********

    public static listAirports(languageLocale: string): string {
        return `https://www.ryanair.com/api/views/locate/5/airports/${languageLocale}/active`
    }

    public static listDestinationAirports(originAirport: Airport, languageLocale: string): string {
        return `https://www.ryanair.com/api/views/locate/searchWidget/routes/${languageLocale}/airport/${originAirport.code}`
    }

    // ******** MISCELLANEOUS ********

    public static listCountries(languageLocale: string): string {
        return `https://www.ryanair.com/api/views/locate/3/countries/${languageLocale}`
    }

    public static listCurrencies(): string {
        return `https://www.ryanair.com/api/booking/v4/en-ie/res/currencies`
    }

    public static createSession(): string {
        return `https://www.ryanair.com/gb/en/trip/flights/select`
    }

    // ******** FARES ********

    public static listAvailableDatesForFare(originAirport: Airport, destinationAirport: Airport): string {
        return `https://www.ryanair.com/api/farfnd/v4/oneWayFares/${originAirport.code}/${destinationAirport.code}/availabilities`
    }

    public static listAvailableFlights(
        params: ListAvailableOneWayFlightsParams | ListAvailableRoundTripFlightsParams
    ): string {
        const baseParams = {
            'ADT': params.adults,
            'CHD': params.children ?? 0,
            'TEEN': params.teenagers ?? 0,
            'INF': params.infants ?? 0,
            'DateOut': ApiEndpointBuilder.toRyanAirStringDate(params.dateOut),
            'Destination': params.destination.code,
            'Origin': params.origin.code,
            'promoCode': params.promoCode ?? '',
            'IncludeConnectingFlights': params.includeConnectingFlights,
            'FlexDaysBeforeOut': params.flexDaysBeforeOut,
            'FlexDaysOut': params.flexDaysOut,
            'RoundTrip': params.roundTrip,
            'ToUs': 'AGREED'
        }
        let roundTripParams = {}
        if (params.roundTrip === true) {
            roundTripParams = {
                'DateIn': ApiEndpointBuilder.toRyanAirStringDate(params.dateIn),
                'FlexDaysBeforeIn': params.flexDaysBeforeIn,
                'FlexDaysIn': params.flexDaysIn
            }
        }
        const paramsMap = { ...baseParams, ...roundTripParams }
        const urlParams = new URLSearchParams(paramsMap as any).toString()

        return `https://www.ryanair.com/api/booking/v4/en-EN/availability?${urlParams}`
    }

    private static toRyanAirStringDate(date: Date): string {
        const year = date.getFullYear()
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const day = date.getDate().toString().padStart(2, '0')
        return `${year}-${month}-${day}`;
    }
}