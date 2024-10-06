from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .supabasestuff import *

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/", tags=["root"])
async def read_root() -> dict:
    print("GOT")
    return {"message": "Welcome to your todo list."}

@app.get("/msg")
async def get_msg(): 
    print('received')
    return {'message': "AHHHHHHHHHHHHH"}

@app.post("/update-food")
async def update_food(data: dict):
    update_db(data)
    
@app.get("/get-food")
async def get_food(id_: int):
    # TODO: khushi investigate what returns here... if necessary add a func to parse! 
    return get_data_by_id(id_)