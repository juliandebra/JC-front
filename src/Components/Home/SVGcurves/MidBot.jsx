import './MidBot.css';
import styled from 'styled-components';

const MidBot = (props) => {
    
    
    return (
        <MidBotStyle className='MidBot'>
<svg viewBox="0 0 500 150" preserveAspectRatio="none">
<defs>
    <linearGradient id="grad1" x1="95%" y1="0%" x2="10%" y2="0%">
     
      <stop offset="0%" style={{stopColor: 'goldenrod',stopOpacity: 1}} />
      <stop offset="25%" style={{stopColor: '#FCF6BA', stopOpacity:1}} />
      <stop offset="50%" style={{stopColor: 'goldenrod ', stopOpacity:1}} />
      <stop offset="75%" style={{stopColor: '#FBF5B7', stopOpacity:1}} />
      <stop offset="100%" style={{stopColor: 'goldenrod', stopOpacity:1}} />
    </linearGradient>
  </defs>
    <path d="M175.73,25.16 C346.73,97.20 343.90,-26.15 517.72,32.06 L501.35,-2.46 L175.73,-2.46 Z" style={{fill:'url(#grad1)'}}></path></svg>
        </MidBotStyle>
    )

}   
export default MidBot;

const MidBotStyle = styled.div`
   
   
 

   `
