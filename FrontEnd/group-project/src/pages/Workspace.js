import React, { useEffect, useState } from 'react';
import ViewSpace from '../components/ViewWorkSpace';



function WorkSpace() {

   // useParams();
    const [spacesData, setBoardsData] = useState([]);

    function getAllSpace() {
        fetch('http://localhost:9000/workspace/getAllWorkspaces')
            .then(response => response.json())
            .then(spaces => {
                setBoardsData(spaces);
            });
    };

    useEffect(function () {
        getAllSpace();
    }, []);


    return (
        <section>
            <ViewSpace space={spacesData} />
        </section>
    );
};

export default WorkSpace;