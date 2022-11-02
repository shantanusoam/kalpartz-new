const Button = ({ btnName, classStyles }) => (
  <button
    type="button"
    className={`bg-kaltire-red text-white font-bold py-2 px-4 rounded-full hover:bg-kaltire-red-dark focus:outline-none focus:shadow-outline ${classStyles}`}
  >
    {btnName}
  </button>
);

export default Button;
