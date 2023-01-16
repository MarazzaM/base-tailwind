import Navbar from "../ui/Dashboard/Navbar"
import Sidebar from "../ui/Dashboard/Sidebar"

export default function Layout({ children }:any) {
  return (
    <>
    <div className="flex">
    <Sidebar />
    {/* <Navbar /> */}
      <main className='flex-1'>
          {children}
        </main>
        </div>
    </>
  )
}