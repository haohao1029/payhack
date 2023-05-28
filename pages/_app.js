import '../styles/globals.css'
// 1. import `ChakraProvider` component
import { ChakraProvider, extendBaseTheme } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'


const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <div  className='bg-primary-50'>
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  )
}

export default MyApp
