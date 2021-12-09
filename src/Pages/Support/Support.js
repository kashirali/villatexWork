import React,{useState} from 'react'

import Header from '../../Components/Header/Header'
import Footer from '../../Components/OnlyFooter/OnlyFooter'

import './support.css'


import {Button,InputGroup,FormControl} from 'react-bootstrap'

import sprinkles from '../../assets/svg/sprinkles.svg'
import leftarrow from '../../assets/svg/Support/leftarrow.png'
import contribute from '../../assets/svg/Contribute.svg'


function Support() {

    const [support_card_data,setSupport_card_data] = useState([
        {
            icon:contribute,
            text:'Lorem Ipsum'
        },
        {
            icon:contribute,
            text:'Lorem Ipsum'
        },
        {
            icon:contribute,
            text:'Lorem Ipsum'
        },
        {
            icon:contribute,
            text:'Ipsum Lorem'
        },
        {
            icon:contribute,
            text:'Lorem Ipsum'
        }
    ])

    let displayCard = '';

    displayCard = support_card_data.map((curr,index)=>(<div key={index} style={{width:'200px',height:'200px',background:'white',boxShadow:' 0px 0px 25.2px 4.8px rgba(167, 167, 167, 0.25',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',borderRadius:'25px'}}>
            <img src={curr.icon} width="100px" height="100px"/>
            <p className="support_card_text">{curr.text}</p>

    </div>))
    return (
        <div style={{overflow:'hidden'}}>
            <Header color="white"/>
                <div className="support_showcase">
                    <img src={sprinkles} width="195px" className="sprinkleLeft"/>
                    <div className="sprinkleRight"><img src={sprinkles} width="195px"/></div>
                 
                    <div className="support_showcase_text" >
                        <h1>Getting Started </h1>
                        <h1>CurvyEgg Live Chat</h1>
                        <p>Penami ofic is to #Code seven sample text is building solutions. pick some contenttemplates, replace the content text brand voice exactly.Penami ofic is to #Code seven sample text is building solutions. pick some content templates, replace the
ontent text brand voice exac seven sample text is building solutions. pick some content
templates, replace the content text brand voice exactly.</p>
                        <div className="follow_div" style={{}}>
                            <span>Follow</span> <button className="support_showcase_btn">me</button> <img src={leftarrow} className="support_showcase_img"/>
                        </div>
                    </div>
                </div>
                <div className="support_help">
                    <div className="container">
                        <div className="support_help_top">
                            <h3 className="support_help_head">Hi! How can we help you?</h3>
                            <InputGroup style={{width:'350px',margin:'0 auto'}}>
                                <FormControl style={{padding:'9px'}}
                                placeholder="Ask a question..."
                                aria-label="ask a question"
                                aria-describedby="basic-addon2"
                                />
                                <Button variant="primary" id="button-addon2">
                                <i class="fas fa-search"></i>
                                </Button>
                            </InputGroup>
                        </div>
                        <div className="row">
                            <div className="support_grid">
                                {displayCard}
                            
                            </div>
                         
                        </div>
                        <div className="row">
                            <div className="support_grid_two">
                                    <div>
                                        <img src={contribute} style={{width:'100px',height:'100px',borderRadius:'50%',}}/>
                                        <div>
                                            <h4>FAQ</h4>
                                            <p>Maybe we've already answered your question. Here's or FAQs.</p>
                                        </div>
                            
                                    </div>
                                    <div>
                                        <img src={contribute} style={{width:'100px',height:'100px',borderRadius:'50%',}}/>
                                        <div>
                                            <h4>Live Chat</h4>
                                            <p>Get help with our awesome Customer Support team to resolve your queries.</p>
                                        </div>
                            
                                    </div>

                            </div>
                         
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default Support
