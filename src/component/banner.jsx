const Banner = (params) => {
  console.log(params.img)
  
    return (
      <>
       {/* Image de couverture avant les cartes */}
       <div className="home__banner">
        <img
        src={params.img} // URL de l'image à afficher
        alt="Bannière principale"  // Texte alternatif affiché en cas d'erreur
        className="home__banner-image"
        />
       <p className="home__banner-text">Chez vous et partout ailleurs</p>
     </div>
     </>
    )
  };
  
export default Banner;
  