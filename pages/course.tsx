import Navigation from "../components/Navigation";
import { CourseWrap } from "../styles/CourseWrap";
import Head from "next/head";
import Image from "next/image";
import WebPic from "../public/img/webPic.png";
import Pen from "../public/img/pen.svg";
import ComputerIcon from "../public/img/computer.svg";
import AvatarPic2 from "../public/img/avatar3.png";
import Footer from "../components/Footer";
import {
  computerCourse,
  graphicCourse,
  webDevCourse,
} from "../public/courseInfoArr";
import { useRouter } from "next/router";

type CourseProps = {
  courseName: string;
};

const Course = () => {
  const router = useRouter();

  const { courseName } = router.query;
  var theCourse = webDevCourse;

  if (courseName === "webdev") {
    theCourse = webDevCourse;
  } else if (courseName === "graphicCourse") {
    theCourse = graphicCourse;
  } else if (courseName === "computerCourse") {
    theCourse = computerCourse;
  }

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <title>kurslar</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <CourseWrap>
        <Navigation />
        <div className="courseBody">
          <div className="theCourse">
            <h1 className="courseHeadline">{theCourse.courseHeadline}</h1>
            <div className="courseAuthor">
              <div className="authorImgContainer">
                <div className="authorImg">
                  <Image
                    src={theCourse.teacherPhoto}
                    layout="fill"
                    alt="avatar"
                  />
                </div>
              </div>

              <div className="authorName">{theCourse.teacherName}</div>
            </div>
            <div className="courseImgContainer">
              <div className="courseImg">
                <Image
                  src={theCourse.courseThumbnail}
                  layout="fill"
                  alt="web pic"
                />
              </div>
            </div>

            <h2 className="courseInfoHeadline">Kurs Haqida</h2>
            <p className="courseInfoSub">{theCourse.aboutCourse}</p>

            <h2 className="courseRoadmapHeadline">Kurs davomida siz</h2>
            <ul className="roadmap">
              {theCourse.willLearn.map((e) => (
                <li>{e}</li>
              ))}
            </ul>

            <h2 className="courseRequirementsHeadline">Talablar</h2>
            <ul className="requirements">
              {theCourse.requirements.map((e) => (
                <li>{e}</li>
              ))}
            </ul>

            <h2 className="aboutTeacherHeadline">Ustoz Haqida</h2>
            <p className="aboutTeacherSub">{theCourse.aboutTeacher}</p>
          </div>

          <div className="courseFee">
            <ul className="advantages">
              {theCourse.courseIntentions.map((e, index) => (
                <li key={index}>{e}</li>
              ))}
            </ul>

            <h3 className="cashAmount">{theCourse.courseFee}</h3>
            <button className="registerBtn">Ro&apos;yhatdan O&apos;tish</button>
          </div>
        </div>
      </CourseWrap>
      <Footer />
    </>
  );
};

export default Course;
