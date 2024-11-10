import pandas as pd
from pymongo import MongoClient

client=MongoClient('mongodb://localhost:27017/')
db=client.hospital_login
collection=db.users

data=pd.DataFrame(list[collection.find({})])
print(data[:])