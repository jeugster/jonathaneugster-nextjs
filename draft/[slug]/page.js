export async function generateStaticParams() {
    const  res = await File.
    
    const posts = await res.json()
}

export function Page({params}) {
    return (
        <article>
            {params.post}
        </article>
    )
}