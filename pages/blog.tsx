import Head from "next/head";
import Image from "next/image";
import Navigation from "../components/Navigation";
import { BlogWrap } from "../styles/BlogWrap";
import NumbPic from "../public/img/numbers.svg";

const Blog = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <title>blog</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <BlogWrap>
        <Navigation />
        <div className="blogBody">
          <div className="blogThumbnailContainer">
            <div className="blogThumbnail">
              <Image src={NumbPic} alt="numbers" layout="fill" />
            </div>
          </div>

          <h2 className="theBlogHeadline">Dasturlash Prinsiplari</h2>
          <p className="theBlogSub">
            KISS: Dasturlash sohasida hech kim disk raskadrovka, texnik xizmat
            ko&apos;rsatish yoki murakkab kodni o&apos;zgartirishni yoqtirmaydi.
            &quot;Keep It Simple, Stupid (KISS)&apos; ta&apos;kidlashicha,
            ko&apos;pchilik tizimlar uni murakkablashtirgandan koʻra sodda
            boʻlsa yaxshi ishlaydi, shuning uchun siz kod yozayotganda
            yechimingiz tushunish uchun koʻp vaqt va kuch talab qiladigan
            murakkab boʻlmasligi kerak. Agar sizning kodingiz oddiy bo&apos;lsa,
            boshqa ishlab chiquvchilar kod mantig&apos;ini tushunishda hech
            qanday muammoga duch kelmaydilar va ular sizning kodingiz bilan
            osongina davom etishlari mumkin. Shuning uchun har doim murakkab
            muammoni kichikroq bo&apos;laklarga ajratish yoki o&apos;zingiz
            yozgan keraksiz kodlarni olib tashlash kabi turli yondashuvlar
            yordamida kodingizni soddalashtirishga harakat qiling. Dasturiy
            ta&apos;minot muhandisligining maqsadi uni yaratish emas, balki
            murakkablikni kamaytirishdir. - Pamela Zave 2. QURUQ: Koddagi
            ma&apos;lumotlar, mantiq yoki funksiyaning takrorlanishi nafaqat
            kodingizni uzoqlashtiradi, balki kodni saqlash, disk raskadrovka
            qilish yoki o&apos;zgartirishga kelganda ham ko&apos;p vaqtni behuda
            sarflaydi. Agar siz kodingizga kichik o&apos;zgartirish
            kiritishingiz kerak bo&apos;lsa, uni bir necha joyda qilishingiz
            kerak. &quot;O&apos;zingizni takrorlamang (QURG&apos;I)&quot; asosiy
            maqsadi kodning takrorlanishini kamaytirishdir. Unda aytilishicha,
            kodning bir qismi manba kodining faqat bitta joyida amalga
            oshirilishi kerak. DRY tamoyiliga qarama-qarshi bo&apos;lgan NOM
            (hamma narsani ikki marta yozing) yoki &quot;hammaning vaqtini
            behuda sarflash&quot;), agar siz bir xil mantiqni bir nechta joyda
            yozsangiz, DRY tamoyilini buzadi. Kodingizda takrorlanishni oldini
            olish uchun umumiy funktsiyani yaratishingiz yoki kodingizni
            abstrakt qilishingiz mumkin. 3. YAGNI: Agar siz kelajakda kerak
            bo&apos;lishi mumkin bo&apos;lgan kodni yozayotgan bo&apos;lsangiz,
            hozirda emas, balki dasturiy ta&apos;minotingiz yoki dasturingiz
            kattaroq va murakkab bo&apos;lishi mumkin. &quot;Sizga kerak
            bo&apos;lmaydi (YAGNI)&quot; tamoyili &quot;kerak bo&apos;lmaguncha
            biror narsani amalga oshirmang&quot;, chunki ko&apos;p hollarda siz
            kelajakda ushbu kod qismini ishlatmaysiz. Dasturchilarning
            ko&&quot;pchiligi .
          </p>
        </div>
      </BlogWrap>
    </>
  );
};

export default Blog;
