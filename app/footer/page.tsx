type IFooterProps = {}

const Footer: React.FC<IFooterProps> = () => {
  return (
    <div className="bg-red-400 py-10 ">
      <div className="mx-auto w-5/6">
        <small>&copy; Copyright 2018, Example Corporation</small>
      </div>
    </div>
  )
}

export default Footer
