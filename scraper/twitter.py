# -*- coding: utf-8 -*-
"""
Created on Sat Nov 13 14:48:17 2021
@author: joseph
"""
import tweepy
from sharedModels import Message, classifier
from flair.models import TextClassifier
from flair.data import Sentence

class Twitter:
    def __init__(self):
        consumer_key = '3Qss3R71D2jkhYFy5QfXeqBmE'
        consumer_secret = 'B6NDgZktTtbd1PrwGCCizDIPXFSFdmvhAh4PfKT6cUFhKpj7Xg'
        access_token = '1459612052939427841-GTCsDujq0SqVuNvahK5HLhpQUMfHc9'
        access_token_secret = '1yLZuIt7nEByLDRXWlaI0GGBrWRCUOHoqVwctY3pYafec'
        self.auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
        self.auth.set_access_token(access_token, access_token_secret)
        self.api = tweepy.API(self.auth, wait_on_rate_limit=True)

    def getMessages(self, topic):
        messages = list()
        for pages in tweepy.Cursor(self.api.search_tweets, q=topic, result_type = "mixed", lang = 'en', tweet_mode='extended', since_id='1456942670778191874').items(50):
            sentence = Sentence(pages.full_text)
            classifier.predict(sentence)
            if sentence.labels[0].score < 0.8:
                perception = 0
            elif sentence.labels[0].value == 'POSITIVE':
                perception = 1
            else:
                perception = -1
            message = Message(perception, pages.favorite_count, "Twitter")
            messages.append(message)
        return messages
    