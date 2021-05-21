from urllib.request import urlopen
from bs4 import BeautifulSoup
import requests


file = "5_twitterBBC.csv"
f = open(file, "w")
Headers = "tweet_user, tweet_text,  replies,  retweets\n"
f.write(Headers)
url = "https://twitter.com/BBCWorld"

with open("1.html") as fp:
    soup = BeautifulSoup(fp, 'html.parser')

# f.write(soup.prettify())

# Gets the tweet
tweets = soup.find_all("span", attrs={"class":"css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0"})

# Writes tweet fetched in file
for tweet in tweets:
    f.write(tweet.prettify())
    try:
        if not tweet.find('span'):
            print(tweet.text.strip())
            tweet_text = tweet.find('p',{"class":'tweet-text'}).text.encode('utf8').strip()
            replies = tweet.find('span',{"class":"ProfileTweet-actionCount"}).text.strip()
            retweets = tweet.find('span', {"class" : "ProfileTweet-action--retweet"}).text.strip()
            # String interpolation technique
            f.write(f'{tweet_user},/^{tweet_text}$/,{replies},{retweets}\n')
    except: AttributeError
f.close()