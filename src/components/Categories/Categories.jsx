
import CategoryItem from "./CategoryItem";
import "./Categories.css"


const Categories = () => {
  const categories = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/11514702/pexels-photo-11514702.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Men clothes",
      cat: 'MAN'
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Women clothes",
      cat: "WOMAN"
    }]
  return (
    <div className="container">
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Categories;