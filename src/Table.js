import React,{useState} from 'react'
import "./App.css"

const Table = () => {
  const tableData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }
]

const [data,setData] = useState(tableData)

const sortByDate = ()=>{
    console.log("sortbydate clicked");
    let newData = [...data]
    newData.sort((a,b)=>new Date(b.date) - new Date(a.date));
    console.log("resultDate",newData)
    setData(newData)
}

const sortByView = ()=>{
    let newData = [...data]
    newData.sort((a,b)=> b.views - a.views);
    console.log("resultDate",newData)
    setData(newData)
}

  return (
    <div>
        <h1>Data and Views Table</h1>
        <button onClick={sortByDate}>Sort by Date</button>
        <button onClick={sortByView}>Sort by Views</button>
        <table>
            <thead>
                <tr>
                    <td>Date</td>
                    <td>Views</td>
                    <td>Article</td>
                    
                </tr>
            </thead>
            <tbody>
                  {data.map((val,idx)=>(
                    <tr key={idx}>
                        <td>{val.date}</td>
                        <td>{val.views}</td>
                        <td>{val.article}</td>
                    </tr>
                  ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table