import React, { Component } from 'react'
import {connect} from 'react-redux';
import './Imagelist.scss';
import lykee from './lykke-logo.png'

class Imagelist extends Component {
  
  state={
      currentPage: 1,
      imagesPerPage: 12
  }

  handleClick = (event) => {
    this.setState({ currentPage: Number(event.target.id)});
  }
  render() {
      const {currentPage, imagesPerPage} = this.state
      const {images} = this.props;
      console.log('imaglist',images)

      //logic to display images per page
      const indexOfLastImage = currentPage * imagesPerPage;
      const indexOfFirstImage = indexOfLastImage - imagesPerPage;
      const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

      //logic to display page number
      const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(images.length / imagesPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div>
          {
      (currentImages.length === 0 || currentImages.length === undefined) ? (
                <div className="imglogo">
                  <img src={lykee} alt=""/>
                </div>) 
                : 
              (<div className="imglist">
                  {currentImages.map(item => {
                    return (
                        <div key={item.id} className="img-container">
                          <img className="displayimage"  src={item.largeImageURL} alt={item.tags}/>
                        </div>
                          );
                      }
                    )
                  }
              </div>
              )
           }
     


      {/* Displaying the pagination */}
      <div className="footer">
        <nav aria-label="Page navigation example">
              <ul className="pagination">
            {
              pageNumbers.map(number => {
                return (
                      <li
                        className="page-item"
                        key={number}
                        >
                        <button 
                            onClick={this.handleClick} 
                            id={number} className="page-link"
                          >
                          {number}
                        </button>
                      </li>
                    );
                 })
              }
              </ul>
        </nav>
      </div>
      </div>
      
    )
  }
}

const mapStateToProps = (state) => {
  return{
    images:state.images
  }
}
export default connect(mapStateToProps)(Imagelist)

