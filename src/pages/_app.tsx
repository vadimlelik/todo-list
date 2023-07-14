import { AppProps } from 'next/app';
import { trpc } from '@/shared/api';

function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default trpc.withTRPC(App);
