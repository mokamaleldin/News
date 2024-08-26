import { useParams } from 'react-router-dom';
import { articles } from '../components/data'

const ArticlePage = () => {
    const { id } = useParams();
    const article = articles[id];

    if (!article) {
        return <div>Article not found</div>;
    }
    return (
        <div>
            <h1 className="article-title">{article.title}</h1>

        </div>
    )
}
export default ArticlePage