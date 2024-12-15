import "./Techniquespage.css";

const Techniquespage = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-5" style={{ color: "#ffb607" }}>
        Techniques We Use :-
      </h1>
      <hr />
      <div className="videos-container" style={{paddingTop:"200px"}}>
        {/* VIDEO 1 */}
        <div className="eachvideo">
          <center>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/WigJDYvSu38"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </center>
          <h3 style={{ color: "#ffb607" }}>YAKISUGI/ SHOU SUGI BAN TECHNIQUE</h3>
          <h4>
            A Japnese Technique were ceader wood is burned before use, it prevents wood from insects and also resists fire
          </h4>
        </div>
        {/* VIDEO 2 */}
        <div className="eachvideo" style={{marginLeft:"50%"}}>
          <center>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/wTPy-fKujpM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </center>
          <h3 style={{ color: "#ffb607" }}>SASHIMONO</h3>
          <h4>
            No Nail or other material is used to join , special cuts are made that are used to join the wood
          </h4>
        </div>
        {/* VIDEO 3 */}
        <div className="eachvideo">
          <center>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/4PeX5gfV2m8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </center>
          <h3 style={{ color: "#ffb607" }}>COMPRESSING</h3>
          <h4>
           Where Compress able and light weight material is used so that it can be srinked in size, making it easier to transport
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Techniquespage;
