import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div>
            <h1>
                page not found
            </h1>
            <Link href="/">
                <h1>
                    بازگشت به صفحه اصلی
                </h1>
            </Link>
        </div>
    );
}

export default NotFoundPage;