import Image from "next/image";
import { CourseShowWrap } from "../styles/CourseShowWrap";
import Cm from "../public/img/cm.jpg";
import Gd from "../public/img/gd.jpg";
import { Reveal } from "./Reveal";

type CourseShowProps = {
  courseShowName: string;
  courseShowDuration: string;
  courseShowSub: string;
  courseShowThumb: string;
};

const CourseShow = ({
  courseShowName,
  courseShowDuration,
  courseShowSub,
  courseShowThumb,
}: CourseShowProps) => {
  return (

      <CourseShowWrap>
        <div className="courseThumbContainer">
          <div className="courseThumb">
            <Image src={courseShowThumb} layout="fill" alt="computer" />
          </div>
        </div>
        <div className="cardInfo">
          <div className="subTexts">
            <p>{courseShowDuration}</p>
            <p>+Sertifikat</p>
          </div>
          <h4 className="courseShowHeadline">{courseShowName}</h4>
          <p className="courseShowSub">{courseShowSub}</p>
        </div>
      </CourseShowWrap>

  );
};

export default CourseShow;
