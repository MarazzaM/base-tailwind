import Navbar from "../ui/Dashboard/Navbar"
import Sidebar from "../ui/Dashboard/Sidebar"

export default function Layout({ children }:any) {
  return (
    <>
    <div className="flex">
    <Sidebar />
      <main className='flex-1'>
    <Navbar />
          <div className="p-4">
          {children}
          </div>
        </main>
        </div>
    </>
  )
}