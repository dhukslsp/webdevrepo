from bs4 import BeautifulSoup
import requests
url = "https://quotes.toscrape.com/"
r = requests.get(url)
html_source = r.content
soup = BeautifulSoup(html_source, 'html.parser')
# Find elements by 'test1' class
find_by_class = soup.find_all(class_="quote")
for i in find_by_class:
	print(i.find("span",attrs = {"class":"text"} ).string)	
# printing teh anchor tag links
allanchors = soup.find_all("a",{'href':True})
for i in allanchors:
	print(i['href'])

iUh30 qLRx3b tjvcx