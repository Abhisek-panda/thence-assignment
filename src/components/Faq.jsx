const Faq = () => {
  return (
    <section>
      <ClientDetails />
      <HeroCarousel />
    </section>
  );
};

const HeroCarousel = () => {
  return (
    <>
      <div>
        <p>Enhance fortune 50 company’s insights teams research capabilities</p>
      </div>
    </>
  );
};

const ClientDetails = () => {
  return (
    <>
      <div>
        <div>
          <img
            src="https://s3-alpha-sig.figma.com/img/c086/323e/b8fae54c91face434e9ea448a875ea3e?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CPPJu~LH5jYqxc8GcYbYi8GpYZgu3j-AFGk6P5AmeOJnOVh~MFFvaY-W2zLzP1Z-nbTnsFqaK9IwMhqY17hc~mTOe-T65fjKPsSLz2IuGlJPXLjCD0Nft~wq1uZntYN3HhCA5uVhv~0Et663QLCcv3lOLUCpuJFYrd1zDpR94UWGVhMmI-PnyW1EWDkGgfPIdMIBlyMQ5X9F7n2nNNI55Hp56B3F~tOPgUcBN9jDOTv2kKq1BuNYd-QxrPNSlQ~iJKerpafsOWRN14nu-xFnt8KbvT-IrBC3BatAs~MMcHy5IJBnBrAol9VY6q2kPz1p1ifSVXMX3tnrb9N4L74Zpg__"
            alt=""
          />
        </div>
        <div>
          <p>40%</p>
          <p>
            Achieved reduction in project execution time by optimising team
            availability
          </p>
        </div>
        <div>
          <p>10 Days</p>
          <p>Staff deployment</p>
        </div>
        <div>
          <p>$0.5 Million</p>
          <p>Reduced client expenses by saving on hiring and employee costs.</p>
        </div>
      </div>
    </>
  );
};
export default Faq;
