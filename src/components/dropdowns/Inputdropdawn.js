export default function Example(props) {
    const { nombres, municipios } = props;
  
    return (
        <>
        <div className="w-72">
            <select>
            {nombres.map((nombre) => (
                <option key={nombre}>{nombre}</option>
            ))}
            </select>
        </div>

        <div className="w-72">
            <select>
            {municipios.map((municipio) => (
                <option key={municipio}>{municipio}</option>
            ))}
            </select>
        </div>
        
        


        </>
    );
}  