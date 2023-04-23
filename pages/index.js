
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter();
  const clickHandler = () => {
    router.push('/blogs')
  }
  return (
    <>
      <Head>
        <title>آموزش next js</title>
        <meta name="description" content="توضیحات صفحه من" />
        <meta property="og:title" content="عنوان صفحه من" />
        <meta property="og:description" content="توضیحات صفحه من" />
        <meta property="og:image" content="/path/to/image.jpg" />
      </Head>
      <div className={styles.container}>
        <h>
          home page
        </h>
        <Link href="/blogs"  >
          <h2>رفتن به صفحه بلاگ</h2>
        </Link>
        <button onClick={ clickHandler}>push to blogs page</button>
      </div>
    </>
  )
}
