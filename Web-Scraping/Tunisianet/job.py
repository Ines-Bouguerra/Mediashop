import schedule
import time
import subprocess


def do_job():
    cmd = "scrapy crawl TunisianetSpider -o tunisianet_job.csv "

    process = subprocess.call(cmd, shell=True)
    print('Tunisianet Job :', process)


# schedule.every(5).seconds.do(do_job)
schedule.every().day.at('00:00').do(do_job)
while(1):
    schedule.run_pending()
    time.sleep(1)
