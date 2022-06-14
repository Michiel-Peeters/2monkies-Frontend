import React from "react";
import Modal from "react-modal";

const InfoModal = ({ modalOpen, setModalOpen }) => {
  Modal.setAppElement("#root");

  function afterOpenModal() {}

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <Modal
      isOpen={modalOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      contentLabel="InfoModal"
      className="infoModal"
      overlayClassName="Overlay"
    >
      <div className="infoModal__header">
        <h2 className="infoModal__header__title">How it works</h2>
        <button className="button button__close" onClick={closeModal}>
          Close
        </button>
      </div>
      <div className="infoModal__body">
        <h3 className="infoModal__body__subtitle">De pagina</h3>
        <p className="infoModal__body__text">
          Op de pagina worden alle beschikbare Escape Rooms getoond. Om meer
          info te krijgen per kamer druk je op de naam van de kamer die gespeeld
          zal worden. <br /> Nu de kamer is opengeklapt krijg je een timer,
          inputfield en een lijstje met tips te zien.
        </p>
        <h3 className="infoModal__body__subtitle">Starten van een spel</h3>
        <p className="infoModal__body__text">
          Door een spel te starten druk je op de play button. Eens de Timer is
          gestart is het spel ook gestart. Je kan het spel ten alle tijden
          pauzeren via de knop pauze. Moesten de spelers eerder dan de maximale
          tijd uit de kamer zijn geraakt druk je op de knop Stop om het spel
          vroeger te beïndigen.
        </p>
        <h3 className="infoModal__body__subtitle">Tips geven</h3>
        <p className="infoModal__body__text">
          Tips geven kan gebeuren via 2 verschillende manieren. Je gebruikt het
          inputfield om een eigen tip te schrijven of je gebruikt een default
          tip vanuit de lijst. Als je een default tip wilt gebruiken klik je op
          de gewilde tip. De tip zal zich nu in in het inputveld bevinden. Hier
          kan je nog enkele aanpassingen aan doen. Als je dan uiteindelijk de
          tip wilt verzenden naar de gespeelde kamer dan klik je op de knop
          verzend.
          <br />
          <br />
          LET OP: Eens een tip is verstuurd zal de vorige tip niet meer
          zichtbaar zijn voor de spelers.
        </p>
        <h3 className="infoModal__body__subtitle">
          Bekijken wat de spelers kunnen zien
        </h3>
        <p className="infoModal__body__text">
          Als je wilt weten wat de spelers op dit moment te zien krijgen in hun
          kamer kan je via de knop preview een nieuwe tab openen om hun beeld te
          bekijken. <br /> Dit kan ook voor jouw zeer handig zijn om je laatste
          tip nog eens te raadplegen.
        </p>
        <h3 className="infoModal__body__subtitle">Stap 5</h3>
        <p className="infoModal__body__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          necessitatibus, dignissimos corrupti quis ab perferendis facilis in
          saepe ullam quasi veritatis voluptates, pariatur, fugit non?
        </p>
        <h3 className="infoModal__body__subtitle">Stap 6</h3>
        <p className="infoModal__body__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          necessitatibus, dignissimos corrupti quis ab perferendis facilis in
          saepe ullam quasi veritatis voluptates, pariatur, fugit non?
        </p>
      </div>
    </Modal>
  );
};

export default InfoModal;
