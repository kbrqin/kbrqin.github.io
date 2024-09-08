import Header from '../header/Header';
import './skinhance.css';
import skin_header from '../../img/skinhance_header.png';
import skin_data_img from '../../img/skinhance_data.png';
import skin_website_img from '../../img/skinhance_website.png';
import Footer from '../footer/Footer';

const Skinhance = () => {
    
    return (
        <div className='skin' id='skinhance'>
            <div className="skin-wrapper">
                <Header/>
                    <div className="skin-content-wrapper">
                    <div className="skin-header-img-wrapper">
                        <img src={skin_header} alt='skin header picture' className='skin-header-img'></img>
                    </div>
                    <div className="skin-title">skin<b className='text-purple'>hance</b></div>
                    <div className="skin-subtitle"><b>Timeline:</b> Jan 2024 (~1 week)</div>
                    <div className="skin-subtitle"><b>Tools:</b> Python, Jupyter Notebooks, BeautifulSoup, requests, csv, pandas, scikit-learn, pickle, streamlit</div>
                    <div className="skin-subtitle"><b>Team:</b> Myself (designer, data analyst, developer)</div>
                    <div className="skin-divider">&mdash;</div>
                    <div className="skin-header">preface</div>
                    <div className="skin-text">Skinhance is a skincare recommender app that uses machine learning and a content-based recommendation system to recommend a number (chosen by the user) of skincare products based on the one chosen by the user. Try it out at <a href='https://skinhance.streamlit.app/' className='skin-link'>https://skinhance.streamlit.app/</a>!</div>
                    <div className="skin-header">inspiration</div>
                    <div className="skin-text">Firstly, skincare (especially East Asian skincare) is one of my passions—I’ve spent years of endless hours researching optimal products for my skin, as well as consuming content about the most viral skincare, and I thought: Why not make a recommendation system that helps people find similar skincare products to their favourite ones? That’s how the idea of this application came to be.</div>
                    <div className="skin-header">how it works</div>
                    <div className="skin-text">
                        <ul>
                            <li>Simply put, when you choose a skincare product, Skinhance recommends skincare products similar to the one chosen.</li>
                            <li>Choose a product from the dropdown list. You can search by product, brand, or keyword.</li>
                            <li>You will find a list of <b>Product Recommendations</b> and <b>Similar Ingredients</b>.</li>
                            <li>The<b>Product Recommendations</b>list recommends products with similar benefits to the chosen product.</li>
                            <li>The<b>Similar Ingredients</b>list recommends products with similar ingredients to the chosen product.</li>
                            <li>The two lists are ordered from most similar to least similar, so the first few products are the most similar, but the further down the list you go, the less related to the chosen product they will be.</li>
                            <li>The two lists can be very similar, but this would make sense, since products with similar ingredients will have similar benefits!</li>
                        </ul>
                    </div>
                    <div className="skin-header">the journey</div>
                    <div className="skin-text">As someone who was interested in learning more about machine learning, this journey initially started with me exploring a tutorial regarding a movie recommendation system (based on a database of 10000 TMDB movies). Then, with my newfound skill set, I started looking for a database of skincare products to perform analysis on—only to find that there wasn’t really a database of them online (or at least, not one that I could find)!</div>
                    <div className="skin-text">From there, I decided to make my own database, which led me to research about and learn web scraping—starting with a light practice on an Amazon site to learn the basics, and then I transitioned to the site that I wanted to perform web scraping on—which was YesStyle (an ecommerce platform that is mainly famous for East Asian makeup, skincare, and street fashion). I spent hours figuring out the ins and outs of the website’s layout and learning more web scraping on the way, and eventually devised a function that—with one click of a [run] button—produces the name, brand, price, ingredients, benefits, and editor’s notes of each product, as well as accounting for missing data and ensuring that no errors are run into during the data analysis portion of the project. Once the data scraping functions were completed, I performed web-scraping on over 350 skincare product webpages on YesStyle and read them into a CSV file to later perform data analysis on. The database (compiled using Jupyter Notebooks) can be seen below:</div>
                    <div className="skin-img-wrapper">
                        <img src={skin_data_img} alt='skinhance dataset' className='skin-img'></img>
                    </div>
                    <div className="skin-text">From there, it was smooth sailing—I implemented the data analysis skills that I learned, and built a program that analyzed the skincare products database and produced two types of content-based recommendations: general similar products (based on benefits and editors’ notes), and similar products based on ingredient similarity, a factor of skincare which is very important to many skincare enthusiasts. Finally, once I completed the functions performing the data analysis, I worked on the front-end of the webpage, adding features such as a “How to Use” dropdown box and customizing the UI to make it sleek and easy to use.</div>
                    <div className="skin-text">A snapshot of the final product can be seen below:</div>
                    <div className="skin-img-wrapper">
                        <img src={skin_website_img} alt='skinhance website' className='skin-img'></img>
                    </div>
                    <div className="skin-header">challenges i faced</div>
                    <div className="skin-text">One of the difficulties was working on the UI of the webpage, as by including the images of the products, I needed to web scrape them from the website. However, I realized after testing several areas of my code that the problem originated from the fact that when performing a second round of data scraping in the Python code (the Jupyter Notebooks was for the data analysis, and the main Python code was for the website) caused the HTML content to become corrupted. Thus, I remedied this by also scraping the image link from the YesStyle website with the rest of the initial scraping and stored it in the database to be directly accessed later, which fixed the error.</div>
                    <div className="skin-text">Another small roadblock that I ran into was that while scraping the 350 products from the YesStyle site, I found that scraping all of them altogether (e.g. in a single for loop) required too much memory and power for Jupyter Notebooks and my device to handle. Thus, I instead ran the web scraping in smaller batches to handle this slight inconvenience, and this allowed all of the web scraping to be run without error.</div>
                    <div className="skin-header">what i learned</div>
                    <div className="skin-text">I learned a plethora of skills from this project, as it was my first deep dive into data analysis—from web scraping to machine learning and KNN algorithms, I definitely tried my hand at a large variety of new skills. I believe that this project was a great journey and learning experience for myself to learn more about machine learning and data analysis, and I plan to work on more projects to further develop my skill set!</div>
                    <div className="skin-header">what's next?</div>
                    <div className="skin-text">I plan to implement features such as: a traditional search bar to search for products by keyword, filtering by brand and price, adding links to the product pages so the users can easily access the product they’re interested in buying, and more!</div>

                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Skinhance;