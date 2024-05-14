import Image from "next/image";
import { CourseItemWrap } from "../styles/CourseItemWrap";
import CodeIcon from "../public/img/code.svg";
import PenIcon from "../public/img/pen.svg";
import ComputerIcon from "../public/img/computer.svg";
import { Reveal } from "./Reveal";
type CourseItemProps = {
  courseIcon: string;
  courseName: string;
  courseInfo: string;
  courseDuration: string;
};

const CourseItem = ({
  courseIcon,
  courseName,
  courseInfo,
  courseDuration,
}: CourseItemProps) => {
  if (courseName === "Web Dasturlash") {
    var theIcon = CodeIcon;
  } else if (courseName === "Grafik Dizayn") {
    var theIcon = PenIcon;
  } else if (courseName === "Kompyuter Savodxonligi") {
    var theIcon = ComputerIcon;
  }

  return (

      <CourseItemWrap>
        <div className="courseImgContainer">
          <div className="courseImg">
            <Image src={theIcon} layout="fill" alt="code icon" />
          </div>
        </div>

        <div className="courseItemInfo">
          <h2 className="courseItemHeadline">{courseName}</h2>
          <p className="courseItemSub">{courseInfo} </p>
          <p className="courseItemDuration">
            Davomiyligi <span>{courseDuration}</span>
          </p>
        </div>
      </CourseItemWrap>
  
  );
};

export default CourseItem;
