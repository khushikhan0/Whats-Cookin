import os
import json
from supabase import create_client, Client
from dotenv import load_dotenv

# load variables from env
load_dotenv()

url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(url, key)

# response = (
#     supabase.table("myfood")
#     .insert({"food": "celery", "image_bytes": "1", "image_date": "2024-10-04"})
#     .execute()
# )

# TODO: def update_db(info):
# update db everytime photo is uploaded
# take in a dict, hashmap, json etc -> parse info -> update db with it


# def get_data_by_id(id):
#     response = (supabase
#         .table("myfood")
#         .select('*')
#         .eq('id', id)
#         .execute())
#     return response