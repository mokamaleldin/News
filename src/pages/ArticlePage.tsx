import { useParams } from 'react-router-dom';
import { articles } from '../components/data'
import { TArticle } from '../types/article';

const ArticlePage = () => {
    const { slug } = useParams<{ slug: string }>();
    const article = articles.find((article: TArticle) => article.slug === slug);
    if (!article) {
        return <div>Article not found</div>;
    }
    return (
        <div className='text-center '>
            <h1 className="font-bold text-2xl">{article.title}</h1>
            <p className='text-mkee1 mt-5 '>
                {article.description}
            </p>
            <div className='flex  justify-center gap-7 mt-10 items-start'>
                <img src={article.urlToImage} alt='img' width={700} height={700} loading="lazy" />
                <div>
                    {article.content}
                </div>
            </div>
            <div className='flex flex-col justify-center items-center my-10'>
                <div>written by: {article.author}</div>
                <div>published at: {article.publishedAt}</div>
            </div>
        </div>
    )
}
export default ArticlePage