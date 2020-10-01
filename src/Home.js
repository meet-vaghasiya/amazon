import React from 'react'
import './home.css'
import Product from './Product'
export default function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB407694131_.jpg" alt="home image" className="home__image" />


                <div className="home__row">
                    <Product id="001"  title="the lean startup" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" rating={4} />
                    <Product title="rich dad poor dad" price={100} image="https://economictranscript.files.wordpress.com/2018/11/media.jpg" rating={4} />

                    {/* <Product /> */}
                </div>
                <div className="home__row">
                    <Product  id="002" title="samsang mobile" price={1000} image="https://i.gadgets360cdn.com/products/large/1555507135_635_samsung_galaxy_a60.jpg" rating={5} />
                    <Product id="005"  title="samsumg smart watch" price={2500} image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPafhdMLdYv4CgEl2GnPZ86Y5b1muKMndayQ&usqp=CAU" rating={3}/>
                    <Product id="004" title="samsung refrigarator" price={420} image="https://images-na.ssl-images-amazon.com/images/I/71O31clz6mL._SX679_.jpg" rating={5} />
                </div>
                <div className="home__row">
                <Product id="003" title="samsung smart tv" price={3000} image="https://images.samsung.com/is/image/samsung/in-fhdtv-n5200-ua32n5200arxxl-frontblack-184404442?$PD_GALLERY_L_JPG$" rating={4}/>
                </div>
            </div>
        </div>
    )
}
