import { useRouter } from "next/router";
import { FooterWrap } from "../styles/FooterWrap";
import { Reveal } from "./Reveal";

const Footer = () => {
  const router = useRouter();
  return (
  
      <FooterWrap>
        <div className="column1">
          <h2 className="headFooter">(99) 779 11 99</h2>
          <p className="footerText">
            Hazorasp markazi, Akvarium kafe ro&apos;parasi
          </p>
        </div>

        <div className="column1">
          <h2 className="headFooter">Sahifalar</h2>
          <p className="footerText" onClick={() => router.push("/")}>
            Asosiy
          </p>
          <p className="footerText" onClick={() => router.push("/courses")}>
            Kurslar
          </p>
          <p className="footerText" onClick={() => router.push("/blogs")}>
            Blog
          </p>
        </div>

        <div className="column1">
          <h2 className="headFooter">Kurslar</h2>
          <p
            className="footerText"
            onClick={() => router.push("course?courseName=webDevCourse")}
          >
            Web-Dasturlash
          </p>
          <p
            className="footerText"
            onClick={() => router.push("course?courseName=graphicCourse")}
          >
            Grafik Dizayn
          </p>
          <p
            className="footerText"
            onClick={() => router.push("course?courseName=computerCourse")}
          >
            Kompyuter Savodxonligi
          </p>
        </div>
      </FooterWrap>

  );
};

export default Footer;
