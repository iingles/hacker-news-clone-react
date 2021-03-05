import React, {useState, useEffect} from 'react'


import './App.scss';
import Header from './components/Header/Header'
import NewsListItem from './components/NewsListItem/NewsListItem'


const App = () => {

  const [newsItems, setNewsItems] = useState([])
  

  const BASE_API_URL = 'https://hacker-news.firebaseio.com/v0'

  useEffect(() => {
  
    // Fetch the story IDs and then build the URLs
    fetchIds()
    .then(res => {
      // Just get 30 stories instead of 500
      const stories = res.slice(0, 30).map(id => id)

      stories.forEach(el => {
        const reqURL = `${BASE_API_URL}/item/${el}.json?print=pretty`

        fetchNewsItem(reqURL)        
        .then(res => {
          setNewsItems(newsItems => [...newsItems, res])          
        })
        .catch(err => console.error(err))
      })      
      
    })
    .catch(err => console.error(err))     


  }, [])

  // Fetch item IDs
  const fetchIds = async () => {
    const storyIdURL = `${BASE_API_URL}/topstories.json?print=pretty`

    const response = await fetch(storyIdURL)
    const resData = await response.json()

    return resData
  }

  // Fetch the individual news items
  const fetchNewsItem = async url => {
    const item = await fetch(url)
    const itemData = await item.json()    
    return itemData    
  }

  // Convert the Unix timestamp to a usable date
  const convertTime = ts => {
    const date = new Date(ts * 1000);

    return date
  }

  
 
  return (
    <div className="App">
      <Header />
      <div className="news-list">
        {
          newsItems.map((newsItem, idx) => {
            return <NewsListItem
            key={idx}
            number={idx + 1}
            link={newsItem.url}
            headline={newsItem.title}
            by={newsItem.by}
            score={newsItem.score}
            time={convertTime(newsItem.time)}
            descendants={newsItem.descendants}
            id={newsItem.id}
            />
          })
        }

      </div>
     
    </div>
  );
}

export default App;
