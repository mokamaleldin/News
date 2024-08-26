import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { articles } from './data';

const Card = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // const fetchData = async () => {
        //     const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fc00861b550144489f79446e0ab000e1');
        //     const resData = await response.json();
        //     setData(resData.articles)
        // }

        // fetchData();
        setData(articles);
    })

    if (!data || data.length === 0) {
        return 'No articles found';
    }


    return (
        <div className='grid lg:grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-1 mt-10'>
            {data.map((data, index) => {
                return (
                    <Link
                        key={index}
                        to={`/article/${index}`}
                        className='relative text-center'
                    >
                        <img src={data.urlToImage} alt={data.title} width={500} height={500} />
                        <div className="absolute top-0  text-center felx justify-center items-center">
                            <h3 className="font-bold">
                                {data.title}
                            </h3>
                            <p>
                                {data.author}
                            </p>
                            <p>{data.publishedAt}</p>

                        </div>
                    </Link>
                )

            })}

        </div>
    )
}
export default Card;