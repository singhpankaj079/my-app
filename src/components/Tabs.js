import React, {useState} from 'react'
import './Tabs.css'

function Tabs(props) {

    const [ openTabs]  = useState(props.openTabs)
    const [ windowStart, setWindowStart ] = useState(0)
    const [ windowSize ] = useState(0.4*window.innerWidth / 130)
    const openTab = props.openTab
    const closeTab = props.closeTab
    const activeTab = props.activeTab
    const refs = []
    
    for (let i = 0; i < openTabs.length; i++) 
        refs.push(React.createRef())
    
    const show = ( index ) => {
        refs[index].current.style.display = "inline-block" 

    }
    const hide = ( index ) => {
        refs[index].current.style.display = "none"
    }
    const highlight = ( index ) => {
        //refs[index].current.style.background = "grey"
    }
    const unhighlight = ( index ) => {
        //refs[index].current.style.background = "white"
    }

    const increWindowStart = () => {
        if (windowStart < openTabs.length - windowSize - 1){
            setWindowStart(windowStart + 1)
        }
    }

    const decreWindowStart = () => {
        if (windowStart > 0) {
            setWindowStart(windowStart - 1)
        }
    }

    return (
        <div className = "tabs">
            <div className = "left-header">
                Event Viewer
            </div>
            <button style = {{ display: (windowSize <= openTabs.length && windowStart > 0) ?"inline":"none", float: "left", height: "30px" }} onClick = { decreWindowStart }> &lt; </button>

            {
            openTabs.map((tab, index) => {
                if (index >= windowStart && index <= windowStart + windowSize) {
               return (
               <div className = "tab-item" onMouseEnter = { () => show(index) } onMouseLeave = { () => hide(index) } style = { { width: "130px", borderBottom:  (tab.title === activeTab) ? "0px solid grey": "1px solid grey",
               background:  (tab.title === activeTab) ? "white": "black", color:  (tab.title === activeTab) ? "black": "white"}}>
                   <div  onClick = { ()=> openTab(tab)}  className = "tab-title">
                        { tab.title }
                    </div>
                    <div title = "close Tab" onClick = { () => closeTab(tab.title) } onMouseEnter = { ()=>highlight(index)} onMouseLeave = { () => unhighlight(index)} ref = {refs[index]} style = {{display: "none", marginLeft: "5px", color: "red"}} >  &#10006;  </div>

                </div>)
                
                } else return (<div style = {{ display: "none"}}></div>)
            }
            )

        }

        
            <button style = {{ display: (windowSize <= openTabs.length && windowStart + windowSize < openTabs.length - 1) ?"inline":"none", float: "left", height: "30px" }} onClick = { increWindowStart }> &gt; </button>

        </div>
    )
}

export default Tabs