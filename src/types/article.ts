interface TSource {
    id: string;
    name: string;
}

export interface TArticle {
    slug: string
    source: TSource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}
