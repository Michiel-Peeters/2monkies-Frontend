import React, { useState } from "react";
import { Link } from "react-router-dom";
import InfoModal from "../InfoModal";

const Info = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="info">
        <button
          className="info__button"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          ?
        </button>
      </div>
      {modalOpen && (
        <InfoModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}
    </>
  );
};

export default Info;
