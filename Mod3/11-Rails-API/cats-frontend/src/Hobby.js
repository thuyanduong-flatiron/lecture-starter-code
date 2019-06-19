class Hobby {

  static all = []

  constructor(hobby){
    this.id = hobby.id
    this.description = hobby.description
    Hobby.all.push(this)
  }

  render(){
    let li = document.createElement("li")
    li.innerText = `${this.id} - ${this.description}`
    return li
  }
}
