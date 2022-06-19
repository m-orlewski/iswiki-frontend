import { useSearchParams } from "react-router-dom"
import {  useState } from "react";
import axiosInstance from '../api/axios.js';
import {  useNavigate } from 'react-router-dom';

const AddOpinionSubject = () => 
{
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [name] = useState(searchParams.get('name'));
    const [id] = useState(searchParams.get('id'));
    const [errMsg, setErrMsg] = useState('');
    const [commentValue, setCommentValue] = useState('');
    const [score, setScore] = useState('5');
    const [sentFlag, setSentFlag] = useState(0);

    
    const handleSubmit = async (e) => 
    {
        e.preventDefault();
        if(commentValue.length < 6)
        {
            setErrMsg('Comment must be longer than 5 letters!');
        }
        else
        {
            try {
                axiosInstance
                .post('add_review', {
                    author_name: sessionStorage.getItem("first_name"),
                    author_surname: sessionStorage.getItem("last_name"),
                    author_email: sessionStorage.getItem("email"),
                    score: score,
                    description: commentValue,
                    course: id,
                })
                .then((res) => {
                   // console.log(score);
                    setSentFlag(1);
                });           
            } catch (err) {
                if (!err?.response) {
                    setErrMsg('Sending opinion failed');
                }
            }
        }
    }

    return ( 
        (sessionStorage.getItem('access_token') != null)?
            <>
                {
                    sentFlag === 0 ? 
                    (
                    <div className='AddOpinion'>
                        <p className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        <div id="name">
                            {name?name:"undefined name"}
                        </div>
                        <form onSubmit={handleSubmit}>
                            <label>Description:</label>
                            <textarea 
                                placeholder="Enter your opinion here!" 
                                rows="4" 
                                cols="80" 
                                value={commentValue} 
                                onChange={function(event){ setCommentValue(event.target.value)} }>
                            </textarea>
                            <br></br>
                            <label>Score:</label>
                            <input 
                                    type="number" 
                                    name="score" 
                                    min={1} 
                                    max={10} 
                                    defaultValue={5}
                                    onChange={event => setScore(event.target.value)} >     
                            </input>
                            <br/>
                            <input type="submit" value="Submit"></input>
                        </form>
                        <div>
                            <button onClick={() => navigate(-1) }>Go back</button>
                        </div>
                    </div>
                    ) :
                    (
                        <div className='Opinions'>
                            <div>
                                {name?name:"undefined name"}
                            </div>
                            <div name="summary">Opinion has been added!</div>
                            <div>
                                <button onClick={() => navigate(-1) }>Go back</button>
                            </div>
                        </div>
                    )
                }
            </>
        :
            ""
        )
}

export default AddOpinionSubject