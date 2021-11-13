export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: 'ola'} },
            { params: {slug: 'mundo'} },
        ],
        fallback: false
    }
}


export async function getStaticProps({ params }) {
    const appPost = params.slug
    return {
        props: {appPost},
    }
}

export default function postApp( { appPost } ) {
    return (
        <h1>{appPost}</h1>
    )
}