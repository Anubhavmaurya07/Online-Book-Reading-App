import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Shop from './pages/Shop.jsx'
import SingleBook from './components/SingleBook.jsx'
import DashboardLayout from './dashboard/DashboardLayout.jsx'
import Dashboard from './dashboard/Dashboard.jsx'
import UploadBook from './dashboard/UploadBook.jsx'
import ManageBook from './dashboard/ManageBook.jsx'
import EditBook from './dashboard/EditBook.jsx'


const router = createBrowserRouter([
    {
        path : '/',
        element : <App />,
        children : [
            {
                path : '/',
                element : <Home />
            },
            {
                path : '/about',
                element : <About />
            },
            {
                path : '/shop',
                element : <Shop />
            },
            {
                path : '/book/:id',
                element : <SingleBook />,
                loader : ({params}) => fetch(`http://localhost:3001/book/${params.id}`)
            }
        ]
    },
    {
        path: '/admin/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: '/admin/dashboard',
                element: <UploadBook />
            },
            {
                path: '/admin/dashboard/upload',
                element: <UploadBook />
            },
            {
                path: '/admin/dashboard/manage',
                element: <ManageBook />
            },
            {
                path: '/admin/dashboard/edit-book/:id',
                element: <EditBook />,
                loader: ({params}) => fetch(`http://localhost:3001/book/${params.id}`)
            }
        ]
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>)
