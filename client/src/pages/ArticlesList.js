import React, {useContext} from 'react';
import articleContent from './article-content';
import hotTopics from './hot-topics';

import './ArticlesList.css';
import backgroundImage from './Gifs/bg.jpg';
// Components
import Articles from '../components/Articles';
import TradingViewWidget from '../components/TradingViewWidget';
import CoolSearchBar from '../components/CoolSearchBar';
import Footer from '../components/Footer';
import { ThemeContext } from '../components/ThemeContext';



const ArticlesList = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
       <div className='blogcontainer'>
        <div className='landingpageBlog'>
          <div className='backgroundImage'></div>
          <div className='landingpageContents'>
            <h1 className='landingpageTitle'>Will Euro bulls be discouraged by Fed? Forecast as of 21.02.2024</h1>
            <p>Just a few weeks ago, markets were confident that the federal funds rate would be cut in March so much that Jerome Powell had to persuade investors to change their views. Traders now expect that the minutes of the January FOMC meeting will contain harsh rhetoric about them being wrong. However, much has changed since then. The markets came to a consensus with the Fed, and the US dollar lost its main bullish driver, which allowed EURUSD to consolidate above 1.08.</p>
            <h3>Source: Bloomberg.</h3>
          </div>
        </div>

        <div className='tradingview'>
          <div className='chart'>
            <TradingViewWidget />
          </div>

          <div className='tradingviewArticles'>
            <h1 style={{ color: theme === 'Light' ? 'rgb(35, 35, 35)' : '#bababa' }}>USD/JPY: Dollar Steady Above ¥150 with Rate Sandwiched Between Clashing Policy Views</h1>
            <p style={{ color: theme === 'Light' ? 'rgb(50, 50, 50)' : '#bababa' }}>Stubborn US inflation builds out the higher-for-longer interest rate narrative, while Japan falls into recession, bruising its own currency.
              <br /><br />1.  The USDJPY pair is comfortably trading above the psychological ¥150.00 level as the two sides clash over divergent policy views. The exchange rate, floating near a three-month high of ¥150.50, got sandwiched between stubborn inflation from the US and looming recession from Japan.
              <br /><br />2. Stateside, inflation for January remained elevated at 3.1% from a year ago. The figure fueled speculation that the Federal Reserve won’t rush to reduce the benchmark interest rate. A higher-for-longer rate narrative is generally good for the US dollar, yielding better riskless returns.
              <br /><br />3. In Japan, officials are scrambling to contain the yen’s fall. This recent low prompted warnings from the Japanese government that it might step in and shore up the yen by scooping up boatloads of it. Still, with recession knocking at the door, Japan is caught in a limbo whether to abandon its easy-money policies or have them stay in a bid to buoy the economy.</p>
          </div>
        </div>

        <CoolSearchBar />

        <h1 className='articlesFirstTitle'>Discover Hidden Gems</h1>

        <div className="discoverpage">
            <Articles articles={articleContent} style={{ background: theme === 'Light' ? 'linear-gradient(to bottom,  #ffffff, #ffc2c2)' : 'linear-gradient(to bottom,  #474747, #373232)' }}/>
        </div>
        
        <h1 className='hottopics'>Hot Topics</h1>
        <div className="discoverpage hottopicsBox">
            <Articles articles={hotTopics} style={{background: theme==='Light' ? 'linear-gradient(rgb(255, 85, 0), rgb(47, 99, 255))' : 'linear-gradient(rgb(255, 85, 0), rgb(47, 99, 255))'}}/>
        </div>
      </div>
      
      <Footer/>
    </>
  );
};

export default ArticlesList;
