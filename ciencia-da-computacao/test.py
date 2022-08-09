import json


with open("pokemon.json") as file:
    pokemons = json.load(file)

print(pokemons)
