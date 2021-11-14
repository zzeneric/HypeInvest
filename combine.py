from twitter import Twitter
from reddit import Reddit
from news import News
from sharedModels import Stock


topic = "Bitcoin"

twitter = Twitter()
reddit = Reddit()
news = News()

# Twitter
twitterMessages = twitter.getMessages(topic)
twitter_sum = 0.0
twitter_perception = 0.0
for twitterMessage in twitterMessages:
    twitter_perception += ((twitterMessage.popularity + 1) * twitterMessage.perception)
    twitter_sum += (twitterMessage.popularity + 1)
if twitter_sum > 10000:
    twitter_val = 1
else:
    twitter_val = twitter_sum / 10000
twitter_perception = twitter_perception / twitter_sum

# Reddit
redditMessages = reddit.getMessages(topic)
reddit_sum = 0.0
reddit_perception = 0.0
for redditMessage in redditMessages:
    reddit_perception += ((redditMessage.popularity + 1) * redditMessage.perception)
    reddit_sum += (redditMessage.popularity + 1)
if twitter_sum > 10000:
    reddit_val = 1
else:
    reddit_val = reddit_sum / 10000
reddit_perception = reddit_perception / reddit_sum

# News
newsMessages = news.getMessages(topic)
if newsMessages[0].popularity > 5000:
    news_val = 1
else:
    news_val = newsMessages[0].popularity / 5000
news_perception = 0.0
for newsMessage in newsMessages:
    news_perception += newsMessage.perception
news_perception = news_perception / len(newsMessages)

total_score = (((twitter_val + reddit_val) / 2) + news_val) / 2
total_perception = (((twitter_perception + reddit_perception) / 2) + news_perception) / 2
overall_rating = total_score * total_perception * 100

stock = Stock(total_perception, total_score, overall_rating)
