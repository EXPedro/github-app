import React from "react";
import useGithub from "../../hooks/github-hooks";
import * as S from './styled'

function Profile(){
    const { githubState } = useGithub();

    return <S.Wrapper>
            <S.WrapperImage 
                src="https://avatars.githubusercontent.com/u/80805367?v=4" 
                alt="Avatar of user" />
            <S.WrapperInfoUser>
                <div>
                    <h1>{githubState.user.name}</h1>
                    <S.WrapperUserName>
                        <h3>Username: </h3>
                        <a href="https://github.com/EXPedro" 
                           target="_blank" 
                           rel="noreferrer">
                               EXPedro
                        </a>
                    </S.WrapperUserName>
                </div>    
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>5</span>
                    </div>
                    <div>                        
                        <h4>Starred</h4>
                        <span>5</span>
                    </div>
                    <div>                        
                        <h4>Followings</h4>
                        <span>5</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>    
    </S.Wrapper>
}

export default Profile