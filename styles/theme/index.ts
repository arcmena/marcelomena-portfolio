import { extendTheme } from '@chakra-ui/react'

import colors from './colors'
import fonts from './fonts'

const theme = extendTheme({ colors, fonts, fontSizes: { '7xl': '100px' } })

export default theme
