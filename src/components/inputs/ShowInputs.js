import StructureInputs from './StructureInputs'

const FormComponent = () => {
    const formInputs = [
    { label: 'Clave elector', type: 'text', value: '', col: '*', width: '[28vw]' },
    { label: 'Nombre(s)', type: 'text', value: '', col:'*', width: '[28vw]' },
    { label: 'Apellido paterno', type: 'text', value: '', col:'*', width: '[28vw]' },
    { label: 'Apellido materno', type: 'text', value: '', col:'*', width: '[28vw]'},

    { label: 'Fecha de nacimiento', type: 'text', value: '', col:'*', width: '80'},
    { label: 'Sexo', type: 'text', value: '', col:'*', width: '80'},
    { label: 'Estado de Nacimiento', type: 'text', value: '', col:'*', width: '80'},

    { label: 'Calle', type: 'text', value: '', col:'*', width: '60'},
    { label: 'Número Ext.', type: 'text', value: '', col:'*', width: '16'},
    { label: 'Número Int.', type: 'text', value: '', col:'*', width: '16'},
    { label: 'Municipio vive', type: 'text', value: '', col:'*', width: '60'},
    ];

    return(
        <StructureInputs inputs={formInputs} />
    ) 
};

export default FormComponent;