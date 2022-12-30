// NOTE: this context API code is just for understanding use with react lib for real demo

// Provide pattern: Make data available to multiple child components 
const DataContext = React.createContext();

function App() {
  const data = { ... }

  return (
    <DataContext.Provider value={data}>
    <SideBar />
      <Content />
      
      </DataContext.Provider>
  )
}

const SideBar = () => <List />
const List = () => <ListItem />
const Content = () => <div><Header /><Block /></div>


function ListItem() {
  const { data } = React.useContext(DataContext);
  return <span>{data.listItem}</span>;
}

function Text() {
  const { data } = React.useContext(DataContext);
  return <h1>{data.text}</h1>;
}

function Header() {
  const { data } = React.useContext(DataContext);
  return <div>{data.title}</div>;
}