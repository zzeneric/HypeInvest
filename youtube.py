# -*- coding: utf-8 -*-
"""
Created on Sat Nov 13 21:07:15 2021
@author: joseph
"""


from apiclient.discovery import build
from sharedModels import Message, classifier
from flair.data import Sentence

class Youtube:
    def __init__(self):
        YOUTUBE_API_KEY = "AIzaSyB74mxAEK_V0tCoh5R0Qh3G9x688xa3JFo"
        self.youtube = build('youtube','v3',developerKey = YOUTUBE_API_KEY)

    def getMessages(self, topic):
        messages = list()
        title_request = self.youtube.search().list(q=topic,part='snippet',type="video",
                                publishedAfter='2021-11-07T00:00:00Z', maxResults = 100)
        res1 = title_request.execute()
        ids = ""
        titles = list()
        for item in res1['items']:
            titles.append(item['snippet']['title'])
            ids = ids + str(item['id']['videoId']) + ","
        ids = ids[:-1]
        statistics_request = self.youtube.videos().list(id = ids, part='statistics',maxResults = 100)
        res2 = statistics_request.execute()
        index = 0
        for item in res2['items']:
            title = titles[index]
            sentence = Sentence(title)
            classifier.predict(sentence)
            if sentence.labels[0].score < 0.8:
                perception = 0
            elif sentence.labels[0].value == 'POSITIVE':
                perception = 1
            else:
                perception = -1
            views = item['statistics']['viewCount']
            likes = item['statistics']['likeCount']
            dislikes = item['statistics']['dislikeCount']
            if dislikes == 0:
                likeDislikeRatio = 1
            else:
                likeDislikeRatio = likes / (dislikes + likes)
            perception *= likeDislikeRatio
            message = Message(perception, views, "Youtube")
            messages.append(message)
            index += 1
        return messages
