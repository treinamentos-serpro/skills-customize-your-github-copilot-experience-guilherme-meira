from fastapi import FastAPI, status
from pydantic import BaseModel, Field

app = FastAPI(title="Game Leaderboard API")

scores = [
    {"id": 1, "player": "Ava", "game": "Space Quest", "score": 350},
    {"id": 2, "player": "Noah", "game": "Space Quest", "score": 520},
    {"id": 3, "player": "Mia", "game": "Puzzle Run", "score": 410},
    {"id": 4, "player": "Leo", "game": "Space Quest", "score": 440},
]


class ScoreCreate(BaseModel):
    # TODO: Add a non-empty player and game, and a non-negative integer score.
    pass


@app.get("/scores")
def list_scores():
    # TODO: Return all scores.
    pass


@app.get("/leaderboard/{game}")
def get_leaderboard(game: str):
    # TODO: Filter by game and sort from highest to lowest score.
    pass


@app.post("/scores", status_code=status.HTTP_201_CREATED)
def create_score(new_score: ScoreCreate):
    # TODO: Generate an ID, store the score, and return it.
    pass