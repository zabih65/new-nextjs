import axios from "axios";

const Post = ({ episode }) => {
    return (
        <div>
            <h2>
                Title :{episode.name} Body : {episode.air_date}
            </h2>
        </div>
    );
}

export default Post;

export async function getStaticPaths() {

    const { data } = await axios.get(`https://rickandmortyapi.com/api/episode`)
    const paths = data.results.map(user => {
        return {
            params: { postId: `${user.id}` }
        }
    })

    return {
        paths,
        fallback: false
    }




}

export async function getStaticProps(content) {
    const { params } = content

    const { data } = await axios.get(`https://rickandmortyapi.com/api/episode/${params.postId}`)


    return {
        props: {
            episode: data,
        }
    }

}


