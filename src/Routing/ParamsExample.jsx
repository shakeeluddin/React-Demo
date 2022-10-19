import {useParams} from 'react-router-dom';

function ParamsExample(){
    const params = useParams();
    console.log('Params:', params);
    return(
        <p style={{ color:params.colour}}>
            {`param: ${params.colour}`}

        </p>
    );
}

export default ParamsExample;