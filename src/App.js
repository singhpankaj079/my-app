import React, { useState } from 'react';
import './App.css';
import Tabs from './components/Tabs'
import EventList from './components/EventList'
import EventBody from './components/EventBody'
const App = () => {

  const [ openTabs, setOpenTabs ] = useState([])
  const [ activeTab, setActiveTab ] = useState(null)
  const [dummy, setDummy] = useState(0)
  let temp = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
  
  const eventList = temp.map((val) => {
      return {
          title: "event type " + val,
          body: temp.map((value) => { return "this is the log no " + value + " for event type " + val})
      }
  })


  const openTab = (event) => {    
    let change = true
    for (let i = 0; i < openTabs.length; i++) {
      if (openTabs[i].title === event.title) {
        change = false
        break
      }
    }
    if (change === true) {
      let temp = openTabs
      temp.push(event)
      setOpenTabs(temp)
      setDummy(1 - dummy)
      setActiveTab(event.title)
    } else setActiveTab(event.title)
  }
  
  const closeTab = (title) => {
    for (let i = 0; i < openTabs.length; i++) {
      if (title === openTabs[i].title) {
        let temp = openTabs
        let change = false
        if (activeTab === openTabs[i].title) {
          change = true
        }
        temp.splice(i, 1)
        setOpenTabs(temp)
        setDummy(1 - dummy)

        if (change && openTabs.length > 0) {
         if (i < openTabs.length)
           setActiveTab(openTabs[i].title)
         else setActiveTab(openTabs[i - 1].title)
        } else setActiveTab(null)
        break
      }

    }
      
  }

  const returnBody = () => {
    for (let i = 0; i < openTabs.length; i++) {
      if (activeTab === openTabs[i].title) {
        return openTabs[i].body
      }
    }
    return " "
  }
  return (
    <div className="App">
      <Tabs openTabs =  { openTabs } openTab = { openTab } closeTab = { closeTab } activeTab = { activeTab }/>
      <br/>
      <EventList eventList = { eventList } openTab = { openTab } /> 
      <EventBody body = { returnBody() } activeTab = {activeTab} />
    </div>
  );
}

export default App;
