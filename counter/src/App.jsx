import styled, {css} from 'styled-components'
import "./App.css"
import { Buttons,SearchBar } from './styles/elements';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
` ;

const Container = styled.div`
 width: 1280px;
 min-width: 1280px;
 margin: 0 auto;
 .row{
    width: 100%;
    display: flex;
    align-items: center;
 }
`;
const Subhead = styled.h3`
    font-size: 24px;
    font-weight: 600;
    margin: 160px 0 48px;
`;




function App(){
    return <div className='App'>
        <Container>
            <Subhead>Buttons</Subhead>
            <div className="row">
                <Buttons>Playlist</Buttons>
                <Buttons outline>Chennal</Buttons>
                <Buttons secondary>Alarm</Buttons>
                <Buttons primary>Booking</Buttons>
            </div>
            <Subhead>Buttons</Subhead>
            <div className="row">
                <SearchBar> 
                    <input placeholder='Search for podcasts, news stories, etc'/>
                </SearchBar>
            </div>
        </Container>
    </div>
    
}


export default App;
