function HistoryComponent() {
    // 2.1. Define state variables to store the list data
    const [listData, setListData] = useState([]);
  
    // 2.2. Use the useEffect hook to fetch the list data
    useEffect(() => {
      // 2.2.1. Define an async function to fetch the data
      const fetchData = async () => {
        try {
          // 2.2.2. Make an API request to fetch the list data
          const response = await axios.get('/api/list');
          // 2.2.3. Update the state with the fetched data
          setListData(response.data);
        } catch (error) {
          console.log(error);
        }
      };
  
      // 2.2.4. Call the async function to fetch the data when the component mounts
      fetchData();
    }, []);
  
    // 2.3. Render the list in your component by mapping over the list data
    return (
      <div>
        <h2>List Items:</h2>
        <ul>
          {listData.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }

  
  
  
  
  
  