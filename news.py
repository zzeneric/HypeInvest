from newsapi import NewsApiClient

key = '67e2b64352e14eb4af0a5517e50e6379'
search_keyword = input("Enter the stock you want to check")

# Init
newsapi = NewsApiClient(api_key=key)

all_articles = newsapi.get_everything(qintitle=search_keyword,
                                      from_param='2021-11-01',
                                      to='2021-11-13',
                                      language='en',
                                      page_size=100)

# /v2/top-headlines/sources
sources = newsapi.get_sources()

news_list = []


class message:
    def __init__(self, title, perception, popularity):
        self.title = title
        self.perception = perception
        self.popularity = popularity


for i in range(0, len(all_articles.get('articles'))):
    news_list.append(message(all_articles.get('articles')[i].get('title'), -99, all_articles.get('totalResults')))

for val in news_list:
    print(val.title + ", " + str(val.perception) + ", " + str(val.popularity))
