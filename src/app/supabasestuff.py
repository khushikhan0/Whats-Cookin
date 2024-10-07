import os
import json
from supabase import create_client, Client
from dotenv import load_dotenv

from .example_data.data import *

# load variables from env
load_dotenv()

url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(url, key)


def update_db(info: dict) -> None:
    """ Populates db with food information

    :param info: json object of the data we want 
    :return None: None
    """
    date = info['dttm']
    user_id = info['user_id']
    
    rows = parse_rows(info['data'])
    responses = []
    for row in rows: 
        response = (supabase.table("myfood")
            .insert({"user_id": info["user_id"], 
                    "dttm": info["dttm"],
                    "food": row["food"],
                    "count": row["count"],
                    "moldy_huh": row["moldy_huh"] 
                    }).execute() 
        )
        responses.append(response)
    return responses

def parse_rows(data: dict) -> list:
    """ Parses the data rows 
    
    :param data: info about rows
    :return list: information formatted in list of tuples
    """
    rows = []
    for food, food_deets in data.items():
        count = food_deets['count']
        moldy = food_deets['moldy_huh']
        
        row = {"food": food, "count": count, "moldy_huh": moldy}
        
        rows.append(row)
    
    return rows

def get_data_by_id(id_):
    """ Gets data that corresponds with a particular id. 
    
    :param id_: unique id belonging to specific user
    :return None: None
    """
    response = (supabase
        .table("myfood")
        .select('*')
        .eq('user_id', id_)
        .execute())
    
    return response

def update_user_db(data): 
    response = (supabase.table("userinfo")
            .insert({"id": data["id"], 
                    "username": data["username"],
                    "pwd": data["pwd"]
                    }).execute() 
        )
    return response

def fetch_user_id(username): 
    response = (supabase.table("userinfo")
        .select("id")
        .eq("username", username)
        .execute())
    return response



# # TODO: populate the database with data.py using the new data and functions!
# responses = update_db(day_1_user_1)
# # update_db(day_2_user_1)

# test = get_data_by_id(1) 
# thing = supabase.table("myfood").select("*").execute()
# print(test)

# users = [user1, user2, user3]

# for user in users: 
#     update_user_db(user)

# response = (supabase.table("userinfo")
#             .select("*").execute() 
#         )
