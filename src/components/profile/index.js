import React from "react";
import * as S from './styled'

function Profile(){
    return <S.Wrapper>
        <S.WrapperImage />
        <S.WrapperInfoUser />
        <S.WrapperUserName />
        <S.WrapperStatusCount />
    </S.Wrapper>
}

export default Profile