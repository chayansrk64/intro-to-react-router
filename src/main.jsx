import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Users from './components/Users/Users.jsx'
import Posts from './components/Posts/Posts.jsx'
import UserDetails from './components/UserDetails/UserDetails.jsx'
import PostDetails from './components/PostDetails/PostDetails.jsx'

// data load for posts
const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home 
      },
      {
        path: 'about',
        Component: About
      },
      {
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
       {
        path: 'users/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
      },
      {
        path: 'posts',
        element: <Suspense fallback={<p>Posts are loading...</p>}>
          <Posts postsPromise={postsPromise}></Posts>
        </Suspense>
      },
      {
        path: 'posts/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.userId}`),
        Component: PostDetails
      }
     
    ]
  },
  {
    path: "*",
    element: <h2>404 NoT FoUnD!</h2>
  }
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}>
        
     </RouterProvider>
  </StrictMode>,
)
