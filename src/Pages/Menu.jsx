import { Helmet } from "react-helmet-async";

const Menu = () => {
  return (
    <div
      className="bg-dark h-screen "
      style={{
        backgroundImage:
          "url(https://i.postimg.cc/65RqNw18/ezgif-com-webp-to-png-min-1.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Helmet>
        <title>FoodFlow | Menu</title>
      </Helmet>
    </div>
  );
};

export default Menu;
