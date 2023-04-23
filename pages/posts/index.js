import axios from "axios";
import Link from "next/link";

const PostList = ({ episode }) => {

    return (
        <div>
            {episode.results.map(user => {
                return (
                    <>

                        <Link href={`posts/${user.id}`} passHref>

                            <ul key={user.id}>
                                <li>{user.name}</li>
                            </ul>
                        </Link>
                    </>
                )
            })}
        </div>
    );
}

export default PostList;

export async function getStaticProps() {

    const { data } = await axios.get('https://rickandmortyapi.com/api/episode')

    return {
        props: {
            episode: data,
        }
    }

}


