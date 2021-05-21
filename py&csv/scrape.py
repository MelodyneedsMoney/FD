import time
import csv
import tweepy
import ssl
ssl._create_default_https_context = ssl._create_unverified_context
# Oauth keys
consumer_key = "E9kb6Utiyvz9aVSSW7rd9ki6R"
consumer_secret = "oXaqTgeH8XqsyJ21zui1fPscVvuRqFa0OvOFfwHqDejTx4GkpX"
access_token = "1387116142649503746-qERBQXm9qG92BgTbIGexB5A4DMQ5fB"
access_token_secret = "f3QsfseFvjTaXFkuLb3piyXXLTKcH8QSJWBrKv6UmrqLn"
# Authentication with Twitter
auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth)


name = 'SecBlinken'
tweet_id = '1381769108316954626'

replies=[]
startTime = time.time()
with open('replies.csv', 'w') as f:
    csv_writer = csv.DictWriter(f, fieldnames=('user', 'text'))
    csv_writer.writeheader()
    counter = 0
    for tweet in tweepy.Cursor(api.search,q='to:'+name, result_type='recent', timeout=999999).items(5000):
        counter += 1
        if hasattr(tweet, 'in_reply_to_status_id_str'):
            if (tweet.in_reply_to_status_id_str==tweet_id):
                print(tweet.user.screen_name)
                print(tweet.text)
                row = {'user': tweet.user.screen_name, 'text': tweet.text.replace('\n', ' ')}
                csv_writer.writerow(row)
                replies.append(tweet)
        if (counter % 300 == 0):
            print("start sleeping")
            time.sleep(900)
            print("Wake up and continue")


