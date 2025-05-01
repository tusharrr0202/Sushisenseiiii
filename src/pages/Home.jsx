import React from "react";
import Header from "../components/Header";
import "../styles/home.css";

const Home = () => {
  const pokeBowlsData = [
    { name: "Spicy Chicken Bowl", description: "fried chicken breast with olives, tomatoes, cabbage, baby spinach", price: "13.50 €", image: null },
    { name: "Shrimp Teriyaki Bowl", description: "Shrimp marinated with teriyaki sauce, olives, tomatoes, baby spinach", price: "14.50 €", image: null },
    { name: "Gyoza Bowl Veggi", description: "Cherry tomatoes, cabbage, feta, baby spinach, edamame, walnuts,", price: "14.50 €", image: null },
    { name: "Silk Route Poke", description: "Salmon, avocado, edamame, radishes, rocula, corn, peppers,", price: "14.50 €", image: require("../assets/Silk-Route-Bowl.png") },
    { name: "Vegan Buddha Bowl", description: "The Vegan Detox Bowl, Cucumber, peppers, avocado, apple, radish", price: "13.50 €", image: require("../assets/Buddha.png") },
    { name: "Far East Poke", description: "All the way from Far East, Salad, yakitori, cucumbers, peppers", price: "13.50 €", image: require("../assets/Far-East.png") },
    { name: "The Bullet Bowl", description: "Cooked salmon, cooked tuna, guacamole, olives, tomatoes,", price: "13.50 €", image: require("../assets/Bullet.png") },
    { name: "Happy Nature Bowl Veg.", description: "Cucumbers, peppers, cherry tomatoes, feta, quinoa, baby spinach, olive oil", price: "13.50 €", image: require("../assets/Happy-Nature.png") },
  ];
  const sportiliciousData = [
    { name: "Low-Carb Basic", description: "3 Salmon Tartare, 6 Tuna Sashimi, 6 Salmon Sashimi with Quinoa", price: "16.90 €", image: require("../assets/low-carb-basic.png") },
    { name: "Super Low Carb", description: "6 tuna sashimi, 6 salmon sashimi, with seaweed salad", price: "12.50 €", image: require("../assets/super-low-carb-box.png") },
    { name: "Protein Basic", description: "1 Tuna Nigiri, 1 Tomago Nigiri, 1 Salmon Nigiri, 1 Roll, 3 Tekka Maki", price: "17.50 €", image: require("../assets/protein-basic.png") },
    { name: "Protein XXL", description: "2 tuna nigiri, 2 tomago nigiri, 2 salmon nigiri, 4 rolls, 4 Tekka Maki", price: "38.50 €", image: require("../assets/protein-XXL.png") },
    { name: "Vegan Selection", description: "3 big Veggi rolls with chia, 6 Kappa Maki, 6 Oshinko Maki, Quinoa", price: "14.50 €", image: require("../assets/vegan-selection.png") },
    { name: "Vital Selection", description: "1 Tuna Nigiri, 1 Tomago Nigiri, 1 Salmon Nigiri, Avocado Nigiri", price: "11.90 €", image: require("../assets/vital-selection.png") },
    // Add more Sportilicious items here if you have them
  ];
  const boxesData = [
    { name: "Junior Box", description: "2 California Roll, 1 Shake Nigiri, 1 Tamago Nigiri, 3 Veggi M.", price: "7.50 €", image: require("../assets/juniorbox.png") },
    { name: "Veggie Box", description: "12 Veg Maki, 2 Tomago Nigiri, 2 Inari", price: "8.20 €", image: require("../assets/veggiebox.png") },
    { name: "Veggie Party Box", description: "4 avocado nigiri, 4 inari, 4 tamago, 1 kappa maki, 1 pepper", price: "24.90 €", image: require("../assets/veggiepartybox.png") },
    { name: "Big Veggie Box", description: "4 Big Vegetable Rolls, 12 Vegetable Maki", price: "8.50 €", image: require("../assets/bigveggi.png") },
    { name: "Inside-out Box", description: "2 Inside Out Roll with sesame", price: "9.50 €", image: require("../assets/insideoubox.png") },
    { name: "Tasty Box", description: "2 Tuna Rolls, 2 Shake Rolls", price: "10.50 €", image: require("../assets/tastybox.png") },
    { name: "Big Tasty Box", description: "2 Tuna Rolls, 2 Shake California,2 Shake Inside Out, 2 Chuk", price: "12.50 €", image: require("../assets/bigtastybox.png") },
    { name: "Sashimi Box", description: "6 salmon pieces, 6 tuna pieces Portion of sushi Rice", price: "14.50 €", image: require("../assets/sashimibox.png") },
    { name: "Shake Sashimi Box", description: "12 salmon pieces, 6 tuna pieces Portion of sushi Rice", price: "14.50 €", image: require("../assets/shake_sashimibox.png") },
    { name: "Tuna Sashimi", description: "12 Tuna pieces,  Portion of sushi Rice", price: "15.00 €", image: require("../assets/tunasashimibox.png") },
    { name: "Mix Box", description: "2 Shake Nigiri, 2 Ebi Nigiri.3 Shake Maki,3 Tekka Maki", price: "11.90 €", image: require("../assets/mixbox.png") },
    { name: "Mix Maki Box", description: "4 Tekka Maki, 4 Shake Maki, 4 Veg Maki  ,3 Rolls", price: "9.50 €", image: require("../assets/mixmaki.png") },
    { name: "Delicious Box", description: "2 Ebi Nigiri, 2 Tuna Nigiri, 2 Salmon Nigiri ,4 Shake Maki", price: "12.90 €", image: require("../assets/delicousbox_a.png") },
    { name: "Favourite Box", description: "6 Shake Nigiri, 3 Rolls ,4 Maki", price: "14.90 €", image: require("../assets/favouritebox_0.png") },
    { name: "Nigiri Box", description: "1 Maguro Nigiri, 1 Shake Nigiri, 1 Tomago Nigiri,1 Salmon Ni", price: "14.90 €", image: require("../assets/nigiribox_a.png") },
    { name: "Special Box", description: "3 Tuna Sashimi, 3 Salmon Sashimi, 2 Tekka Maki ,2 Shake Maki", price: "17.90 €", image: require("../assets/specialbox.png") },
    { name: "Sensei Box", description: "18 Maki, 12 Nigiri, 6 Rolls", price: "32.50 €", image: require("../assets/senseibox.png") },
    { name: "Majestic Box", description: "18 Maki, 12 Nigiri, 6 Rolls", price: "34.90 €", image: require("../assets/majesteticbox.png") },
    { name: "Senior Box", description: "19 Nigiri,12 Maki, 10 Rolls", price: "11.90 €", image: require("../assets/seniorbox.png") },
    { name: "Oceanic  Box", description: "12 Shake Nigiri, 12 Shake Maki, 6 Shake Inside Out", price: "34.90 €", image: require("../assets/oceanicbox.png") },
    { name: "Unique Box", description: "9 Shake Nigiri, 9 Maguro Nigiri,8 Shake Maki ,12 Rolls ,8V", price: "55.60 €", image: require("../assets/uniquebox.png") },
    { name: "Special Sensei Box", description: "4 Unagi Nigiri, 4 Shake Nigiri, 4 Maguro ,4 Ebi Nigiri,10 R", price: "59.50 €", image: require("../assets/spezialsenseibox.png") },
    
    // Add more Boxes items here if you have them
  ];
  const appetizersData = [
    { name: "Tom Kha Pag Soup", description: "Coconut milk, vegetables, seaweed, lemongrass, galangal", price: "5.50 €", image: null },
    { name: "Tom Kha Gai Soup", description: "Chicken breast prepared in coconut milk, vegetables, seaweed", price: "6.00 €", image: null },
    { name: "Tom Kha Pla Soup", description: "Salmon prepared in coconut milk, vegetables, seaweed, lemon", price: "5.50 €", image: null },
    { name: "Tom Kha Gung Soup", description: "Shrimp in coconut milk, vegetables, seaweed, lemongrass", price: "6.50 €", image: null },
    { name: "Red Salad", description: "Ginger salad", price: "4.50 €", image: require("../assets/redsalad.png") },
    { name: "Seaweed salad", description: "Seaweed", price: "5.50 €", image: require("../assets/seaweedsalad.png") },
    { name: "Squid salad", description: "Squid salad", price: "5.50 €", image: require("../assets/squidsalad.png") },
    { name: "Mixed salad", description: "Red Ginger salad Seaweed salad Squid salad", price: "5.50 €", image: require("../assets/mixedsalad.png") },
    { name: "Yakitori", description: "3 chicken skewers marinated in teriyake sauce , sesame", price: "5.80 €", image: require("../assets/yakitori.png") },
    { name: "Miso soup", description: "We serve tradiitonal meso soup with wakame seaweed tofu", price: "3.50 €", image: require("../assets/misosuppe.png") },
    { name: "noodle soup", description: "Delicious soup served with wakame seaweed,tofu and fresh sc", price: "3.90 €", image: require("../assets/nudelsuppe.png") },
    { name: "Miso soup meets quinoa", description: "Miso Soup Reloaded...with quinoa for more power", price: "3.50 €", image: require("../assets/miso-suppe-meets-quinoa.png") },
    { name: "Quinoa", description: "...served with sesame oil and fresh chives", price: "4.50 €", image: require("../assets/quinoa.png") },
    { name: "Edamame", description: "Ingenious veg plant-based protein bomb", price: "3.90 €", image: require("../assets/edamame.png") },
  ];
  return (
    <div className="home-container">
      <Header />

    
      {/* Sticky Button List */}
      <div className="button-scroll-container">
        <ul className="button-list">
          <li className="button">New Creations</li>
          <li className="button">Deal of the Month</li>
          <li className="button">Poke Bowls</li>
          <li className="button">Sportilicious</li>
          <li className="button">Boxes</li>
          <li className="button">Appetizers</li>
          <li className="button">Maki</li>
          <li className="button">Rolls</li>
          <li className="button">Nigiri</li>
          <li className="button">Specials</li>
          <li className="button">Extras</li>
          <li className="button">Drinks</li>
          <li className="button">Ice</li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        {/* Left Side - Card Sections */}
        <div className="card-area">
          {/* New Creations Section */}
<div id="newCreationsSection" className="content-section">
  <h2>New Creations</h2>
  <div className="card-grid">
    <div className="food-card"> {/* Changed class to food-card */}
      <div className="image-container">
        <img src={require("../assets/mypoke.jpg")} alt="My Poké" />
      </div>
      <div className="details">
        <h3>My Poké</h3> {/* Heading is now here */}
        <p>from 8€ Create to your taste.<br />4 ingredients and 1 sauce</p>
        <div className="price-add"> {/* You can keep this for the button */}
          <span className="price">8.00 €</span>
          <span className="info-icon">ℹ️</span>
          <button className="add-button">+</button>
        </div>
      </div>
    </div>

    <div className="food-card"> {/* Updated to food-card */}
      <div className="image-container">
        <img src={require("../assets/Summer-Roll.png")} alt="Summer Roll" />
      </div>
      <div className="details">
        <h3>Summer Roll</h3> {/* Heading is now here */}
        <p>Base: Rice noodles, salad, cucumber, peppers<br />Selection: Avo</p>
        <div className="price-add">
          <span className="price">4.50 €</span>
          <span className="info-icon">ℹ️</span>
          <button className="add-button">+</button>
        </div>
      </div>
    </div>

    <div className="food-card"> {/* Updated to food-card */}
      <div className="image-container">
        <img src={require("../assets/Ramen-Nudeln.png")} alt="Ramen Noodles" />
      </div>
      <div className="details">
        <h3>Ramen Noodles</h3> {/* Heading is now here */}
        <p>Wheat noodles with seasonal vegetables, bamboo, seaweed</p>
        <div className="price-add">
          <span className="price">12.50 €</span>
          <span className="info-icon">ℹ️</span>
          <button className="add-button">+</button>
        </div>
      </div>
    </div>

    <div className="food-card"> {/* Updated to food-card */}
      <div className="image-container">
        <img src={require("../assets/Gyoza-Japanishe-Teigtaschen.png")} alt="Gyoza Japanese Dumplings" />
      </div>
      <div className="details">
        <h3>Gyoza Japanese Dumplings</h3> {/* Heading is now here */}
        <p>Mix veggie filling, chicken filling, peanut sauce, sweet and sour</p>
        <div className="price-add">
          <span className="price">5.00 €</span>
          <span className="info-icon">ℹ️</span>
          <button className="add-button">+</button>
        </div>
      </div>
    </div>
  </div>
</div>

 {/* Poke Bowls Section */}
<div id="pokeBowlsSection" className="content-section">
  <h2>Poke Bowls</h2>
  <div className="card-grid">
    <div className="food-card"> {/* Changed class to food-card */}
      <img src={require("../assets/image.png")} alt="Spicy Chicken Bowl" />
      <div className="details">
        <h3>Spicy Chicken Bowl</h3> {/* Heading is now here */}
        <p>fried chicken breast with olives, tomatoes, cabbage, baby spinach</p>
        <div className="price-add"> {/* You can keep this for the button */}
          <span className="price">13.50 €</span>
          <span className="info-icon">ℹ️</span>
          <button className="add-button">+</button>
        </div>
      </div>
    </div>


    <div className="food-card"> {/* Changed class to food-card */}
      <img src={require("../assets/image.png")} alt="Shrimp Teriyaki Bowl" />
      <div className="details">
        <h3>Shrimp Teriyaki Bowl</h3> {/* Heading is now here */}
        <p>Shrimp marinated with teriyaki sauce, olives, tomatoes, baby spinach</p>
        <div className="price-add"> {/* You can keep this for the button */}
          <span className="price">14.50 €</span>
          <span className="info-icon">ℹ️</span>
          <button className="add-button">+</button>
        </div>
      </div>
    </div>

    <div className="food-card"> {/* Changed class to food-card */}
      <img src={require("../assets/image.png")} alt="Gyoza Bowl Veggi" />
      <div className="details">
        <h3>Gyoza Bowl Veggi</h3> {/* Heading is now here */}
        <p>Cherry tomatoes, cabbage, feta, baby spinach, edamame, walnuts</p>
        <div className="price-add"> {/* You can keep this for the button */}
          <span className="price">14.50 €</span>
          <span className="info-icon">ℹ️</span>
          <button className="add-button">+</button>
        </div>
      </div>
    </div>
    <div className="food-card"> {/* Changed class to food-card */}                                                   
             <img src={require("../assets/Silk-Route-Bowl.png")} alt="Silk Route Poke" /> 
            <div className="details">
        <h3>Silk Route Poke</h3> {/* Heading is now here */}
        <p>Salmon, avocado, edamame, radishes, rocula, corn ,peppers </p>
        <div className="price-add"> {/* You can keep this for the button */}
          <span className="price">14.50 €</span>
          <span className="info-icon">ℹ️</span>
          <button className="add-button">+</button>
        </div>
      </div>
 </div>
 <div className="food-card"> {/* Changed class to food-card */}                                                   
             <img src={require("../assets/Buddha.png")} alt="Vegan Buddha Bowl" /> 
            <div className="details">
        <h3>Vegan Buddha Bowl</h3> {/* Heading is now here */}
        <p>The Vegan Detox Bowl <br />Cucumbers, peppers, avocado, apple,radish </p>
        <div className="price-add"> {/* You can keep this for the button */}
          <span className="price">14.50 €</span>
          <span className="info-icon">ℹ️</span>
          <button className="add-button">+</button>
        </div>
      </div>
 </div>
 <div className="food-card"> {/* Changed class to food-card */}                                                   
             <img src={require("../assets/Far-East.png")} alt="Far East Poke" /> 
            <div className="details">
        <h3>Far East Poke</h3> {/* Heading is now here */}
        <p>All the way from Far East <br />Salad,yakitori, cucumbers, peppers </p>
        <div className="price-add"> {/* You can keep this for the button */}
          <span className="price">13.50 €</span>
          <span className="info-icon">ℹ️</span>
          <button className="add-button">+</button>
        </div>
      </div>
 </div>
 <div className="food-card"> {/* Changed class to food-card */}                                                   
             <img src={require("../assets/Bullet.png")} alt="The Bullet Bowl" /> 
            <div className="details">
        <h3>The Bullet Bowl</h3> {/* Heading is now here */}
        <p>Cooked salmon, cooked tuna, guacamole, olives, tomatoes </p>
        <div className="price-add"> {/* You can keep this for the button */}
          <span className="price">13.50 €</span>
          <span className="info-icon">ℹ️</span>
          <button className="add-button">+</button>
        </div>
      </div>
 </div>
 <div className="food-card"> {/* Changed class to food-card */}                                                   
             <img src={require("../assets/Happy-Nature.png")} alt="Happy Nature Bowl Veg" /> 
            <div className="details">
        <h3>Happy Nature Bowl Veg</h3> {/* Heading is now here */}
        <p>Cucumbers, peppers, cherry tomatoes, feta, quinoa, baby spinach, olive oil </p>
        <div className="price-add"> {/* You can keep this for the button */}
          <span className="price">13.50 €</span>
          <span className="info-icon">ℹ️</span>
          <button className="add-button">+</button>
        </div>
      </div>
 </div>

  </div>
</div>
           {/* Sportilicious Section */}
           <div id="Sportilicious" className="content-section">
  <h2>Sportilicious</h2>
  <div className="card-grid">
    <div className="food-card"> {/* Changed class to food-card */}
      <img src={require("../assets/low-carb-basic.png")} alt="Low Carb Basic" />
      <div className="details">
        <h3>Low Carb Basic</h3> {/* Heading is now here */}
        <p>3 salmon tartare, 6 tuna sashimi, 6 salmon sashimi with quinoa</p>
        <div className="price-add"> {/* You can keep this for the button */}
          <span className="price">16.90 €</span>
          <span className="info-icon">ℹ️</span>
          <button className="add-button">+</button>
        </div>
      </div>
    </div>

    <div className="food-card"> {/* Changed class to food-card */}
      <img src={require("../assets/low-carb-basic.png")} alt="Super Low Carb" />
      <div className="details">
        <h3>Super Low Carb</h3> {/* Heading is now here */}
        <p>6 tuna sashimi, 6 salmon sashimi with seaweed salad</p>
        <div className="price-add"> {/* You can keep this for the button */}
          <span className="price">12.50 €</span>
          <span className="info-icon">ℹ️</span>
          <button className="add-button">+</button>
        </div>
      </div>
    </div>

    <div className="food-card"> {/* Changed class to food-card */}
      <img src={require("../assets/protein-basic.png")} alt="Protein Basic" />
      <div className="details">
        <h3>Protein Basic</h3> {/* Heading is now here */}
        <p>1 Tuna Nigiri,1 Tomago Nigiri,1 Salmon Nigri,1 Roll,3 Tek</p>
        <div className="price-add"> {/* You can keep this for the button */}
          <span className="price">17.50 €</span>
          <span className="info-icon">ℹ️</span>
          <button className="add-button">+</button>
        </div>
      </div>
    </div>

    <div className="food-card"> {/* Changed class to food-card */}
      <img src={require("../assets/protein-XXL.png")} alt="Protein XXL" />
      <div className="details">
        <h3>Protein XXL</h3> {/* Heading is now here */}
        <p>2 Tuna Nigiri,2 Tomago Nigiri,2 Salmon Nigri,4 Roll,4 Tek</p>
        <div className="price-add"> {/* You can keep this for the button */}
          <span className="price">38.50 €</span>
          <span className="info-icon">ℹ️</span>
          <button className="add-button">+</button>
        </div>
      </div>
    </div>

    <div className="food-card"> {/* Changed class to food-card */}
      <img src={require("../assets/vegan-selection.png")} alt="Vegan Selection" />
      <div className="details">
        <h3>Vegan Selection</h3> {/* Heading is now here */}
        <p>3 Big Veggi rolls with chia, 6 Kappa Makki, 6 Oshino Maki Qui</p>
        <div className="price-add"> {/* You can keep this for the button */}
          <span className="price">11.90 €</span>
          <span className="info-icon">ℹ️</span>
          <button className="add-button">+</button>
        </div>
      </div>
    </div>

    <div className="food-card"> {/* Changed class to food-card */}
      <img src={require("../assets/vital-selection.png")} alt="Vital Selection" />
      <div className="details">
        <h3>Vital Selection</h3> {/* Heading is now here */}
        <p>1 Tuna Nigiri,1 Tomago Nigiri,1 Salmon Nigri,Avocado Nigi</p>
        <div className="price-add"> {/* You can keep this for the button */}
          <span className="price">11.90 €</span>
          <span className="info-icon">ℹ️</span>
          <button className="add-button">+</button>
        </div>
      </div>
    </div>

    
    </div>
  </div>
       {/* Boxes Section */}
       <div id="boxesSection" className="content-section">
            <h2>Boxes</h2>
            <div className="card-grid">
              {boxesData.map((box, index) => (
               <div key={index} className="food-card">
                  <div className="image-container">
                    {box.image ? (
                      <img src={box.image} alt={box.name} />
                    ) : (
                      <div className="image-placeholder"></div>
                    )}
                  </div>
                  <div className="content">
                    <h3>{box.name}</h3>
                    <p>{box.description}</p>
                    <div className="price-add">
                      <span className="price">{box.price}</span>
                      <span className="info-icon">ℹ️</span>
                      <button className="add-button">+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Add other card sections here below Poke Bowls */}
        </div>

        {/* Right Side - Order Overview Section */}
        <div className="order-overview">
          <h2>Order overview</h2>
          <div className="order-details">
            <div className="order-item">
              <span>Subtotal</span>
              <span>...</span>
              <button>+</button>
            </div>
            <div className="order-item">
              <span>Min. order</span>
              <span>...</span>
              <button>+</button>
            </div>
            <div className="order-item">
              <span>Travel costs</span>
              <span>...</span>
              <button>+</button>
            </div>
            <div className="order-item">
              <span>Free access from</span>
              <span>-</span>
            </div>
            <div className="order-item discount">
              <span>10% discount</span>
              <span>- € 0.00</span>
            </div>
            <div className="order-item">
              <span>VAT 07%</span>
              <span>...</span>
              <button>+</button>
            </div>
            <div className="order-item">
              <span>VAT 19%</span>
              <span>+ € 0.00</span>
            </div>
            <div className="order-item">
              <span>IN TOTAL</span>
              <span>€0</span>
            </div>
          </div>
          <div className="order-type">
            <span><input type="radio" name="orderType" value="delivery" defaultChecked /> Delivery</span>
            <span>Order type: <button>Change</button></span>
          </div>
          <div>Please log in if registered!</div>
          <button className="pre-order-button">Pre-order</button>
        </div>
      </div>
    </div>
  );
};

export default Home;