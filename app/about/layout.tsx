type ILayoutPage = {
  children: React.ReactNode
  one: React.ReactNode
  two: React.ReactNode
}

const Layout: React.FC<ILayoutPage> = ({ children, one, two }) => {
  return (
    <div className="">
      <div className="h-32 bg-orange-500 mb-8 p-6">{children}</div>
      <div className="flex gap-5">
        <div className="w-1/2 bg-amber-300 p-6">{one}</div>
        <div className="w-1/2 bg-amber-300 p-6">{two}</div>
      </div>
    </div>
  )
}

export default Layout
