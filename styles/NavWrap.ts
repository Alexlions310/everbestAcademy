import styled from "styled-components";
import { primaryColor } from "./MainWrapper";

export const NavWrap = styled.div`

    @media only screen and (min-width:600px) {


        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 24px;
    

        .closedNav {
            list-style-type: none;
            display: flex;
            flex-direction: row;
            gap: 32px;
            font-size: 18px;
            font-family: "Poppins", "sans-serif";
            justify-content: center;
            align-items: center;

        }

        .contactUs {
            font-family: "Poppins", sans-serif;
            background-color: ${primaryColor};
            padding: 12px 16px;
            font-size: 18px;
            border-radius: 8px;
            color:white;
            border: none;
        }

     
        
        .active::after{
            margin-left: 25%;
            display: flex;
            justify-content: center;
            align-items: center;
            content: "";
            width: 50%;
            border-bottom: 2px solid ${primaryColor};
            
        }
    

        .logoContainer {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 12px;
           .theLogo {
            width: 44px;
            height: 44px;
            position: relative;
            user-select: none;
           }

           .logoName {
            line-height: 110%;
           }

        }

        .menuContainer {
            display: none;
        }

        .aboutSection {
            display: flex;
            flex-direction: column;
            
        }

        .aboutContainer {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }

        

        .arrowContainer {
            .arrowDown {
                position: relative;
                width: 24px;
                height: 24px;
            }
        }

        .aboutDropdownActive {
            transition: 0.3s;
            opacity: 1;
            transform: translateY(0px);
            position: absolute;
            padding: 8px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: white;
            border-radius: 12px;

            ul {
                list-style: none;
                padding: 2px;
                
            }
        }

        .aboutDropdownInActive {
            transition: 0.3s;
            opacity: 0;
            transform: translateY(-10px);
            position: absolute;
            padding: 8px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: white;

            ul {
                list-style: none;
                padding: 2px;
                
            }
        }

      

       
    }


    //Desktop 

        @media only screen and (max-width:600px) {

            
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 24px;
        
    
        
        .closedNav {
            display: none;
            top: 0;
            left: 0;
            transform: translateX(100%);
            transition: all .45s;
            width: 100%;
            height: 100vh;
            position: absolute;
            list-style-type: none;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            justify-content: center;
            font-size: 32px;
            font-family: "Poppins", "sans-serif";
            background-color: ${primaryColor};
            user-select: none;

        }

        .openedNav {
            display: flex;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            position: absolute;
            list-style-type: none;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 12px;
            font-size: 32px;
            font-family: "Poppins", "sans-serif";
            background-color: ${primaryColor};
            transform: translateX(0);
            transition: all .45s;
            z-index: 1;
            user-select: none;
           
            

        }

     
        
        .active {
            color: white;
        }

        .logoContainer {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 12px;
           .theLogo {
            width: 44px;
            height: 44px;
            position: relative;
            user-select: none;
           }

           .logoName {
            line-height: 110%;
           }

        }


        .aboutSection {
            display: flex;
            flex-direction: column;
            
        }

        .aboutContainer {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }

        

        .arrowContainer {
            .arrowDown {
                position: relative;
                width: 24px;
                height: 24px;
            }
        }

        .aboutDropdownActive {
            transition: 0.3s;
            opacity: 1;
            transform: translateY(0px);
            position: absolute;
            padding: 8px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: white;
            border-radius: 12px;

            ul {
                list-style: none;
                padding: 2px;
                
            }
        }

        .aboutDropdownInActive {
            transition: 0.3s;
            opacity: 0;
            transform: translateY(-10px);
            position: absolute;
            padding: 8px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: white;

            ul {
                list-style: none;
                padding: 2px;
                
            }
        }
        
        .menuContainer {
            display: inline-block;
            z-index: 1;
            user-select: none;

            .menu {
                position: relative;
                width: 44px;
                height: 44px;
            }
        }

        .contactUs {
           display: none;
        }

      

       
    }

`