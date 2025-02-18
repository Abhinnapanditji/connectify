import { UserProvider } from '../lib/UserContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: any) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
