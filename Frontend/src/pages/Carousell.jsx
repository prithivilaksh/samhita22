import { Carousel } from "antd";
import React,{Component} from 'react'
import SamhitaLogo from '../assets/samhita_logo1.png'
import SamhitaTicket from '../assets/ticket1.png'

class Carousell extends Component {
  // constructor() {
  
  //   this.state = {
  //     index:0
  //   };
  // }

  //   handleSelect = (selectedIndex, e) => {
  //     this.setState({index:selectedIndex});
  //   };

  render() {
    return (
      <>
        <Carousel >
        <Carousel.Item>
          <img
            className="d-block w-50"
            src={SamhitaLogo}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50"
            src={SamhitaLogo}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50"
            src={SamhitaLogo}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* <h1>hiiiiiiiii</h1> */}
      </>
  
    );
    }
  }
  
export default Carousell;