import React, {Component} from 'react'
const request = require('superagent');

import Home from './Home'

class Fiction extends Component {
  constructor(){
    super()
    this.state = {
      books: []
    }
  }
  componentWillMount(){
      request
      .get("https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=FjSPdfzujduYkg5G6AvAbAAjYnozt8pc")
      .end((err,res) => {
        this.setState({books:res.body.results})
      })
    
    
  }
  render() {
    return (
      <div>
        <div>
            <h1>Fiction</h1>
        </div>
        <div>
          <ul>
         {
            this.state.books.map((book) =>  {
              return <li>{book.book_details[0].title}<button className = "addButton" type="text">Add</button></li>

            })
          }
          </ul>
        </div>
        <div>
             <p><a href='./#'>Home</a></p>  
        </div>
      </div>
    )

  }
}

export default Fiction

