import BtnLink from "../button/BtnLinks"

export const Cards = ()=>{
  return(
    <section>
      <h2>Cards</h2>





      <section className="project-card">

          <figure>
            {/* img do projeto */}
            <img className="preview" src="" alt="foto do projeto" />

            <figcaption>
              <h2 className="name-project">API RestFull React Pokemon</h2>
              <p className="desctiption-project">
                Esse código permite buscar usuários aleatórios usando a API randomuser.me.
              </p>

              <BtnLink/> <BtnLink/>

            </figcaption>
          </figure>



      </section>


    </section>
  )
  }