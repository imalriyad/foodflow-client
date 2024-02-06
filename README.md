# FoodFlow - Flavorful Journeys, Every Plate a Delight

FoodFlow is a dynamic food ordering platform that blends user-friendly features with a delightful culinary experience. Explore the top five main features below:

## Features:

1. **User Authentication and Authorization:**
   - Users can seamlessly log in and out using email/password or Google authentication, leveraging Firebase and MongoDB.
   - Secure storage of user credentials and authentication cookies using JWT tokens, ensuring privacy and data integrity.
   - React Hot Toast employed for real-time success and error messaging.

2. **Top Selling Food Items:**
   - Dynamically curated list of top-selling food items on the homepage based on order count.
   - Each food item includes a details button for users to explore more about their favorite dishes.

3. **Search and Pagination:**
   - Efficiently search for specific food items by name in the "All Foods" page.
   - Pagination feature allows users to navigate through different sets of food items, with nine items displayed by default.

4. **Food Ordering and Order Tracking:**
   - Secure private routes for users to order food items, protected by JWT authentication.
   - Detailed tracking of ordered items available through the user profile, ensuring a personalized and secure ordering experience.
   - Prevention of ordering items with zero or insufficient stock quantities.

5. **Add and Update Food Items:**
   - Private route for logged-in users to add new food items to the platform.
   - Intuitive modal interface for users to easily update and manage their added food items.

6. **Contact Form with EmailJS:**
   - Visitors can send messages through the contact form, utilizing EmailJS for efficient email communication.

## Project Live Links:

- [FoodFlow Live](https://foodflow-6447d.web.app)
- [Client Side Repository](https://github.com/imalriyad/foodflow-client)
- [Server Side Repository](https://github.com/imalriyad/foodflow-server)

## Getting Started:

1. **Clone the Repository:**
   ```
   git clone https://github.com/imalriyad/foodflow-client.git
   ```

2. **Install Dependencies:**
   ```
   cd foodflow-client
   npm install
   ```

3. **Run the Application:**
   ```
   npm start
   ```

4. **Visit the Live Link:**
   - [FoodFlow Live](https://foodflow-6447d.web.app)
