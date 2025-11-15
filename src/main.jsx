import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Bioprovider } from './components/Hooks/ContextApi'
import { About, Home } from './components/Hooks/ContextApi/Home'
// import { UseID } from './components/Hooks/UseID/Useid'
// import { Propdrilling } from './components/Hooks/Prop_drilling'
// import { Useffectchallenge } from './components/Challenges/useffectchallenge'
// import { Howtonotfetchapi } from './components/Hooks/UseEffect/Howtonotfetch'
// import { Howtofetchapi } from './components/Hooks/UseEffect/Howtofetchapi'
// import { Pokemonapi } from './components/Hooks/UseEffect/Pokemon'
// import { Useref } from './components/Hooks/Useref/useref'
// import { Forwardref } from './components/Hooks/Useref/Forwardref'
// import { Siblingcomponent, State } from './components/Hooks/State'
// import { Derivedstate, Maploop } from './components/Challenges/State_Challenge'
// import { LiftingState } from './components/LiftingStateUp/LiftingState'
// import { Short_circuit } from './components/Short_circuit_evaution/Short_circuit'
// import { New_count } from './components/Challenges/Challenge_state_2'
// import { Controlledform } from './components/Controlled_components/Controlled'
// import { Reactuseffect } from './components/Hooks/UseEffect/Useffect'
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
    {/* <LiftingState/> */}
    {/* <Short_circuit/> */}
    {/* <New_count/> */}
    {/* <Controlledform/> */}
    {/* <Reactuseffect/> */}
    {/* <Useffectchallenge/> */}
    {/* <Howtonotfetchapi/> */}
    {/* <Howtofetchapi/> */}
    {/* <Pokemonapi/> */}
    {/* <Useref/> */}
    {/* <Forwardref/> */}
    {/* <UseID/> */}
    {/* <Propdrilling/> */}
    <Bioprovider>
      <Home/>
      <About/>
    </Bioprovider>
  </StrictMode>,
)

