import React from 'react';
import vg from '../assets/2.webp';
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'

const Home = () => {
    return (
        <>
            <div className='home' id="home" >
                <main>
                    <h1>TechyStar</h1>
                    <p>Solutions to all your problems</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        We are your one and only solution to the tech problems
                        you face every day. We are leading tech company whose aim is to
                        increase the problem solving ability in children.
                    </p>
                </div>
            </div>

            <div className="home3" id="about">
                <div>
                    <h1>Who we are?</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, modi.
                        Omnis nostrum voluptas similique, earum amet eum architecto cumque 
                        quo dolorem, excepturi qui impedit velit eius repellendus ipsum aut 
                        ut numquam quae a. Omnis rem exercitationem rerum sunt unde deleniti
                        suscipit ratione nulla, cum ipsam incidunt nihil soluta dolorum culpa
                        atque recusandae optio dolor. Dolore ut ducimus sed culpa laborum quo
                        pariatur sunt. Autem explicabo ea aperiam non corporis, omnis praesentium
                        et quaerat quod, nihil atque voluptatem? Doloremque veniam voluptas error
                        enim, illum reiciendis harum praesentium facere quam provident,
                        quis numquam ut quaerat aliquam. Aliquid in, consequatur deleniti quasi 
                        magni animi architecto maiores perferendis totam, blanditiis optio adipisci
                        nam harum, itaque suscipit non ipsum! Omnis dignissimos nisi voluptas 
                        nostrum odit culpa obcaecati quo natus?
                    </p>
                </div>
            </div>


            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>

                    <article>
                        <div style={{
                            animationDelay:"0.3s",
                        }}>

                            <AiFillGoogleCircle/>
                            <p>Google</p>
                        </div>

                        <div style={{
                            animationDelay:"0.5s",
                        }}>

                            <AiFillAmazonCircle/>
                            <p>Amazon</p>
                        </div>

                        <div style={{
                            animationDelay:"0.7s",
                        }}>

                            <AiFillYoutube/>
                            <p>Youtube</p>
                        </div>

                        <div style={{
                            animationDelay:"1s",
                        }}>

                            <AiFillInstagram/>
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home;