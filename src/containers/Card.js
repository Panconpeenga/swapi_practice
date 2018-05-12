import React, {Component} from 'react';
import DataCard from './DataCard';

class Card extends Component {
  constructor(){
    super();
      this.state= {
        index: '',
        selected: []
      }
    }

  onSelected = (index, data) => {
    this.setState({index:index, selected:data});
  }


  render() {
    let dataArr;
    const { selection, category, onCardChange } = this.props;

    if(selection.results){
      const arr = selection.results;

      dataArr = arr.map((data, i) => {
      if(category === 'films'){
        return <li
          className='pa1 pointer'
          key={i}
          index={i}
          onClick={()=>{this.onSelected(i, data);onCardChange(this.props.cardLoaded)}}>
            {data.title}
        </li>
      } else {
        return (
          <li
            className='pa1 pointer'
            key={i}
            index={i}
            onClick={()=>{
              this.onSelected(i, data);onCardChange(this.props.cardLoaded)
            }}>
              {data.name}
          </li>
      )}
      })
    }

    let moreButton, backButton;
      if(selection.next){
      moreButton = <button onClick={()=>{this.props.changeCategory(selection.next,category,true)}} className='white bg-black ba b--white pointer'>More {category}</button>
    }

    if(selection.previous){
    backButton = <button onClick={()=>{this.props.changeCategory(selection.previous,category,true)}} className='white bg-black ba b--white pointer'>Back</button>
  }

  return (
    <div className='cf ph2-ns'>
      <div className='fl w-100 w-50-ns pa2 mt4'>
          <p>This is a list of {category}</p>
          <ul className='list pl0'>
            {dataArr}
          </ul>
          {backButton}  {moreButton}
      </div>
      <div className='fl w-100 w-50-ns pa2 mt5'>
        {this.props.cardLoaded === true?
          <DataCard data={this.state.selected} category={this.props.category}/>
          : <p>Choose an item from the column on the left</p>
        }

      </div>
    </div>
  )
  }
}

export default Card;
