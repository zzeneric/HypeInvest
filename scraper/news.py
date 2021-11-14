from newsapi import NewsApiClient
from sharedModels import Message, classifier

from flair.data import Sentence

class News:
    def __init__(self):
        key = '67e2b64352e14eb4af0a5517e50e6379'
        self.api = NewsApiClient(api_key=key)

    def getMessages(self, topic):
        
        messages = list()
        all_articles = self.api.get_everything(qintitle=topic,
                                      from_param='2021-11-01',
                                      to='2021-11-13',
                                      language='en',
                                      page_size=100)
        for article in all_articles.get('articles'):
            sentence = Sentence(article.get('title'))
            classifier.predict(sentence)
            if sentence.labels[0].score < 0.8:
                perception = 0
            elif sentence.labels[0].value == 'POSITIVE':
                perception = 1
            else:
                perception = -1
            message = Message(perception, all_articles.get('totalResults'), "News")
            messages.append(message)
        return messages

