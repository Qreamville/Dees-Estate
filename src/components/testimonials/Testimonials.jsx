import React from "react";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials container mx-auto flex flex-col justify-center py-12 md:mt-28">
      <div className="testimonials__heading text-center">
        <h3>Testimonials.</h3>
        <p>This is what our clients are saying</p>
      </div>
      <div className="testimonials__btn flex items-center my-10 justify-center md:justify-end">
        <button>View More</button>
      </div>
      <div className="testimonials__cards  flex flex-col md:flex-row w-full justify-between gap-8 items-center">
        <div className="testimonials__card flex flex-col items-start p-4 gap-4 bg-white">
          <h4>Alex Godwin</h4>
          <h5>South Africa</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames ut
            dictumst urna, lorem nibh. Pretium leo hendrerit interdum netus
          </p>
        </div>
        <div className="testimonials__card flex flex-col items-start p-4 gap-4 bg-white">
          <h4>Alex Godwin</h4>
          <h5>South Africa</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames ut
            dictumst urna, lorem nibh. Pretium leo hendrerit interdum netus
          </p>
        </div>
        <div className="testimonials__card flex flex-col items-start p-4 gap-4 bg-white">
          <h4>Alex Godwin</h4>
          <h5>South Africa</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames ut
            dictumst urna, lorem nibh. Pretium leo hendrerit interdum netus
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
