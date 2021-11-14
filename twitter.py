# -*- coding: utf-8 -*-
"""
Created on Sat Nov 13 14:48:17 2021

@author: joseph
"""
import tweepy
import json
consumer_key = '3Qss3R71D2jkhYFy5QfXeqBmE'
consumer_secret = 'B6NDgZktTtbd1PrwGCCizDIPXFSFdmvhAh4PfKT6cUFhKpj7Xg'
access_token = '1459612052939427841-GTCsDujq0SqVuNvahK5HLhpQUMfHc9'
access_token_secret = '1yLZuIt7nEByLDRXWlaI0GGBrWRCUOHoqVwctY3pYafec'

#authentication
auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
#open api
api = tweepy.API(auth, wait_on_rate_limit=True)

tweet = api.search_tweets(q='elon musk', until='2021-11-07')
i = 1
for pages in tweepy.Cursor(api.search_tweets, q="elon musk", result_type = "popular", since_id= tweet[0].id,
                           lang = 'en', tweet_mode='extended').items(50):
    print("Tweet: ", i, pages.full_text , "\n")
    i = i+1
    print("date: ", pages.created_at)
    print ("like: ", pages.favorite_count, "\n\n")
    

#print(api.search_tweets('stock'))
