import requests

BASE_URL = "http://localhost:8098/buckets/s25877/keys/"

new_key = "caps"
new_data = {"nickname":"Caps",
"age":22,
"IsRetired":False,
"Possition":"MidLane"}

r = requests.get(url = BASE_URL, params = {'keys':'true'})
print(r.text)

r = requests.post(url = BASE_URL + new_key, data = new_data)
print(r)

r = requests.get(url = BASE_URL + new_key, params = {})
print(r.text)

updated_data = {"nickname":"Caps",
"age":22,
"IsRetired":False,
"Possition":"BotLane"}
r = requests.put(url = BASE_URL + new_key, data = updated_data)
print(r)

r = requests.get(url = BASE_URL + new_key, params = {})
print(r.text)

r = requests.delete(url = BASE_URL + new_key)
print(r)

r = requests.get(url = BASE_URL + new_key)
print(r.text)