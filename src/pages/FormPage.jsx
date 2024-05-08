import Navbar from "../components/Navbar";

const FormPage = () => {
  return (
    <section>
      <Navbar />
      <div className="flex flex-col">
        <div>
          <p>Registartion Form</p>
          <p>Start Your success journey here</p>
        </div>
        <div className="flex flex-col">
          <input type="text" placeholder="Enter Your name" />
          <input type="email" placeholder="Enter Your Email" />
          <button>Submit</button>
        </div>
      </div>
    </section>
  );
};

export default FormPage;
