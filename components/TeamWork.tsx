import Image from "next/image";
import type { StaticImageData } from "next/image";
import { TeamWorkWrap } from "../styles/TeamWorkWrap";
import { Reveal } from "./Reveal";

type teamWorkProps = {
  title: string;
  imgUrl: StaticImageData;
};
const TeamWork = ({ title, imgUrl }: teamWorkProps) => {
  return (
    <div className="teamWork">
      <Image src={imgUrl} alt="avatar" layout="fill" />
      <p>{title}</p>
    </div>
  );
};

export default TeamWork;
