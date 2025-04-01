import React from 'react'
import './App.css'
import Ingredients from './Ingredients.png'
import chef from './chef.jpg'
import time from './Time.jpg'
const Home = () => {
    return (
        <div className='container'>
                    <h1>Our Story</h1>
                        
                    <p> We believe in good. We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. 
                        Fans were given situations where they had to come up with wacky and fun excuses. 
                        The person with the best excuse won the Best Excuse Badge and won Pizzeria’s vouchers. 
                        Their enthusiastic response proved that Pizzeria’s Fresh Pan Pizza is the Tastiest Pan Pizza. Ever! 
                    </p>
                    <p>
                      Ever since we launched the Tastiest Pan Pizza, ever, people have not been able to resist the softest, cheesiest, crunchiest, butteriest Domino’s Fresh Pan
                      Pizza. They have been leaving the stage in the middle of a performance and even finding excuses to be disqualified in a football match.
                    </p>

                    <p>
                       We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. Fans were given situations where they had to come up with wacky and fun
                       excuses. The person with the best excuse won the Best Excuse Badge and won Pizzeria’s vouchers. Their enthusiastic response proved that Pizzeria’s Fresh
                       Pan Pizza is the Tastiest Pan Pizza. Ever!
                    </p>
                    <div class="ingredients">
                        <img src={Ingredients} alt="Ingredients img" />
                        <div class="ingredients-text">
                            <h2>Ingredients</h2>
                            <p>We're ruthless about goodness. We have no qualms about tearing up a day-old 
                            lettuce leaf (straight from the farm), or steaming a baby (carrot). Cut. Cut. Chop. 
                            Chop. Steam. Steam. Stir. Stir. While they’re still young and fresh - that’s our 
                            motto. It makes the kitchen a better place.</p>
                        </div>
                    </div>   
                    <div class="chef">
                        <div class="chef-text">
                        <h2>Our Chefs</h2>
                            <p>They make sauces sing and salads dance. They create magic with skill,
                           knowledge, passion, and stirring spoons (among other things). They 
                           make goodness so good, it doesn’t know what to do with itself. We do 
                           though. We send it to you.</p>
                        </div>
                        <img src={chef} alt="Chef img" />
                    </div>   
                    <div class="time">
                        <img src={time} alt="Time img" />
                        <div class="time-text">
                            <h2>45 min delivery</h2>
                        </div>
                    </div>   
                 
        </div>


    );
  };
  

export default Home





//         <div className='story'> 
//                 <h2>Our Story</h2>
//                 <p>We believe in good. We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. Fans were given situations where they had to come up
//                     with wacky and fun excuses. The person with the best excuse won the Best Excuse Badge and won Pizzeria’s vouchers. Their enthusiastic response proved
//                     that Pizzeria’s Fresh Pan Pizza is the Tastiest Pan Pizza. Ever!</p>

//                 <p> Ever since we launched the Tastiest Pan Pizza, ever, people have not been able to resist the softest, cheesiest, crunchiest, butteriest Domino’s Fresh Pan
//                     Pizza. They have been leaving the stage in the middle of a performance and even finding excuses to be disqualified in a football match. </p>

//                 <p>We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. Fans were given situations where they had to come up with wacky and fun
//                     excuses. The person with the best excuse won the Best Excuse Badge and won Pizzeria’s vouchers. Their enthusiastic response proved that Pizzeria’s Fresh
//                     Pan Pizza is the Tastiest Pan Pizza. Ever!</p>
//         </div>
//     )
// }













//         <div className='story'>
//         <h1>Our Story</h1>
//         <p>
//           We believe in good. We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. 
//           Fans were given situations where they had to come up with wacky and fun excuses. 
//           The person with the best excuse won the Best Excuse Badge and won Pizzeria’s vouchers. 
//           Their enthusiastic response proved that Pizzeria’s Fresh Pan Pizza is the Tastiest Pan Pizza. Ever!
//         </p>
//         <p>
//           Ever since we launched The Tastiest Pan Pizza, ever, people have not been able to resist 
//           the softest, cheesiest, crunchiest, butteriest Domino’s Fresh Pan Pizza. They have been 
//           leaving the stage in the middle of a performance and even finding excuses to be disqualified 
//           in a football match.
//         </p>
//         <p>
//           We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. Fans were given situations 
//           where they had to come up with wacky and fun excuses. The person with the best excuse won the Best 
//           Excuse Badge and won Domino’s vouchers. Their enthusiastic response proved that Pizzeria’s Fresh 
//           Pan Pizza is the Tastiest Pan Pizza. Ever!
//         </p>
  
//         <h3>Ingredients</h3>
//         <p>
//           We’re ruthless about goodness. We have no qualms about tearing up a day-old lettuce leaf 
//           (straight from the farm), or steaming a baby (carrot). Cut. Cut. Chop. Chop. Steam. Steam. Stir Stir. 
//           While they’re still young and fresh - that’s our motto. It makes the kitchen a better place.
//         </p>
//         {/* <img src="./Components/Ingredients.jpg" alt="Ingredients" width="100%" /> */}
//         <img src="./Ingredients.png" alt="Pizzera Logo" />
  
//         <h3>Our Chefs</h3>
//         <p>
//           They make sauces sing and salads dance. They create magic with skill, knowledge, passion, 
//           and stirring spoons (among other things). They make goodness so good, it doesn’t know what 
//           to do with itself. We do though. We send it to you.
//         </p>
//         <img src="./Components/chef.jpg" alt="Chef" width="100%" />
  
//         <h3>45 min delivery</h3>
//         <img src="./Components/Time.jpg" alt="Timer" width="100%" />
//       </div>