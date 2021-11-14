from flair.models import TextClassifier

class Message:
    def __init__(self, perception, popularity, platform):
        self.perception = perception 
        self.popularity = popularity 
        self.platform = platform

class Stock:
    def __init__(self, perception, popularity, rating):
        self.perception = perception
        self.popularity = popularity
        self.rating = rating

classifier = TextClassifier.load('en-sentiment')