export default class ApiEndpointBuilder {
    public static listAirports(languageLocale: string): string {
        return `https://www.ryanair.com/api/views/locate/5/airports/${languageLocale}/active`
    }

    public static listCountries(languageLocale: string): string {
        return `https://www.ryanair.com/api/views/locate/3/countries/${languageLocale}`
    }

    public static listDestinationAirports(originAirportCode: string, languageLocale: string): string {
        return `https://www.ryanair.com/api/views/locate/searchWidget/routes/${languageLocale}/airport/${originAirportCode}`
    }

    public static listCurrencies(): string {
        return `https://www.ryanair.com/api/booking/v4/en-ie/res/currencies`
    }
}