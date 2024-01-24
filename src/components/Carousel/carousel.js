import React from 'react'
import './carousel.css'

export default function carousel() {
  return <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.reliancedigital.in/medias/iPhone-15-1365x260.jpg?context=bWFzdGVyfGltYWdlc3w5NzgyMHxpbWFnZS9qcGVnfGltYWdlcy9oZmQvaDU3LzEwMTAzODQyNzM0MTEwLmpwZ3w3MjVjNzQwOTc4Y2IzNTU5ZTBkNWRhYzc0NDlhNzQ0ZmZlNzkyZTk5NjA1YjNjOTEzOTkxNjcxODIxYmQ2OTY2" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://www.reliancedigital.in/medias/Samsung-S24-Series-1365x260-copy.jpg?context=bWFzdGVyfGltYWdlc3wxMzc1OTd8aW1hZ2UvanBlZ3xpbWFnZXMvaDRiL2hiMC8xMDA5ODU0MzEzMjcwMi5qcGd8NjRkZTA2N2FjYzAzZGZlOWZiZTAzOWVmYWRkNDZiZTFiOWJkNWNlNDY0NDMwYzdkZmZhNmRhYTFlYmI4OGNjMw" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://www.reliancedigital.in/medias/Redmi-A2-1.jpg?context=bWFzdGVyfGltYWdlc3wxMzA5MjF8aW1hZ2UvanBlZ3xpbWFnZXMvaDVlL2hhMC8xMDA5MjU1MTcwMDUxMC5qcGd8ZjBiMzlmNjE2OTJiYzU2ZmM5YTczYTZiZmI0ZDVkYzM1MDI1N2Q3OGE1ZTBmMTNkNWE2NzY0MzA1ZWJkYjc2NA" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  
}
