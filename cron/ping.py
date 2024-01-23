import requests

def ping_server():
    response = requests.get("https://example-mongo-server.onrender.com/")
    if response.status_code == 200:
        print("Server is up and running")
    else:
        print("Server is down")

if __name__ == '__main__':
    ping_server()