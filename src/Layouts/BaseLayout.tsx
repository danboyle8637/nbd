const Layout: React.FC = ({ children }) => {
  return (
    <>
      <main className="flex justify-center">
        <div>{children}</div>
      </main>
    </>
  )
}

export default Layout
