class Cat {
  static all = []

  constructor(cat){
    this.id = cat.id
    this.name = cat.name
    Cat.all.push(this)
  }

  render(){
    let catDiv = document.createElement("div")
    catDiv.classList.add("four", "wide", "column")
    catDiv.innerHTML = `
    <div class="ui card">
      <div class="image">
        <img src="http://placekitten.com/g/200/200">
      </div>
      <div class="content">
        <p>${this.name}</p>
        <ul>Hobbies:
        <ul>
      </div>
    </div>
    `
    return this.addForm(catDiv)
  }

  addForm(catDiv){
    let input = document.createElement('input')
    input.placeholder = "Enter Hobby ID"
    let button = document.createElement('button')
    button.innerText = "Add Hobby"
    button.addEventListener("click", this.addHobby.bind(this))
    catDiv.querySelector(".card").appendChild(input)
    catDiv.querySelector(".card").appendChild(button)
    return catDiv
  }

  //Will need to POST to cats table
  static addCat(){

  }

  //Will need POST to join table
  addHobby(e){
    console.log(this, e)
  }

  //Will need to DELETE to cats table
  deleteCat(){

  }

  //Will need to PATCH to cats table
  updateCat(){

  }
}
