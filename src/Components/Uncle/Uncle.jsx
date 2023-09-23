import Cousin from "../Cousin/Cousin";

const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={'Shohag'} asset={asset}></Cousin>
                <Cousin name={'Shohagi'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;