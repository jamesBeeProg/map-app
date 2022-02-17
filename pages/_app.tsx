import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="manifest" href="/manifest.webmanifest" />
            </Head>
            <style jsx global>{`
                html,
                body {
                    margin: 0;
                    overflow: hidden;
                }
            `}</style>
            <Component {...pageProps} />{' '}
        </>
    );
}

export default MyApp;
