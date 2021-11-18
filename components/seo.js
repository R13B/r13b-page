import Head from 'next/head';
import Script from 'next/script'

export default function SEO(props){
    let title = `${props.title} - R13B`;
    let uri = process.env.NEXT_PUBLIC_HOST;
    console.log(uri);
    let url = `${uri + props.page_url}`;
    console.log(url);
    return(
        <>

            <Script id="redirect-2-r13b"dangerouslySetInnerHTML={{
                __html: `
                if (window.location.hostname !== "r13b.com" &&  window.location.hostname !== "www.r13b.com" &&  window.location.hostname !== "localhost"){
                    window.top.location.href = "https://r13b.com";
                }
            `,
            }}
            />

            <Head>
                <meta name="author" content="Noé Araújo"/>
                <link rel="canonical" href={url+"/"} />
                <meta name="theme-color" content="#302840"/>
                <meta name="apple-mobile-web-app-status-bar" content="#302840" />

                {/* // <!-- WEBSITE TITLE & DESCRIPTION --> */}
                <title>{title}</title>
                <meta name="description" content={props.description}/>
                <meta name="title" content= {title} />
                <meta name="keywords" content="r13b, r13b games, video games, games, gaming, pc games, computer games, home entertainment, home gaming, new video games, videogames, My Pets Maze"/>
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" /> 
                <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

                {/* <!-- OG meta tags that improve the look of your post on social media --> */}
                <meta property="og:site_name" content="R13B" />
                <meta property="og:site" content={uri} />
                <meta property="og:title" content={title}/>
                <meta property="og:description" content= {props.description} />
                <meta property="og:image" content={uri + "/images/og_image-r13b-games.jpg"} />
                <meta property="og:image:width" content="600" />
                <meta property="og:image:height" content="314" />
                <meta property="og:url" content={url} />
                <meta property="og:type" content="game" />

                {/*<!-- Favicon and Apple Icons -->*/}
                <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png" />
                <link rel="icon" type="image/ico" sizes="32x32" href="/favicon/favicon.ico" />

                <link rel="manifest" href="/manifest.json" />
            </Head>

            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
                    ga('create', 'UA-150111827-1', 'auto');
                    ga('send', 'pageview');
                `}
            </Script>
            <Script src='https://www.google-analytics.com/analytics.js' strategy="afterInteractive"/> 
        </>
    );
}