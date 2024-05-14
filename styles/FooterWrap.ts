import styled from "styled-components";


export const FooterWrap = styled.div`
    @media only screen and (min-width:600px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 108px;
        width: 100%;
        padding: 40px 180px;
        background-color: white;

        .footerText {
            opacity: 0.65;
        }

    }

    @media only screen and (max-width:600px) {
        display: flex;
        flex-direction: column;
        gap: 28px;
        margin-top: 108px;
        width: 100%;
        padding: 40px 17px;
        background-color: white;

        .footerText {
            opacity: 0.65;
        }

    }

`