import Head from "next/head"
import Link from "next/link"
import BigBlogItem from "../components/BigBlogItem"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import SmallBlogItem from "../components/SmallBlogItem"
import { BlogsWrap } from "../styles/BlogsWrap"


 const Blogs = () => {
    return(
        <>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"/>
          <title>blogs</title>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
        <BlogsWrap>
            
            <Navigation/>
          
            <div className="blogsBody">
            <h2 className="blogsHeadline">Bloglar</h2>
                <Link href={"/blog"}>
                <BigBlogItem blogHeadline="Dasturlash Prinsiplari" blogType="DASTURLASH" blogThumbnail="../public/img/numbers.svg" blogSub="Hamma bilishi kerak bo’lgan top-5 prinsiplar mavjud..."/>
                </Link>
                <div className="smallBlogs">
                    <SmallBlogItem blogHeadline="Grafik Dizayn Haqida" blogType="DIZAYN" blogThumbnail="/img/pen.svg" blogSub="Hamma bilishi kerak bo’lgan top-5 prinsiplar mavjud..."/>
                    <SmallBlogItem blogHeadline="Hybrid dasturlash" blogType="DASTURLASH" blogThumbnail="/img/numbers.svg" blogSub="Hamma bilishi kerak bo’lgan top-5 prinsiplar mavjud..."/>
                    <SmallBlogItem blogHeadline="Klaviaturada Tez yozish" blogType="LIFEHACK" blogThumbnail="/img/computer.svg" blogSub="Hamma bilishi kerak bo’lgan top-5 prinsiplar mavjud..."/>
                </div>
            </div>
        </BlogsWrap>
        <Footer/>
        </>
    )
 }

 export default Blogs