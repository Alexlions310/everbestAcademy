import styled from "styled-components";
import { primaryColor, secondaryColor } from "./MainWrapper";


export const SmallBlogItemWrap = styled.div`

    @media only screen and (min-width: 600px) {
       .ssBody {
        display: flex;
        flex-direction: column;
        gap: 12px;
        

        .smallImgContainer {
            display: flex;
            justify-content: center;
            width: 220px;
            height: 140px;
            border-radius: 16px;

            background-color: ${primaryColor};
            .smallImg {
                position: relative;
                width: 60px;
                
            }
        }

        .ssInfo {
            .smallBlogType {
                font-size: 16px;
                opacity: 0.7;
            }

            .smallBlogItemHeadline {
                font-size: 20px;
                font-weight: 600;
                line-height: 116%;
                color: ${secondaryColor}
            }

            .smallBlogItemSub {
                display: none;
            }
        }
       }
    }

    //desktop
    @media only screen and (max-width: 600px) {
       .ssBody {
        
        display: flex;
        flex-direction: column;
        gap: 12px;
        

        .smallImgContainer {
            display: flex;
            justify-content: center;
            width: 100%;
            height: 200px;
            border-radius: 16px;

            background-color: ${primaryColor};
            .smallImg {
                position: relative;
                width: 80px;
                
            }
        }

        .ssInfo {
            .smallBlogType {
                font-size: 16px;
                opacity: 0.7;
            }

            .smallBlogItemHeadline {
                font-size: 28px;
                font-weight: 600;
                line-height: 116%;
                color: ${secondaryColor}
            }

            .smallBlogItemSub {
                display: none;
            }
        }
       }
    }


`