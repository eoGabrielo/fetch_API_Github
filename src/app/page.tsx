
interface DataProps{
  id: number;
  name: string;
  full_name: string;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
    url: string;
  }
}

async function getData(){
  //API GIT: https://api.github.com/users/eoGabrielo/repos
  const response = await fetch("https://api.github.com/users/eoGabrielo/repos");

  return response.json();
}



export default async function Home(){
  const data: DataProps[] = await getData();

  return(
    <main>
      <h1>Página Home</h1>
      <span>Seja bem vindo a página home</span>
      <br />

      <h3>Meus repositorios:</h3>
      {data.map((item) => (
        <div key={item.id}>
          <strong>Repositório: </strong><a>{item.name}</a>
          <br /><br />
        </div>
      ))}
    </main>
  )
}







