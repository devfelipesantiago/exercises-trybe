import requests

request = requests.get("http://www.betrybe.com/")
print(request)

print(request.status_code)
print("=====================")
print(request.headers)
print(request.headers["Content-type"])
print("=====================")
print(request.text)
print("=====================")
print(request.content)
