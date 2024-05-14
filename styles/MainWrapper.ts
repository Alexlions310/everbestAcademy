import styled from "styled-components";

export var primaryColor = "#117EFF";
export var secondaryColor = "#002045";
export var accentColor = "#F0F5FF";

export const MainWrap = styled.div`
  @media only screen and (min-width: 600px) {
    padding: 0px 180px;

    //intro start
    .intro {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 108px;

      .introTexts {
        .introHeadline {
          width: 32vw;
          align-items: center;
          font-family: "Space Grotesk", "sans-serif";
          font-size: 52px;
          align-items: center;
          line-height: 114%;
          color: ${secondaryColor};

          .circlesContainer {
            margin-left: 20px;
            display: inline-block;

            .theCircles {
              width: 92px;
              height: 40px;
              position: relative;
            }
          }
        }

        .introSub {
          margin-top: 20px;
          font-size: 20px;
          color: ${secondaryColor};
          width: 32vw;
        }

        .introBtns {
          margin-top: 40px;
          width: 36vw;
          display: flex;
          flex-direction: row;
          gap: 40px;

          .introPrimaryBtn {
            background-color: ${primaryColor};
            width: 160px;
            height: 48px;
            border-radius: 8px;
            border: none;
            color: white;
            font-size: 16px;
          }

          .introSecondaryBtn {
            border: 1px solid ${primaryColor};
            background-color: transparent;
            width: 160px;
            height: 48px;
            border-radius: 8px;
            font-size: 16px;
            color: ${primaryColor};
          }
          .introSecondaryBtn:hover {
            cursor: pointer;
            animation: example 0.7s linear forwards;
          }
          @keyframes example {
            100% {
              background-color: ${primaryColor};
              color: white;
            }
          }

          .introPrimaryBtn:hover {
            cursor: pointer;
          }
          .introSecondaryBtn:active,
          .introPrimaryBtn:active {
            box-shadow: 2px 2px 2px ${primaryColor};
          }
        }

        .note {
          display: flex;
          flex-direction: row;
          margin-top: 150px;
          align-items: center;

          .starContainer {
            border-radius: 12px;
            width: 60px;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #9dbcff;
            .theStar {
              width: 36px;
              height: 36px;
              position: relative;
            }
          }

          .noteSub {
            margin-left: 20px;
            color: ${secondaryColor};
            opacity: 0.55;
            width: 30vw;
          }
        }
      }

      .introPictureContainer {
        gap: 20px;
        display: flex;
        height: auto;

        flex-direction: column;
        .resContainer {
          margin-top: 10px;

          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;

          .introResults {
            width: 300px;
            height: 100px;
            margin-right: 16px;
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            background-color: white;
            padding: 20px;
            border-radius: 16px;
            box-shadow: 4px 12px 12px 0px rgba(0, 0, 0, 0.08);
          }
        }

        .introPicture {
          width: 38vw;
          height: 440px;
          position: relative;
        }
      }
    } //intro end

    .benHeadline {
      margin-top: 96px;
      text-align: center;
      font-family: "Space Grotesk", "sans-serif";
      span {
        color: ${primaryColor};
      }
      .whyUS {
        font-size: 20px;
        opacity: 0.65;
      }

      .studyInUs {
        font-size: 32px;
        color: ${secondaryColor};
      }
    }

    .contactModalContainer {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      backdrop-filter: blur(10px);
      background-color: rgba(0, 0, 0, 0.3);
      z-index: 2;
      padding: 0% 480px;

      .closeModalContainer {
        display: flex;

        justify-content: end;
        flex-direction: row;
        margin-bottom: 12px;
        width: 100%;

        .closeModal {
          position: relative;
          width: 48px;
          height: 48px;
        }
      }

      .contactModal {
        width: 100%;
        background-color: white;
        padding: 48px 36px;
        border-radius: 16px;
        box-shadow: 4px 12px 12px 0px rgba(0, 0, 0, 0.08);

        h4 {
          font-size: 24px;
          font-weight: 600;
        }

        .phoneInfo {
          margin-top: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;

          .phLabel {
            opacity: 0.7;
          }

          .phone {
            font-size: 20px;
            font-weight: 500;
          }
        }

        .phHead2 {
          margin-top: 24px;
          font-weight: 500;
        }
      }
    }

    .contactModalClosed {
      display: none;
    }

    //benefit start

    .benefitsContainer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 40px;

      .benefit {
        display: flex;
        flex-direction: column;
        width: 280px;
        height: 280px;
        background-color: white;
        padding: 20px 24px;
        box-shadow: 4px 12px 12px 0px rgba(0, 0, 0, 0.08);
        border-radius: 16px;

        .benIcon {
          display: flex;
          justify-content: flex-start;

          .benImgContainer {
            width: 64px;
            height: 64px;
            background-color: ${primaryColor};
            border-radius: 16px;
            display: flex;
            justify-content: center;
            align-items: center;
            .benImage {
              position: relative;
              width: 40px;
              height: 40px;
            }
          }
        }

        .advantageHeadline {
          margin-top: 20px;
          color: ${secondaryColor};
        }

        .advantageSub {
          opacity: 0.65;
        }
      }
    } //benefit End

    //experience start
    .experienceContainer {
      margin-top: 108px;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .everLogo {
        word-wrap: break-word;
        color: ${primaryColor};
        line-height: 88%;
        width: 30vw;
        font-size: 160px;
        font-family: "Space Grotesk", "sans-serif";
      }

      .experienceInfo {
        width: 36vw;
        display: flex;
        flex-direction: column;

        .yearsHeadline {
          color: ${secondaryColor};
          font-size: 36px;
          line-height: 120%;
          font-family: "Space Grotesk", "sans-serif";

          span {
            color: ${primaryColor};
          }
        }
        .experienceSub {
          margin-top: 16px;
          font-size: 20px;
        }
        .experienceMetricContainer {
          margin-top: 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          .metricHeadline {
            font-size: 32px;
            color: ${primaryColor};
          }
        }
      }
    } //experience end

    .ourCoursesHeadline {
      margin-top: 108px;
      font-family: "Space Grotesk", "sans-serif";
      font-size: 32px;
      text-align: center;
      span {
        color: ${primaryColor};
      }
    }

    .coursesContainer {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      gap: 24px;
      margin-top: 32px;

      .course {
        display: inline-block;
        font-size: 20px;
        font-weight: 600;
        border: 1px solid ${secondaryColor};
        padding: 12px 32px;
        border-radius: 12px;
      }

      .course:hover {
        display: inline-block;
        font-size: 20px;
        font-weight: 600;
        background-color: ${primaryColor};
        padding: 12px 32px;
        border: 1px solid ${primaryColor};
        border-radius: 12px;
        transition: 0.3s;
        color: white;
      }
    }

    .courseCards {
      display: flex;
      justify-content: space-between;
      margin-top: 44px;
    }

    .testimonialsContainer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 108px;

      .testimonialTexts {
        .testimonialHeadline {
          font-family: "Space Grotesk", "sans-serif";
          font-size: 32px;
          width: 26vw;

          span {
            color: ${primaryColor};
          }
        }

        .testimonialSub {
          margin-top: 8px;
          font-size: 16px;
          opacity: 0.65;
          width: 32vw;
        }
        .testImgContainer {
          margin-top: 28px;
          .testImg {
            position: relative;
            width: 500px;
            height: 380px;
          }
        }
      }

      .reviews {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .review {
          width: 400px;
          height: 120px;
          background-color: white;
          padding: 16px 20px;
          display: flex;
          flex-direction: row;
          gap: 20px;
          border-radius: 16px;
          box-shadow: 4px 12px 12px 0px rgba(0, 0, 0, 0.08);

          .reviewImgContainer {
            border-radius: 50%;
            overflow: hidden;
            .reviewImg {
              position: relative;
              width: 90px;
              height: 90px;
            }
          }

          .reviewTexts {
            width: 16vw;
          }
        }
      }
    }

    .ourTeamHeadline {
      margin-top: 96px;
      font-size: 32px;
      font-family: "Space Grotesk", "sans-serif";
      text-align: center;
      span {
        color: ${primaryColor};
      }
    }

    .teamContainer {
      margin-top: 80px;
      margin-bottom: 120px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 80px;
      justify-content: space-between;
    }

    .telegramCommunity {
      margin-top: 64px;
      width: 100%;
      height: 260px;
      border-radius: 24px;
      background-color: ${primaryColor};
      padding: 32px 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .tgLink {
        color: white;
        font-size: 36px;
        font-weight: 600;
        text-align: center;
      }

      .tgIconContainer {
        margin-top: 16px;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
          font-size: 20px;
          color: white;
          margin-left: 8px;
        }
        .tgIcon {
          position: relative;
          width: 48px;
          height: 48px;
        }

        .tgLinkBtn {
          width: 120px;
          padding: 8px;
          background-color: white;
          border: none;
          border-radius: 12px;
          font-size: 18px;
          margin-left: 12px;
        }
      }
    }
  }

  //Desktop

  @media only screen and (max-width: 600px) {
    padding: 0px 17px;

    //intro start
    .intro {
      margin-top: 40px;

      .introTexts {
        .introHeadline {
          width: 100%;
          text-align: center;
          align-items: center;
          font-family: "Space Grotesk", "sans-serif";
          font-size: 52px;
          line-height: 114%;
          color: ${secondaryColor};

          span {
            display: inline;
          }

          .circlesContainer {
            margin-left: 20px;
            display: none;

            .theCircles {
              width: 92px;
              height: 40px;
              position: relative;
            }
          }
        }

        .introSub {
          display: none;
          margin-top: 20px;
          font-size: 20px;
          color: ${secondaryColor};
          width: 32vw;
        }

        .introBtns {
          margin-top: 40px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 20px;

          .introPrimaryBtn {
            background-color: ${primaryColor};
            width: 240px;
            height: 52px;
            border-radius: 8px;
            border: none;
            color: white;
            font-size: 16px;
          }

          .introSecondaryBtn {
            border: 1px solid ${primaryColor};
            background-color: transparent;
            width: 240px;
            height: 52px;
            border-radius: 8px;
            font-size: 16px;
            color: ${primaryColor};
          }
        }

        .note {
          width: 100%;
          display: none;
          flex-direction: row;
          margin-top: 150px;
          align-items: flex-start;

          .starContainer {
            border-radius: 12px;
            width: 60px;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #9dbcff;
            .theStar {
              width: 36px;
              height: 36px;
              position: relative;
            }
          }

          .noteSub {
            margin-left: 20px;
            color: ${secondaryColor};
            opacity: 0.55;
            width: 100%;
          }
        }
      }

      .introPictureContainer {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;

        .resContainer {
          margin-top: 10px;
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;

          .introResults {
            width: 300px;
            height: 100px;
            margin-right: 16px;
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            background-color: white;
            padding: 20px;
            border-radius: 16px;
            box-shadow: 4px 12px 12px 0px rgba(0, 0, 0, 0.08);
          }
        }

        .introPicture {
          width: 100%;
          height: 300px;
          position: relative;
        }
      }
    } //intro end

    .benHeadline {
      margin-top: 96px;
      text-align: center;
      font-family: "Space Grotesk", "sans-serif";
      span {
        color: ${primaryColor};
      }
      .whyUS {
        font-size: 12px;
        opacity: 0.65;
      }

      .studyInUs {
        font-size: 32px;
        color: ${secondaryColor};
      }
    }

    //benefit start

    .benefitsContainer {
      display: flex;
      flex-direction: column;
      gap: 24px;
      align-items: center;
      justify-content: space-between;
      margin-top: 40px;

      .benefit {
        display: flex;
        flex-direction: column;
        width: 320px;
        height: 280px;
        background-color: white;
        padding: 20px 24px;
        box-shadow: 4px 12px 12px 0px rgba(0, 0, 0, 0.08);
        border-radius: 16px;

        .benIcon {
          display: flex;
          justify-content: flex-start;

          .benImgContainer {
            width: 64px;
            height: 64px;
            background-color: ${primaryColor};
            border-radius: 16px;
            display: flex;
            justify-content: center;
            align-items: center;
            .benImage {
              position: relative;
              width: 40px;
              height: 40px;
            }
          }
        }

        .advantageHeadline {
          margin-top: 20px;
          color: ${secondaryColor};
        }

        .advantageSub {
          opacity: 0.65;
        }
      }
    }

    //benefit End

    .contactModalClosed {
      display: none;
    }

    //experience start
    .experienceContainer {
      margin-top: 96px;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 24px;
      align-items: center;

      .everLogo {
        word-wrap: break-word;
        color: ${primaryColor};
        line-height: 88%;
        width: 75%;
        font-size: 96px;
        text-align: center;
        font-family: "Space Grotesk", "sans-serif";
      }

      .experienceInfo {
        width: 85%;
        display: flex;
        flex-direction: column;

        .yearsHeadline {
          color: ${secondaryColor};
          font-size: 28px;
          line-height: 120%;
          font-family: "Space Grotesk", "sans-serif";

          span {
            color: ${primaryColor};
          }
        }
        .experienceSub {
          margin-top: 16px;
          font-size: 20px;
        }
        .experienceMetricContainer {
          margin-top: 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          .metricHeadline {
            font-size: 28px;
            color: ${primaryColor};
          }
          .metricSub {
            font-size: 12px;
          }
        }
      }
    } //experience end

    .ourCoursesHeadline {
      margin-top: 88px;
      font-family: "Space Grotesk", "sans-serif";
      font-size: 32px;
      text-align: center;
      span {
        color: ${primaryColor};
      }
    }

    .coursesContainer {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      gap: 24px;
      margin-top: 32px;

      .course {
        width: 100%;
        display: inline-block;
        font-size: 20px;
        font-weight: 600;
        border: 1px solid ${secondaryColor};
        padding: 12px 32px;
        border-radius: 12px;
        text-align: center;
      }

      .course:hover {
        display: inline-block;
        font-size: 20px;
        font-weight: 600;
        background-color: ${primaryColor};
        padding: 12px 32px;
        border: none;
        border-radius: 12px;
        transition: 0.3s;
        color: white;
      }
    }

    .courseCards {
      display: flex;
      flex-direction: column;
      gap: 40px;
      margin-top: 44px;
    }

    .testimonialsContainer {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin-top: 92px;

      .testimonialTexts {
        .testimonialHeadline {
          font-family: "Space Grotesk", "sans-serif";
          font-size: 32px;
          width: 100%;
          text-align: center;

          span {
            color: ${primaryColor};
          }
        }

        .testimonialSub {
          margin-top: 8px;
          font-size: 16px;
          opacity: 0.65;
          width: 100%;
        }
        .testImgContainer {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 28px;
          .testImg {
            position: relative;
            width: 340px;
            height: 280px;
          }
        }
      }

      .reviews {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .review {
          width: 360px;
          height: auto;
          background-color: white;
          padding: 28px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          border-radius: 16px;
          box-shadow: 4px 12px 12px 0px rgba(0, 0, 0, 0.08);

          .reviewImgContainer {
            width: 64px;
            height: 64px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            overflow: hidden;
            .reviewImg {
              position: relative;
              width: 64px;
              height: 64px;
            }
          }

          .reviewTexts {
            text-align: center;
            width: 100%;
            font-size: 18px;
          }
        }
      }
    }

    .ourTeamHeadline {
      margin-top: 96px;
      font-size: 32px;
      font-family: "Space Grotesk", "sans-serif";
      text-align: center;
      span {
        color: ${primaryColor};
      }
    }

    .teamContainer {
      margin-top: 80px;
      margin-bottom: 120px;
      display: flex;
      flex-direction: column;
      gap: 80px;
      align-items: center;
      justify-content: space-between;
    }

    .telegramCommunity {
      margin-top: 64px;
      width: 100%;
      height: 260px;
      border-radius: 24px;
      background-color: ${primaryColor};
      padding: 32px 16px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .tgLink {
        color: white;
        font-size: 20px;
        font-weight: 600;
        text-align: center;
      }

      .tgIconContainer {
        margin-top: 16px;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
          font-size: 16px;
          color: white;
          margin-left: 8px;
        }
        .tgIcon {
          display: none;
          position: relative;
          width: 48px;
          height: 48px;
        }

        .tgLinkBtn {
          width: 96px;
          padding: 8px;
          background-color: white;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          margin-left: 12px;
        }
      }
    }
  }
`;
