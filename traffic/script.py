import requests

api_key = "4b4cf6d72d4c68d39b580c03ee56a60b"

tracker_url = "https://mytrackertest.com/yc5mZN?source={capi}&sub_id_1=px&sub_id_6=btag"


data = {
    "s2s_postback": "https://mytrackertest.com?source=capi&px={sub_id_1}&fbp={sub_id_9}",
    "source": "{capi}",
    "px": "{sub_id_1}",
    "btag": "test",
}


headers = {"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"}


response = requests.post(tracker_url, json=data, headers=headers)

# Проверка результата
if response.status_code == 200:
    print("Источник трафика успешно создан.")
else:
    print(f"Ошибка: {response.status_code} - {response.text}")
