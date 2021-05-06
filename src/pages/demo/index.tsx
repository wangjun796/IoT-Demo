// /*
//  * @Description:
//  * @version: 1.0
//  * @Company: DMT
//  * @Author: wangj
//  * @Date: 2021-04-16 09:29:10
//  * @LastEditor: wangj
//  * @LastEditTime: 2021-04-22 16:20:42
//  */
// import React, { Fragment, useState, useRef,useEffect } from 'react';
// import VideoPlayer from './VideoPlayer';
// import Service from "./service";

// function ChildComponent({count}){
//   useEffect(()=>{
//     console.log("componentDidMount",count);
//     return ()=>{
//       alert("componentWillUnmount and count is"+count);
//     }
//   },[]);
//   console.log("count",count);
//   return <>count:{count}</>
// }
// const Demo = () => {
//     // const [count,setCount] = useState(0);
//     // const [childShow,setChild] = useState(true);
//     // return (
//     //     <div onClick={()=>setCount(c=>c+1)}>
//     //       <button onClick={()=>setChild(false)}>删除子组件</button>
//     //       {childShow && <ChildComponent count={count}/> }
//     //       <button onClick={()=>setChild(true)}>恢复子组件</button>
//     //     </div>
//     // );
//     // const [count, setCount] = useState(0)
//     // const preCountUseRef = useRef(count)

//     // useEffect(() => {
//     //   preCountUseRef.current = count
//     // })

//     // return (
//     //   <div>
//     //     <p>precount: {preCountUseRef.current}</p>
//     //     <p>You clicked {count} times</p>
//     //     <button onClick={() => setCount(() => count + 1)}>Click me</button>
//     //   </div>
//     // )
//     return(<></>)
// }
// export default Demo;


import React from "react";
import { BrowserRouter as Router, Route, Link,NavLink } from "react-router-dom";

const App = () => (
    <Router>
        <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
        </div>
    </Router>
);

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Topic = (props) => {
    console.log(props.match)
    return(
      <>
      <h3>Requested Param: {props.match.params.id}</h3>
      <h3>Requested Param.path: {props.match.params.path}</h3>
      <h3>Requested Param.url: {props.match.params.url}</h3>
      </>
      )
};
const Topics = ({ match }) => {
    console.log(match);
    return (
    <div>
        <h2>Topics</h2>

        <ul>
            <li>
                <Link to={`${match.url}/components`}>Components</Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
            </li>
            <li>
                <Link to={`${match.url}/1`}>topic 1</Link>
            </li>
            <li>
                <Link to={`${match.url}/2`}>topic 2</Link>
            </li>
        </ul>

        <Route path={`${match.path}/:id`} component={Topic} />
        <Route
            exact
            path={match.path}
            render={() => <h3>Please select a topic.</h3>}
        />
    </div>
)};
const Header = () => (
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <NavLink isActive={true} activeStyle={{color:'red'}} to="/topics">Topics</NavLink>
        </li>
    </ul>
);

export default App;
