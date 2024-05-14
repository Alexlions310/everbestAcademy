import styled from "styled-components"
import { secondaryColor } from "./MainWrapper"


export const CoursesWrap = styled.div`
    @media only screen and (min-width:600px) {
        padding: 0px 180px;

        .coursesBody {
            padding: 0px 100px;
            .coursesHeadline {
            margin-top: 40px;
            font-family: "Space Grotesk", "sans-serif";
            font-size: 36px;
            color: ${secondaryColor}
        }


        .coursesFilter {
            display: flex;
            flex-direction: row;
            gap: 20px;
            margin-top: 12px;

            p {
                opacity: 0.7;
                user-select: none;
            }

            .activeFilter {
                user-select: none;
                opacity: 1;
                font-weight: 550;
                transition: cubic-bezier(0.55, 0.085, 0.68, 0.53);
            }
        }


        .courseItems {
        
            margin-top: 40px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            
        }
        }
    }

    //desktop

    @media only screen and (max-width:600px) {
        padding: 0px 17px;

        .coursesBody {
            
            .coursesHeadline {
            margin-top: 40px;
            font-family: "Space Grotesk", "sans-serif";
            font-size: 36px;
            color: ${secondaryColor}
        }


        .coursesFilter {
            display: flex;
            flex-direction: row;
            gap: 20px;
            margin-top: 12px;

            p {
                opacity: 0.7;
                user-select: none;
            }

            .activeFilter {
                user-select: none;
                opacity: 1;
                font-weight: 550;
                transition: cubic-bezier(0.55, 0.085, 0.68, 0.53);
            }
        }


        .courseItems {
        
            margin-top: 40px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            
        }
        }
    }

`