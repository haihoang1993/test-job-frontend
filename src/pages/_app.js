import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { ToastProvider } from 'react-toast-notifications'

function MyApp({ Component, pageProps }) {
    return (<ToastProvider><Component {...pageProps} /></ToastProvider>)
}

export default MyApp
