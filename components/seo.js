import Head from 'next/head';

export default function SEO(props){
    let title = `${props.title} - R13B`;
    let uri = process.env.PAGE_URI; 
    let url = `${uri}${props.page_url}`;
    return(
        <Head>
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
        </Head>
    );
}