import styled from "styled-components";
import { primaryColor, secondaryColor } from "./MainWrapper";


export const BigBlogItemWrap = styled.div`

    @media only screen and (min-width: 600px) {
       .bbBody {
        display: flex;
        flex-direction: row;
        gap: 32px;
        

        .bigImgContainer {
            display: flex;
            justify-content: center;
            width: 360px;
            height: 220px;
            border-radius: 16px;

            background-color: ${primaryColor};
            .bigImg {
                position: relative;
                width: 120px;
                
            }
        }

        .bbInfo {
            width: 36%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .blogType {
                font-size: 20px;
                opacity: 0.7;
            }

            .blogItemHeadline {
                font-size: 36px;
                font-weight: 600;
                line-height: 116%;
                color: ${secondaryColor}
            }

            .blogItemSub {
                margin-top: 20px;
                font-size: 18px;
            }
        }
       }
    }


    //desktop

    @media only screen and (max-width: 600px) {
       .bbBody {
        display: flex;
        flex-direction: column;
        gap: 16px;
        

        .bigImgContainer {
            display: flex;
            justify-content: center;
            width: 360px;
            height: 220px;
            border-radius: 16px;

            background-color: ${primaryColor};
            .bigImg {
                position: relative;
                width: 120px;
                
            }
        }

        .bbInfo {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .blogType {
                font-size: 16px;
                opacity: 0.7;
            }

            .blogItemHeadline {
                font-size: 28px;
                font-weight: 600;
                line-height: 116%;
                color: ${secondaryColor};
            }

            .blogItemSub {
                display: none;
                margin-top: 20px;
                font-size: 18px;
            }
        }
       }
    }


`