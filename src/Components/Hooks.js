/* Hooks sloves the problem of code reuse across components.They are written without classes. */

import React, { useState } from "react";

function Hooks() {
  const [myself, Setmyself] = useState({
    says: "Good Morning",
    name: "Balaji",
    image:
      "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/200355617/original/57e33b448a8da9664e391a3b4e4d2f50e1d67dbe/be-your-front-end-developer.jpg",
  });

  const afterClick = function () {
    Setmyself({
      says: "Good Evening",
      name: "Alex",
      image: "https://miro.medium.com/max/1200/1*hYSKyofnqThnPIsYRfnUUQ.png",
    });

    setInterval(function () {
      window.location.reload();
    }, 1000);
  };

  return (
    <section name="Hooks">
      <div class="card cardC">
        <img src={myself.image} class="card-img-top " alt="NotDisplay" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            {myself.says},Hello {myself.name}
          </p>

          <button class="btn btn-primary btnAlign" onClick={afterClick}>
            Hooks
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hooks;
