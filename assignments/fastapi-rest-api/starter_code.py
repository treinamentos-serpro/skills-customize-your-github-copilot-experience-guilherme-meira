from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel

app = FastAPI(title="Reading List API")

books = [
    {"id": 1, "title": "The Hobbit", "author": "J. R. R. Tolkien"},
    {"id": 2, "title": "Pride and Prejudice", "author": "Jane Austen"},
]


class BookCreate(BaseModel):
    # TODO: Add the title and author fields.
    pass


@app.get("/health")
def health_check():
    # TODO: Return a JSON status confirming the API is available.
    pass


@app.get("/books")
def list_books():
    # TODO: Return all books.
    pass


@app.get("/books/{book_id}")
def get_book(book_id: int):
    # TODO: Find the book or raise an HTTP 404 error.
    pass


@app.post("/books", status_code=status.HTTP_201_CREATED)
def create_book(book: BookCreate):
    # TODO: Assign an ID, add the book to the list, and return it.
    pass