## Fetch Gets and Posts
# Single Page Applications

### Mocking your own backend
```
json-server --watch db.json
```

### JSON Server Routes
```
GET    /pokemon
GET    /pokemon/1
POST   /pokemon
PUT    /pokemon/1
PATCH  /pokemon/1
DELETE /pokemon/1
```
To POST a new Pokemon:
```
body: JSON.stringify({
  "name": "charmeleon",
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
})
```

### Building out the frontend (Deliverables)
- See all Pokemon sprites
- Create your own Pokemon
- Delete a Pokemon on click

### Notes:
- [Documentation of using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- `body` of a fetch HAS to be a string!!

#### Announcements:
- The rest of Mod 3 is basically building out SPA with CRUD features
- Lab Reviews coming up: Monsters, Toy Tale
