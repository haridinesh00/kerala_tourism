import React from "react";
import Button from "react-bootstrap/esm/Button";
import "./Sectiontwo.css";

function Sectiontwo() {
  return (
    <div className="container-fluid text-center" id="galleryone">
      <h2 style={{ color: "#036", fontWeight: "500", paddingTop: "3rem", paddingBottom: "2rem" }}>
        Top Destinations
      </h2>
      <div style={{width: "80%", margin: "0 auto"}}>
      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href="img_5terre.jpg">
            <img
              src="https://www.keralatourism.org/images/homecontentimage/desktop/Alappuzha01_07.jpg"
              alt="Cinque Terre"
              width="600"
              height="400"
            />
          </a>
          <div class="desc">Alappuzha</div>
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href="img_forest.jpg">
            <img src="https://www.keralatourism.org/images/homecontentimage/desktop/jaintemple-2.jpg" alt="Forest" width="600" height="400" />
          </a>
          <div class="desc">Jain Temple</div>
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href="img_lights.jpg">
            <img
              src="https://www.keralatourism.org/images/homecontentimage/desktop/jewstreet-3.jpg"
              alt="Northern Lights"
              width="600"
              height="400"
            />
          </a>
          <div class="desc">Jew Street</div>
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href="img_mountains.jpg">
            <img
              src="https://www.keralatourism.org/images/homecontentimage/desktop/kilimanoor2.jpg"
              alt="Mountains"
              width="600"
              height="400"
            />
          </a>
          <div class="desc">Kilimanoor</div>
        </div>
      </div>

      <div class="clearfix"></div>
      </div>
      <div style={{width: "80%", margin: "0 auto"}}>
      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href="img_5terre.jpg">
            <img
              src="https://www.keralatourism.org/images/homecontentimage/desktop/bio-diveristy-031.jpg"
              alt="Cinque Terre"
              width="600"
              height="400"
            />
          </a>
          <div class="desc">Bio Diveristy</div>
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href="img_forest.jpg">
            <img src="https://www.keralatourism.org/images/homecontentimage/desktop/Athirapally1.jpg" alt="Forest" width="600" height="400" />
          </a>
          <div class="desc">Athirapally</div>
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href="img_lights.jpg">
            <img
              src="https://www.keralatourism.org/images/homecontentimage/desktop/mayiladumpara_in_palakkad2.jpg"
              alt="Northern Lights"
              width="600"
              height="400"
            />
          </a>
          <div class="desc">Mayiladumpara</div>
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href="img_mountains.jpg">
            <img
              src="https://www.keralatourism.org/images/homecontentimage/desktop/agasthyakoodam-021.jpg"
              alt="Mountains"
              width="600"
              height="400"
            />
          </a>
          <div class="desc">Agasthyakoodam</div>
        </div>
      </div>

      <div class="clearfix"></div>
      </div>
      <div
        className="text-center"
        style={{ marginTop: "2rem", paddingBottom: "2rem" }}
      >
        <Button className="btn">EXPLORE OUR DESTINATIONS <i class="arrow right"></i></Button>
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default Sectiontwo;
