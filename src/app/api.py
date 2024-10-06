from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from supabasestuff import *

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/", tags=["root"])
def read_root() -> dict:
    return {"message": "Welcome to your todo list."}

@app.get("/msg")
def get_msg(): 
    return {'message': "AHHHHHHHHHHHHH"}

@app.post("/update-food")
def update_food(data: dict):
    update_db(data)
    
@app.get("/get-food")
def get_food(id_: int):
    # TODO: khushi investigate what returns here... if necessary add a func to parse! 
    return get_data_by_id(id_)