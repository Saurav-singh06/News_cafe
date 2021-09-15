import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

export default class News extends Component {
   
    articles= [
    
    ]

    
  constructor(){
    super();
    this.state = {
        articles : this.articles
        
    }

}

async componentDidMount(){
    console.log("cmd")
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=da07ee5053bb4cc2b6f61dba3daa5ea1"
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({articles: parsedData.articles})
}

    render() {
        return (
            <div className ="container my-3">
                <h3>News - Top Headline</h3>
                {/* {this.state.articles.map((element)=>{console.log(element)})} */}
                <div className="row ">
                {this.state.articles.map((element)=>{
                    return   <div className="col-sm-3" key={element.url}>
                    <NewsItem
                    
                    title={element.title?element.title.slice(0,45):""}
                    description={element.description?element.description.slice(0,80):""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                />
                    </div>
                })}
                
                
               </div>
                

            </div>
        )
    }
}
