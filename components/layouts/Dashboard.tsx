import Navbar from "../ui/Dashboard/Navbar"
import Sidebar from "../ui/Dashboard/Sidebar"

export default function Layout({ children }:any) {
  return (
    <>
    <Navbar />
    <Sidebar />
      <main>{children}</main>
    </>
  )
}