import { getCollection } from 'astro:content';

export const GET = async () => {
    const posts = await getCollection('blog');
    const sortedPosts = posts.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());

    const flatPosts = sortedPosts.map(post => ({
        ...post.data,
        slug: post.slug,
        body: post.body
    }));

    return new Response(JSON.stringify(flatPosts), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
}
