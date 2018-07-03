from faker import Faker
import random
import json
import os

fake = Faker()
data = {};

for i in range (10):
    obj = {}
    obj['name'] = fake.name();
    obj['age']= random.randint(2,99);
    obj['job'] = fake.job();
    obj['salary'] = random.randint(30000,90000);
    data[i] = obj;

#outputs to directory of generateData file
with open(os.path.dirname(__file__)+"/random_db_output.json","w") as f:
    json.dump(data, f);

