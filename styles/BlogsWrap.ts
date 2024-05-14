import styled from "styled-components";


export const BlogsWrap = styled.div`

    @media only screen and (min-width: 600px) {
        padding: 0px 180px;
      
        .blogsBody {

            .blogsHeadline {
            font-family: "Space Grotesk", "sans-serif";
            font-size: 36px;
            margin-top: 40px;
            margin-bottom: 20px;
        }
            padding: 0px 100px;

            .smallBlogs {
                margin-top: 36px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
        }
    }
    //desktop
    @media only screen and (max-width: 600px) {
        padding: 0px 17px;
      
        .blogsBody {

            .blogsHeadline {
            font-family: "Space Grotesk", "sans-serif";
            font-size: 36px;
            margin-top: 40px;
            margin-bottom: 20px;
        }
          

            .smallBlogs {
                margin-top: 36px;
                display: flex;
                flex-direction: column;
                gap:40px
            }
        }
    }


`