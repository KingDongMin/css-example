
import './App.css';

function AppJSX() {
  const name = "콩이";
  const list = ['우유', '딸기', '바나나', '요거트'];
  return (
    <>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <h2>world</h2>
      <p>{name}</p>
      <ul>
        {
          list.map(item =>(
            <li>{item}</li>
          ))
        }
      </ul>
      <img 
      style={{width : '200px', height:'200px'}}
      src="https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/734/e3d0d17cdff1036002dd04747ad10bf5_res.jpeg" alt="" />
    </>
  );
}

export default AppJSX;
