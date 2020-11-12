// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       //
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h1>Welcome</h1>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           {/* <Route path="about" element={<About />} /> */}
//         </Routes>
//       </div>
//     );
//   }
// }

// function Home() {
//   return <div>
//     <h1>Welcome to Home</h1>
//   </div>
// }

// export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes, Route, Link, Outlet
} from 'react-router-dom';


export default function App() {
  return <Router>
    <nav>
      <Link to='/' style={{ padding: '10' }}>Home</Link>
      <Link to='launch'>Launch</Link>
    </nav>
    <Routes>
      {/* single route */}
      <Route path='/' element={<Home />} />
      {/* nested routes: */}
      <Route path='launch' element={<Launch />}>
        <Route path='/' element={<LaunchIndex />} />
        {/* <Route path=':name' element={<LaunchShoe />} /> */}
      </Route>
    </Routes>
  </Router>
}

function Home() {
  return <div>
    <h1>Welcome to Home</h1>
  </div>
}

function Launch() {
  return <div>
    <h1>Welcome to Launch</h1>
    <Outlet />
  </div>
}

function LaunchIndex() {
  return <ul>
    {Object.entries(shoes).map(([key, { name, price }]) => <li key={key}>
      <h4>{name}</h4>
      <p>{price}</p>
    </li>)}
  </ul>
}

const shoes = {
  'shoe_1': {
    name: 'shoe_1_name',
    price: '$1000'
  },
  'shoe_2': {
    name: 'shoe_2_name',
    price: '$1000'
  },
  'shoe_3': {
    name: 'shoe_3_name',
    price: '$1000'
  },
  'shoe_4': {
    name: 'shoe_4_name',
    price: '$1000'
  },
  'shoe_5': {
    name: 'shoe_5_name',
    price: '$1000'
  },
}