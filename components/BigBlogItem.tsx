import { BigBlogItemWrap } from "../styles/BigBlogItemWrap";
import NumIcon from "../public/img/numbers.svg";
import Image from "next/image";
import { Reveal } from "./Reveal";

export type BlogItemProps = {
  blogHeadline: string;
  blogType: string;
  blogSub: string;
  blogThumbnail: string;
};

const BigBlogItem = ({ blogHeadline, blogType, blogSub }: BlogItemProps) => {
  return (
    <BigBlogItemWrap>
    
        <div className="bbBody">
          <div className="bigImgContainer">
            <div className="bigImg">
              <Image src={NumIcon} alt="numbers" layout="fill" />
            </div>
          </div>

          <div className="bbInfo">
            <h4 className="blogType">{blogType}</h4>
            <h2 className="blogItemHeadline">{blogHeadline}</h2>
            <p className="blogItemSub">{blogSub}</p>
          </div>
        </div>
  
    </BigBlogItemWrap>
  );
};

export default BigBlogItem;
