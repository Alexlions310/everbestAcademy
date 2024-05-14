import styled from "styled-components";
import { primaryColor } from "./MainWrapper";


export const BlogWrap = styled.div`
    @media only screen and (min-width: 600px) {
        padding: 0px 180px;
       

        .blogBody {
           
            margin-top: 40px;
            padding: 0px 100px;

        

            .blogThumbnailContainer {
                display: flex;
                justify-content: center;
                width: 100%;
                height: 55%;
                padding: 100px;
                margin-top: 40px;
                border-radius: 24px;
                background-color: ${primaryColor};

                .blogThumbnail {
                    position: relative;
                    width: 400px;
                    height: 200px;
                }

            }

            .theBlogHeadline {
                margin-top: 20px;
                font-family: "Space Grotesk", "sans-serif";
                font-size: 40px;
            }

            .theBlogSub {
                margin-top: 12px;
                font-size: 18px;
            }
        }
    }


    //desktop

    @media only screen and (max-width: 600px) {
        padding: 0px 17px;
       

        .blogBody {
           
            margin-top: 40px;
            padding: 0px 17px;

        

            .blogThumbnailContainer {
                display: flex;
                justify-content: center;
                width: 100%;
                height: 55%;
                padding: 20px;
                margin-top: 40px;
                border-radius: 24px;
                background-color: ${primaryColor};

                .blogThumbnail {
                    position: relative;
                    width: 300px;
                    height: 150px;
                }

            }

            .theBlogHeadline {
                margin-top: 12px;
                font-family: "Space Grotesk", "sans-serif";
                font-size: 28px;
                
            }

            .theBlogSub {
                margin-top: 12px;
                font-size: 18px;
            }
        }
    }

`