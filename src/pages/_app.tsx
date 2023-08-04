import { AppProps } from 'next/app';
import '../app/globals.css';
import { trpc } from '@/shared/api';
import { SessionProvider, getSession } from 'next-auth/react';

function App({ Component, pageProps }: AppProps) {
    console.log(pageProps);
    return (
        <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />;
        </SessionProvider>
    );
}

App.getInitialProps = async ({ ctx }) => {
    const session = await getSession(ctx);
    return {
        pageProps: {
            session,
        },
    };
};

export default trpc.withTRPC(App);
