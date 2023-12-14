import logo from './logo.svg';
import classes from './App.css';
import Main from './pages/main/Main';
import Button from './components/index/button/Button'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import About from './pages/about/About';
import Wrapper from './pages/wrapper/Wrapper';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from "react"
const Layout = () => {
  return(
  <div className={classes.main}>
    <Wrapper />
  </div>
  );
}
console.log(classes)

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api')
    .then(response => response.json())
    .then(response => setData(response.message))
  })

  const router = createBrowserRouter ([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element:<Main />,
        },
        {
          path: "/about",
          element: <About />
        },
      ]
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
