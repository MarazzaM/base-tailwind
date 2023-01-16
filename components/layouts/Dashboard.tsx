import Navbar from "../ui/Dashboard/Navbar"

export default function Layout({ children }:any) {
  return (
    <>
    <Navbar />
      <main>{children}</main>
    </>
  )
}