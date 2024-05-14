import styled from "styled-components";
import { primaryColor, secondaryColor } from "./MainWrapper";

export const CourseWrap = styled.div`
    @media only screen and (min-width: 600px) {
        padding: 0px 180px;

        .courseBody {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            

        .theCourse {
            
            width: 65%;
            .courseAuthor {
                margin-top: 12px;
                width: fit-content;
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 12px;



                .authorImgContainer {
                    overflow: hidden;
                    display: flex;
                    justify-content: center;
                    border-radius: 50%;
                  
                    
                    .authorImg {
                       
                        position: relative;
                        width: 44px;
                        height: 44px;
                       
                    }
                }
            }

            .courseHeadline {
                font-family: "Space Grotesk", "sans-serif";
                font-weight: 700;
                margin-top: 60px;
                color: ${secondaryColor}
            }


            .courseImgContainer {
                margin-top: 20px;
                width: 100%;
                height: 400px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: ${primaryColor};
                border-radius: 24px;

                .courseImg {
                    position: relative;
                    width: 400px;
                    height: 100px;
                }
            }

            .courseInfoHeadline {
                font-weight: 600;
                margin-top: 20px;
            }

            .courseRoadmapHeadline {
                font-weight: 600;
                margin-top: 20px;
            }

            .roadmap {
                margin-top: 8px;
                padding-left: 16px;
            }

            .courseRequirementsHeadline {
                font-weight: 600;
                margin-top: 20px;
            }

            .requirements {
                margin-top: 0px;
                padding-left: 16px;
            }

            .aboutTeacherHeadline {
                font-weight: 600;
                margin-top: 20px;
                margin-bottom: 0px;

            }

        }

        .courseFee {
            width: 30%;
            margin-top: 60px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background-color: white;
            height: fit-content;
            padding: 32px 20px;
            border-radius: 16px;

            .advantages {
                text-decoration: none;
                list-style: none;
            }

            .cashAmount {
                color: ${primaryColor};
                margin-top: 20px;
            }

            .registerBtn {
                margin-top: 12px;
                height: 48px;
                background-color: ${primaryColor};
                border: none;
                border-radius: 12px;
                color: white;
                font-size: 18px;

            }
            
        }
        }
    }

    //desktop 

    @media only screen and (max-width: 600px) {
        padding: 0px 17px;

        .courseBody {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            

        .theCourse {
            
            width: 100%;
            .courseAuthor {
                margin-top: 12px;
                width: fit-content;
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 12px;



                .authorImgContainer {
                    overflow: hidden;
                    display: flex;
                    justify-content: center;
                    border-radius: 50%;
                  
                    
                    .authorImg {
                       
                        position: relative;
                        width: 44px;
                        height: 44px;
                       
                    }
                }
            }

            .courseHeadline {
                font-family: "Space Grotesk", "sans-serif";
                font-weight: 700;
                margin-top: 60px;
                color: ${secondaryColor}
            }


            .courseImgContainer {
                margin-top: 20px;
                width: 100%;
                height: 280px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: ${primaryColor};
                border-radius: 24px;

                .courseImg {
                    position: relative;
                    width: 300px;
                    height: 70px;
                }
            }

            .courseInfoHeadline {
                font-weight: 600;
                margin-top: 20px;
            }

            .courseRoadmapHeadline {
                font-weight: 600;
                margin-top: 20px;
            }

            .roadmap {
                margin-top: 8px;
                padding-left: 16px;
            }

            .courseRequirementsHeadline {
                font-weight: 600;
                margin-top: 20px;
            }

            .requirements {
                margin-top: 0px;
                padding-left: 16px;
            }

            .aboutTeacherHeadline {
                font-weight: 600;
                margin-top: 20px;
                margin-bottom: 0px;

            }

        }

        .courseFee {
            width: 100%;
            margin-top: 60px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background-color: white;
            height: fit-content;
            padding: 32px 20px;
            border-radius: 16px;

            .advantages {
                text-decoration: none;
                list-style: none;
            }

            .cashAmount {
                color: ${primaryColor};
                margin-top: 20px;
            }

            .registerBtn {
                margin-top: 12px;
                height: 48px;
                background-color: ${primaryColor};
                border: none;
                border-radius: 12px;
                color: white;
                font-size: 18px;

            }
            
        }
        }
    }

`