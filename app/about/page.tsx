export default function About() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-700 to-gray-800 p-4 text-white">
        <div className="md:text-2xl text-xl font-bold mb-2">Updates Made</div>
        <ul className="mb-5 list-disc pl-5">
          <li>Added API routes for fetching data</li>
          <li>Modified the function for adding to recent cities</li>
          <li>Moved <code>WeatherIcon</code> to a separate component for reuse</li>
          <li>Created two components for different card variants</li>
          <li>Added the "feels like" property to the weather data type</li>
          <li>Implemented local storage for variant selection and recent searches consistency</li>
          <li>Added a function to check if a searched city already exists in the recent searches list in order to prevent duplications</li>
          <li>Integrated Redux and reduced prop drilling in child components</li>
          <li>Added a disabled state for recent search buttons while weather data is loading</li>
          <li>Removed the use of indexes as keys when mapping through recent searhces cities</li>
        </ul>
        
        <div className="md:text-2xl text-xl font-bold mb-2">Assumptions</div>
        <ul className="mb-5 list-disc pl-5">
          <li>Initially considered using Redux directly in the <code>SearchBar</code> component but decided to pass props instead, making it reusable for future needs</li>
          <li>Initially considered keeping all data in a single Redux reducer due to the small size of the application, but opted to separate reducers for better organization, scalability, and maintainability</li>
        </ul>

        <div className="md:text-2xl text-xl font-bold mb-2">Potential Enhancements</div>
        <ul className="list-disc pl-5">
          <li>Using <code>useToggle</code> to switch between temperature units, but unsure if UI modifications are allowed to add a toggle button</li>
          <li>A snackbar or alert could be used to notify users when no matching cities are found</li>
        </ul>
        <div className="h-10 md:hidden"/>
      </div>
    );
}