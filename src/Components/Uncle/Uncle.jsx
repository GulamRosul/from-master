import Cousin from "../Cousin/Cousin";

const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={'Shohag'}></Cousin>
                <Cousin name={'Shohagi'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;