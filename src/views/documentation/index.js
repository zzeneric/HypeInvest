// material-ui
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
    <MainCard title="Documentation">
        <Typography variant="body2">
        <b>What it does</b>
        <br/>
        HypeInvest allows users to enter various stocks and obtain both hype information and stock information about the stock in question.
        <br/>
        To determine hype, HypeInvest scours Twitter, Reddit, Youtube, and many news outlets to find recent mentions of the company. The sentiment of each mention is determined by Flair, a state-of-the-art sentiment analysis algorithm framework. With the social media mentions, each sentiment is then weighted according to platform specific measures, like upvotes for Reddit. The popularity of a mention in social media is found by determining how much it has been viewed, which is measured differently on each platform. In the case of news mentions, we treat all reliable news sites equally. From there, each overall platform perception is calculated as a weighted average scaled between -1 and 1, where -1 refers to extremely negative perception and 1 refers to extremely positive perception. Each overall platform popularity is calculated as a sum of the popularities of each mention on that platform scaled between 0 and 1, where 0 refers to no mentions and 1 refers to many mentions. Lastly, the overall perception and popularity of the company is found as a weighted average of the platform perceptions and platform popularities respectively.
        <br/>
        The hype index is a function of overall perception and overall popularity that scales between -100 and 100, where -100 refers to extremely negative hype, 100 refers to extremely positive hype, and 0 refers to little interest. This is the main result of HypeInvest.
        <br/>
        HypeInvest also gathers information about the stock itself. Although hype is useful to guide investing, it should never be used in isolation. Having both stock information and hype information together gives users a bigger picture into how to interpret stock within the context of hype and vice versa.
        <br/><br/>
        <b>How we built it</b>
        <br/>
        To access social media and news information, we used Reddit API, Twitter API, Youtube Data API, and News API. To determine sentiment of mentions of a given company, we used Flair. To get stock information, we used the Yahoo Finance API. To deliver back-end data to the front-end, we used an API we built using Flask. To design the front-end, we used React. To do calculations in the back-end, we used Python.
        <br/><br/>
        <b>Challenges we ran into</b>
        <br/>
        One of the challenges we ran into was finding social media platforms that could provide valid information. Originally, we hoped to include Facebook in our analysis of social media. However, we soon noticed that we wouldn't be able to interpret the information from Facebook in a way that would be useful. Because of this we pivoted to Youtube in its place.
        <br/>
        There was also a major challenge in figuring out how to determine and interpret popularity and perception in a fair way. We swapped between a number of methodologies before settling on what we ended up going forward with. Many of the formulas that we originally thought up of had implementation issues. The popularity of news especially was trickier to interpret, as there's no straightforward way of determining traffic for news articles in the general case.
        <br/>
        Working with Flask proved to be difficult as well. More specifically, it was difficult for us to integrate information gathered by our custom API elsewhere. This was the biggest challenge in the later portion of the development of the project.
        <br/><br/>
        <b>Accomplishments that we're proud of</b>
        <br/>
        None of us had any real experience with any of the APIs we worked with in this competition, and some of us have have little to no experience with APIs at all. Because of this, we're proud of the fact that were able to successfully use these APIs so prominently in our final product.
        <br/>
        Flask was also difficult to work with, so it was all the better that we were able to figure it out to create a custom API that connected our project together.
        <br/><br/>
        <b>What we learned</b>
        <br/>
        As a whole, we learned a lot about how to access and utilize APIs overall. We also learned a lot about web development, especially for the purposes of connecting the back-end and front-end of a web application. Besides code, we all got better at determining how we should interpret messages about stocks, as some of us have had no experience in the investing world prior to the hackathon.
        <br/><br/>
        <b>What's next for HypeInvest</b>
        <br/>
        There are many ways to build up HypeInvest to be even more accurate. If we had time to create a custom dataset of stock-specific statements and their respective sentiments, we could train a custom Flair model with the dataset and more accurately determine where a statement is positive or negative toward a company.
        <br/>
        HypeInvest could also have its own dedicated back-end datatable to retain and update hype information about many of the most popular stocks. This would both make calculations faster and give us access to historical hype data, which could be used to make better predictions. With enough of this data, we could even utilize machine learning to best determine how patterns in hype correlate with a stock rising or falling.
        </Typography>
    </MainCard>
);

export default SamplePage;
