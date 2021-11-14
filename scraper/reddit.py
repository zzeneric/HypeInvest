import praw
from sharedModels import Message, classifier
from flair.models import TextClassifier
from flair.data import Sentence

class Reddit:
    def __init__(self):
        username = 'HypeInvestingHackUTD'
        password = 'ThisIsAPassword!'
        app_id = '7jx9da8y5_4_FbxQ0A65VA'
        app_secret = 'oSKq8ALe3NaROKX3haVImKNTBiZrrg'
        self.reddit = praw.Reddit(
            user_agent="Comment Extraction by HypeInvestingHackUTD",
            client_id=app_id,
            client_secret=app_secret,
            username=username,
            password=password,
        )
        self.subreddit = self.reddit.subreddit("all")
    
    def getMessages(self, topic):   
        messages = list()
        for submission in self.subreddit.search(query=topic, sort='relevance', time_filter = 'week'):
            sentence = Sentence(submission.title)
            classifier.predict(sentence)
            if sentence.labels[0].score < 0.8:
                perception = 0
            elif sentence.labels[0].value == 'POSITIVE':
                perception = 1
            else:
                perception = -1
            message = Message(perception, submission.score, "Reddit")
            messages.append(message)
        return messages
