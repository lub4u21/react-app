import logo from './logo.svg';
import './App.css';
function Header(props){
  console.log(props, props.title);
  return <header>
    <h1><a href="/">{props.title}</a></h1>
  </header>
}
function Nav(props){
  return <nav>
  <ol>
    <li><a href="/read/1">html</a></li>
    <li><a href="/read/2">css</a></li>
    <li><a href="/read/3">js</a></li>
  </ol>
</nav>
}
function Article(props){
  return  <article>
  <h2>{props.title}</h2>
  {props.body}
</article>
}
function App() {
  const topics = [
    {id:1, title:'html', body:'html is...'},
    {id:2, title:'css', body:'html is...'},
    {id:3, title:'js', body:'html is...'}
  ]
  return (
   <div>
    <Header title="web"></Header>
    <Nav topics={topics}></Nav>
    <Article title="welcome" body="hello"></Article>
   </div>
  );
}

export default App;
