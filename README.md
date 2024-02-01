# microservices-example

This is a small example of microservices working together. You have three APIs all communicating with one another. Each repository should be separate from one another. I only put them all together in this repo as an example so that I could easily spin up all three with a `docker-compose` command.

## Getting Started

If you want to spin this up to test, make sure you have the following installed

- docker
- docker-compose

### To Run

`docker-compose up`

### To Test

`curl http://localhost:3000/doThings`

