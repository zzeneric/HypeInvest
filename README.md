# HypeInvest
<img src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/741/603/datas/original.png">
<br/><br/>
<img src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/741/602/datas/original.png">

## Information
HackInvest is a tool designed to analyze and index a factor that has been ignored much more than it should in the current age of social media and online publications. Especially as we can see in the past couple years, we have seen the rise of the collective, smaller investors. Individually, these individuals cannot make much change, but as we've seen recently, many social media and/or news activity can cause mass change in stock or crypto currency and values. These cannot be predicted due to the very nature of these phenomena, but HypeInvest is able to create an accurate 'Hype Index' using its algorithm developed to weigh different outlets and media differently with natural processing using a perception model along with accounting for differences in popularity of social media posts. 

StackEdit stores your files in your browser, which means all your files are automatically saved locally and are accessible **offline!**

## Score Algorithm & Methodology
The 'Hype Index' itself is dependent on two individual scores -- the perception score, and the popularity score. These scores and the Index itself are all relative scores, meaning that they are made in relation to other stocks/cryptos. 

The perception score is delivered by using natural processing to analyze things like titles, bodies, or the entire post of a news or social media instance. This also uses attributes such as the like/dislike ratio, upvotes, likes or favorites varying by platform. We assign a confidence value with some weight to possibly neutralize some of the value to increase accuracy, as the closer the value is to 0, the larger the 'weight' this value will have closer to computing the total score. With this combination of sentimental analysis using a custom model on the actual posts and headlines, along with analysis of the popularity (likes/dislikes/upvotes/etc), we can get a relative score from -1 to 1 on how this topic (stock/crypto) is perceived. 

The popularity score is solely how popular and trendy a topic is. This uses direct hits or mentions (mainly headers, no bodies for more accuracy) to get how relatively popular a stock/crypto is by considering how popular other topics are and weighing it in relation to that, giving us the ability to have this score be on a relative scale from 0-1. 

The total score itself is a complex equation that considers the perception and popularity score to get us a score between -1 and 1. Interpretation of this score is how 'significant' this stock/crypto is from getting the distance from 0. For example, a 0.78 is quite significant and positive, while a -0.09 is not significant and negative. Obviously, popularity is the key component of this, as a non-relevant stock may have an insignificant and inaccurate perception, compared to a stock that has hundreds of thousands of mentions and posts about it. 

## Stack
We used a smaller stack to keep the program lightweight as much as possible. Our frontend is all done with React to create a clean user interface with easier opportunities to integrate our API with animated or changing components. Our backend is done through Python, allowing us to focus more on computing and tweaking our algorithm without having to worry too much about code clarity. We use Flask to deliver our server and Web API, and we use a single API call to get stock information. We use a variety of APIs and endpoints to deliver information to our Flask server, and then compute our scores based on the information received. 


## How to Run
If you want to try HypeInvest and check it out, use these quick installation steps. Note to run this, you will need Node and Python installed. 
1) Clone our repository to your local machine. If you have git, you can do this quickly by running `git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY` in your shell. 
2. Create a terminal instance in the root folder of the project and run `npm install`. 
3. Create a terminal instance in the `/server` folder and install all the dependencies located in the server.py file. 
4. In the root terminal instance, run `npm start`
5. In the server terminal instance, run `python3 server.py` 
6. Have a look around!
