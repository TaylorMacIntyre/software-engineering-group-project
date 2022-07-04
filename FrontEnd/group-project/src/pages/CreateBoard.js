
import React from 'react';
import { useHistory } from 'react-router-dom';
import CreateBoardForm from '../components/CreateBoardForm';
import ViewSpace from '../components/ViewWorkSpace';

function CreateBoard() {
    
    const history = useHistory();

    function assign(b){
        const a = localStorage.getItem("active_workspace")

        fetch(`http://localhost:9000/workspace/assignBoard/${a}?board_id=${b}`,{
            method: 'PUT',
            
        }).then(() => history.replace(`/boards/${a}`));
    }


    function createBoardHandler(board) {
        
        fetch('http://localhost:9000/board/saveBoard', {
            method: 'POST',
            body: JSON.stringify(board),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json()).then((r) => {
            assign(r.id);
        });
        
    }



    return (
        <CreateBoardForm createBoard={createBoardHandler} />
        
    );
};

export default CreateBoard;