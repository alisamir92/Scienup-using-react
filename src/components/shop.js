import { Row , Col, Image, Form , Pagination} from "react-bootstrap";
import img from "../img/popular-1.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import data from "../data.js";
import _ from "lodash";
import { useState } from "react";
import Item from "./item.js";



function Shop() {
    const items = _.chunk(data, 12);
    const [initialPagination, setInitialPagination] = useState(1); 
    const noOfPagination = [];
    const pagesNumbers = [];


    
    console.log(pagesNumbers);  // [1,2,3,4,5,6,7,8]
    console.log(items.length);

    const nextPagination = () => {
        setInitialPagination(initialPagination+1)
    }
    
    const prevPagination = () => {
        setInitialPagination(initialPagination-1)
    }
    
    const setInitial = (n) => {
        setInitialPagination(n);
        
    }

    for (let index = 1; index < items.length+1; index++) {
         pagesNumbers.push(index);
        
    }


    for (let number = initialPagination; number < initialPagination+3; number++) {
        if(number < pagesNumbers.length + 1 ){

            noOfPagination.push(
            <Pagination.Item key={number} onClick={(e)=>setInitial(number)}>
                {number}
            </Pagination.Item>,
            );
        }
    }

    return(
        <div className="shop-main">

            <Row className="shop">

                <Col lg={9} className="items-grid">
                    
                    <Row className="items-div">
                        {items[initialPagination-1].map((item) => {
                            return <Col className="item-col" lg={4}>
                                        <Item item={item} />
                                    </Col>
                        })}
                        
                    </Row>
                    <Row className="pagination-div">

                        <Pagination>
                            {initialPagination !== 1?

                            <Pagination.Prev className="previous" onClick={prevPagination}/>: <div></div>
                        }
                        {noOfPagination}
                            
                        {initialPagination !== pagesNumbers.length-2 && initialPagination <= pagesNumbers.length-2?
                            <Pagination.Next className="next" onClick={nextPagination} />
                            :
                            <div></div>
                        }
                        </Pagination>
                    </Row>
                </Col>

                <Col lg={3} className="populars">
                    <div className="products">
                
                        <div className="popular-products">
                            
                                <h6>POPULAR PRODUCTS</h6><hr></hr>
                                <div><a href="#">iPhone 5s with Headphones Jack <Image src={img}/></a><div>$0.00</div></div><hr></hr>
                                <div><a href="#">CoolCook - HTML Template for Online Store <Image src={img}/></a><div>$23.00</div></div><hr></hr>
                                <div><a href="#">Gadget and Things on the Table <Image src={img}/></a><div>$200.00</div></div><hr></hr>
                                <div><a href="#">Skillful | Responsive Multi-Purpose Theme <Image src={img}/></a><div><del>$800.00</del> $400.00</div></div><hr></hr>
                                <div><a href="#">Jazz - Responsive WordPress Magazine Theme <Image src={img}/></a><div><del>$500.00</del> $250.00</div></div>
                            
                        </div>
                        <div className="tags">
                            <h6>PRODUCT TAGS</h6>
                            <div className="buttons">
                                <button><a href="#">ACCESSORIES</a></button>
                                <button><a href="#">CLOTHING</a></button>
                                <button><a href="#">CODE</a></button>
                                <button><a href="#">DESIGN</a></button>
                                <button><a href="#">ELECTRONICS</a></button>
                                <button><a href="#">HTML</a></button>
                                <button><a href="#">PATTERN</a></button>
                                <button><a href="#">PLUGINS</a></button>
                                <button><a href="#">PRODUCTS</a></button>
                                <button><a href="#">SHOES</a></button>
                                <button><a href="#">TEMPLATE</a></button>
                                <button><a href="#">THEMES</a></button>
                                <button><a href="#">WORDPRESS</a></button>
                            </div>
                        </div>
                        <div className="statistics">
                            <h6>STATISTICS</h6>
                            <h6>Marketplace Members</h6>
                            <p>26</p>
                            <h6>Marketplace Items</h6>
                            <p>38</p>
                        </div>
                        <div className="input">
                            <Form.Group className="search">
                                <Form.Control />
                                <a href="#"><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
                            </Form.Group>
                        </div>
                    </div>
                </Col>

            </Row>

        </div>
        
    )
}


export default Shop;