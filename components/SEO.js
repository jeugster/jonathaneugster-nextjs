import Head from 'next/head'

export default function SEO() {
    //  Standard SEO properties to be modified by each page
    return (
        <Head>
            <title key="title">Jonathan Eugster</title>
            <meta
                key="og-title"
                property="og:title"
                content="Jonathan Eugster"
            />
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="keywords"
                content="Portfolio, Resume, Jonathan Eugster, Nextjs, React, Javascript, Jamstack, Static Site Generation, Web Development, Code Examples, Open Source"
                key="keywords"
            />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta
                name="description"
                content="A portfolio and resume for Jonathan Eugster"
                key="description"
            />
            <meta key="og-url" property="og:url" content="https://jonathaneugster.com" />

            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff"></meta>
        </Head>
    )
}
