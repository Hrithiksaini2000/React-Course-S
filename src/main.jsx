import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { Siblingcomponent, State } from './components/Hooks/State'
// import { Derivedstate, Maploop } from './components/Challenges/State_Challenge'
import { LiftingState } from './components/LiftingStateUp/LiftingState'
// import './index.css'
// import App from './App.jsx'
// import Jsx from './components/Jsx/Jsx.jsx'
// if you use arrow function in your component you can import like this 
// import { Dynamic } from './components/DynamicValues/Dynamic.jsx'
// If you use normal function in your componemnt you can import like this 
// import Dynamic  from './components/DynamicValues/Dynamic.jsx'
// import Conditional from './components/Conditional/Conditional'
// import { Interview } from './components/Interviews/Firstinterview'
// import { Netflixcard } from './components/looping/Looping'
// import { Netflixcard } from './components/Props/Props'
// import { Challenge } from './components/Challenges/Challenge'
// import { Conditionalcard } from './components/Condstyling/Conditional_styling'
// import { Cssmodulecards } from './components/Cssmodules/Cssmodule'
// import { Styledcomponentcard } from './components/Styledcomponents/Styledmain'
// import { Eventhandle } from './components/EventHandling/Eventhandle'
// import { Eventprop } from './components/Eventprop/Eventprop'
// import { Eventpropagation } from './components/Eventprop/Eventpropgation'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Jsx/> */}
    {/* <Dynamic/> */}
    {/* <Conditional/> */}
    {/* <Interview/> */}
    {/* <Netflixcard/> */}
    {/* <Netflixcard/> */}
    {/* <Challenge/> */}
    {/* <Conditionalcard/> */}
    {/* <Cssmodulecards/> */}
    {/* <Styledcomponentcard /> */}
    {/* <Eventhandle/> */}
    {/* <Eventprop/> */}
    {/* <Eventpropagation/> */}
    {/* <State /> */}
    {/* <Siblingcomponent/> */}
    {/* <Maploop/> */}
    {/* <Derivedstate/> */}
    <LiftingState/>
  </StrictMode>,
)

