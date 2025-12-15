import { getEntry } from 'astro:content';

export const GET = async ({ params }: { params: { slug: string } }) => {
    if (!params.slug) {
        return new Response(null, { status: 404, statusText: 'Not Found' });
    }

    const post = await getEntry('blog', params.slug);

    if (!post) {
        return new Response(null, {
            status: 404,
            statusText: 'Not Found'
        });
    }

    return new Response(JSON.stringify({
        ...post.data,
        slug: post.slug,
        body: post.body
    }), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
}
