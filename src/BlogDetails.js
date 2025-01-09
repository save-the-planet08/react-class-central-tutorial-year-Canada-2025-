import { useParams } from 'react-router-dom';
import useFetch from './useFetch'; 

const BlogDetails = () => {
    const { id } = useParams();  
    const { data: blog, error, isPending } = useFetch(); 

    const info = blog[parseInt(id) - 1]; 
    console.log(id);

    console.log(blog);

    return (
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { info && (
                <article>
                    <h2>{ info.title }</h2>
                    <p>Written by { info.author }</p>
                    <div>{ info.body }</div>
                </article>
            )}
        </div>
      );
    
}

export default BlogDetails;

