import React from "react";
import * as S from './styled'

const Header = () => {
    return <header>
        <S.Wrapper>
            <input 
                type="text"
                placeholder="Digite o username para pesquisa..." />
            <button>Buscar</button>
        </S.Wrapper>
    </header>

}

export default Header;