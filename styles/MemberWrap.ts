import styled from "styled-components";
import { secondaryColor } from "./MainWrapper";


export const MemeberWrap = styled.div`
    @media only screen and (min-width:600px) {
        align-items: center;
        display: flex;
        flex-direction: column;
        background-color: white;
        width: 280px;
        height: 160px;
        box-shadow: 4px 12px 12px 0px rgba(0,0,0,0.08);
        border-radius: 16px;
        .memberImgContainer {
            margin-top: -40px;
            overflow: hidden;
            border-radius: 100px;
            .memberImg {
                position: relative;
                width: 108px;
                height: 108px;
            }
        }

        .memberName {
            margin-top: 12px;
            color: ${secondaryColor};
            font-weight: 600;
            font-size: 20px;

        }

        .memberStatus {
            font-size: 16px;
            font-weight: 600;
            opacity: 0.55;
        }
    }



    @media only screen and (max-width:600px) {
        align-items: center;
        display: flex;
        flex-direction: column;
        background-color: white;
        width: 280px;
        height: 160px;
        box-shadow: 4px 12px 12px 0px rgba(0,0,0,0.08);
        border-radius: 16px;
        .memberImgContainer {
            margin-top: -40px;
            overflow: hidden;
            border-radius: 100px;
            .memberImg {
                position: relative;
                width: 108px;
                height: 108px;

            }
        }

        .memberName {
            margin-top: 12px;
            color: ${secondaryColor};
            font-weight: 600;
            font-size: 20px;

        }

        .memberStatus {
            font-size: 16px;
            font-weight: 600;
            opacity: 0.55;
        }
    }

`