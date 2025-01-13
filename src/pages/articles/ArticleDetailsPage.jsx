import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAlertContext } from "../../contexts/AlertContext";

function ArticleDetailsPage() {

    const [article, setArticles] = useState(null);
    const { id } = useParams();
    const {error, setError} = useAlertContext();


    useEffect(() => {
        axios.get(`http://localhost:3001/posts/${id}`).then((resp) => {            
            setArticles(resp.data);
        }).catch(() => {
            setError("Errore! Articolo non trovato =(")
        });
    }, [id]);

    return (
        <>
            {article && (
                <div className="container">
                    <h1>{article.titolo}</h1>
                    <img className="img-det" src={`http://localhost:3001/${article.immagine}`} />
                    <p>{article.contenuto}</p>
                </div>
            )}
        </>
    );
};

export default ArticleDetailsPage;