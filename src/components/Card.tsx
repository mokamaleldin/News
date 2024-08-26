import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { articles } from './data';
import { TArticle } from '../types/article';

const Card = () => {
    const [data, setData] = useState<TArticle[]>([]); 
    useEffect(() => {
        // const fetchData = async () => {
        //     const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=YOUR_API_KEY');
        //     const resData = await response.json();
        //     setData(resData.articles);
        // }

        // fetchData();
        setData(articles);
    })
    if (!data) {
        return 'No articles found';
    }
    return (
        <div className='grid lg:grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-1'>
            {data.map((article: TArticle) => (
                <Link
                    key={article.slug}
                    to={`/article/${article.slug}`}
                    className='relative text-center flex'
                >
                    <img src={article.urlToImage} alt={article.title} width={500} height={500} loading="lazy" />
                    <div className="absolute flex flex-col justify-center items-center bg-black bg-opacity-50 text-main p-4 inset-0">
                        <h3 className="font-bold">
                            {article.title}
                        </h3>
                        <p>
                            {article.author}
                        </p>
                        <p>{article.publishedAt}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}
export default Card;