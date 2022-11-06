import React, { useState } from 'react'
import { Button, Col, Image, Row } from 'react-bootstrap'
import img from "../img/popular-1.jpg";
import data from "../data.js";
import Item from './item';
import { useLocation } from 'react-router';


const mayLiked = data.slice(0, 4);
const popularProduct = data.slice(8, 12);


export default function SingleEquipmentDesc() {
    const [noOfItems, setNoOfItems] = useState(1);
    const location = useLocation();
    const{ item } = location.state;
 


    const change_number_items = (e) => {
        setNoOfItems(e.target.value)
    }

  return (
    <div className='single-equipment'>
        <Row className='single-equipment-desc'>
            <Row>
                <Col lg={9}>
                    <h3>{item.product}</h3>
                    <h6>Home &gt; Shop &gt; HTML &gt; Personal &gt; {item.product} </h6>
                    <Row>
                        <Col>
                            <div><Image src={item.photo} /></div>
                            <Button className='description'><a>DESCRIPTION</a></Button>
                            <Button className='reviews'><a>REVIEWS (0)</a></Button>
                        </Col>
                        <Col>
                            
                                Are you interested in making a living as a fashion store owner? If you are, you are definitely not alone. In the United States and all around the world for that matter, there are many individuals who dream of running and operating their own fashion store. Unfortunately, many believe that dream is one that is too difficult to become a reality. Yes, it may be a little bit difficult for you to get to a successful fashion store up and running, but it is more than possible to do
                            The good thing about running a fashion store is that you have a number of different options. 
                               
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        Another choice that you have, when running your own fashion store, is the type of products that you would like to sell. There are a large number of fashion stores in the United States and all around the world that focus on particular fashions, like lingerie or work clothing, but the decision is yours to make. You may also want to decide whether you would like your fashion store to sell just women’s clothes, men’s clothing, teen clothing, or clothing for children. Of course, you can also decide to make your fashion store universal for all shoppers, should you wish to do so.
                                Another choice that you have is whose clothing you would like to sell. In addition to wanting to be a fashion store owner, do you also enjoy designing and making your own clothing or fashion accessories? If you do, you may want to think about selling your own designs. You may also want to think about selling the work of other fashion designers. As a business owner, you should be able to find a clothing designer or manufacturer who would be willing to sell their clothing and clothing accessories to you for wholesale prices, which are affordable. You also have the option of selling your own designs and well as others.
                                Perhaps, the only downside to starting your own fashion store is the costs associated with doing so. All businesses have startup costs, but the costs of starting your own fashion store can be quite high. If you want to run a storefront location, you need to rent or buy your own business space. You will also need point of sale equipment, like cash registers, as well as store fixtures and merchandise to stock your stores with. The good news, however, is that you don’t have to be rich to start your own fashion store. By developing yourself a professional business plan, one that outlines what your business will be, how it will make money and such, you can easily seek financing from financial lenders or investors.
                                If you are interested in starting your own fashion store, it is important to remember that it requires a lot of hard work and determination. With that in mind, however, it is more than possible for you to run a successful and profitable fashion store. As a reminder, be sure to research and review all local, state, and federal laws before opening your first store.
                                One of your options is your location. There are many individuals who choose to run a business out of a storefront location, others who choose to run an online fashion store, and others who choose to do both. If you are able to score a prime business location, it may be profitable for you to have a storefront location. However, it is also important to mention that many individuals are now deciding to do their shopping online; therefore, you may want to take that into consideration as well.
                                
                        </Col>
                    </Row>

                    

                </Col>
                <Col lg={3}>
                    <div class="details">
                        <div>Short product description to get visitor attention. Do you have a favorite movie star or television star? If you do, have you ever wondered what their personal life was like? If you have, you are definitely not alone. In today’s society, it seems as if many individuals are interested in knowing the latest news or gossip surrounding today’s most popular stars.</div>
                        <div className='price'>{noOfItems * parseFloat(item.priceAfter)} $</div>
                        <div><input className='noOfItems' placeholder={noOfItems} onChange={change_number_items} /><button className='item-add'><a href="#">ADD TO CART</a></button></div>
                        <hr></hr>
                        <div>Use, by you or one client, in a single end product which end users are not charged for. The total price includes the item price and a buyer fee.</div>
                        <div><a href="#">More Details</a> | <a href="#">Why buy from us</a></div>
                        
                        <hr></hr>
                        <div class="item-details">
                            <h3>ITEM DETAILS</h3>
                            <div>
                                <h3>SKU:</h3>
                                <span>TPO1</span>
                            </div>
                            <hr></hr>
                            <div>
                                <h3>WEIGHT</h3>
                                <span>0.5 kg</span>
                            </div>
                            <hr></hr>
                            <div>  
                                <h3>DIMENSIONS</h3>
                                <span>40 x 30 x 2 cm</span>
                            </div>
                            <hr></hr>
                            <div>
                                <h3>COLOUR</h3>
                                <span>Blue, Red, White, Pink</span>
                            </div>
                            <hr></hr>
                            <div>
                                <h3>BRAND</h3>
                                <span>StoreCanyon, StoreDune, StoreForest, StoreHive, StoreRiver</span>
                            </div>
                            <hr></hr>
                            <div>
                                <h3>SIZE</h3>
                                <span>Small, Medium, large, X-Large</span>
                            </div>
                            <hr></hr>
                            <div>
                                <h3>CATEGORIES</h3>
                                <span><a href="#">Creative</a>, <a href="#">Design</a>, <a href="#">eCommerce</a>, <a href="#">HTML</a>, <a href="#">Muse</a>, <a href="#">Personal</a></span>
                            </div>
                            <hr></hr>
                            <div>
                                <h3>TAGS</h3>
                                <span><a href="#">design</a>, <a href="#">HTML</a>, <a href="#">product</a>, <a href="#">template</a>, <a href="#">themes</a></span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className='may-like'>
                <h3>YOU MAY ALSO LIKE...</h3>
                {mayLiked.map((item)=>{
                    return <Col className="item-col" lg={3}>
                                <Item item={item} />
                            </Col>
                })}
            </Row>
            <Row className='popular-product'>
                <h3>POPULAR PRODUCTS...</h3>
                {popularProduct.map((item)=>{
                    return <Col lg={3}>
                                <Item item={item} />
                            </Col>
                })}
            </Row>
        </Row>
    </div>
  )
}
