import "../App.css";

import Facer from '../assets/facer169.png'

const Home = () => {
  return (
    <>
      <div className="container-fluid opacity-50 p-0 m-0">
        <img
          className="img-fluid w-100"
          src={Facer}
          alt="Facer of the Magic Cafe "
        />
      </div>

      <div className="contact card col-sm-6 my-5 w-100">
        <div className="row d-flex justify-content-center">
        Vegetarian and Vegan
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-sm-2">
            <i className="bi bi-geo-alt"></i>
            110 Magdalen Rd, Oxford, OX4 1RQ
          </div>
          <div className="col-sm-2">
            <i className="bi bi-clock"></i>10am~4:30pm, Daily
          </div>
          <div className="col-sm-2">
            <i className="bi bi-telephone"></i>01865 420515
          </div>
        </div>
      </div>

      <div className="container m-100">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          sapiente tempora ab cum quasi nam velit, porro illum maiores vitae
          ratione ea molestias quidem aspernatur obcaecati esse omnis! Fuga,
          suscipit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          sapiente tempora ab cum quasi nam velit, porro illum maiores vitae
          ratione ea molestias quidem aspernatur obcaecati esse omnis! Fuga,
          suscipit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          sapiente tempora ab cum quasi nam velit, porro illum maiores vitae
          ratione ea molestias quidem aspernatur obcaecati esse omnis! Fuga,
          suscipit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          sapiente tempora ab cum quasi nam velit, porro illum maiores vitae
          ratione ea molestias quidem aspernatur obcaecati esse omnis! Fuga,
          suscipit!
        </p>
      </div>
    </>
  );
};

export default Home;