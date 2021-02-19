import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import Logo from './assets/logo.png'
import Br from './assets/br.jpg'

import './fakedata';
import { fakeData } from './fakedata';

import {
  Body,
  Header,
  Layout,
  SideMenu,
  Accordion,
  Collapse,
  Items,
  Content,
  SideRightMenu,
  Introduction,
  Text
} from './Style';

function App() {
  const [ collapse, setCollapse ] = useState(false);
  const [ isActive, setIsActive ] = useState(false)

  function handleCollapse(){
    collapse ? setCollapse(false) : setCollapse(true)
    isActive ? setIsActive(false) : setIsActive(true)

  }

  return (
    <Body>
      <Header>
        <div>
          <img src={Logo} alt="logo"/>
        </div>
        <div>
          <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7" width="1em">
            <g class="search-path" fill="none" stroke="#e1e1ec">
              <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4"/>
              <circle cx="8" cy="8" r="7"/>
            </g>
          </svg>
          <input placeholder={"Pesquise algo, temos tudo"}/>
          </div>
        <div>
          <span>
            <FaUser width="1em" stroke="#e1e1ec"/>
          </span>       
        </div>
      </Header>
      <Layout>
        <SideMenu>
          <div>
            <img src={Logo} alt="logo"/>
          </div>
          <div>
            <span> Dark Wikipédia </span>
          </div>
          <Accordion>
            <Collapse>
              <span>Home</span>
            </Collapse>
            <Collapse onClick={() => handleCollapse()} active={isActive}>
              <span>Colaboração</span>
              <FiChevronDown/>
            </Collapse>
              <Items display={collapse}>
                <span>Boas-vindas</span>
                <span>Ajuda</span>
                <span>Páginas de teste</span>
                <span>Portal comunitário</span>
                <span>Mudanças recentes</span>
                <span>Boas-vindas</span>
              </Items>
              <Collapse>
              <span>Sobre</span>
            </Collapse>
            <Collapse onClick={() => handleCollapse()} active={isActive}>
              <span>Ferramentas</span>
              <FiChevronDown/>
            </Collapse>
            <Collapse onClick={() => handleCollapse()} active={isActive}>
              <span>Imprimir/exportar</span>
              <FiChevronDown/>
            </Collapse>
          </Accordion>
        </SideMenu>
        <Content>
          <Introduction>
            <h1>Brasil</h1>
            <p>{fakeData.p1}</p>
            <p>{fakeData.p2}</p>
            <p>{fakeData.p3}</p>
            <p>{fakeData.p4}</p>
          </Introduction>
          <Text>
            <h2>Etimologia</h2>
              <p>{fakeData.p1}</p>
              <p>{fakeData.p2}</p>
              <p>{fakeData.p3}</p>
              <p>{fakeData.p4}</p>
          </Text>
        </Content>
        <SideRightMenu>
          <div>
            <h4>República federativa do Brasil</h4>
            <img src={Br} alt="bandeira"/>
          </div>
            <div>
              <span>Lema: Ordem e Progresso</span>
              <span>Gentílico: brasileiro(a)</span>
            </div>
            <div>
              <div>
                <span>Capital</span>
                <span>Brasília</span>
              </div>
              <div>
                <span>Cidade mais populosa</span>
                <span>São Paulo</span>
              </div>
              <div>
                <span>Língua oficial</span>
                <span>Português</span>
              </div>
              <div>
                <span>Governo</span>
                <span>República federativa presidencialista</span>
              </div>
              <div>
                <span>Número de ministérios</span>
                <span>23</span>
              </div>
              <div>
                <span>Constituição</span>
                <span>5 de outubro de 1988</span>
              </div>
              <div>
                <span>População</span>
                <span>211 755 692 hab. </span>
              </div>
              <div>
                <span>IDH</span>
                <span>0,765 (84.º) – alto</span>
              </div>
              <div>
                <span>Moeda</span>
                <span>Real (BRL) </span>
              </div>
              <div>
                <span>PIB</span>
                <span>US$ 3,078 trilhões</span>
              </div>
            </div>
        </SideRightMenu>
      </Layout>
    </Body>
  );
}

export default App;
