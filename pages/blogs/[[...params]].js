import Link from "next/link";
import { useRouter } from "next/router";

const Blog = () => {
    const router = useRouter()
    console.log(router.query);
    const { params } = router.query
    const params1 = params?.toString()
    console.log(params1);



    return (
        <div>
            <h1>
                blog page {params1}
            </h1>
            <Link href="/">
                go to home page?
            </Link>
        </div>
    );
}

export default Blog;