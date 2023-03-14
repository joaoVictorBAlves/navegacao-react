import { useParams } from "react-router-dom";
const Param = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>Parâmetro</h1>
            <p><strong>Valor:</strong> {id}</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies id erat consequat accumsan. Phasellus mollis nunc a urna venenatis, nec sollicitudin est tempus.
                Mauris sollicitudin arcu eget mauris tempor, vel semper dolor sagittis. Ut et ante eu urna interdum condimentum. Aliquam erat volutpat. Cras hendrerit consectetur orci, a commodo enim fermentum id. Nullam semper pulvinar tellus, non porttitor felis dictum quis. Nullam vel lacus ornare, eleifend ex et, tincidunt augue. Nunc sit amet diam cursus,
                porttitor urna nec, suscipit mi. Pellentesque lectus mi, pharetra vel lacus non, fringilla fringilla nunc. Curabitur a feugiat augue. Morbi a mattis nulla, id lobortis nulla.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies id erat consequat accumsan. Phasellus mollis nunc a urna venenatis, nec sollicitudin est tempus.
                Mauris sollicitudin arcu eget mauris tempor, vel semper dolor sagittis. Ut et ante eu urna interdum condimentum. Aliquam erat volutpat. Cras hendrerit consectetur orci, a commodo enim fermentum id. Nullam semper pulvinar tellus, non porttitor felis dictum quis. Nullam vel lacus ornare, eleifend ex et, tincidunt augue. Nunc sit amet diam cursus.
            </p>
        </div>
    );
}

export default Param;