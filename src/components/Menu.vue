<template>
    <div class="menu" >
    <b-button v-b-toggle.sidebar-variant variant="light"><b-icon icon="list" font-scale="2" variant="dark"></b-icon></b-button>
    <b-sidebar id="sidebar-variant" bg-variant="dark"  text-variant="light" aria-labelledby="sidebar-variant-title" shadow backdrop backdrop-variant="dark">
      <template #default="{ hide }">
        <div class="p-3">
          <div class="d-flex align-items-center flex-column">
            <b-avatar size="5em" class="mb-3" variant="danger" >MRS.<br>BAY</b-avatar>
            <h4 id="sidebar-variant-title">Menu</h4>
            <div class="divider-menu"></div>
            <br>
          </div>
          <nav class="mb-3">
            <b-nav vertical>
              <!--*************************** Superette *****************************************-->
              <b-nav-item active @click="hide" id="popover-target-c"><b-icon icon="basket" font-scale="1" variant="light"></b-icon> Superette
                <b-popover target="popover-target-c" triggers="hover" placement="left">
                  <b-dropdown id="dropdown-dropright" dropright variant="danger">
                    <div class="dropcolor">
                    <b-container>
                      <b-row>
                        <b-col cols="9">
                          <h4 class="dropdown-header"><a href="#"> ÉPICERIE SUCRÉE & SALÉE</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">Helthy</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Biscuits & Cookies</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Chips & Snacks</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">LESSIVE</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">Détachage</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Détergent liquide</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Détergent en poudre</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">BOISSONS</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">Eau</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Jus</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Boissons énergitiques</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Café & Capsules</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Thé & Tisanes</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">LES ESSENTIELS</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">Huiles</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Huile d'Olive</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Pates & Riz</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">NETTOYAGE DOMESTIQUE</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">Outils de nettoyage</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Nettoyeurs de cuisine</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Eau de javel</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Gant Latex</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Nettoyants salle de bain</b-dropdown-item>
                        </b-col>
                      </b-row>
                    </b-container> </div>     
                  </b-dropdown>
                </b-popover>
              </b-nav-item>
              <!--*************************** Maison & Bureau ************************************-->
              <b-nav-item href="#link-1" @click="hide" id="popover-target-b"><b-icon icon="building" font-scale="1" variant="light"></b-icon> Maison & Bureau
                <b-popover target="popover-target-b" triggers="hover" placement="left">
                  <b-dropdown id="dropdown-dropright" dropright variant="danger">
                    <div class="dropcolor">
                    <b-container>
                      <b-row>
                        <b-col cols="9">
                          <h4 class="dropdown-header"><a href="#">PETIE ÉLECTOMÉNAGER</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">Micro-ondes</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Mixeurs & Blanders</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Fours & Grille-pain</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Toaster & Machine à pain</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Café & appareils expresso</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Robots Pétrins</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Gaufrier</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">CUISINE</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">Accessoires & Ustensiles</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Cocotte minute</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Outils de mesure</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Casseroles & Poêles</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">MAISON</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">Meubles</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Décoration de maison</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Salle de bain</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">GROS ÉLECTOMÉNAGER</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">Ventilateurs</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Chauffage & Radiateurs</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Plaque de cuisson</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Lave Vaisselle</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Eclairage & Plafonniers</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">AUTRES PRODUITS</a></h4>
                        </b-col>
                      </b-row>
                    </b-container> </div>     
                  </b-dropdown>
                </b-popover>
              </b-nav-item>
              <!--*************************** Santé & Beauté ************************************-->
              <b-nav-item href="#link-2" @click="hide" id="popover-target-a"><b-icon icon="screwdriver" font-scale="1" variant="light"></b-icon> Santé & Beauté
                <b-popover target="popover-target-a" triggers="hover" placement="left">
                  <b-dropdown id="dropdown-dropright" dropright variant="danger">
                    <div class="dropcolor">
                    <b-container>
                      <b-row>
                        <b-col cols="9">
                          <h4 class="dropdown-header"><a href="#">MAQUILLAGE</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">Visage, Teint & Blush</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Anti Cernes & Correcteurs</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Vernis à Ongles</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Accessoires Makeup</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Palette de maquillage</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Rouge à Lévres</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">BEAUTÉ & SOINS PERSONNELS</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">Soins de visage</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Soin de la peau</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Soins des cheveux</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Soins des pieds</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Message & Relaxation</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">LES ESSENTIELS DE L'ÉTÉ</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">Protection Solaire</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Bain & Gels Douche</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Soins mains & pieds</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Coloration cheveux</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Autre produits</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">PARFUMS</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">Parfums homme</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Parfums femme</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Dédorants</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">AUTRES PRODUITS</a></h4>
                        </b-col>
                      </b-row>
                    </b-container> </div>     
                  </b-dropdown>
                </b-popover>
              </b-nav-item>
              <!--*************************** Téléphone & Tablette ******************************-->
              <b-nav-item href="#link-2" @click="hide" id="popover-target-9"><b-icon icon="phone" font-scale="1" variant="light"></b-icon> Téléphone & Tablette
                <b-popover target="popover-target-9" triggers="hover" placement="left">
                  <b-dropdown id="dropdown-dropright" dropright variant="danger">
                    <div class="dropcolor">
                    <b-container>
                      <b-row>
                        <b-col cols="9">
                          <h4 class="dropdown-header"><a href="#">TÉLÉPHONE & ACCESSOIRES</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">Smartphones</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Téléphone Basics</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Smartwatch</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Étuis & Pochettes</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Casques & Ecouteurs</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Power banks</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Cartes Mémoires</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">TABLETTES & ACCESSOIRES</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">Tabelletes</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Accessoires Tablettes</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">TOP MARQUE</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">Samsung</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Huawei</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Apple</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Evertek</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">NOS MEILLEURES SMARTPHONES</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">Huawei Y9s</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Samsung Galaxy A20S</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Oppo A9 2020</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Infinix S4</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Huawei Y9 Prime 2019</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Leagoo Z9</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">AUTRES PRODUITS</a></h4>
                        </b-col>
                      </b-row>
                    </b-container> </div>     
                  </b-dropdown>
                </b-popover>
              </b-nav-item>
              <!--*************************** Mode **********************************************-->
              <b-nav-item href="#link-2" @click="hide" id="popover-target-8"><b-icon icon="collection" font-scale="1" variant="light"></b-icon> Mode
                <b-popover target="popover-target-8" triggers="hover" placement="left">
                  <b-dropdown id="dropdown-dropright" dropright variant="danger">
                    <div class="dropcolor">
                    <b-container>
                      <b-row>
                        <b-col cols="9">
                          <h4 class="dropdown-header"><a href="#">MODE HOMME</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">Maillots de bain</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Pantalons</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Pulls, Gilets & Chemises</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">T-shirts, Polos & Shorts</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">MODE FEMME</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">Robes</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Maillots de bain</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Jupes</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Combinaisons & Ensembles</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Chaussettes & Collants</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">CHAUSSURES HOMME & FEMME</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">Baskets & Tennis</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Espadrilles</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Chaussures à Talons</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Pantoufles</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Sandales & Mules</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">ACCESSOIRES</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">Montres</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Bijoux</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">GARÇON & FILLES</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">Chaussures</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Vêtement</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Accessoires</b-dropdown-item>
                        </b-col>
                      </b-row>
                    </b-container> </div>     
                  </b-dropdown>
                </b-popover>
              </b-nav-item>
              <!--***************************  Informatique *************************************-->
              <b-nav-item href="#link-2" @click="hide" id="popover-target-7"><b-icon icon="laptop" font-scale="1" variant="light"></b-icon> Informatique
                <b-popover target="popover-target-7" triggers="hover" placement="left">
                  <b-dropdown id="dropdown-dropright" dropright variant="danger">
                    <div class="dropcolor">
                    <b-container>
                      <b-row>
                        <b-col cols="9">
                          <h4 class="dropdown-header"><a href="#">ORDINATEURS</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">PC Portables</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Ordinateurs fixes</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">PC Gamer</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">PC Asus</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">IMPRIMANTES & SCANNERS</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#" >Imprimantes</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Cartouche d'encres et toners</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Scanner</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">PÉRIPHÉRIQUES & ACCESSOIRES</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">Clavier, souris & accessoires</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Accessoires audio & video</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Sacs, étuis et manches</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Matériel de jeu</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">STOCKAGE DE DONNÉES</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">Clés USB</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Disques durs</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">NOS MEILLEURS PRODUITS</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">HP 15</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">HP Pavilion</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">HP Envy</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">HP Laserjet</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Dell Inspiration</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Asus Vivobook</b-dropdown-item>
                        </b-col>
                      </b-row>
                    </b-container> </div>     
                  </b-dropdown>
                </b-popover>
              </b-nav-item>
              <!--***************************  Électroniques ************************************-->
              <b-nav-item href="#link-2" @click="hide" id="popover-target-6"><b-icon icon="music-player" font-scale="1.5" variant="light"></b-icon> Électroniques
                <b-popover target="popover-target-6" triggers="hover" placement="left">
                  <b-dropdown id="dropdown-dropright" dropright variant="danger">
                    <div class="dropcolor">
                    <b-container>
                      <b-row>
                        <b-col cols="9">
                          <h4 class="dropdown-header"><a href="#">TÉLÉVISIONS</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">Smart TV</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">TV 4K</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">TV Curved</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">TV X"</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">AUDIO</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#" >Haut-parleurs</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Radio</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Accessoires</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">APPAREIL PHOTO ET CAMÉRAS</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">Caméras digitales</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Sécurité & Protection</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">ACCESSOIRES TV</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">Récepteur normal et IPTV</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">IPTV</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Abonnement IPTV</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Cable et adaptateurs TV</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Support TV</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">DVD</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">TOP MARQUES</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">Samsung</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Condor</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Sony</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Autres Marques</b-dropdown-item>
                        </b-col>
                      </b-row>
                    </b-container> </div>     
                  </b-dropdown>
                </b-popover>
              </b-nav-item>
              <!--***************************  Jeux vidéos & Consoles ***************************-->
              <b-nav-item href="#link-2" @click="hide" id="popover-target-5"><b-icon icon="controller" font-scale="1" variant="light"></b-icon> Jeux vidéos & Consoles
                <b-popover target="popover-target-5" triggers="hover" placement="left">
                  <b-dropdown id="dropdown-dropright" dropright variant="danger">
                    <div class="dropcolor">
                    <b-container>
                      <b-row>
                        <b-col cols="9">
                          <h4 class="dropdown-header"><a href="#">JEUX VIDÉOS & CONSOLES</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#" >PlayStation 4</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">MANETTES</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#" >Manettes PS3 & PS4</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Manettes PC</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">COMPOSANTES GAMING</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">Boitier Gaming</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Carte Graphique</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Barette memoire</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Processeurs</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Clavier Gamer</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Souris Gamer</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Casques Gamer</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">JEUX VIDEOS</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">Jeux PC & PS4</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Fifa 18 & 19</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">NOS MEILLEURES MARQUES</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">Sony</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Asus</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">MSI</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Reddragon</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">AUTRES PRODUITS</a></h4>
                        </b-col>
                      </b-row>
                    </b-container> </div>     
                  </b-dropdown>
                </b-popover>
              </b-nav-item>
              <!--***************************  Articles de sport ********************************-->
              <b-nav-item href="#link-2" @click="hide" id="popover-target-4"><b-icon icon="joystick" font-scale="1" variant="light"></b-icon> Articles de sport
                <b-popover target="popover-target-4" triggers="hover" placement="left">
                  <b-dropdown id="dropdown-dropright" dropright variant="danger">
                    <div class="dropcolor">
                    <b-container>
                      <b-row>
                        <b-col cols="9">
                          <h4 class="dropdown-header"><a href="#">SPORT & FITNESS</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#" >Fitness Yoga</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#" >Fitness Musculation</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Accessoires Musculation</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Football</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Natation</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Boxe</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Yoga</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">PLEIN AIR</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#" >Vélo</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Camping et randonnée</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">VÊTEMENT DE SPORT</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">Vêtements sport Homme</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Vêtements sport Femme</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">CHAUSSURES DE SPORT</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">Chaussures sport Homme</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Chaussures sport Femme</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">NUTRITION SPORTIVE</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">Protéines</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">NOS MEILLEURS MARQUES</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">Muscle Tech</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">DAINESE</b-dropdown-item>
                        </b-col>
                      </b-row>
                    </b-container> </div>     
                  </b-dropdown>
                </b-popover>
              </b-nav-item>
              <!--***************************  Auto & Moto **************************************-->
              <b-nav-item href="#link-2" @click="hide" id="popover-target-3"><b-icon icon="bicycle" font-scale="1" variant="light"></b-icon> Auto & Moto
                <b-popover target="popover-target-3" triggers="hover" placement="left">
                  <b-dropdown id="dropdown-dropright" dropright variant="danger">
                    <div class="dropcolor">
                    <b-container>
                      <b-row>
                        <b-col cols="9">
                          <h4 class="dropdown-header"><a href="#">ENTRETIEN DE VOITURE</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#" >Audio de nettoyage</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Outils et équipement</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">ACCESSOIRES INTÉRIEURS</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">Audio de voiture</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Volants et accessoires</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Housses Voitures</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">ELECTRONIQUES AUTOMOBILE</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#" >Sécurité automobile</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Vidéo de voiture</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">GPS</b-dropdown-item>
                        </b-col>
                      </b-row>
                    </b-container> </div>     
                  </b-dropdown>
                </b-popover>
              </b-nav-item>
              <!--***************************  Jardin & Plein air ********************************-->
              <b-nav-item href="#link-5" @click="hide" id="popover-target-2"><b-icon icon="flower2" font-scale="1" variant="light"></b-icon> Jardin & Plein air
                <b-popover target="popover-target-2" triggers="hover" placement="left">
                  <b-dropdown id="dropdown-dropright" dropright variant="danger">
                    <div class="dropcolor">
                    <b-container>
                      <b-row>
                        <b-col cols="9">
                          <h4 class="dropdown-header"><a href="#">DÉCOR EXTÉRIEUR</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#" >Tables d'extérieur</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Chaises d'extérieur</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Auvents & Parasoles</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">JARDINAGE ET PISCINES</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#" >Outillage de jardin</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Piscines</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">GRILLADES ET BARBECUE</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#" >Barbecues à charbon</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Barbecues électriques</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">LUMINAIRE D'EXTÉRIEUR</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#" >Lanternes & Torches</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Lampes d'extérieur</b-dropdown-item>
                        </b-col>
                      </b-row>
                    </b-container> </div>     
                  </b-dropdown>
                </b-popover>
              </b-nav-item>
              <!--***************************** Autre catégorie ***********************************-->
              <b-nav-item href="#link-2" @click="hide" id="popover-target-1"><b-icon icon="three-dots" font-scale="1" variant="light"></b-icon> Autres catégories
                <b-popover target="popover-target-1" triggers="hover" placement="left">
                  <b-dropdown id="dropdown-dropright" dropright variant="danger">
                    <div class="dropcolor">
                    <b-container>
                      <b-row>
                        <b-col cols="9">
                          <h4 class="dropdown-header"><a href="#">PRODUITS POUR BÉBÉS</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#" >Couches</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Alimentation</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Eveil & Jouets bébé</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Sortie & Voyage</b-dropdown-item>
                          <b-dropdown-item class="dropdown-item" href="#">Nos Meilleurs Marques</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a href="#">ANIMALERIE</a></h4>
                          <br>
                          <h4 class="dropdown-header"><a href="#">JOUETS & JEUX</a></h4>
                          <br>
                          <h4 class="dropdown-header"><a href="#">DIVERS</a></h4>
                          <br>
                          <h4 class="dropdown-header"><a href="#">LIVRES, FILM ET MUSIQUE</a></h4>
                          <div class="divider-submenu"></div>
                          <b-dropdown-item class="dropdown-item" href="#">Fournitures Scolaires</b-dropdown-item>
                          <br>
                          <h4 class="dropdown-header"><a  href="#">INSTRUMENTS DE MUSIQUE</a></h4>
                          <br>
                          <h4 class="dropdown-header"><a href="#">INDUSTRIEL & SCIENTIFIQUE</a></h4>
                          <br>
                          <h4 class="dropdown-header"><a href="#">SERVICES</a></h4>
                        </b-col>
                      </b-row>
                    </b-container> </div>     
                  </b-dropdown>
                </b-popover>        
              </b-nav-item>
            </b-nav>
          </nav>
        </div>
      </template>
    </b-sidebar>
    
</div>
 
</template>

<script>
export default {
  name: 'menu'
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-item > .nav-link
{
  color :white;
  text-align: left;
}
.nav-item > .nav-link:hover
{
  color :darksalmon;
}
.divider-menu
{
  border: 1px solid darksalmon;
  width: 100%;
}
.b-avatar 
{
  background-color: darksalmon;
  font-style: italic;
  font-size: 15px;
}
.dropdown-item
{
  font-size: 12px;
  text-align: left;
  margin-left: -10px;
  line-height: 4px;
}
.dropdown-item :hover {
   color: rgb(207, 79, 37);
   font-size: 13px;
   margin-left: -29px;
   
}
.divider-submenu
{
  border: 1px solid darksalmon;
  width: 230px;
}
.dropdown-header
{
  color: darksalmon;
  font-family: italic;
  font-size: 13px;
  text-decoration:none; 
}
.dropdown-menu {
  width:100%;
}
.minw-none {
  min-width: 500px !important;
}
h4 > a
{
  color: darksalmon;
  text-decoration:none; 
}
h4 > a:hover
{
  font-size: 14px;
  color: rgb(207, 79, 37);
}
.dropcolor
{
  background-color:white;
}
</style>