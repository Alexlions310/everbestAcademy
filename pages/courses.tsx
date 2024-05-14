import Head from "next/head"
import { useState } from "react"
import CourseItem from "../components/CourseItem"
import FilteredCourses from "../components/FIlteredCourses"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import { CoursesWrap } from "../styles/CoursesWrap"
import { useRouter } from "next/router"

const Courses = () => {
    
    const [allCourses, setAllCourses] = useState(true)
    const [codingCourses, setCodingCourses] = useState(false)
    const [designCourses, setDesignCourses] = useState(false)
    const [courseType, setCourseType] = useState("all")
    return (
        <>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"/>
            <title>kurslar</title>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet"/>
        </Head>
        <CoursesWrap>
            <Navigation/>
            <div className="coursesBody">
                <h2 className="coursesHeadline">O&apos;quv kurslari</h2>

                <div className="coursesFilter">
                    <p  className={allCourses ? "activeFilter" : "allCourses"} onClick={()=> {
                        setAllCourses(true)
                        setCourseType("all")
                        setCodingCourses(false)
                        setDesignCourses(false)}}>Barcha Kurslar</p>
                    <p className={codingCourses ? "activeFilter": "codingCourses"} onClick={()=> {
                        setAllCourses(false)
                        setCodingCourses(true)
                        setCourseType("coding")
                        setDesignCourses(false)}}>Dasturlash</p>
                    <p className={designCourses ? "activeFilter": "designCourses"} onClick={()=> {
                        setAllCourses(false)
                        setCodingCourses(false)
                        setDesignCourses(true)
                        setCourseType("design")}}>Dizayn</p>
                </div>

                <div className="courseItems">
                 <FilteredCourses courseType={courseType}/>
                    
                </div>
            </div>

        </CoursesWrap>
       <Footer/>
        </>
    )
}


export default Courses