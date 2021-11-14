from flair.models import TextClassifier
from flair.data import Sentence
import praw

class Message:
    def __init__(self, perception, popularity, platform):
        self.perception = perception 
        self.popularity = popularity 
        self.platform = platform

username = 'HypeInvestingHackUTD'
password = 'ThisIsAPassword!'
app_id = '7jx9da8y5_4_FbxQ0A65VA'
app_secret = 'oSKq8ALe3NaROKX3haVImKNTBiZrrg'
reddit = praw.Reddit(
    user_agent="Comment Extraction by HypeInvestingHackUTD",
    client_id=app_id,
    client_secret=app_secret,
    username=username,
    password=password,
)
search = 'Uber'
subreddit = reddit.subreddit("all")
classifier = TextClassifier.load('en-sentiment')
messages = list()

for submission in subreddit.search(query=search, sort='relevance', time_filter = 'week'):
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
