import LogoSrc from '../assets/images/logo.png';

function ImagensReact() {
  return (
    <div>
        <p>Imagem utilizada através da pasta public</p>
      <img src="./images/logo.png" width="200px" alt="Logo nintendo" />
      <p>Imagem utilizada através da pasta Src</p>
      <img src={LogoSrc} width="200px" alt="Logo nintendo" />
    </div>
  )
}

export default ImagensReact;
