class Cat {
  constructor(cat){
    this.id = cat.id
    this.name = cat.name
    this.image = cat.image || 'http://placekitten.com/g/200/200'
    // this.hobbies = cat.hobbies
  }

  // renderCatCard(){
  //   let catDiv = document.createElement("div")
  //   catDiv.id = `cat-card-${this.id}`
  //   catDiv.classList.add("four", "wide", "column")
  //   catDiv.innerHTML = `
  //   <div class="ui card">
  //     <div class="image">
  //       <img src="${this.image}">
  //     </div>
  //     <div class="content" id="cat-content-${this.id}">
  //       <p>${this.name}</p>
  //     </div>
  //   </div>
  //   `
  //   document.querySelector('#cats').appendChild(catDiv)
  //   // this.renderHobbies()
  //   // this.renderForm()
  // }

  // static fetchCats(){
  //   // fetch('http://localhost:3000/cats')
  //   // .then(res => res.json())
  //   // .then(catsArray => {
  //   //   catsArray.forEach(cat => {
  //   //     let catInstance = new Cat(cat)
  //   //     catInstance.renderCatCard()
  //   //   })
  //   // })
  // }

  // renderHobbies(){
  //   let ul = document.createElement('ul')
  //   ul.id = `cat-hobbies-${this.id}`
  //   document.querySelector(`#cat-content-${this.id}`).appendChild(ul)
  //   // this.hobbies.forEach(hobby => {
  //   //   let li = document.createElement("li")
  //   //   li.innerText = `${hobby.name}`
  //   //   ul.append(li)
  //   // })
  // }

  // renderForm(){
  //   let select = document.createElement("select")
  //   Hobby.all.forEach(hobby => {
  //     select.innerHTML += `
  //       <option value="${hobby.id}">${hobby.name}</option>
  //     `
  //   })
  //   // let button = document.createElement("button")
  //   // button.innerText = "Add Hobby"
  //   // document.querySelector(`#cat-content-${this.id}`).append(select, button)
  // }
}
