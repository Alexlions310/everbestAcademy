import styled from "styled-components";
import { primaryColor, secondaryColor } from "./MainWrapper";

export const CourseItemWrap = styled.div`
    @media only screen and (min-width:600px) {

        display: flex;
        flex-direction: row;
        gap: 40px;
        background-color: white;
        padding: 20px;
        border-radius: 20px;

        .courseImgContainer {
            background-color: ${primaryColor};
            padding: 40px;
            border-radius: 16px;

            .courseImg {
                position: relative;
                width: 100px;
                height: 100px;
            }
        }

        .courseItemInfo {
            display: flex;
            flex-direction: column;
            user-select: none;

            .courseItemHeadline {
                font-weight: 600;
                color: ${secondaryColor}

            }

            .courseItemSub {
                margin-top: 4px;
                font-size: 18px;
            }

            .courseItemDuration {
                margin-top: 40px;
                font-size: 18px;

                span {
                    font-weight: 600;
                }
            }
        }

    }

    //desktop

@media only screen and (max-width:600px) {

display: flex;
flex-direction: row;
gap:20px;
background-color: white;
padding: 20px;
border-radius: 20px;

.courseImgContainer {
    background-color: ${primaryColor};
    padding: 20px;
    border-radius: 16px;

    .courseImg {
        position: relative;
        width: 64px;
        height: 64px;
    }
}

.courseItemInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    user-select: none;

    .courseItemHeadline {
        font-weight: 600;
        color: ${secondaryColor}

    }

    .courseItemSub {
        display: none;
        margin-top: 4px;
        font-size: 18px;
    }

    .courseItemDuration {
        margin-top: 8px;
        font-size: 18px;

        span {
            font-weight: 600;
        }
    }
}

}

`