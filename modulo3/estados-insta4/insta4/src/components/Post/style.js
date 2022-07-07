import styled from 'styled-components'

export const PostContainer = styled.div`
border: 1px solid gray;
width: 300px;
margin-bottom: 10px;


.PostHeader {
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 10px
}


.PostFooter { 
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    justify-content: space-between
}


.UserPhoto  { 
    height: 30px;
    width: 30px;
    margin-right: 10px;
    border-radius: 50%}

    
.PostPhoto{
    width: 100%;
}
`