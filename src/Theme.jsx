import { unstable_createMuiStrictModeTheme as createTheme } from '@material-ui/core/styles'
import {grey,teal} from '@material-ui/core/colors'

const theme = createTheme({
    palette: {
        primary: {
            main: teal[400],
            light: teal[50]
        }, 
        dark: {
            main: grey[900]
        }
    }
})

export default theme; 