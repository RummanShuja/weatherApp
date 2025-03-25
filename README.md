# Weather App  

A simple weather application where users can enter a city or state name to get real-time weather details, including temperature, humidity, and conditions.  

## Features  
- Search for weather by city or state  
- Shows temperature (min, max, feels like)  
- Displays humidity and weather conditions  
- Simple and responsive UI  

## How to Run Locally  
1. Clone the repository:  
   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. Navigate to the project folder:  
   ```sh
   cd your-repo-name
   ```
3. Install dependencies:  
   ```sh
   npm install
   ```
4. Create a `.env` file in the root directory and add your API key:  
   ```env
   VITE_API_KEY=your_api_key_here
   ```
5. Start the app:  
   ```sh
   npm run dev
   ```

## Built With  
- Vite + React for the frontend  
- OpenWeatherMap API for weather data
- Material UI for styling 

## API Used  
This app fetches weather data from the [OpenWeatherMap API](https://openweathermap.org/api).  

## License  
This project is open-source and free to use.  
