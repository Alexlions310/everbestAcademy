import { BigBlogItemWrap } from "../styles/BigBlogItemWrap";
import NumIcon from "../public/img/numbers.svg";
import Image from "next/image";
import { SmallBlogItemWrap } from "../styles/SmallBlogItemWrap";
import { BlogItemProps } from "./BigBlogItem";
import { Reveal } from "./Reveal";

const SmallBlogItem = ({
  blogHeadline,
  blogType,
  blogThumbnail,
}: BlogItemProps) => {
  return (
    <Reveal>
      <SmallBlogItemWrap>
        <div className="ssBody">
          <div className="smallImgContainer">
            <div className="smallImg">
              <Image src={blogThumbnail} alt="numbers" layout="fill" />
            </div>
          </div>

          <div className="ssInfo">
            <h4 className="smallBlogType">{blogType}</h4>
            <h2 className="smallBlogItemHeadline">{blogHeadline}</h2>
            <p className="smallBlogItemSub">
              Hamma bilishi kerak bo’lgan top-5 prinsiplar mavjud...
            </p>
          </div>
        </div>
      </SmallBlogItemWrap>
    </Reveal>
  );
};

export default SmallBlogItem;
