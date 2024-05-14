import Image from "next/image";
import { MemeberWrap } from "../styles/MemberWrap";
import type { StaticImageData } from "next/image";
import { Reveal } from "./Reveal";

type memberProps = {
  name: string;
  status: string;
  avatar: StaticImageData;
};
const Member = ({ name, status, avatar }: memberProps) => {
  return (

      <MemeberWrap>
        <div className="memberImgContainer">
          <div className="memberImg">
            <Image src={avatar} alt="avatar" layout="fill" />
          </div>
        </div>

        <h2 className="memberName"> {name}</h2>
        <p className="memberStatus">{status}</p>
      </MemeberWrap>
    
  );
};

export default Member;
