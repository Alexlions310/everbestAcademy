import CourseItem from "./CourseItem"
import useRouter from "next/router"
import Link from "next/link"

  type FilteredCoursesProps = {
    courseType: string,
  }  

  const FilteredCourses = ({courseType}: FilteredCoursesProps )=> {
          const router = useRouter
          if(courseType === "all") {
            return (
                <>
                    <Link href={{pathname: "/course", query: {courseName: "webdev"}}}>
                    <CourseItem 
                      courseIcon="CodeIcon"
                      courseName="Web Dasturlash" 
                      courseInfo="Kurs davomida siz HTML, CSS va JavaScript yordamida murakkab websaytlarni yaratishni o’rganasiz"
                      courseDuration="4 oy"
                      />
                      </Link>
                   
  
                    <Link href={{pathname: "/course", query: {courseName: "graphicCourse"}}}>
                    <CourseItem 
                      courseIcon="CodeIcon"
                      courseName="Grafik Dizayn" 
                      courseInfo="Kurs davomida siz Adobe Photoshop va
                      Illustrator yordamida dizayn qilishni
                      o’rganasiz"
                      courseDuration="3 oy"/>
                    </Link>
  
                   <Link href={{pathname: "/course", query: {courseName: "computerCourse"}}}>
                   <CourseItem 
                      courseIcon="CodeIcon"
                      courseName="Kompyuter Savodxonligi" 
                      courseInfo="Kurs davomida siz Microsoft Word, Excel
                      va PowerPointda ishlashni o’rganasiz "
                      courseDuration="2 oy"/>
                   </Link>
                </>
            )
          } else if(courseType === "coding") {
            return (
                <CourseItem 
                      courseIcon="CodeIcon"
                      courseName="Web Dasturlash" 
                      courseInfo="Kurs davomida siz HTML, CSS va JavaScript yordamida murakkab websaytlarni yaratishni o’rganasiz"
                      courseDuration="4 oy"/>
            )
          } else if (courseType === "design") {
            return (
                <CourseItem 
                courseIcon="CodeIcon"
                courseName="Grafik Dizayn" 
                courseInfo="Kurs davomida siz Adobe Photoshop va
                Illustrator yordamida dizayn qilishni
                o’rganasiz"
                courseDuration="3 oy"/>
            )
          } else {
           return (
            <>
            <CourseItem 
                courseIcon="CodeIcon"
                courseName="Web Dasturlash" 
                courseInfo="Kurs davomida siz HTML, CSS va JavaScript yordamida murakkab websaytlarni yaratishni o’rganasiz"
                courseDuration="4 oy"/>

                 <CourseItem 
                courseIcon="CodeIcon"
                courseName="Grafik Dizayn" 
                courseInfo="Kurs davomida siz Adobe Photoshop va
                Illustrator yordamida dizayn qilishni
                o’rganasiz"
                courseDuration="3 oy"/>

                  <CourseItem 
                courseIcon="CodeIcon"
                courseName="Kompyuter Savodxonligi" 
                courseInfo="Kurs davomida siz Microsoft Word, Excel
                va PowerPointda ishlashni o’rganasiz "
                courseDuration="2 oy"/>
          </>
           )
          }
  }

  export default FilteredCourses