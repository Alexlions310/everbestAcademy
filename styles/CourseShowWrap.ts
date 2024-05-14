import styled from "styled-components";
import { secondaryColor } from "./MainWrapper";

export const CourseShowWrap = styled.div`

    @media only screen and (min-width:600px) {
        width: 280px;
        height: 380px;
        display: flex;
        border: 1px solid rgba(0,0,0,0.15);
        flex-direction: column;
        background-color: white;
        border-radius: 16px;
        box-shadow: 4px 12px 12px 0px rgba(0,0,0,0.12);

        .courseThumbContainer {
            margin-top: 0px;
            overflow: hidden;
            border-top-left-radius: 16px;
            border-top-right-radius: 16px;
            width: 100%;
            height: 200px;
            .courseThumb {
                position: relative;
                width: 100%;
                height: 100%;
                
             
            }
        }


        .courseShowHeadline {
            font-size: 24px;
            margin-top: 12px;
            color: ${secondaryColor}
        }

       
        .cardInfo {
            padding: 12px ;
        }

        .subTexts {
            display: flex;
            justify-content: space-between;
            opacity: 0.7;
        }



    }

    //desktop

    
    @media only screen and (max-width:600px) {
        width: 100%;
        height: 480px;
        display: flex;
        border: 1px solid rgba(0,0,0,0.15);
        flex-direction: column;
        background-color: white;
        border-radius: 16px;
        box-shadow: 4px 12px 12px 0px rgba(0,0,0,0.12);

        .courseThumbContainer {
            margin-top: 0px;
            overflow: hidden;
            border-top-left-radius: 16px;
            border-top-right-radius: 16px;
            width: 100%;
            height: 250px;
            .courseThumb {
                position: relative;
                width: 100%;
                height: 100%;
                
             
            }
        }


        .courseShowHeadline {
            font-size: 28px;
            margin-top: 12px;
            color: ${secondaryColor}
        }

       
        .cardInfo {
            padding: 20px ;
            font-size: 20px;
        }

        .subTexts {
            display: flex;
            justify-content: space-between;
            opacity: 0.7;
        }



    }

`