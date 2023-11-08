
const Rating = () => {
    return (
        <>
             <div className="rating mt-2 rating-sm">
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-mainColor group-hover:bg-light"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-mainColor group-hover:bg-light"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-mainColor group-hover:bg-light"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-mainColor group-hover:bg-light"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-mainColor group-hover:bg-light"
                />
              </div>
        </>
    );
};

export default Rating;