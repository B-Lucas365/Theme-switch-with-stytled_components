import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,
        colors: {
            primary100: string,
            primary200: string,
            primary300: string,
            accent100: string,
            accent200: string,
            text100: string,
            text200: string,
            bg100: string,
            bg200: string,
            bg300: string,
        }
    }
}