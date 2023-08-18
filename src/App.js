//import logo from './logo.svg';
/*
import './App.css';
import styled from 'styled-components';

const Titulo = styled.h1`

  color: #31e636;
  text-decoration: underline;

`;

const Subtitulo = styled.h2`

  color: green;

`;

const Artigo = styled.section`

  color: #9393e2;

`;

const Titulo2 = styled.h1`

  color: blue;
  font-size: 25px;


`;

*/
import React, { Component } from 'react';
import 'primereact/resources/primereact.min.css';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import { Menubar } from 'primereact/menubar';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';


const DivMain=styled.h1`

  color: black;
  font-size:10px;+

`;

class App extends Component {

      render() {

        const menuitems = [

          {

            label: 'Home',
            command:() => this.props.history.push('/')

          },
          {

            label:'Sobre',
            command:() => this.props.history.push('/sobre')


          },
          {

            label:'Contato'
            command:() => this.props.history.push('/contato')
          }

        ];

      

        return (
          
          <div className="App">

              <Menubar model={menuitems}/>
                <Header />
                  <DivMain>
                      <main>
                        <div className="content" id="content">
                            {this.props.children}
                        </div>
                      </main>
                  </DivMain>
              <Footer />
            
            
          </div>
        
        );
    }
}

export default withRouter(App);
