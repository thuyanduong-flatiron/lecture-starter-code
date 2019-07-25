class Hobby {
  static all = []
  constructor(hobby){
    this.id = hobby.id
    this.name = hobby.name
    this.description = hobby.description
    Hobby.all.push(this)
  }

  static fetchHobbies(){
    fetch('http://localhost:3000/hobbies')
    .then(res => res.json())
    .then(hobbiesArray => {
      hobbiesArray.forEach(hobby => {
        let hobbyInstance = new Hobby(hobby)
        hobbyInstance.render()
      })
    })
  }

  render(){
    let li = document.createElement("li")
    li.innerText = `${this.name} - ${this.description}`
    document.querySelector(`#hobbies`).append(li)
  }

}
