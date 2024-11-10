import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
import joblib
from pymongo import MongoClient
from datetime import datetime


client = MongoClient('mongodb://localhost:27017/')
db = client.hospital_login
collection = db.data

data = pd.DataFrame(list(collection.find()))

data['date'] = pd.to_datetime(data['date'])
data['year'] = data['date'].dt.year
data['month'] = data['date'].dt.month 
data['day'] = data['date'].dt.day

x = ['year', 'month', 'day']
y = ['patients_in', 'beds_occupied', 'icu_beds', 'ventilators', 'doctors', 'nurses', 'staff']

models = {}

for i in y:
    a = data[x]
    b = data[i]
    
    m = RandomForestRegressor(100)
    m.fit(a, b)
    models[i] = m

def predict(dt):
    date = datetime.strptime(dt, '%Y-%m-%d')
    data = pd.DataFrame([{
        'year': date.year,
        'month': date.month,
        'day': date.day
    }])
    
    ans = {}
    for i in y:
        n = models[i].predict(data)[0]
        n = int(n)
        ans[i] = n
    return ans

# date = input("date(YYYY-MM-DD) After 2022-01-01 : ")
# print(predict(date))



